import React, {FC} from 'react';
import classes from './DropMenuButton.module.scss'

interface IStyle {
    marginTop: number,
}

interface DropMenuButtonProp {
    children: React.ReactNode,
    style: IStyle,
    onClick?: () => void

}

const DropMenuButton: FC<DropMenuButtonProp> = ({children, style, onClick}) => {
    return (
        <button className={classes.btn} style={{...style}} onClick={onClick}>
            {children}
        </button>
    );
};

export default DropMenuButton;