import { createSlice } from "@reduxjs/toolkit"
import { fetchFilm, fetchFilms, fetchFiltersFilm, fetchMediaPosts } from "../../api"

const initialState = {
    loading: false,
    error: "",
    topFilms: [],
    filters: {},
    news: {},
    selectedFilm: null,
    idSelected: '',
}


export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setIdSelected: (state, action) => {
            state.idSelected = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchFilms.pending, (state) => {
            state.loading = true
            state.topFilms = []
            state.error = ""
        })
        .addCase(fetchFilms.fulfilled, (state, action) => {
            state.topFilms = action.payload
            state.loading = false
            state.error = ''
        })
        .addCase(fetchFilms.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        .addCase(fetchFiltersFilm.fulfilled, (state, action) => {
            state.filters = action.payload
        })
        .addCase(fetchMediaPosts.fulfilled, (state, action) => {
            state.news = action.payload
        })
        .addCase(fetchFilm.fulfilled, (state, action) => {
            state.selectedFilm = action.payload
        } )
    }
})

export const { setIdSelected } = filmsSlice.actions

export default filmsSlice.reducer
