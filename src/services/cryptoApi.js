import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '33ae8668a9mshf816fabb5b6bef0p194785jsn4e4cde469b0d'
}

const createRequest = url => ({ url, headers: cryptoApiHeaders }) // every req has to have headers 

export const cryptoApi = createApi({ // creating diff api reqs
    reducerPath: 'cryptoApi', // here you refer what is this reducer for / calling it 'cryptoApi'
    baseQuery: fetchBaseQuery({ baseUrl }), // fetching from this baseUrl
    endpoints: (builder) => ({ // diff endpts for the baseUrl

        getCryptos: builder.query({ // naming the endpt getCryptos for baseUrl/coins / we can now use getCryptos (userNameQuery format) for getting data from the /coins reqs
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),

        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),

        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),

        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
        }),

    })
})

export const { useGetCryptosQuery, useGetExchangesQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi 