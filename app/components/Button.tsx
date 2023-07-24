import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const Button = forwardRef<HTMLButtonElement,ButtonProps>(({className,onClick,children,disabled,type = "button",...props},ref)=>{
    return(
    <button onClick={onClick} className={twMerge(`w-full rounded-xl bg-green-500 border border-transparent px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`,className)} type={type}>{children}</button> // hum nai twMerge use kia aur is k sath classname k props ko dal dya takay is button ko further without any problem modifiy krkay.
)})

Button.displayName = "Button"
export default Button;