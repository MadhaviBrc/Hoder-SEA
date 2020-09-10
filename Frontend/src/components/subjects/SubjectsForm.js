import React from "react"
import TaskList from "./SubjectsList"
import axios from 'axios';
import { connect } from 'react-redux';
import { addClass } from '../../store/actions/subjectAction';

export class ClassForm extends React.Component {
    state = {
        classList: [{ index: Math.random(), i_subject_name: "", c_description: "", c_room: "", i_class_id:1, c_status: "", c_created_by: 'Admin',
        c_updated_by: 'Admin',
        i_branch_id:3, }]
    }

    handleChange = (e) => {
        if (["i_subject_name", "c_room", "c_description", "c_status"].includes(e.target.name)) {
            let classList = [...this.state.classList]
            classList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
          classList: [...prevState.classList, { index: Math.random(), i_subject_name: "", c_description: "", c_room: "", c_status: "" }],
        }));
    }

    deteteRow = (index) => {
        this.setState({
          classList: this.state.classList.filter((s, sindex) => index !== sindex),
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();

        let data = { formData: this.state}
        axios
        .post(`/api/class/`,data)
        .then(res =>{
            dispatch({
                type:ADD_CLASS,
                payload:res.data
            });
        }).catch(err=>console.log(err));
    }
    clickOnDelete(record) {
        this.setState({
          classList: this.state.classList.filter(r => r !== record)
        });
    }
    render() {
        let { classList } = this.state
        return (
            <div className="content">
               
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-header text-center">Subjects</div>
                                <div className="card-body">
                            
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required" >Subject Name</th>
                                                <th className="required" >Room</th>
                                                <th>Description</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} classList={classList} />
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button></div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </form>
            </div>
        )
    }

}
export default connect(null, { addClass })(ClassForm);