import ColorTheme from "./MyColorContext"
import { useContext } from "react"

const FunctionContextC = () => {
    const color = useContext(ColorTheme);
    return (
        <div style={{backgroundColor: color.bkgC}}>
            <h1>Função C</h1>
        </div>
    )
}

export default FunctionContextC