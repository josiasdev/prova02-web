import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import CriarAluno from "./components/aluno/criarAluno"
import ListarAluno from "./components/aluno/listarAluno"
import EditarAluno from "./components/aluno/editarAluno"
import AgruparAluno from "./components/aluno/ListarAlunosPorCurso"

import Firebase from "./utils/Firebase";
import FirebaseContext from "./utils/FirebaseContext";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "Aluno/criar",
                element: <CriarAluno />
            },
            {
                path: "Aluno/listar",
                element: <ListarAluno />
            },
            {
                path: "Aluno/editar/:id",
                element: <EditarAluno />
            },
            {
                path: "Aluno/agrupar",
                element: <AgruparAluno/>
            }
        ]
    }
])

const Main = () => {
    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <RouterProvider router={router} />
        </FirebaseContext.Provider>
    )
}
export default Main