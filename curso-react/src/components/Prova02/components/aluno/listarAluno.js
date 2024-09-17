import { Link } from "react-router-dom"

import "../../css/crud.css"
import AlunoService from "../../services/AlunosService"
import AlunoFirebaseService from "../../services/AlunosFirebaseService"
import FirebaseContext from "../../utils/FirebaseContext"
import { useState, useEffect, useContext } from "react"

const ListarAluno = () => {
    const [alunos, setAlunos] = useState([]);
    const [mediaIRA, setMediaIRA] = useState(0);
    const [colorir, setColorir] = useState(false);
    const firebase = useContext(FirebaseContext)
    
    useEffect(() => {
        AlunoFirebaseService.listar(
            firebase.getFirestoreDb(),
            (alunos) => {
                setAlunos(alunos)

                const somaIRA = alunos.reduce((acc, aluno) => acc + aluno.ira, 0)
                const media = somaIRA / alunos.length;
                setMediaIRA(media);
            }
        )
    }, []);
    const deleteAluno = (id) => {
        if (window.confirm(`Deseja realmente excluir id = ${id}`)) {
            AlunoFirebaseService.deleteAlunoById(
                id,
                (response) => {
                    const res = alunos.filter(
                        (aluno) => aluno.id !== id
                    )
                    setAlunos(res)
                }
            )
        }
    }
    const toggleColorir = () => {
        setColorir(!colorir); // Alterna entre ativar/desativar a coloração das linhas
    };
    const corpoTabela = () => {
        return alunos.map((aluno) => {
            const estiloLinha = colorir
                ? aluno.ira < mediaIRA
                    ? { backgroundColor: '#FF6347' } // Vermelho para IRA abaixo da média
                    : { backgroundColor: '#ADD8E6' } // Azul para IRA acima da média
                : {}; // Sem cor se colorir for false

            return (
                <tr key={aluno.id} style={estiloLinha}>
                    <th scope="row">{aluno.id}</th>
                    <td>{aluno.nome}</td>
                    <td>{aluno.curso}</td>
                    <td>{aluno.ira}</td>
                    <td className="button-content">
                        <Link className="btn btn-primary" to={`/Aluno/editar/${aluno.id}`}>
                            Editar
                        </Link>
                        <button className="btn btn-danger" onClick={() => deleteAluno(aluno.id)}>
                            Apagar
                        </button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div className="page-content">
            <h1>Listar Alunos</h1>
            <button className="btn btn-secondary" onClick={toggleColorir}>
                {colorir ? "Remover Cores" : "Colorir Linhas"}
            </button>
            <table className="table table-striped table-content table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Curso</th>
                        <th scope="col">IRA</th>
                    </tr>
                </thead>
                <tbody>
                    {corpoTabela()}
                    {/* Linha com a média dos IRAs destacada */}
                    <tr style={{ backgroundColor: '#FFD700' }}>
                        <td colSpan="3"><strong>Média do IRA</strong></td>
                        <td><strong>{mediaIRA.toFixed(2)}</strong></td> {/* Mostra a média formatada */}
                        <td></td> {/* Célula vazia para alinhar */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListarAluno;