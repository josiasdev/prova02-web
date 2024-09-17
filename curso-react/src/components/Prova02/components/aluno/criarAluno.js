import "../../css/crud.css"
import { useState, useContext } from "react"
import AlunoFirabseService from "../../services/AlunosFirebaseService";

import FirebaseContext from "../../utils/FirebaseContext";
import axios from "axios"


const CriarAluno = () => {
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState("")

    const firebase = useContext(FirebaseContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const novoAluno = { nome, curso, ira }
        AlunoFirabseService.criar(
            firebase.getFirestoreDb(),
            novoAluno,
            (aluno) => {
                console.log(aluno);
            }
        )
        const postAlunoAxiosThenCatch = (novoAluno) => {
            axios.post("http://localhost:3000/Aluno/criar", novoAluno)
                .then((response) => {
                    console.log(response)
                })
                .catch(error => console.log(error))
        }
    }
    return (
        <div className="page-content">
            <h1>Criar Aluno</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="idNome" className="form-label">
                        Nome
                    </label>
                    <input
                        id="idNome"
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                        className="form-control"
                    />
                </div>
                <div>
                    <label htmlFor="idCurso" className="form-label">
                        Curso
                    </label>
                    <input
                        id="idCurso"
                        type="text"
                        name="curso"
                        value={curso}
                        onChange={(event) => setCurso(event.target.value)}
                        className="form-control"
                    />
                </div>
                <div>
                    <label htmlFor="idIra" className="form-label">
                        Ira
                    </label>
                    <input
                        id="idIra"
                        type="number"
                        name="ira"
                        value={ira}
                        onChange={(event) => setIra(event.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="div-button-submit">
                    <button type="submit" className="btn btn-primary"> Submeter </button>
                </div>
            </form>
        </div>
    )
}


export default CriarAluno;