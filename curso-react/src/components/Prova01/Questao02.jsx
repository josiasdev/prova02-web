import React, {useState} from 'react';


const Questao02 = () => {
    // estado para controlar a exibição da imagem (frente ou costas)
    const [frente,setFrente] = useState(true);

    // aqui são as urls das imagens usadas a frente e as costas
    const Frenteimage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    const Costaimage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"

    // uma função que mudar a imagem entre frente e costas
    function mudarImagem ()
    {
        setFrente(!frente);
    }
    return (
        <div>
            <h1>Pikachu</h1>
            {/* Renderiza a imagem com base no estado de frente */}
            <img src={frente ? Frenteimage : Costaimage} alt="Pikachu"/>

            {/* botão para mudar a imagem para frente ou costa */}
            <button onClick={mudarImagem}> 
            {frente ? 'Mostrar Costas' : 'Mostrar Frente'}   
            </button>
        </div>
    )
}

export default Questao02