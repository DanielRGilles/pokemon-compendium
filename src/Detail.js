import React, { Component } from 'react'
import './App.css';
import request from 'superagent';
import Header from './components/Header';
import DetailPokemon from './components/DetailPokemon';

const searchParams = new URLSearchParams(window.location.search);
const pokemonID = searchParams.get('id')
console.log(pokemonID + ' pokemonID')
export default class Detail extends Component { 
    state = {
        pokemon: [],
        isLoading: true
    }
    componentDidMount = async () => {
        await this.fetchData();
   } 
    fetchData = async() => {
        const search = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${pokemonID}`)
        this.setState({ pokemon: search.body, isLoading: false});
        console.log(this.state.pokemon)
}
    render() 
    {
        return (
            <>
            <Header/>
              <section className={this.state.pokemon.type_1 + ' pokemon'}><DetailPokemon details={this.state.pokemon}/> </section>
            </>
        )
    }
}
