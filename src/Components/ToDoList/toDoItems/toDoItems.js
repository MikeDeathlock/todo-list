import React, {Fragment, Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./toDoItems.css";

import { deleteTodo } from "../../../Actions/todoListActions";
import { styleTodoText } from "../../../Actions/todoListActions";
import { chooseOneToDo } from "../../../Actions/todoListActions";
import { chooseAllToDo } from "../../../Actions/todoListActions";
import { saveData } from "../../../Services/api-service";

class Todoitems extends Component {


    onDelete = () => {
		const { List } = this.props;		
		const index = List.findIndex((elem) => elem.Id === this.props.Id);    
		const partOne = List.slice(0, index);
		const partTwo = List.slice(index + 1);
		const newList = [...partOne, ...partTwo];
		const { deleteTodo } = this.props;
        saveData(newList).then(() => {
            deleteTodo(newList);
        })	
	}

    onComplited = () => {
        const { List } = this.props;
        const { styleTodoText } = this.props;		
		const index = List.findIndex((elem) => elem.Id === this.props.Id);
        const newList = List.slice();
        if (newList[index].Status === 'Active') {
            newList[index].Status = 'Finished';            
        } else {
            newList[index].Status = 'Active';            
        }  
        saveData(newList).then(() => {
            styleTodoText(newList); 
        })    
    }

    getOneToDo = () => {        
        const { chooseOneToDo } = this.props;
        const oneTodo = this.props;
        chooseOneToDo(oneTodo);        
    }

    
    render() {
        const { Id, Created, Text, Start, Deadline, Status } = this.props;

        let textStyle = "nit";
		switch (Status) {
			case 'Active': textStyle = "nit"; break;
			case 'Finished': textStyle = "completed"; break;			
		}   

        return(
            <Fragment>                
                <li className={textStyle}>
                    <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" defaultChecked={Status  === "Finished" ? true : false} onClick={this.onComplited} /> {Text} <i className="input-helper"></i></label> </div><p className="date-conteiner" title="deadline">{Deadline}</p> <Link to="/edit-to_do" onClick={this.getOneToDo}><i className="fa fa-edit edit" title="edit"></i></Link> <i className="remove mdi mdi-close-circle-outline" title="delete" onClick={this.onDelete}></i> 
                </li>        
            </Fragment>
        )
    }
}

const mapStateToProps = ({ todoListReducer }) => {
	const {List} = todoListReducer;
	return {List}
}

const mapDispatchToProps = {
	deleteTodo,
    styleTodoText,
    chooseOneToDo,
    chooseAllToDo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todoitems);
