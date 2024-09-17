import { useState } from "react";

const SaveLoadData = () => {

    const aluno = {
        nome: "Fulano",
        curso: "ES",
        IRA: 8.5,
    };

    const [alunoData, setAlunoData] = useState(0)


    function saveData() {
        //localStorage.setItem("aluno", JSON.stringify(aluno));
        sessionStorage.setItem("aluno", JSON.stringify(aluno));
        alert("Dado salvo com sucesso!");
    }
    function loadData() {
        const alunoCarregado = sessionStorage.getItem("aluno");
        setAlunoData(JSON.parse(alunoCarregado));
    }
    return (
        <div>
            <h1>Save Load Data</h1>
            <h3>{JSON.stringify(alunoData)}</h3>
            <button onClick={saveData}>SAVE DATA</button>
            <button onClick={loadData}>LOAD DATA</button>
        </div>
    );
};

export default SaveLoadData;