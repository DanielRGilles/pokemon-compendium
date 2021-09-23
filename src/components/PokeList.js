import React, { Component } from 'react'

export default class PokeList extends Component {
    render() {
        return (
            <>
            <ul className='poke-mon'>
                {this.props.pokemons.map(pokemon => { return(
                <li className='pokemon' key={pokemon._id}>
                 <div className='pokemon-neem'>{pokemon.pokemon}</div>  <br></br> 
                 <img className='poke-pic'src={pokemon.url_image} alt={pokemon.pokemon}/><br></br>
                 <div className='pokemon-deets'>{pokemon.description}</div>
                 </li>
                )})}
                
            </ul> 
            </>
        )
    }
}
