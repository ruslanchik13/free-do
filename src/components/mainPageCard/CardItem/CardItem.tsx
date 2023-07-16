import React, {FC, useMemo, useState} from 'react';
import classes from "./CardItem.module.scss";
import img from '../../../assets/img/cardImg.png'
import ShareFilter from "./ShareFilter/ShareFilter";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../styles/swiper.scss'


interface IProp {
    title: string
    subTitle: string
    name: string
    date: string
    views: number
    text: string
    skills: string
}

interface CardItemProp {
    props: IProp
}


const CardItem: FC<CardItemProp> = (props) => {

    const [hover, setHover] = useState(false)


    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.title}>{props.props.title}</div>
                <div className={classes.subtitle}>{props.props.subTitle}</div>
                <div className={classes.about}>
                    <div className={classes.name}>{props.props.name}</div>
                    <div className={classes.date}>{props.props.date}</div>
                    <div className={classes.views}>{props.props.views}</div>
                    <div style={{paddingTop: 4}}>
                        <ShareFilter
                            hover={hover}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        />
                    </div>
                </div>
                <div className={classes.text}>
                    {props.props.text}
                </div>
                <div className={classes.skills}>
                    {/*<div className={classes.skill__item}>*/}
                    {/*    <div className={classes.skill__smile}>🏆</div>*/}
                    {/*    <div className={classes.skill__text}>Стаж 4 года</div>*/}
                    {/*</div>*/}
                    {/*<div className={classes.skill__item}>*/}
                    {/*    <div className={classes.skill__smile}>🧑🏼‍💻</div>*/}
                    {/*    <div className={classes.skill__text}>более 40 работ в портфолио</div>*/}
                    {/*</div>*/}
                    {/*<div className={classes.skill__item}>*/}
                    {/*    <div className={classes.skill__smile}>🤯</div>*/}
                    {/*    <div className={classes.skill__text}>дизайнер года по версии WDS</div>*/}
                    {/*</div>*/}
                    {props.props.skills}
                </div>
            </div>
            <div className={classes.img}>
                <Swiper
                    // @ts-ignore
                    pagination={{
                        dynamicBullets: false
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <img className={classes.img} src={img} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={classes.img} src={img} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={classes.img} src={img} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={classes.img} src={img} alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default CardItem;