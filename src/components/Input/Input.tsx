import React, { useCallback, FunctionComponent } from 'react'


export type Props = {
  className?: string
  value?: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  name: string
}

const Input: FunctionComponent<Props> = ({
  className = '',
  onChange,
  value,
  placeholder,
  label,
  name
}) => {
  const handleChange = useCallback(({ target: { value } }) => {
    onChange(value)
  }, [onChange])


  return (
    <div className={`input-group mb-3 ${className}`}>
      {label && (
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor={name}>{label}</label>
        </div>
      )}
      <input
        className="form-control"
        name={name}
        placeholder={placeholder}
        aria-label={name}
        aria-describedby="basic-addon1"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default Input