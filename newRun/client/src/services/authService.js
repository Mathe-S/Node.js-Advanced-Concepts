import Api from './Api'

const api = new Api('/auth')

export const login = async () => {
    try {
        const data = await api.get('/google')
        console.log('data: ', data);
    } catch (error) {
        console.log('error: ', error);

    }

}