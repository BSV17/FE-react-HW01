import './App.css';
import React from "react";
import Example from "./Example";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            country: "Ukraine"
        }
    }

    changeTextHandler = () => {
        this.state.country === "Ukraine" ? this.setState({country: "Ukraine is the best country"}) : this.setState({country: "Ukraine"});
    };

    render() {
        return (
            <>
                <Example country={this.state.country}/>
                <button onClick={this.changeTextHandler}>Change text</button>
            </>
        )
    }
}

export default App;