import { createSlice } from "@reduxjs/toolkit"

interface ThemeState {
    darkTheme: boolean
}
const initialState: ThemeState = {
    darkTheme: false,
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.darkTheme = !state.darkTheme
        },
    },
})

export const { changeTheme } = themeSlice.actions
export const selectTheme = (state: any) => state.theme.darkTheme
export default themeSlice.reducer
