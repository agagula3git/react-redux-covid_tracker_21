import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Main(){
    const [state, setState] = useState([]);

    useEffect(()=>{
        axios({
            method: 'get',
            url: 'https://api.covid19api.com/summary'
        })
        .then(res => setState(res.data.Countries))
        .catch(err => console.log(err));
    },[])
    console.log(state);
    return(
        <div>
            <h2>Hello!!!</h2>
        </div>
    )
}