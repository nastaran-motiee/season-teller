import React from "react";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }

}




const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? <h1 style={ { color: 'blue', textAlign: 'center' } }>Burr, it is chilly!</h1> : <h1 style={ { color: 'red', textAlign: 'center' } }>Lets hit the beach!</h1>
    const icon = season === 'winter' ? 'massive blue snowflake outline loading' : 'massive yellow sun loading';

    return (
        <div>
            { text }
            <i className={ `${icon} icon` }></i>
        </div>
    );
}

export default SeasonDisplay;