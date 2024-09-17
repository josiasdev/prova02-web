const PlacaMae = ({nome, preco}) => 
{
    return (
        <div>
            <h3>Placa Mãe: {nome}</h3>
            <p>Preço: R$ {preco}</p>
        </div>
    );
};

const Memoria = ({nome, preco}) => 
{
    return (
        <div>
            <h3>Memória: {nome}</h3>
            <p>Preço: R$ {preco}</p>
        </div>
    );
};

const PlacaDeVideo = ({nome, preco}) => 
{
    return (
        <div>
            <h3>Placa de Video: {nome}</h3>
            <p>Preço: R$ {preco}</p>
        </div>
    )
}

export {PlacaMae, Memoria, PlacaDeVideo};