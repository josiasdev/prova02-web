// const Planeta = (props) => 
// {
//     return (
//         <div>
//             <h3>Nome: {props.nome}</h3>
//             <h3>Tipo: {props.tipo}</h3>
//             <h3>Posição: {props.pos}</h3>
//         </div>
//     )
// }

// const Planeta = (props) => {
//     const {nome, tipo, pos} = props

//     return (
//         <div>
//             <h3>Nome: {nome}</h3>
//             <h3>Tipo: {tipo}</h3>
//             <h3>Posição: {pos}</h3>
//         </div>
//     )
// }

const Planeta = ({nome, tipo, pos, imagem}) => {
    return (
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Tipo: {tipo}</h3>
            <h3>Posição: {pos}</h3>
            <img src={imagem} alt="Imagem de planetas" />
        </div>
    )
}

export default Planeta;