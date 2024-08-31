import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"lang",
    initialState:{
        language:"en",
        langs:{
            

        }
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.language=action.payload
        },
        availableLanguages:(state,action)=>{
            state.langs=action.payload
        }
    }
})

export const{changeLanguage,availableLanguages}=configSlice.actions
export default configSlice.reducer
