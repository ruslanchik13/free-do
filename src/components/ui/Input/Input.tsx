import React, {FC} from 'react';
import classes from './Input.module.scss'

interface InputProp {
    value?: string | number,
    onChange?: () => void
    placeholder?: string
}

const Input: FC<InputProp> = (props) => {
    return (
        <div className={classes.div}>
            <input className={classes.input} {...props} />
        </div>
    );
};

export default Input;