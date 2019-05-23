import React, { Component } from 'react'
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoStatus from './todoStatus';


export default class index extends Component {
    render() {
        return (
            <div>
                <h1>todo</h1>
                <TodoForm />
                <TodoList />
                <TodoStatus />
            </div>
        )
    }
}
