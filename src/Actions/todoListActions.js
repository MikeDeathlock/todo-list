export const getAllTodo = (todoList) => {
    return {
        type: "TODO_ITEMS_LOADED",
        payload: todoList
    }
}

export const makeNewTodo = (todoList) => {
    return {
        type: "ADD_NEW_TODO",
        payload: todoList
        
    }
}

export const deleteTodo = (todoList) => {
    return {
        type: "DELETE_ONE_TODO",
        payload: todoList
        
    }
}

export const styleTodoText = (todoList) => {
    return {
        type: "STYLE_TODO_TEXT",
        payload: todoList    
    }
}

export const chooseOneToDo = (oneTodo) => {
    return {
        type: "CHOOSE_ONE_TODO",
        payload: oneTodo    
    }
}

export const chooseAllToDo = (oneTodo) => {
    return {
        type: "CHOOSE_ALL_TODO",
        payload: oneTodo    
    }
}

export const editOneToDo = (todoList) => {
    return {
        type: "EDIT_ONE_TODO",
        payload: todoList    
    }
}

export const searchTodo = (todoitem) => {
    return {
        type: "SEARCH_TODO",
        payload: todoitem
    }
}