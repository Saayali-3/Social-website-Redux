import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: '0',
        name: 'sneka'
    },
    {
        id: '1',
        name: 'hema'
    },
    {
        id: '2',
        name: 'jeni'
    }
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})


export const selectAllUsers = (state) => state.users; 
export default usersSlice.reducer