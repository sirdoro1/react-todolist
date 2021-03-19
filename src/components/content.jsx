import React, { Component } from 'react';
import Task from './task'

class content extends Component {
    state = { 
        tasks: [
            {id:1,task:"Theis happening 1"},
            {id:2,task:"Theis happening 2"},
            {id:3,task:"Theis happening 3"},
            {id:4,task:"Theis happening 4"},
            {id:5,task:"Theis happening 5"},
            {id:6,task:"Theis happening 6"},
        ]
    }

    handleDone = (task) =>{
        console.log('Updating done soon');
    }

    handleDelete = (task) =>{
        const tasks = this.state.tasks.filter(tk=> tk.id !== task.id);
        this.setState({tasks});
    }

    render() { 
        return ( <React.Fragment>
            <main className="container">
                <div className="row">
                    <div className="col-md-12 p-5">
                        <div className="input-group ">
                            <div className="custom-file">
                                <input type="text" className="form-control" id="" required placeholder="Enter Task" />
                            </div>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">Add Task</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col-2">#</th>
                                    <th scope="col-8">Task</th>
                                    <th scope="col-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.tasks.map(task => <Task key={task.id} id={task.id} task={task.task} onDelete={()=>{this.handleDelete(task)}} onDone={() => {this.handleDone(task)}} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </React.Fragment> );
    }
}
 
export default content;