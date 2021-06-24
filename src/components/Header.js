import React from 'react'
import './Header.css'

export default function Header(){
    return (
        <div className="header">
            <div id="title">Covid-19 Tracker</div>
            <div id="web">API by <a href="www.covid19api.com">covid19api.com</a></div>
        </div>
    )
}