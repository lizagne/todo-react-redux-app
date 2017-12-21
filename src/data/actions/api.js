import axios from "../../axios";
import { fromJS } from "immutable";
import {addTask, setTasks, setComplete, removeTask, updateTask } from "./state";

export const displayTasks = () => dispatch => {
    axios.get("/tasks").then(response => {
        // for now, just log the response data
         const tasks = fromJS(response.data);
        // dispatch the setTasks action, passing along the Tasks List
        dispatch(setTasks(tasks));
    });
};

export const postTask = ({task, priority, complete}) => dispatch => {
    const newTask = {
        task: task,
        priority: priority,
        complete: complete,
    }

    axios.post("/tasks", newTask).then(response => {
        dispatch(addTask(response.data));
    });
};

export const deleteTask = (id) => dispatch => {
    axios.delete("/tasks/" + id).then(response => {
        dispatch(removeTask(id));
    });
};

export const editTask = ({task}, id) => dispatch => {
    axios.put("/tasks" + id, {
        task: task,
    }).then(response => {
        dispatch(updateTask(response.data))
    });
};

export const completeTask = (id) => dispatch => {
    axios.patch("/tasks/" + id).then(response => {
        dispatch(setComplete(id));
    });
};



// export const setTask = id => dispatch => {
//     axios.get("/Tasks/" + id).then(response => { //axios.get is the api request, the .then is the promise, making sure that it handles it when the request is finished
//         // for now, just log the response data
//         const Task = fromJS(response.data); //variable that converts it from JSON into a JS immutable object
//         // dispatch the setTasks action, passing along the Tasks List
//         dispatch(setTask(Task)); //Thunk sets this up, and the first parameter it receives is going to be a dispatch. 
//     });
// };



