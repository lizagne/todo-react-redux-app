import { Map } from "immutable";

const addTask = (state, { id, task }) => state.update("tasks", tasks =>
	tasks.set(+id, Map({
		type: "addTask",
		task: task, 
		id:id

	})) 
);

const setTasks = (state, {tasks}) => {
	return state.set("tasks", tasks);
};

const setComplete = (state, {tasks, id}) => {
	return state.update("tasks", tasks);
};

const removeTask = (state, {id}) => {
	return state.update("tasks", tasks => tasks.delete(+id))
	.update("tasks", tasks => tasks.filter(t => t.get("id") !== +id));
};

const updateTask = (state, { id, task }) => {
	return state.update("tasks", tasks => {
		return tasks.map(t => {
			return t.get("id") === +id ?
				t.set("task", task)
			: t;
		})
	})
};

const reducer = (state, action) => {
	switch (action.type) {
		case "addTask": return addTask(state, action);
		case "setTasks": return setTasks (state, action);
		case "setComplete": return setComplete(state, action);
		case "removeTask": return removeTask(state, action);
		case "updateTask": return updateTask(state, action);
		default: return state;
	}
}

export default reducer;


