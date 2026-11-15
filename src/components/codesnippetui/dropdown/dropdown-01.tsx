"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontalIcon } from "lucide-react"

const DEFAULT_ITEMS = [
  { label: "Edit", value: "edit" },
  { label: "Duplicate", value: "duplicate" },
  { label: "Delete", value: "delete", destructive: true },
]

interface BasicDropdownProps {
  trigger?: React.ReactNode
  items?: {
    label: string
    value: string
    disabled?: boolean
    shortcut?: string
    icon?: React.ReactNode
    destructive?: boolean
  }[]
  onItemSelect?: (value: string) => void
}

export function BasicDropdown({
  trigger = <span className="text-sm font-medium">Actions</span>,
  items = DEFAULT_ITEMS,
  onItemSelect,
}: BasicDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span
          className="inline-flex items-center rounded-md border border-input bg-transparent px-3 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          {trigger}
          <MoreHorizontalIcon className="ml-2 size-4" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem
            key={item.value}
            disabled={item.disabled}
            onSelect={() => {
              onItemSelect?.(item.value)
            }}
            data-variant={item.destructive ? "destructive" : "default"}
          >
            {item.icon && (
              <span className="mr-2 h-4 w-4 shrink-0">{item.icon}</span>
            )}
            {item.label}
            {item.shortcut && <span className="ml-auto text-xs text-muted-foreground">{item.shortcut}</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default BasicDropdown
