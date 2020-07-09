import { orm } from '../models/todos';
import { createSelector } from 'reselect';

// Selects the state managed by Redux-ORM.
export const ormSelector = state => (orm? orm.Todo : {} );
// Redux-ORM selectors work with reselect. To feed input
// selectors to a Redux-ORM selector, we use the reselect `createSelector`.
// const session = orm.session();
//  let payload = {
//    id: '1',
//   text: 'Buy groceries',
//   done: false
//  }
//  let payload2 = {
//   id: 'test',
//  text: 'Buy groceries',
//  done: false
// }
// //  const props = Object.assign({}, payload);
// session.Todo.create<any>(payload);
// session.Todo.create<any>(payload2);
// const state = orm.getDefaultState();

    // Begin a mutating session with that state.
    // `state` will be mutated.
    // const session = schema.withMutations(state);
// const todos = createSelector(orm.Todo);


export const todos = createSelector<any,any,any>(ormSelector,orm => {
    console.log('Running todos selector');

    // return "orm.Todo"
    console.log(orm)
    // return orm.Todo.withRefs.filter({  }).map(todo: any => {
    //     // `todo.ref` is a direct reference to the state,
    //     // so we need to be careful not to mutate it.
    //     //
    //     // to each of our todos, so we make a shallow copy of `todo.ref`.
    //     const obj = Object.assign({}, todo.ref);

    //     return obj;
    // });
 })

