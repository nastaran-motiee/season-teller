import React from "react";
import { createRoot } from "react-dom/client"


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = { lat: null, errMessage: '' };
        navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => { this.setState({ errMessage: err.message }) }
        );
    }


    render() {
        if (this.state.errMessage && !this.state.lat) {
            return <div> Error: { this.state.errMessage } </div>
        }

        if(!this.state.errMessage && this.state.lat){
            return <div> Latitude: {this.state.lat} </div>
        }

        return <div> Loading! </div>

    }
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);