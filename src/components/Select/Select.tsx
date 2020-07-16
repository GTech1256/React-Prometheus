import React, { ChangeEvent } from 'react'


type OptionType = {
  value: string,
  label: string,
  isSelected?: boolean
}

export type Props = {
  className?: string
  title?: string
  name: string
  isLoading?: boolean
  value?: OptionType['value']
  options: OptionType[]
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const renderOption = ({
  label,
  value,
}: OptionType) => <option key={label} value={value}>{label}</option>

const Select = ({
  className = '',
  title,
  name,
  options,
  onChange,
  isLoading = false,
}: Props) => (
  <div className={`input-group mb-3 ${className}`}>
    {title && (
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor={name}>{title}</label>
      </div>
    )
    }

    <select
      className="custom-select"
      id={name}
      onChange={onChange}
      defaultValue="DEFAULT"
      disabled={isLoading}
    >
      <option value="DEFAULT">Фильтр по лицензии...</option>
      {options.map(renderOption)}
    </select>
  </div>
)

export default Select;