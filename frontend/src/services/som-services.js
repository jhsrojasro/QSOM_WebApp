import axios from 'axios'
import {BACKEND_API_URL} from './api'
import {store} from '../redux/store'

export const TrainSom = async (formData) => {
    let result = await axios.post(BACKEND_API_URL + '/som/train', formData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + store.getState().user.token
        }
    })
    return result.data;
}