"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
import type { SelectOption } from "./types"

const DEFAULT_OPTIONS: SelectOption[] = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
]

interface CheckboxDropdownProps {
  trigger?: React.ReactNode
  options?: SelectOption[]
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (values: string[]) => void
}

export function CheckboxDropdown({
  trigger = <span className="text-sm font-medium">Options</span>,
  options = DEFAULT_OPTIONS,
  value,
  defaultValue,
  onValueChange,
}: CheckboxDropdownProps) {
  const [values, setValues] = React.useState<string[]>(defaultValue ?? [])
  const controlled = value !== undefined
  const currentValues = controlled ? value : values

  const toggle = (val: string) => {
    const next = currentValues.includes(val)
      ? currentValues.filter((v) => v !== val)
      : [...currentValues, val]
    if (!controlled) {
      setValues(next)
    }
    onValueChange?.(next)
  }

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
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.value}
            checked={currentValues.includes(option.value)}
            disabled={option.disabled}
            onCheckedChange={() => toggle(option.value)}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CheckboxDropdown
