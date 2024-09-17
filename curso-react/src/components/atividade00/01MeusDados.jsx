import './01MeusDados.css';

// function MeusDados ()
// {
//     return(
//         <div>
//             <h1>Meus Dados</h1>
//             <h1>Nome completo: Francisco Josias Da Silva Batista</h1>
//             <h1>Curso: Engenharia de Software</h1>
//             <h1>Universidade: Universidade Federal do ceará UFC Quixadá</h1>
//         </div>
//     )
// }


const MeusDados = () =>
{
    return(
        <div className="meus-dados">
            <h1>Meus Dados</h1>
            <h1>Nome completo: Francisco Josias Da Silva Batista</h1>
            <h1>Curso: Engenharia de Software</h1>
            <h1>Universidade: Universidade Federal do ceará UFC Quixadá</h1>
        </div>
    )
}

// const MeusDados = () => " Meus dados: nome: Francisco Josias Da Silva Batista. Curso: ES. Universidade: UFC QUIXADÁ"; 

// const MeusDados = () =>
// {
//     let nome = "Josias"
//     let curso = "ES"
//     let cadeiras = "Matemática Discreta, Desenvolvimento de Software para WEB, Administração de Sistemas Operacionais Linux, Linguagens de programação, Estrutura de Dados, Redes de Computadores"

//     function cadeirasSemestre (cadeiras) {
//         return cadeiras;
//     }
//     return(
//         <div>
//             <h1>Seja bem vindo! {nome}</h1>
//             <h2>qual é o seu curso? {curso}</h2>
//             <h3>Quais as cadeiras que você está fazendo? {cadeirasSemestre(cadeiras)}</h3>
//         </div>
//     )
// }

export default MeusDados;