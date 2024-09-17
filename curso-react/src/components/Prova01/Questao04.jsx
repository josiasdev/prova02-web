import React, { useState, useEffect } from 'react'

const Questao04 = () => {

    // Estado para armazenar as capitais da maior população e das menores
    const [capitais, setCapitais] = useState({
        maxpopulacao: null,
        minpopulacao: null
    });

    // função que retornar os dados usando Promise
    const BuscarCapitaisUsandoPromise = () => {
        return new Promise((resolve, reject) => {
            const data = [
                { "capital": ["Dublin"], "population": 4994724 },
                { "capital": ["Nicosia"], "population": 1207361 },
                { "capital": ["Madrid"], "population": 47351567 }
            ];
            resolve(data);
        })
    }


    // Função que busca os dados e define os estados das capitais
    useEffect(() => {
        const getData = async () => {
        try {
            const data = await BuscarCapitaisUsandoPromise();

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
            console.error('Erro ao processar os dados:', error);
        }
    };
    getData();
}, []);

    return (
        <div>
            <h1>Capitais com Maior e Menor População na Europa Questão 04</h1>
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

export default Questao04