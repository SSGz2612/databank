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
        setList: (state, action: PayloadAction<any>) => {
            state.list = [
                ...state.list, {
                    ...action.payload,
                    id: state.list.length
                }
            ]
            // console.log( state.list );
        },
        removeList: (state, action: PayloadAction<any>) => {
            state.list = state.list.filter(({id}) => id !== action.payload );
        }
    }
})

export default userSlice.reducer;
export const { setList, removeList } = userSlice.actions;
