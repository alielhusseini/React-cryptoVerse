import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../services/cryptoApi'
import { cryptoNewsApi } from '../services/cryptoNewsApi'

// creating the store
export default configureStore({ // connecting the created api(s ) to the store
    reducer: { // combining all reducers into reducer obj (combineReducer)
        [cryptoApi.reducerPath]: cryptoApi.reducer, // you need to specify for every single reducer you create
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    }
})