import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../../utils/FirebaseContext";
import AlunoFirebaseService from "../../services/AlunosFirebaseService";
import "../../css/crud.css"
const ListarAlunosPorCurso = () => {
    const [alunos, setAlunos] = useState([]);
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        AlunoFirebaseService.listar(
            firebase.getFirestoreDb(),
            (alunos) => {
                setAlunos(alunos);
            }
        );
    }, []);

    // Função para agrupar alunos por curso
    const agruparPorCurso = () => {
        return alunos.reduce((agrupados, aluno) => {
            const curso = aluno.curso;
            if (!agrupados[curso]) {
                agrupados[curso] = [];
            }
            agrupados[curso].push(aluno);
            return agrupados;
        }, {});
    };

    const alunosAgrupados = agruparPorCurso();

    return (
        <div className="container my-4">
            <h1 className="text-center">Listar Alunos por Curso</h1>
            <div className="accordion" id="accordionAlunos">
                {Object.keys(alunosAgrupados).map((curso, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded="true"
                                aria-controls={`collapse${index}`}
                            >
                                {curso}
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}
                            className="accordion-collapse collapse show"
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#accordionAlunos"
                        >
                            <div className="accordion-body">
                                <ul className="list-group">
                                    {alunosAgrupados[curso].map((aluno) => (
                                        <li
                                            key={aluno.id}
                                            className={`list-group-item d-flex justify-content-between align-items-center
                                            ${aluno.ira >= 7 ? 'list-group-item-success' : 'list-group-item-danger'}`}
                                        >
                                            {aluno.nome}
                                            <span className="badge bg-primary rounded-pill">
                                                IRA: {aluno.ira}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListarAlunosPorCurso;
