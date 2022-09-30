import React from "react";
import { createRoot } from "react-dom/client"
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner'
import './style/App.css'

class App extends React.Component {
    state = { lat: null, errMessage: '' };


    renderContent() {
        if (this.state.errMessage && !this.state.lat) {
            return <div> Error: { this.state.errMessage } </div>
        }

        if (!this.state.errMessage && this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat } />
        }

        return <Spinner message='Please accept the location request' />;

    }


    render() {
        return (
            <div className="wrapper">
                { this.renderContent() }
            </div>
        );    
    }
    

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errMessage: err.message })
        );

    }


}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);