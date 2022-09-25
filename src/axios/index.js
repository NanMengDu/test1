import axios from '../lib/util'
export const ReqDog = ()=>{
    return axios.request({
        url:'https://dog.ceo/api/breeds/image/random',
    })
}

export const ReqCat = ()=>{
    return axios.request({
        url:'https://api.thecatapi.com/v1/images/search?limit=1',
    })
}

export const ReqMusic = ()=>{
    return axios.request({
        url:'https://api.uomg.com/api/rand.music?sort=热歌榜&format=json',
    })
}