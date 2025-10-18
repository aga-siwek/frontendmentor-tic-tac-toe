import { configureStore } from '@reduxjs/toolkit'
import gameReducer, {listenerMiddleware} from "./gameSlice.js"

export default configureStore({
    reducer: {
        game: gameReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})