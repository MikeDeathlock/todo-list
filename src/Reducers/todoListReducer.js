const initialState = {
    List: [],
    currentToDo: [],
    lookingforToDo: []
}

const todoListReducer = (state = initialState, action) => {
    switch(action.type) {
        case "TODO_ITEMS_LOADED":
            return {
                ...state,
                List: action.payload,
                lookingforToDo: action.payload 
            }
        case "ADD_NEW_TODO":
            return {                   
                ...state,
                List: action.payload,
                lookingforToDo: action.payload             
            } 
        case "DELETE_ONE_TODO":
            return {                   
                ...state,
                List: action.payload,
                lookingforToDo: action.payload               
            }
        case "STYLE_TODO_TEXT":
            return {                   
                ...state,
                List: action.payload,
                lookingforToDo: action.payload               
            }
        case "CHOOSE_ONE_TODO":
            return {
                ...state,
                currentToDo: action.payload                
            }
        case "CHOOSE_ALL_TODO":
        return {                   
            List: action.payload                
        }
        case "EDIT_ONE_TODO":
            return {                
                ...state,
                List: action.payload,
                lookingforToDo: action.payload 
            }
        case "SEARCH_TODO":
            if(action.payload === 0) {
                return state;
            } 
            const tmpList = state.List.slice();           
            let newList = tmpList.filter((item) => {
                return item.Text.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
            });
            if (newList.length === 0) {
                return {                
                    ...state,              
                    lookingforToDo: []
                } 
            } else {
                return {
                    ...state,              
                    lookingforToDo: newList
                }
            }
        default:
            return state;
    }
}

export default todoListReducer;