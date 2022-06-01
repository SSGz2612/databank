import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInfo } from "./model";

type IState = {
    list: userInfo[];
}
const initialState: IState = {
    list: []
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setList: ( state, action: PayloadAction<any>) => {
            state.list = action.payload
            console.log( state.list )
        }
    }
})

export default userSlice.reducer;
export const { setList } = userSlice.actions;
