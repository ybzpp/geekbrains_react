import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message'



class HelloMessage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: []
        };
        this.add = this.add.bind(this)
    }

    add(){
        const { arr } = this.state
        this.setState({arr: [...arr, 'Нормально']})
    }

    render(){
    let { arr } = this.state

    return <div>
       <p>Hello, {this.props.name}</p>
        <Message name="User"/>
        
        <button onClick={this.add}>Нормально</button>
        <p>{arr}</p>
        </div>;
    }
}

ReactDOM.render(
    <HelloMessage name="User" />,
    document.getElementById('root')
);