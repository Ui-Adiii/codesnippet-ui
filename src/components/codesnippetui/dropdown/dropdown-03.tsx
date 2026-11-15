"use client"

import * as React from "react"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import type { SelectOption } from "./types"

const DEFAULT_OPTIONS: SelectOption[] = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
  { label: "Vue", value: "vue" },
]

interface MultiSelectProps {
  options?: SelectOption[]
  value?: string[]
  defaultValue?: string[]
  placeholder?: string
  disabled?: boolean
  onValueChange?: (values: string[]) => void
}

export function MultiSelect({
  options = DEFAULT_OPTIONS,
  value,
  defaultValue,
  placeholder = "Select options",
  disabled,
  onValueChange,
}: MultiSelectProps) {
  const [values, setValues] = React.useState<string[]>(defaultValue ?? [])
  const controlled = value !== undefined
  const currentValues = controlled ? value : values

  const handleValueChange = (next: string | null) => {
    const nextValues = next ? next.split(",") : []
    if (!controlled) {
      setValues(nextValues)
    }
    onValueChange?.(nextValues)
  }

  return (
    <Select
      value={currentValues.join(",")}
      defaultValue={defaultValue?.join(",")}
      onValueChange={handleValueChange}
      disabled={disabled}
    >
      <SelectTrigger className="w-[260px]">
        <SelectValue placeholder={placeholder} />
        {currentValues.map((val) => {
          const option = options.find((o) => o.value === val)
          if (!option) return null
          return (
            <span key={val} className="mr-2 inline-flex items-center gap-1.5 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              {option.label}
            </span>
          )
        })}
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default MultiSelect
