import { collection, getDocs, getDoc, setDoc, addDoc, doc, deleteDoc } from "firebase/firestore"


class AlunosFirebaseService {

    static listar(db, callback) {
        const c = collection(db, "Aluno")
        getDocs(c)
        .then(
            (snapshot) => {
                const alunos = []
                snapshot.forEach(
                    ( document ) => {
                        console.log(document.id)
                        console.log(document.data())
                        alunos.push(
                            {
                                id:document.id,
                                ...document.data()
                            }
                        )
                    }
                )//for each
                callback(alunos)
            }
        )
        .catch(error=>console.log(error))
    }

    static criar(db, aluno, callback) {
        const c = collection(db, "Aluno")
        addDoc(c,aluno)
        .then(
            (document) => {
                callback({id:document.id})
            }
        )
        .catch(error => console.log(error))
    }
    static getById(db, callback, id) {
        const docRef = doc(db, "Aluno", id)
        getDoc(docRef)
        .then(
            (docSnap) => {
                //console.log(docSnap.data())
                //const professor = docSnap.data()
                callback(docSnap.data())
            }
        )
        .catch(error => console.log(error))
    }

    static atualizar(db, callback, id, alunoAtualizado) {
        const docRef = doc(db,"Aluno",id)
        setDoc(docRef,alunoAtualizado)
        .then(
            () => {
                callback({id})
            }
        )
        .catch(error => console.log(error))
    }
    static apagar(db, callback, id) {
        const docRef = doc(db, "Aluno", id)
        deleteDoc(docRef)
        .then(
            () => {
                callback({ id })
            }
        )
        .catch(error => console.log(error))
    }
}

export default AlunosFirebaseService;