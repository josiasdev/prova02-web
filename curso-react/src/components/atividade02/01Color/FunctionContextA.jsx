import ColorTheme from "./MyColorContext"
import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"
import FunctionContextD from "./FunctionContextD"

const FunctionContextA = () => {
    const cores = 
    {
        bkgA: "green",
        bkgB: "white",
        bkgC: "yellow",
        bkgD: "blue",
    };
    return (
        <>
        <div style={{backgroundColor: cores.bkgA}} >
            <h1>Função A</h1>
        </div>
        <ColorTheme.Provider value={cores}>
            <FunctionContextB/>
            <FunctionContextC/>
            <FunctionContextD/>
        </ColorTheme.Provider>
        </>
    )
}

export default FunctionContextA