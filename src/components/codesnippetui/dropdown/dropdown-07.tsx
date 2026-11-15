"use client"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import type { SelectOption } from "./types"

const DEFAULT_OPTIONS: SelectOption[] = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
]

interface RadioDropdownProps {
  trigger?: React.ReactNode
  options?: SelectOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export function RadioDropdown({
  trigger = <span className="text-sm font-medium">Choose</span>,
  options = DEFAULT_OPTIONS,
  value,
  defaultValue,
  onValueChange,
}: RadioDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-input bg-transparent px-3 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          {trigger}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup 
        
          value={value}
          defaultValue={defaultValue}
          onValueChange={(v) => onValueChange?.(v as string)}
        >
          {options.map((option) => (
            <DropdownMenuRadioItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default RadioDropdown
