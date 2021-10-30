var url = process.env.NODE_ENV === "development" ? process.env.REACT_APP_LOCAL_SERVER_URL : process.env.REACT_APP_SERVER_URL

export const apiCallPost = (route,bodyData) => fetch(url+route,{
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    mode:'cors',
    credentials: 'include',
    body: JSON.stringify(bodyData)
}).then(resp => {
    return resp.json();
})

export const apiCallGet = (route) => fetch(url+route, {
    method: 'get',
    credentials: 'include',
    mode:'cors'
}).then(resp => {
    return resp.json()
})
