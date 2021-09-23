import React, { Component } from 'react'
import './App.css';
import request from 'superagent';
import PokeList from './components/PokeList';
import Header from './components/Header';
export default class SearchPage extends Component {
   state = {
       sortOrder: '',
       query: '',
       pokemon: []
   }
    componentDidMount = async () => {
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=3&perPage=50`)
    
        
        this.setState({pokemon: response.body.results})
    }
    render() {
        return (
            <main className='poke-cnt'>
              <Header/>
              
              <PokeList pokemons= {this.state.pokemon} />  
            </main>
        )
    }
}

