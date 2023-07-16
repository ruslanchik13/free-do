import React, {useEffect, useState} from 'react';
import Tab from "../ui/Tab/Tab";

const Tabs = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
    }, [activeIndex])

    return (
        <div>
            <Tab
                setActiveIndex={setActiveIndex}
                style={{right: 0, top: 149}}
                activeIndex={activeIndex}
                index={0}
            >
                Исполнителям
            </Tab>
            <Tab
                setActiveIndex={setActiveIndex}
                style={{right: 170, top: 149}}
                activeIndex={activeIndex}
                index={1}
            >
                Заказчикам
            </Tab>
        </div>
    );
};

export default Tabs;