import React, {FC, useEffect} from 'react';
import classes from './Tab.module.scss'

interface ITabStyle {
    top: number,
    right: number
}

interface TabProp {
    style: ITabStyle,
    children: React.ReactNode,
    activeIndex: number,
    setActiveIndex: (isActive: number) => void,
    index: number
}

const Tab: FC<TabProp> = ({style, children, activeIndex, setActiveIndex, index}) => {

    return (
        <div
            style={activeIndex === index ?
                {backgroundColor: 'white', ...style} :
                {backgroundColor: 'rgba(0, 0, 0, 0.05)', ...style}}
            className={classes.tab}
            onClick={() => setActiveIndex(index)}
        >
            {children}
        </div>
    );
};

export default Tab;