import React from "react";

class Example extends React.Component {

    render() {
        return (
            <div className="country-name">
                {this.props.country}
            </div>
        )
    }
}

export default Example;