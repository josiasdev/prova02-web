import { configureStore } from '@reduxjs/toolkit'
import contadorSlice from '../Slice/contadorSlice'

export const store = configureStore(
    {
        reducer: {
            contador: contadorSlice
        },
    }
)
export default store;