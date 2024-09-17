import { useSelector, useDispatch } from "react-redux"
import { incrementar, decrementar, incrementarPorQTD, decrementarPorQTD } from "./Slice/contadorSlice"


const ContadorRedux = () => {
    const contador = useSelector(
        (state) => {
            return state.contador.valor
        }
    )
    const despachante = useDispatch()

    return (
        <>
            <h1>Contador: {contador}</h1>
            <button onClick={() => {
                despachante(incrementar())
            }
            }
            >Incrementar</button>
            <button onClick={() => {
                despachante(decrementar())
            }}
            >Decrementar</button>
            <button onClick={() => {
                despachante(incrementarPorQTD(10))
            }}
            >aumentar +10</button>
            <button onClick={() => {
                despachante(decrementarPorQTD(10))
            }}
            >decrementar -10</button>
        </>
    )
}

export default ContadorRedux