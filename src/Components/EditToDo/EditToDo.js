import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { editOneToDo } from "../../Actions/todoListActions";
import { saveData } from "../../Services/api-service";

import "../AddToDo/AddToDo.css";



class EditToDo extends Component {
    

    state = {
        "Id": this.props.currentToDo.Id,
        "Created": this.props.currentToDo.Created,
        "Text": this.props.currentToDo.Text,
        "Start": this.props.currentToDo.Start,
        "Deadline": this.props.currentToDo.Deadline,
        "Status": this.props.currentToDo.Status,
        "isRedirect": false
    }

    getToDoText = (event) => {
        this.setState({
            "Text": event.target.value
        })
    }

    getToDoStart = (event) => {
        this.setState({
            "Start": event.target.value
        })
    }

    getToDoDeadline = (event) => {
        this.setState({
            "Deadline": event.target.value
        })
    }
    
    changeForNewToDo = (event) => {
        event.preventDefault();
        const { List } = this.props;
        const { Id, Created, Text, Start, Deadline, Status} = this.state;
        const index = List.findIndex((elem) => elem.Id === Id);		
        const partOne = List.slice(0, index);
        const partTwo = { Id, Created, Text, Start, Deadline, Status };
		const partThree = List.slice(index + 1);
        const newToDoList = [...partOne, partTwo, ...partThree];
        const { editOneToDo } = this.props;
        editOneToDo(newToDoList);
        saveData(newToDoList).then(() =>{
            this.setState({
                isRedirect: true
            })
        })
    }
    
    
    render() {
        const { Text } = this.state;
        const { isRedirect } = this.state;
		if (isRedirect) {
			return(
				<Redirect to="/" />
			)
		}

        return(
            <Fragment>
                <div className="container-fluid bg-add-todo">
                    <div className="container text-center">
                        <div className="card p-5">
                            <div className="row">
                                <form action="#" onSubmit={this.changeForNewToDo} className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="col-md-12 text-left">Edit start of the work:</label>
                                            <input type="date" className="form-control" onChange={this.getToDoStart} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-md-12 text-left">Edit deadline:</label> <input type="date" className="form-control" onChange={this.getToDoDeadline} />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12"> <textarea className="form-control textarea" rows="6" placeholder={Text} onChange={this.getToDoText}></textarea> </div>
                                    </div>
                                    <div className="send-button mt-4"> <button type="submit" className="button">Edit ToDO</button> </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>                
            </Fragment>
        )
    }
}

const mapStateToProps = ({ todoListReducer }) => {
	const {currentToDo, List} = todoListReducer;
	return {currentToDo, List}
}

const mapDispatchToProps = {
	editOneToDo
}


export default connect(mapStateToProps, mapDispatchToProps)(EditToDo);