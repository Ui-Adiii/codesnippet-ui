"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { FolderIcon } from "lucide-react"

interface Group {
  label: string
  items: {
    label: string
    value: string
    disabled?: boolean
  }[]
}

const DEFAULT_GROUPS: Group[] = [
  {
    label: "Frontend",
    items: [
      { label: "React", value: "react" },
      { label: "Next.js", value: "nextjs" },
    ],
  },
  {
    label: "Other",
    items: [
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ],
  },
]

interface GroupedDropdownProps {
  trigger?: React.ReactNode
  groups?: Group[]
  onItemSelect?: (value: string) => void
}

export function GroupedDropdown({
  trigger = <span className="text-sm font-medium">Navigate</span>,
  groups = DEFAULT_GROUPS,
  onItemSelect,
}: GroupedDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-input bg-transparent px-3 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          {trigger}
          <FolderIcon className="ml-2 size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {groups.map((group) => (
          <DropdownMenuGroup key={group.label}>
            <DropdownMenuLabel>{group.label}</DropdownMenuLabel>
            {group.items.map((item) => (
              <DropdownMenuItem
                key={item.value}
                disabled={item.disabled}
                onSelect={() => {
                  onItemSelect?.(item.value)
                }}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default GroupedDropdown

export type { Group }
