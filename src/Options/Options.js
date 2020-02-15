import React from 'react';
import './Options.css';
import Items from './Items/Items'

function Options(props){
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Items  
                selected={props.selected} 
                updateFeature={props.updateFeature} 
                features={props.features} 
                currencyFormat={props.currencyFormat}/>
        </form>
    )
}

export default Options;