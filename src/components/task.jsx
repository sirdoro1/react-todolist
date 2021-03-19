import React, { Component } from 'react';

class Task extends Component {
    render() { 
        const {id,task,status,onDelete,onDone,onCancel} = this.props
        return (
        <React.Fragment>
            <tr>
                <th scope="row">{id}</th>
                <td>{task}</td>
                <td>
                    {status ?
                        (<button key={'cancel'+id} onClick={onCancel} className="btn btn-sm btn-warning m-1">Cancel</button>)
                    :
                        (<div>
                            <button key={'done'+id} onClick={onDone} className="btn btn-sm btn-success m-1">Done</button>
                            <button key={'delete'+id} onClick={onDelete} className="btn btn-sm btn-danger m-1">Delete</button>
                        </div>)
                    }
                        
                </td>
            </tr>
        </React.Fragment>)
        ;
    }
}
export default Task;