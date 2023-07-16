import React, {FC} from 'react';
import classes from './Button.module.scss'

interface IButtonStyle {
    backgroundColor: string,
}

interface ButtonProp {
    children: React.ReactNode,
    style: IButtonStyle,
    onClick?: () => void
}

const Button: FC<ButtonProp> = ({children, style, onClick}) => {
    return (
        <button className={classes.btn} style={{...style}}  onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;