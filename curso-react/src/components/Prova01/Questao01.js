
const Questao01A = () => {

    // aqui eu crio uma constante lista que eu mando para o componente Questao01B com props.
    const lista = [
    {a:10, b:3, c:7},
    {a:5, b:-3, c:9},
    {a:1, b:9, c:40}
    ];

    return (
        <div>
            <h1>Questão01A</h1>
            
            {/* chamando componente Questao01B e passando lista via props. */}
            <Questao01B lista={lista} />
        </div>
    );
};

function Questao01B (props){
    const {lista} = props;

    // aqui crio uma função para retornar o valor maior de cada objeto da lista.
    const valorMaior = (obj) => Math.max(...Object.values(obj));

    return (
        <div>
            <h2>Questão 01B</h2>
            <ul>

                {/* aqui estou mapeando na lista os valores maiores para exibir na tela */}
                {lista.map((item, index) => (

                    // aqui estou usando index na key para garantir o indice do objeto da lista
                    <li key={index}>
                        Maior valor do objeto {index + 1}: {valorMaior(item)}
                    </li>
                ))}
            </ul>
        </div>
    );

} 
export default Questao01A;