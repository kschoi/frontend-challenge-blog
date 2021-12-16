import classnames from 'classnames'
import { ChangeEvent, useState } from 'react'

// export type InputValue = string | number | ReadonlyArray<string>
// export type InputChangeEvent = ChangeEvent<HTMLInputElement>

type Props = {
  id?: string
  label?: string
  value?: string | number | ReadonlyArray<string>
  valid: boolean
  errorMessage?: string
  placeholder?: string
  name?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 * INPUT 컴포넌트
 */
function Input({ id, label, value, valid, name, errorMessage, placeholder, onChange }: Props) {
  const [inputValue, setInputValue] = useState<string | number | ReadonlyArray<string> | undefined>(
    value
  )

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    onChange && onChange(e)
  }

  return (
    <>
      {label && (
        <label className="block text-dark text-sm font-bold mb-2" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        className={classnames(
          'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
          {
            'border-red-500': !valid,
            'mb-3': !valid
          }
        )}
        value={value}
        onChange={changeHandler}
        placeholder={placeholder}
      />
      {!valid && <p className="text-warning text-xs italic">{errorMessage}</p>}
    </>
  )
}

Input.defaultProps = {
  valid: true,
  errorMessage: null
}

export default Input
