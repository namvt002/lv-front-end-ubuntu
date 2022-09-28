import { createSlice } from '@reduxjs/toolkit'


export const initialState  = {
   isShow        :true,
}

const sidebar = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {

        getSidebar: (state) => {
            return {
               ...state
            }
        },

        setSidebar:(state,action)=>{
        return {
            isShow:action.payload
         }
        },
    },
})


const { reducer, actions } = sidebar

export const {setSidebar, getSidebar } = actions

export const sidebarSelector = (state) => state.sidebar.isShow

export default reducer


