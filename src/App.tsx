import React from 'react';
import './styles/App.scss';
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/layouts/Header/Header";
import Tab from "./components/ui/Tab/Tab";
import Tabs from "./components/Tabs/Tabs";

function App() {
    return (
        <div className="App">
            <Header/>
            <Tabs/>
            <MainPage/>
        </div>
    );
}

export default App;
