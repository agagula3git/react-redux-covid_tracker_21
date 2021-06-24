import axios from 'axios'

export function fetchGlobalData(){
    return function(dispatch){
        axios({
            method: 'get',
            url: 'https://api.covid19api.com/summary'
        })
        .then(res => {
            dispatch({ type: 'FETCH_GLOBAL_DATA', payload: res.data.Global })
        })
        .catch( err => console.log(err));
    }
}  