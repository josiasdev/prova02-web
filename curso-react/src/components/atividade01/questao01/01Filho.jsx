
const Filho = ({altura, peso}) => 
{
    const calcularIMC = () => 
    {
        const imc = peso / (altura * altura);
        if (imc < 18)
        {
            return <h3>Abaixo do peso</h3>
        }
        else if (imc > 25)
        {
            return <h3>Acima do peso</h3>
        }
        else
        {
            return <h3>Peso ideal</h3>
        }
    }
    return(
        <div>
            {calcularIMC()}
        </div>
    )
}



export default Filho;