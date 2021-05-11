import { REQUEST_PENDING,REQUEST_SUCCESS,REQUEST_FAILED } from './constants';

const apiCall = (url) => fetch(url).then(resp => resp.json())

export const getData = () => (dispatch)=> {
    dispatch({type: REQUEST_PENDING})
    apiCall('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            dispatch({type: REQUEST_SUCCESS, payload: res})
        })
        .catch(err => dispatch({type: REQUEST_FAILED, payload: err}))
}