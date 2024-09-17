import AlunoService from "../../services/AlunosService"
import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";



const EditarAluno = () => {
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState("")

    const {id } = useParams();
    const navigate = useNavigate();

    useEffect(() => 
        {
            AlunoService.getAlunoById(
                id, 
                (response) => 
                    {
                        const {nome, curso, ira} = response
                        setNome(nome);
                        setCurso(curso);
                        setIra(ira);
                    }
            );
        }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault()
        const AlunoEditado = { nome, curso, ira }
        AlunoService.atualizarAlunoById(
            id,
            AlunoEditado,
            (response) => 
                {
                    navigate("/Aluno/listar")
                }
        )
    };
    return (
        <div className="page-content">
            <h1>Editar Aluno</h1>
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
                    <button type="submit" className="btn btn-primary"> Atualizar </button>
                </div>
            </form>
        </div>
    );
};


export default EditarAluno;