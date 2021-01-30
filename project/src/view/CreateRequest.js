import React from 'react'
import '../style/CreateRequest.css'
class CreateRequest extends React.Component {
    constructor(props) {
        super(props)
        this.state = { send: 1, receive: 1, rate: 1}
    }
    sendChange = (event) => {
        this.setState({send: event.target.value})
        this.setState({receive: (event.target.value*this.state.rate)})
    }
    receiveChange = (event) => {
        this.setState({receive: event.target.value})
        this.setState({send: (event.target.value/this.state.rate)})
    }
    rateChange = (event) => {
        this.setState({rate: event.target.value})
        this.setState({receive: (this.state.send * event.target.value)})
    }
    render() {
        return (

            <div className="createrequest">
                <div className="content">
                    <ul>
                        <li> <label for="Send"> Send </label> <input value={this.state.send} type="number" step="0.01" min="0.01" onChange={this.sendChange}/> </li>
                        <li> <label for="Receive"> Receive </label> <input value={this.state.receive} type="number" step="0.01" min="0.01" onChange={this.receiveChange}/> </li>
                        <li> <label for="RequestedRate"> Requested Rate </label> <input value={this.state.rate} type="number" step="0.00001" min="0.00001" onChange={this.rateChange}/> </li>
                    </ul>
                    <hr></hr><br></br>
                    <button>Request</button>  
                </div>
            </div>
        )
    }
}

export default CreateRequest;