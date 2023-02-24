import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
