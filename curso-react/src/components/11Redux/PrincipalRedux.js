import { store } from './Store/store'
import { Provider } from 'react-redux'
import ContadorRedux from './ContadorRedux'

const PrincipalRedux = () => {
    return (
        <>
            <Provider store={store}>
                <ContadorRedux>    
                </ContadorRedux>
            </Provider>
        </>
    )
}

export default PrincipalRedux;