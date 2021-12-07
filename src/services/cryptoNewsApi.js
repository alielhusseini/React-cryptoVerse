import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '33ae8668a9mshf816fabb5b6bef0p194785jsn4e4cde469b0d'
}

const createRequest = url => ({ url, headers: cryptoNewsHeaders }) // every req has to have headers 

export const cryptoNewsApi = createApi({ // creating diff api reqs
    reducerPath: 'cryptoNewsApi', // here you refer what is this reducer for / calling it 'cryptoNewsApi'
    baseQuery: fetchBaseQuery({ baseUrl }), // fetching from this baseUrl
    endpoints: (builder) => ({ // diff endpts for the baseUrl

        getCryptoNews: builder.query({ // naming the endpt getCryptoNews for baseUrl/news / we can now use getCryptoNews (userNameQuery format) for getting data from the /news reqs
            query: ({ count, newsCategory }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })

    })
}) 

export const { useGetCryptoNewsQuery } = cryptoNewsApi