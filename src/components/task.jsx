import React, { Component } from 'react';

class Task extends Component {
    render() { 
        const {id,task,onDelete,onDone} = this.props
        return (
        <React.Fragment>
            <tr>
                <th scope="row">{id}</th>
                <td>{task}</td>
                <td>
                    <button onClick={onDone} className="btn btn-sm btn-success m-1">Done</button>
                    <button onClick={onDelete} className="btn btn-sm btn-danger m-1">Delete</button>
                </td>
            </tr>
        </React.Fragment>)
        ;
    }
}
 
export default Task;