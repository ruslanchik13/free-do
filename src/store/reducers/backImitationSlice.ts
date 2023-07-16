import {createSlice} from "@reduxjs/toolkit";

export interface State {
    id: number,
    title: string,
    subTitle: string,
    name: string,
    date: string,
    views: number,
    text: string,
    skills: string
}

const initialState: State[] = [
    {
        id: 1,
        title: 'Веб-дизайнер, UX/UI дизайнер',
        subTitle: 'Услуги, IT, интернет, телеком, создание сайтов',
        name: 'Александр Иванов',
        date: ' 23.05, 23:15',
        views: 30,
        text: 'Добрый день!                                                                                                                                                                               Меня зовут Александр Иванов, три года с переезда в США я предлагаю услуги для вашего бизнеса, связанные с графическим дизайном, создание сайтов, айдентики                                                                                    - Графический дизайн, туда входят инфографика, иллюстрация, дизайн упаковки, маркетинговые материалы, логотипы...',
        skills: '🏆'
    },
    {
        id: 2,
        title: 'Веб-дизайнер',
        subTitle: 'Услуги, IT',
        name: 'Павел Иванов',
        date: ' 23.05, 12:15',
        views: 5,
        text: 'text2',
        skills: '🏆'
    },
    {
        id: 3,
        title: 'Программист ',
        subTitle: 'интернет, телеком, создание сайтов',
        name: 'Иван Павлов',
        date: ' 26.05, 12:15',
        views: 5454,
        text: 'text3',
        skills: '🏆'
    },
]


const backImitation = createSlice({
    name: 'backImitation',
    initialState,
    reducers: {

    }
})

export const {actions, reducer} = backImitation