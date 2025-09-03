import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, disabled, onClick, ...props }: ButtonProps) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled} {...props}>{children}</button>
    );
}

export default Button;