import { configureStore } from "@reduxjs/toolkit"
import filmsReducer from '../slice/filmSlice'

const store = configureStore({
    reducer: {
        films: filmsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})


export default store
