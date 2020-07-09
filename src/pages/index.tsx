import React from 'react';
import { Link } from 'gatsby';
import { Provider, connect } from 'react-redux';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Todos from '../components/todos/todos';
import AddTodo from '../components/todos/addTodo';
import { ITodo } from '../models/todo';
import orm from '../models/todos'


import {
  todos,
} from '../selectors/selectors';

const session = orm.session();
 let payload = {
   id: '1',
  text: 'Buy groceries',
  done: false
 }
 let payload2 = {
  id: 'test',
 text: 'Buy groceries',
 done: false
}
//  const props = Object.assign({}, payload);
session.Todo.create<any>(payload);
session.Todo.create<any>(payload2);
console.log(session.Todo);
console.log(session.Todo.withId('test')); // 'Don Quixote'
console.log(todos)
console.log(session.Todo.all())

const IndexPage = ({ todos = []}: { todos: ITodo[] | undefined }) => {

  return (
      <Layout>
        <SEO title='Home' />
        <AddTodo />
        <Todos todos={todos} />
      </Layout>
  );
};

const mapStateToProps = (state: ITodo) => {
  return {
    todos: todos(state),
  };
};

export default connect(mapStateToProps)(IndexPage);
