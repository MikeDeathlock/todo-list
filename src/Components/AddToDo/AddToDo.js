import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { saveData } from "../../Services/api-service";
import { makeNewTodo } from "../../Actions/todoListActions";


import "./AddToDo.css";

class AddToDo extends Component {
    state ={
        "Created": "",
        "Text": "",        
        "Start": "",
        "Deadline": "",
        "Status": "Active",
		"isRedirect": false
	}

    getDate = () => {
        let newdate = ( new Date() ).toLocaleDateString().split("/");
        this.setState({
			Created: newdate[0]
		})
    }
    

    getText = (event) => {
        this.getDate();
		this.setState({
			Text: event.target.value
		})
	}

    getStart = (event) => {
        this.setState({
			Start: event.target.value
		})
	}

    getDeadline = (event) => {		
		this.setState({
			Deadline: event.target.value
		})
	}

    addNewToDo = (event) => {
		event.preventDefault();     
		const Id = uuidv4();
        const { Created, Text, Start, Deadline, Status} = this.state;
		const newToDo = { Id, Created, Text, Start, Deadline, Status };
		const { List } = this.props;
        const newList = List.slice();
        const { makeNewTodo } = this.props;
		newList.push(newToDo);		
		makeNewTodo(newList);
		saveData(newList).then(() => {
            this.setState({
                isRedirect: true
            })
        });	    
	}
    
    
    
    render() {
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
                                <form action="#" onSubmit={this.addNewToDo} className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="col-md-12 text-left">Start of the work:</label>
                                            <input type="date" className="form-control" onChange={this.getStart} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-md-12 text-left">Deadline:</label> <input type="date" className="form-control" onChange={this.getDeadline} />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12"> <textarea className="form-control textarea" rows="6" placeholder="New ToDO" onChange={this.getText}></textarea></div>
                                    </div>
                                    <div className="send-button mt-4"> <button type="submit" className="button">Add ToDO</button> </div>
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
	const {List} = todoListReducer;
	return {List}
}

const mapDispatchToProps = {
    makeNewTodo
}


export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);