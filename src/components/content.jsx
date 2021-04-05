import React, { Component } from 'react';
import Task from './task';
import tasks from './tasks.json';

class content extends Component {
    state = { 
        tasks: [],
        completed: [],
        value : '',
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => console.log(json))
        this.setState({tasks});
    }

    handleAddTask = () =>{
        if(this.state.value){
            const tasks = [...this.state.tasks];
            const lastId = tasks.length;
            tasks[lastId] = {id:lastId + 1, task: this.state.value,status:false};
            this.setState({tasks});
            this.setState({value:''});
        }
    }

    handleDone = (task) =>{
        const completed = [...this.state.completed];
        const lastId = completed.length;
        completed[lastId] = {...task}
        completed[lastId].status = true;
        completed[lastId].id = lastId + 1;
        this.setState({completed});
        const tasks = this.state.tasks.filter(tk=> tk.id !== task.id);
        this.setState({tasks});
    }

    handleDelete = (task) =>{
        const tasks = this.state.tasks.filter(tk=> tk.id !== task.id);
        this.setState({tasks});
    }

    handleChange = (event) =>{
        this.setState({
            value: event.target.value
        });
    }

    handleCancel = (task) =>{
        const tasks = [...this.state.tasks];
        const lastId = tasks.length;
        tasks[lastId] = {...task}
        tasks[lastId].status = false;
        tasks[lastId].id = lastId + 1;
        this.setState({tasks});
        const completed = this.state.completed.filter(tk=> tk.id !== task.id);
        this.setState({completed});
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
                        <h4 className="text-center my-2">Task Todo</h4>
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
                                    (this.state.tasks.map(task => <Task key={task.id} id={task.id} task={task.task} status={task.status} onDelete={()=>{this.handleDelete(task)}} onDone={() => {this.handleDone(task)}} />))
                                    
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-12">
                        <h4 className="text-center my-2">Task Completed</h4>
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
                                    (this.state.completed.length === 0) ? 
                                    (<tr>
                                        <td colSpan="3" className="font-italic text-center text-bold">No record found</td>
                                    </tr>)
                                    :
                                    (this.state.completed.map(task => <Task key={task.id} id={task.id} task={task.task} status={task.status} onCancel={()=>{this.handleCancel(task)}} onDelete={()=>{this.handleDelete(task)}} onDone={() => {this.handleDone(task)}} />))
                                    
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