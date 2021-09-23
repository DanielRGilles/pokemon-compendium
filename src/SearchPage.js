import React, { Component } from 'react'
import './App.css';
import request from 'superagent';
import PokeList from './components/PokeList';

export default class SearchPage extends Component {
   state = {
       sortOrder: '',
       query: ''
   }
    componentDidMount = async () => {
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/5cef3501ef6005a77cd4fd33`)
    
        console.log(data.body);
    }
    render() {
        return (
            <>
              <PokeList Pokedata= {data} />  
            </>
        )
    }
}

