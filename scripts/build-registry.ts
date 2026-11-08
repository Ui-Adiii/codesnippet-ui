import { registry } from "../registry";
import { promises as fs } from "fs";
import type { z } from "zod";
import type { registryItemFileSchema } from "../registry/schema";
import path from "path";

const REGISTRY_BASE_PATH = path.join(process.cwd(), "src");
const PUBLIC_FOLDER_BASE_PATH = "public/r";

type File = z.infer<typeof registryItemFileSchema>;

/**
 * bun run ./scripts/build-registry.ts
 */

// Remove leading slashes so registry paths remain relative.
const normalizeRegistryPath = (filePath: string) =>
  filePath.replace(/^\/+/, "");

async function writeFileRecursive(filePath: string, data: string) {
  const dir = path.dirname(filePath);

  try {
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(filePath, data, "utf-8");
    console.log(`File written to ${filePath}`);
  } catch (error) {
    console.error(`Error writing file ${filePath}`);
    console.error(error);
  }
}

const getComponentFiles = async (files: File[], registryType: string) => {
  const filesArrayPromises = files.map(async (file) => {
    const isString = typeof file === "string";

    const sourcePath = normalizeRegistryPath(isString ? file : file.path);

    const filePath = path.join(REGISTRY_BASE_PATH, sourcePath);
    const fileContent = await fs.readFile(filePath, "utf-8");

    const fileName = path.basename(sourcePath);

    const getTargetPath = (type: string) => {
      switch (type) {
        case "registry:hook":
          return `hooks/${fileName}`;

        case "registry:lib":
          return `lib/${fileName}`;

        case "registry:block":
          return `blocks/${fileName}`;

        default:
          return `components/codesnippetui/${fileName}`;
      }
    };

    const fileType = isString ? registryType : file.type || registryType;

    const target = isString
      ? getTargetPath(registryType)
      : normalizeRegistryPath(file.target || getTargetPath(fileType));

    return {
      type: fileType,
      content: fileContent,
      path: sourcePath,
      target,
    };
  });

  return Promise.all(filesArrayPromises);
};

const main = async () => {
  for (const component of registry) {
    const files = component.files;

    if (!files) {
      throw new Error(`No files found for component: ${component.name}`);
    }

    const filesArray = await getComponentFiles(files, component.type);

    const json = JSON.stringify(
      {
        ...component,
        files: filesArray,
      },
      null,
      2,
    );

    const jsonPath = `${PUBLIC_FOLDER_BASE_PATH}/${component.name}.json`;

    await writeFileRecursive(jsonPath, json);
    console.log(`Generated registry: ${component.name}`);
  }
};

main()
  .then(() => {
    console.log("Registry generation completed!");
  })
  .catch((err) => {
    console.error("Registry generation failed:", err);
    process.exitCode = 1;
  });
