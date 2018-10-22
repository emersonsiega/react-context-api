import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const paddingLeft = size => ({
    paddingLeft: `${size}px`
})

const Context = React.createContext()

const Parent = () => {
    return (
        <div style={paddingLeft(10)}>
            <h1>Parent</h1>
            <Child />
        </div>
    )
}

const Child = () => {
    return (
        <div style={paddingLeft(15)}>
            <h1>Child</h1>
            <Grandchild/>
        </div>
    )
}

const Grandchild = () => {
    return (
        <Context.Consumer>
            {(name) => (
                <div style={paddingLeft(20)}>
                    <h1>Grandchild</h1>
                    <h3>Name: {name}</h3>
                </div>
            )}
        </Context.Consumer>
    )
}

class App extends Component {
    render() {
        const name = 'Emerson'

        return (
            <Context.Provider value={name}>
                <Parent/>
            </Context.Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));