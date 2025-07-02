import React from 'react'
import cls from './Button.module.scss'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={cls.button}>
      {children}
    </button>
  )
}
