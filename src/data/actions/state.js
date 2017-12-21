//this is the state and referring to local actions.

export const addTask = ({ task, id }) => {
	return {
		type: "addTask",
		task: task, //find task object from API
		id:id,
	};
};

export const setTasks = tasks => {
	return {
		type: "setTasks",
		tasks: tasks, //array of task object from API
	};
};

export const setComplete = id => {
	return {
		type: "setComplete",
		id: id,
	};
};


export const removeTask = id => {
	return {
		type: "removeTask",
		id: id,
	};
};

export const updateTask = ({ task }, id) => {
	return {
		type: "updateTask",
		task: task,
		id: id,
	};
};
