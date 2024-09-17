const Hero = ({ name, img }) => {
    return (
        <div>
            <h3>Nome: {name}</h3>
            <img src={img} alt={name} width={300}/>
        </div>
    )
}

const Enemy = ({ name, img }) => {
    return (
        <div>
            <h3>Nome: {name}</h3>
            <img src={img} alt={name} width={300} />
        </div>
    )
}

export { Hero, Enemy };