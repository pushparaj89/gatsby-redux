import React from 'react'
import orm from '../../models/todos'

const AddTodo = () => {
    let inputRef:any;
    const session = orm.session();
    console.log("In")
    
    const onClick = () => {

       
        let payload = {
        id: '1',
        text: inputRef.value,
        done: false
        }
        session.Todo.create<any>(payload);
        console.log(inputRef.value)
        console.log(session.Todo.all())
        inputRef.value = '';
        //rops.onSubmit(inputRef.value);
    }
    return (
        <div className="form-inline">
                <div className="form-group">
                    <input className="form-control" type="text" ref={el => inputRef = el}/>
                    <button className="btn btn-default" onClick={onClick}>Add Todo</button>
                </div>
            </div>
    );
};

export default AddTodo;
