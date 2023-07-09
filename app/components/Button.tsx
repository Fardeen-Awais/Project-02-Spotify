import React, { forwardRef } from 'react'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const Button = forwardRef<HTMLButtonElement,ButtonProps>(({
    className,
    children,
    disabled,
    type = "Button",
    ...props
},ref)=>{return(
    <button>{children}</button>
)})

Button.displayName = "Button"
export default Button;