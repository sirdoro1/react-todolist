import React, { Component } from 'react';
import Task from './task'

class content extends Component {
    state = { 
        tasks: [],
        value : '',
    }

    handleDone = (task) =>{
        console.log('Updating done soon');
    }

    handleDelete = (task) =>{
        const tasks = this.state.tasks.filter(tk=> tk.id !== task.id);
        this.setState({tasks});
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleAddTask = () => {
        if(this.state.value){
            const tasks = [...this.state.tasks];
            const lastId = tasks.length;
            tasks[lastId] = {id:lastId + 1, task: this.state.value};
            this.setState({tasks});
            this.setState({value:''});
        }
    }

    render() { 
        return ( <React.Fragment>
            <main className="container">
                <div className="row">
                    <div className="col-md-12 p-5">
                        <div className="input-group ">
                            <div className="custom-file">
                                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} id="" required placeholder="Enter Task" />
                            </div>
                            <div className="input-group-append">
                                <button onClick={this.handleAddTask} className="btn btn-primary" type="button">Add Task</button>
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
                                {
                                    (this.state.tasks.length === 0) ? 
                                    (<tr>
                                        <td colSpan="3" className="font-italic text-center text-bold">No record found</td>
                                    </tr>)
                                    :
                                    (this.state.tasks.map(task => <Task key={task.id} id={task.id} task={task.task} onDelete={()=>{this.handleDelete(task)}} onDone={() => {this.handleDone(task)}} />))
                                    
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </React.Fragment> );
    }
}
 
export default content;