import React from 'react'


type OptionType = {
  value: string,
  label: string,
  isSelected?: boolean
}

export type Props = {
  className?: string
  title?: string
  name: string
  options: OptionType[] 
}

const renderOption = ({
  label,
  value,
  isSelected = false,
}: OptionType) => <option key={label} selected={isSelected} value={value}>{label}</option>

const Select = ({
  className = '',
  title,
  name,
  options
}: Props) => (
  <div className={`input-group mb-3 ${className}`}>
    {title && <div className="input-group-prepend">
      <label className="input-group-text" htmlFor={name}>{title}</label>
    </div>}
    <select className="custom-select" id={name}>
      {options.map(renderOption)
      }
    </select>
  </div>
)

export default Select;