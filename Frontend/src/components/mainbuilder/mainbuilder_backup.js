import React , { Component } from 'react';
import Loggedin from '../pages/Loggedin';
import Home from '../pages/Home';
import Login from '../Authentication/Login';
import Logout from '../Authentication/Logout';
import Signup from '../Authentication/Signup';
import Academic from '../Academicyears/Academic';
import AcademicForm from '../Academicyears/AcademicForm';
import AcademicEditForm from '../Academicyears/AcademicEditForm';



import { Route,Switch } from 'react-router-dom';
import Infrastructure from '../Infrastructure/Infrastructure';
import InfrastructureForm from '../Infrastructure/InfrastructureForm';
import InfrastructureEditForm from '../Infrastructure/InfrastructureEditForm';
import Branch from '../Branch/Branch';
import  BranchForm from '../Branch/BranchForm';
import  BranchEditForm from '../Branch/BranchEditForm';

import Classestructure from '../classes/Classes';
import ClassForm from '../Classes/ClassesForm';
import ClassesEditForm from '../Infrastructure/InfrastructureEditForm';



class mainbuilder extends Component{
    render(){
        return(
                <Switch> 
                  
                    <Route path="/signup" component={Signup} /> 
                    <Route path="/login" component={Login} />  
                     <Route path ="/logout" component = {Logout}    />            
                    <Route path="/index" component={Loggedin} />
                   

                    <Route path="/academic" component={Academic} />
                    <Route path="/addacademic" component={AcademicForm} />
                    <Route path="/academicedit/:year_id" component={AcademicEditForm} />

                    <Route path="/infrastructure" component={Infrastructure} />
                    <Route path="/addinfrastructure" component={InfrastructureForm} />
                    <Route path="/infrastructureedit/:infra_id" component={InfrastructureEditForm} />

                    <Route path="/branch" component={Branch} />
                    <Route path="/addbranch" component={BranchForm} />
                    <Route path="/branchedit/:branch_id" component={BranchEditForm} />

                    <Route path="/classes" component={Classestructure} />
                    <Route path="/addclass" component={ClassForm} />
                    <Route path="/classedit/:class_id" component={ClassesEditForm} />

                    <Route path="/" component={Loggedin} />


                    
                </Switch>
        );
    }
}

export default mainbuilder;