//1.How to create astore
//bring Configure store from RTK - comes from core redux
import {configureStore} from '@reduxjs/toolkit'
//after todoSlice made:
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})

//next we make reducer -  in RTK it is made differently and is called slices.
//create folder named features in SRC - inside which there can be many feature like login, todo, product etc

//after todoSlice made:
