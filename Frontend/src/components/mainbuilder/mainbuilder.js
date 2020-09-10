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
import ClassesEditForm from '../Classes/ClassesEditForm';
import SectionStructure from '../Sections/Sections';
import SectionForm from '../Sections/SectionsForm';
import SectionsEditForm from '../Sections/SectionsEditForm';
import SectionFormMulti from '../Sections/SectionForm2';
import Subjects from '../Subjects/Subjects';
import SubjectsForm from '../Subjects/SubjectsForm';
import SubjectsEditForm from '../Subjects/SubjectsEditForm';



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

                    <Route path="/sections" component={SectionStructure} />
                    <Route path="/addsection" component={SectionForm} />
                    <Route path="/sectionedit/:section_id" component={SectionsEditForm} />
                    <Route path="/addsectionmulti" component={SectionFormMulti} />

                    <Route path="/subjects" component={Subjects} />
                    <Route path="/addsubjects" component={SubjectsForm} />
                    <Route path="/subjectedit/:subject_id" component={SubjectsEditForm} />

                    <Route path="/" component={Loggedin} />


                    
                </Switch>
        );
    }
}

export default mainbuilder;