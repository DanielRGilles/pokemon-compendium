import React, { Component } from 'react'
import './App.css';

export default class Home extends Component {
    render() {
        return (
            <>
            <header></header>
               <a  href='/SearchPage'><img className='home-img'src='pokemon.jpg' alt='all pokemon'></img> </a>
            </>
        )
    }
}
