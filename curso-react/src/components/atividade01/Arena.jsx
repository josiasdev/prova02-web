const Arena = ({children, arena}) => 
{
    return(
        <div>
            <h1>{arena}</h1>
            {children}
        </div>
    )
}

export default Arena;