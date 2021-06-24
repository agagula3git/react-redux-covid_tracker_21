import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchGlobalData } from '../redux/actions';
import './Main.css'

export default function Main(){
    const { country, newConfirmed, totalConfirmed, newDeaths, totalDeaths } = useSelector(state=>({
        country: state.country,
        newConfirmed: state.newConfirmed,
        totalConfirmed: state.totalConfirmed,
        newDeaths: state.newDeaths,
        totalDeaths: state.totalDeaths
    }), shallowEqual)

    const dispatch = useDispatch();
    const [state, setState] = useState([]);

    useEffect(()=>{
        dispatch(fetchGlobalData())
    },[])
    return(
        <div className="main">
            <h1>{country}</h1>
            <div className="data-box">
                <div id="cases">
                    <h2>Cases</h2>
                    <p><strong>New:</strong> {newConfirmed}</p>
                    <p><strong>Total:</strong> {totalConfirmed}</p>
                </div>
                <div id="deaths">
                    <h2>Deaths</h2>
                    <p><strong>New:</strong> {newDeaths}</p>
                    <p><strong>Total:</strong> {totalDeaths}</p>
                </div>
            </div>
        </div>
    )
}