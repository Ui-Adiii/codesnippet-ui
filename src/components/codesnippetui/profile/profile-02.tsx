import { Button } from "@/components/ui/button";
import { Mail, Link as LinkIcon, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Profile02Props {
  name?: string;
  role?: string;
  avatar?: string;
  location?: string;
  email?: string;
  website?: string;
  bio?: string;
}

const defaultProfile = {
  name: "Alex Thompson",
  role: "Product Designer",
  avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  location: "San Francisco, CA",
  email: "hello@codesnippetui.com",
  website: "https://ui.codesnipet.dev/",
  bio: "Designing interfaces that bridge the gap between complexity and simplicity.",
} satisfies Required<Profile02Props>;

export default function Profile02({
  name = defaultProfile.name,
  role = defaultProfile.role,
  avatar = defaultProfile.avatar,
  location = defaultProfile.location,
  email = defaultProfile.email,
  website = defaultProfile.website,
  bio = defaultProfile.bio,
}: Partial<Profile02Props> = {}) {
  const websiteUrl = /^https?:\/\//i.test(website)
    ? website
    : `https://${website}`;

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-zinc-200 bg-white/50 p-6 backdrop-blur-xs dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="flex items-start gap-5">
          <Image
            src={avatar}
            alt={name}
            width={80}
            height={80}
            className="rounded-lg object-cover ring-1 ring-zinc-200 dark:ring-zinc-800"
          />

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  {name}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {role}
                </p>
              </div>

              <Button
                variant="outline"
                size="sm"
                render={<a href={`mailto:${email}`} aria-label="Send email" />}
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <MapPin className="h-4 w-4 shrink-0" />
                {location}
              </div>

              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <LinkIcon className="h-4 w-4 shrink-0" />
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  <span className="truncate">{website}</span>
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
}
