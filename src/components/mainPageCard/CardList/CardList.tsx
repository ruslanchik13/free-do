import React, {FC} from 'react';
import CardItem from "../CardItem/CardItem";
import {useAppSelector} from "../../../hook";
import {State} from "../../../store/reducers/backImitationSlice";

interface CardListProp {
}

const CardList: FC<CardListProp> = () => {

    const content = useAppSelector(state => state.backImitation)

    return (
        <div>
            {content.map((cnt) =>
                <CardItem
                    props={cnt}
                />
            )}
        </div>
    );
};

export default CardList;