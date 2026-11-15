"use client"

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

interface SelectDropdownProps {
  options?: SelectOption[]
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  onValueChange?: (value: string) => void
}

export function SelectDropdown({
  options = DEFAULT_OPTIONS,
  value,
  defaultValue,
  placeholder = "Select an option",
  disabled,
  onValueChange,
}: SelectDropdownProps) {
  return (
    <Select
      value={value}
      defaultValue={defaultValue}
      onValueChange={(v) => onValueChange?.(v as string)}
      disabled={disabled}
    >
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectDropdown
