import React, { Fragment, useEffect } from "react";
import Todoitems from "./toDoItems/toDoItems";
import { connect } from "react-redux";
import { updateDataBase } from "../../Services/api-service";
import { getAllTodo } from "../../Actions/todoListActions";
import { searchTodo } from "../../Actions/todoListActions";

import "./toDoList.css";


const ToDoList = ({List, getAllTodo, searchTodo, lookingforToDo}) => {
    useEffect(() => {
		updateDataBase().then(data => {			
			getAllTodo(data)
		})

	}, []);    

    const onSearch = (event) => {
        searchTodo(event.target.value);        
    }

    return(
        <Fragment>
            <div className="container maintodo">
                <div className="page-content page-container" id="page-content">
                    <div className="padding">
                        <div className="row container d-flex justify-content-center">
                            <div className="col-md-12">
                                <div className="card px-3">
                                    <div className="card-body">
                                        <h4 className="card-title">My Todo list</h4>
                                        <div className="add-items d-flex"> <input type="text" className="form-control todo-list-input" placeholder="Search..." onChange={onSearch} /> </div>
                                        <div className="list-wrapper">
                                            <ul className="d-flex flex-column-reverse todo-list">
                                                {lookingforToDo.length === 0 ? List.map(todo => {
                                                    return (
                                                        <Todoitems key={todo.Id} {...todo}/>
                                                            )
                                                }) : lookingforToDo.map(todo => {
                                                    return (
                                                        <Todoitems key={todo.Id} {...todo}/>
                                                    )
                                                }) }                                            
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                         
        </Fragment>
    )
}

const mapStateToProps = ({todoListReducer}) => {	
	const { List, lookingforToDo } = todoListReducer;
	return { List, lookingforToDo }
}

const mapDispatchToProps = {
    getAllTodo,
    searchTodo
}


export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);