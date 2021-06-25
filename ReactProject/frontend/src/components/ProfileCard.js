import React from 'react';
import axios from "axios";
import TaskService from './TaskService';

class ProfileCard extends React.Component{

    constructor(props){
        super(props)
        this.state={
            jobs:[]
        }
    }

    componentDidMount(){
        TaskService.getJobs().then((response) => {
            this.setState({ jobs: response.data })
        });
    }


    state ={
        task:null
    };

    taskBox = event => {
        this.setState({
            task : event.target.value
        });    
    }

    addButton = event => {
        event.preventDefault();

        const body = {
            "task": this.state.task
        }

        axios.post("http://localhost:8080/todo",body)
    }


render(){
    return(
        <div className="container">
            <form><h1 className="text-center">To Do List</h1>
            
            <div className="form-group">
            <label>Task</label>
            <input className="form-control" onChange={this.taskBox}></input>
            </div>
            <div className="text-center">
            <button onClick={this.addButton} className="btn btn-primary mt-3">Add</button>
            </div>
            
            </form>

            <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Tasks</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.jobs.map(
                            job =>
                            <tr key = {job.id}>
                                <td>{job.id} </td>
                                <td>{job.task} </td>
                                <td>{job.status} </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>

            </div>
            
        </div>
        
    );
}
}

export default ProfileCard;