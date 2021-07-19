import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchGlobalData, setCountry } from '../redux/actions';
import { store } from '../redux/store';
import './Main.css'

export default function Main(){
    const { country, newConfirmed, totalConfirmed, newDeaths, totalDeaths, countries } = useSelector(state=>({
        country: state.country,
        newConfirmed: state.newConfirmed,
        totalConfirmed: state.totalConfirmed,
        newDeaths: state.newDeaths,
        totalDeaths: state.totalDeaths,
        countries: state.countries
    }), shallowEqual)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchGlobalData())
    },[]);

    const handleChange = e =>{
        dispatch(setCountry(e.target.value));
    }
    
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
            <div className="select-box">
                <select value={country} onChange={handleChange}>  
                    <option value="Select Country" hidden>Select Country</option> 
                    {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                ))}
                </select>
            </div>
        </div>
    )
}