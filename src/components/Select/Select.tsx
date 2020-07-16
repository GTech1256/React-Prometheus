import React, { ChangeEvent, useCallback } from 'react'


const DEFAULT_VALUE = 'DEFAULT'

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
  onChange: (newValue: OptionType['value'] | undefined) => void
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
}: Props) => {
  // Возвращает undefined, если выбрано дефолтное поле
  const handleChange = useCallback<(event: ChangeEvent<HTMLSelectElement>) => void>(({ target: { value } }) => {
    onChange(value === DEFAULT_VALUE ? undefined : value)
  }, [onChange])

  return (
    <div className={`input-group mb-3 ${className}`}>
      {title && (
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor={name}>{title}</label>
        </div>
      )}
      <select
        className="custom-select"
        id={name}
        onChange={handleChange}
        defaultValue={DEFAULT_VALUE}
        disabled={isLoading}
      >
        <option value={DEFAULT_VALUE}>Фильтр по лицензии...</option>
        {options.map(renderOption)}
      </select>
    </div>
  )
}

export default Select;