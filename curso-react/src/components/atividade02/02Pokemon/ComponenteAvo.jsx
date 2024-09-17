import { useContext } from "react"
import ContextPokemon from './ContextPokemon'
import ComponenteFilho from './ComponenteFilho'

const ComponenteAvo = () => 
{
    let numero = useContext(ContextPokemon)
    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numero + '.png'

    return (
        <>
        <h2>Componente Avô</h2>
        <img src={url} alt="Pokemon" width={300}/>
        <ContextPokemon.Provider value={numero}>
            <ComponenteFilho/>
        </ContextPokemon.Provider>

        </>
    )
}

export default ComponenteAvo