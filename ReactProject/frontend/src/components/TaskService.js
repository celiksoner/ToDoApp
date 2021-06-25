import axios from "axios";

const JOBS_REST_API_URL = "http://localhost:8080/todo";

class TaskService{

    getJobs(){
         return axios.get(JOBS_REST_API_URL);
    }

}

export default new TaskService();