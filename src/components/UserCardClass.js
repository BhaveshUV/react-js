import React from "react";
import UserCardClassChild from "./UserCardClassChild";

class UserCardClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        console.log("Parent constructor");
    }

    componentDidMount() {
        // this.timer = setInterval(() => {
        //     console.log(`Timer`);
        // }, 1000);
        console.log(`Parent componentDidMount`);
    }

    componentDidUpdate() {
        console.log(`Parent componentDidUpdate`);
    }

    componentWillUnmount() {
        // clearInterval(this.timer);
        console.log(`Parent componentWillUnmount`);
    }

    render() {
        console.log(`Parent Rendering`);
        return (
            <div className="user-card">
                <h2>Class-component</h2>
                <div>{this.props.name}</div>
                <div>{this.props.location}</div>
                <div>{this.props.contact}</div>
                <div style={{color: "black"}}>State-variable: {this.state.count}</div>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>Increment state-variable</button>

                <UserCardClassChild name="First"/>
                <UserCardClassChild name="Second"/>
            </div>
        )
    }
}

export default UserCardClass;