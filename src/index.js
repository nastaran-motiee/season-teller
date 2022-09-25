import React from "react";
import { createRoot } from "react-dom/client"


class App extends React.Component {
    render() {
        navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            err => console.log(err));
        return <div> Latitude: </div>;
    }
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);