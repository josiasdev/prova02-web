import ContextPokemon from './ContextPokemon'
import { useContext } from 'react'

const ComponenteNeto = () => 
{
    let numero = useContext(ContextPokemon) + 2
    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numero + '.png'
    return (
        <>
        <h2>Componente Neto</h2>
        <img src={url} alt="Pokemon" width={300}/>
        </>
    )
}

export default ComponenteNeto