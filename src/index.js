import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";

// Redux store
import store from "./store";
import { Provider } from "react-redux";

// Components
import Header from "./Components/Header/header";
import ToDoList from "./Components/ToDoList/toDoList";
import AddToDo from "./Components/AddToDo/AddToDo";
import EditToDo from "./Components/EditToDo/EditToDo";
import Page404 from "./Components/Page404/page404";
import Footer from "./Components/Footer/footer";


class App extends Component {


  render() {

    return(
      
      <Provider store={store}>
        <Router>
          <Header />
            <Switch>
              <Route path="/" exact component={ToDoList} />
              <Route path="/add-to_do" exact component={AddToDo} />
              <Route path="/edit-to_do" exact component={EditToDo} />
              <Route component={Page404} />               
            </Switch> 
          <Footer />
        </Router>
      </Provider>
    )
  }
}

//"/add-to_do"

ReactDOM.render(<App />, document.getElementById("root"));