import ColorTheme from "./MyColorContext"
import { useContext } from "react";


const FunctionContextB = () => {
    const color = useContext(ColorTheme);
    return (
        <div style={{backgroundColor: color.bkgB}}>
            <h1>Função B</h1>
        </div>

    )
}

export default FunctionContextB