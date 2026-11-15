"use client"

import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox"
import type { SelectOption } from "./types"

const DEFAULT_OPTIONS: SelectOption[] = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
  { label: "Vue", value: "vue" },
]

interface SearchableDropdownProps {
  options?: SelectOption[]
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  onValueChange?: (value: string) => void
}

export function SearchableDropdown({
  options = DEFAULT_OPTIONS,
  value,
  defaultValue,
  placeholder = "Search options",
  disabled,
  onValueChange,
}: SearchableDropdownProps) {
  return (
    <Combobox
      value={value}
      defaultValue={defaultValue}
      onValueChange={(v) => onValueChange?.(v as string)}
      disabled={disabled}
    >
      <ComboboxInput
        placeholder={placeholder}
        render={<input data-slot="combobox-input" className="flex-1 px-2 border-none bg-transparent outline-none text-sm" />}
      />
      <ComboboxContent>
        {options.length > 0 ? (
          <ComboboxList>
            {options.map((option) => (
              <ComboboxItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        ) : (
          <ComboboxEmpty>No options found</ComboboxEmpty>
        )}
      </ComboboxContent>
    </Combobox>
  )
}

export default SearchableDropdown
