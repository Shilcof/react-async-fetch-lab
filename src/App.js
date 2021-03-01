// create your App component here
import React from 'react';
import Person from './Person';

export default class App extends React.Component {

    state = {
        people: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res=>res.json())
            .then(json=>this.setState({people: json.people}))
    }

    renderPeople() {
        return this.state.people.map(person=><Person name={person.name}/>)
    }

    render() {
        return(
            <div>
                {this.renderPeople()}
            </div>
        )
    }
}