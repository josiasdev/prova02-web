import ColorTheme from "./MyColorContext"
import { useContext } from "react"

const FunctionContextD = () => {
    const color = useContext(ColorTheme);
    return (
        <div style={{backgroundColor: color.bkgD}}>
            <h1>Função D</h1>
        </div>
    )
}

export default FunctionContextD