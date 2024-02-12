import { createAsyncThunk } from "@reduxjs/toolkit"

export const createURL = (data) => {
    return Object.entries(data).map(entry => `${entry[0]}=${entry[1]}`).join('&')
}

export const fetchFilms = createAsyncThunk(
    "films/fetchFilms",
    async(url, {rejectWithValue}) => {
        try {
            const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films${url}`, {
                method: 'GET',
                headers: {
                  'X-API-KEY': '8ecb7fcd-1b77-4235-98ac-3c8dd42f3c22',
                  'Content-Type': 'application/json',
                }
            })
            return await response.json()
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const fetchFiltersFilm = createAsyncThunk(
    "films/fetchFiltersFilm",
    async(__, {rejectWithValue}) => {
        try {
            const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/filters`, {
                method: 'GET',
                headers: {
                  'X-API-KEY': '8ecb7fcd-1b77-4235-98ac-3c8dd42f3c22',
                  'Content-Type': 'application/json',
                }
            })
            return await response.json()
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const fetchMediaPosts = createAsyncThunk(
    "films/fetchMediaPosts",
    async(url, {rejectWithValue}) => {
        try {
            const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v1/media_posts${url}`, {
                method: 'GET',
                headers: {
                  'X-API-KEY': '8ecb7fcd-1b77-4235-98ac-3c8dd42f3c22',
                  'Content-Type': 'application/json',
                }
            })
            return await response.json()
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)
export const fetchFilm = createAsyncThunk(
    "films/fetchFilm",
    async(url, {rejectWithValue}) => {
        try {
            const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${url}`, {
                method: 'GET',
                headers: {
                  'X-API-KEY': '8ecb7fcd-1b77-4235-98ac-3c8dd42f3c22',
                  'Content-Type': 'application/json',
                }
            })
            return await response.json()
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)
