import ContextPokemon from './ContextPokemon'
import { useContext } from 'react'
import ComponenteNeto from './ComponenteNeto'

const ComponenteFilho = () => 
{ 
    let numero = useContext(ContextPokemon) + 1
    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numero + '.png'
    return (
        <>
        <h2>Componente Filho</h2>
        <img src={url} alt="Pokemon" width={300}/>
        <ComponenteNeto/>

        </>
    )
}



export default ComponenteFilho