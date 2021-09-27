import React, { Component } from 'react'
import './App.css';
import request from 'superagent';
import Header from './components/Header';
import DetailPokemon from './components/DetailPokemon';
// import { withRouter } from 'react-router';
// const searchParams = new URLSearchParams(window.location.search);
// const pokemonID = searchParams.get('id')



export default class Detail extends Component { 
    state = {
        pokemon: [],
        isLoading: true
    }
    componentDidMount = async () => {
        await this.fetchData();
   } 
    fetchData = async() => {
        const search = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params._id}`)
        this.setState({ pokemon: search.body, isLoading: false});
        
}
    render() 
    {
        return (
            <>
            <a href='../SearchPage'><Header /></a>
            <main className='detailed'>
              <section className={this.state.pokemon.type_1 + ' pokemon position-pokemon'}>
              <DetailPokemon  isLoading={this.state.isLoading} details={this.state.pokemon}/>
               </section>
              </main>
            </>
        )
    }
}
