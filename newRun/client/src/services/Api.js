import axios from 'axios'

const url = process.env.REACT_APP_API_BASE_URL

const Api = (baseRoute = '/') => {

    const instance = axios.create({
        baseURL: `${url}${baseRoute}`
    })

    return instance
}


export default Api