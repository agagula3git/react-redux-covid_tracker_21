import axios from 'axios'

export function fetchGlobalData(){
    return function(dispatch){
        axios({
            method: 'get',
            url: 'https://api.covid19api.com/summary'
        })
        .then(res => {
            let countries = [];
            console.log(res.data)
            res.data.Countries.forEach(obj => {
                countries.push(obj.Country);
            })
            dispatch({ type: 'FETCH_GLOBAL_DATA', payload: {globalData: res.data.Global, countries} })
        })
        .catch(err => console.log(err));
    }
}

export function setCountry(country){
    return function(dispatch){
        axios({
            method: 'get',
            url: 'https://api.covid19api.com/summary'
        })
        .then(res =>{
            const data = res.data.Countries.filter(obj => obj.Country === country)
            console.log(data[0])
            dispatch({ type: 'SET_COUNTRY', payload: data[0]})
        })
        .catch(err => console.log(err))
    }
}