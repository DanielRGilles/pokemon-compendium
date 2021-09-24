import React, { Component } from 'react'
import './App.css';
import request, { search } from 'superagent';
import PokeList from './components/PokeList';
import Header from './components/Header';
import Sort from './components/Sort';
import Serch from './components/Search';

export default class SearchPage extends Component {
   state = {
       sortOrder: 'asc',
       query: '',
       pokemon: [],
       pokePerpage: '20',
       isLoading: true
   }
 componentDidMount = async () => {
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=20`)
        this.setState({pokemon: response.body.results, isLoading: false})
    } 
    handleChange = (e) => {
        this.setState({ query: e.target.value });
    }
    handleQuantityChange = (e) => {
        this.setState({ pokePerpage: e.target.value});
    }
    handleOrderChange = (e) => {
        this.setState({ sortOrder: e.target.value });
        
    }
    
    handleSubmit = async (e) => {
            e.preventDefault();
            const search = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder}page=1&perPage=${this.state.pokePerpage}`)
            this.setState({ pokemon: search.body.results, isLoading: false});
        }
        
    render() {
        console.log(this.state.pokemon)
        return (
            <main className='poke-cnt'>
              <Header/>
            <section className='search-box'>
              <Serch handleSubmit={this.handleSubmit} handleChange={this.handleChange} query={this.state.query}/>
              <Sort handleOrderChange={this.handleOrderChange} sortOrder={this.state.sortOrder} pokePerpage={this.state.pokePerpage} handleQuantityChange={this.handleQuantityChange}/>
            </section>
              <PokeList isLoading={this.state.isLoading} pokemons= {this.state.pokemon} />  
            </main>
        )
    }
}

