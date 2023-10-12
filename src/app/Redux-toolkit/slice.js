import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    users: []
}

//createSlice make two type of function like 
//action and reducer
//action define under if reducer                         

const Slice = createSlice({
    name: "adduser",
    initialState,
    //reducer
    reducers: {
        //action
        addUser: (state, action) => {
            console.log(action)
            const data = {
                id: nanoid(),
                name: action.payload

            }
            state.users.push(data)
        },
        removeUser: (state, action) => {
            // console.log(action)
            const data = state.users.filter((item) => {
                return item.id != action.payload
            })
            state.users = data
        }
    }
});


export const { addUser, removeUser } = Slice.actions;

export default Slice.reducer;
