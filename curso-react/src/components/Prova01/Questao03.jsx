import React, { useState, useEffect } from 'react'

const Questao03 = () => {

    // Estado para armazenar as capitais da maior população e das menores
    const [capitais, setCapitais] = useState({
        maxpopulacao: null,
        minpopulacao: null
    });

    // Função que busca os dados e define os estados das capitais
    const BuscarCapitais = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
            const data = await response.json();

            if (data.length > 0) {
                // Encontra a capital com a menor e a maior população 
                const minimaPopulacao = data.reduce((minpopulacao, country) => country.population < minpopulacao.population ? country : minpopulacao, data[0]);
                const maximaPopulacao = data.reduce((maxpopulacao, country) => country.population > maxpopulacao.population ? country : maxpopulacao, data[0]);

                // Atualiza o estado com os resultados pegos na url
                setCapitais({
                    minpopulacao: minimaPopulacao,
                    maxpopulacao: maximaPopulacao
                });
            }
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    // useEffect para buscar os dados
    useEffect(() => {
        BuscarCapitais();
    }, []);

    return (
        <div>
            <h1>Capitais com Maior e Menor População na Europa Questão 03</h1>
            {capitais.minpopulacao && capitais.maxpopulacao ? (
                <div>
                    <p><strong>Menor população:</strong> {capitais.minpopulacao.capital[0]} - {capitais.minpopulacao.population} habitantes</p>
                    <p><strong>Maior população:</strong> {capitais.maxpopulacao.capital[0]} - {capitais.maxpopulacao.population} habitantes</p>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default Questao03