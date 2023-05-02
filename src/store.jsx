import { configureStore } from "@reduxjs/toolkit"
import themeReducer from './components/themeSlice'

export default configureStore({
    reducer: {
        theme: themeReducer
    }
})