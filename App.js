import React, { Component } from 'react';

class App extends Component {
    componentDidMount () {
        const store = this.props;

        Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
        ]).then(([todos, goals]) => {
            console.log('Todos',todos)
            console.log('Goals',goals)
        })
    }
}