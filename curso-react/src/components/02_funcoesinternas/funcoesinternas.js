const FuncoesInternas = () => {
    let numeroA = 2
    let numeroB = 3
    function somar(a, b) {
        return a + b
    }
    const subtrair = (a, b) => {
        return a - b
    }

    const multiplicar = (a, b) => a * b

    const dividir = (a, b) => {
        if (b !== 0) {
            return a / b;
        }
        else {
            return 0;
        }
    }
    const potenciar = (a, b) => a ** b
    
    return (
        <div>
            <h1>Calculadora</h1>
            <h3>A soma: {numeroA} + {numeroB} = {somar(numeroA, numeroB)}</h3>
            <h3>A subtração: {numeroA} - {numeroB} = {subtrair(numeroA, numeroB)}</h3>
            <h3>A multiplicação: {numeroA} * {numeroB} = {multiplicar(numeroA, numeroB)}</h3>
            <h3>A divisão: {numeroA} / {numeroB} = {dividir(numeroA, numeroB).toFixed(2)}</h3>
            <h3>O numero {numeroA} elevado a {numeroB} é {potenciar(numeroA, numeroB)}</h3>
        </div>
    )
}

export default FuncoesInternas