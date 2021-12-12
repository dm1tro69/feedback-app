import React, {FC} from 'react';

type ButtonProps = {
    type?: "button" | "submit" | "reset" | undefined
    version?: string
    isDisabled?: boolean
}

const Button:FC<ButtonProps> = ({type='submit', children, version='primary', isDisabled=false}) => {
    return (
        <button className={`btn btn-${version}`} disabled={isDisabled} type={type}>
            {children}
        </button>
    );
};

export default Button;
