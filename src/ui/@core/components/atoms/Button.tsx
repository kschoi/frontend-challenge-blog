import classnames from 'classnames'
import React, { useState } from 'react'

// export type InputValue = string | number | ReadonlyArray<string>
// export type InputChangeEvent = ChangeEvent<HTMLInputElement>

type Props = {
  id?: string
  children?: React.ReactNode
  color?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

/**
 * button 컴포넌트
 */
function Button({ id, type, children, color, onClick }: Props) {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e)
  }

  return (
    <>
      <button
        id={id}
        type={type}
        className={classnames(
          'text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
          {
            [`bg-${color}`]: true,
            [`hover:bg-${color}-700`]: true
          }
        )}
        onClick={clickHandler}>
        {children}
      </button>
    </>
  )
}

Button.defaultProps = {
  color: 'primary'
}

export default Button
