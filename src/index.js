import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const paddingLeft = size => ({
    paddingLeft: `${size}px`
})

const Parent = ({name}) => {
    return (
        <div style={paddingLeft(10)}>
            <h1>Parent</h1>
            <Child name={name}/>
        </div>
    )
}

const Child = ({name}) => {
    return (
        <div style={paddingLeft(15)}>
            <h1>Child</h1>
            <Grandchild name={name}/>
        </div>
    )
}

const Grandchild = ({name}) => {
    return (
        <div style={paddingLeft(20)}>
            <h1>Grandchild</h1>
            <h3>Name: {name}</h3>
        </div>
    )
}

class App extends Component {
    render() {
        const name = 'Emerson'

        return (
            <Parent name={name}/>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));