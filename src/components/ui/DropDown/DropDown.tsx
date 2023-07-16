import React, {useState} from 'react';
import classes from './DropDown.module.scss'

const DropDown = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('Фильтры');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div
            className={classes.dropdown}
            onClick={toggleDropdown}
            style={isOpen ? {borderBottomRightRadius: 0} : {borderBottomRightRadius: 100}}
        >
            <div className={classes.dropdown__toggle}>
                {selectedOption} <span className="arrow">{isOpen ? '' : ''}</span>
            </div>
            {isOpen && (
                <div className={classes.dropdown__menu}>
                    <div
                        className={classes.item}
                        onClick={() => handleOptionSelect('Фильтр 1')}
                    >Фильтр 1
                    </div>
                    <div
                        className={classes.item}
                        onClick={() => handleOptionSelect('Фильтр 2')}
                    >Фильтр 2
                    </div>
                    <div
                        className={`${classes.item} ${classes.item_last}`}
                        onClick={() => handleOptionSelect('Фильтр 3')}
                    >Фильтр 3
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropDown;