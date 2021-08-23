import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../Actions'
import TodoForm from './tdoForm'


class TodoList extends Component {
  
  componentDidMount() {
    this.props.fetchTodos();
  }



  returnPost = () => this.props.todos.map((todos) => (
    <div className="card container d-flex" key={todos.id}>
      <div className="card-body">
        <h5 className="card-title text-primary">
          {todos.task}
        </h5>
      </div>
    </div>
  ))

  render() {
    return (
      <div>
        < TodoForm />
        {this.returnPost()}
      </div>
    );
  }
};

const getMapToProps = (state) => ({ todos: state.todos });

export default connect(getMapToProps, { fetchTodos })(TodoList);