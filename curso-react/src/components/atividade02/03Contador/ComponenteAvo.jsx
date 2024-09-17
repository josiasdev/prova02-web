import { useState } from "react"
import ContextPokemon from './ContextPokemon'
import ComponenteFilho from './ComponenteFilho'

const ComponenteAvoContador = () => 
{
    let [numero, setNumero] = useState(1)
    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numero + '.png'

    function incrementarNumero()
    {
        if (numero + 1 > 1025)
        {
            return
        }
        setNumero((prevContador) => prevContador + 1);
    }
    const decrementarNumero = () => 
    {
        if (numero - 1 <= 0)
        {
            return
        }
        setNumero((prevContador) => prevContador - 1);
    }
    return (
        <>
        <h2>Componente Avô</h2>
        <img src={url} alt="Pokemon" width={300}/>
        <ContextPokemon.Provider value={numero}>
            <ComponenteFilho/>
        </ContextPokemon.Provider>
        <button onClick={decrementarNumero}>
            Decrementar
        </button>
        <button onClick={incrementarNumero}>
            Incrementar
        </button>

        </>
    )
}

export default ComponenteAvoContador;