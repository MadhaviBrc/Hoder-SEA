import React from "react"
import TaskList from "./classList"
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addClass } from '../../store/actions/classAction';

export class ClassForm extends React.Component {
    state = {
        classList: [{ c_class_name: "", c_description: "", c_room: "", c_status: "", c_created_by: 'Admin',
        c_updated_by: 'Admin',
        i_branch_id:5, }]
    }

    handleChange = (e) => {
        if (["c_class_name", "c_room", "c_description", "c_status"].includes(e.target.name)) {
            let classList = [...this.state.classList]
            classList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = (e) => {

        this.setState((prevState) => ({
          classList: [...prevState.classList, { c_class_name: "", c_description: "", c_room: "", c_status: "", c_created_by: 'Admin',c_updated_by: 'Admin',i_branch_id: 5}],
        }));
    }

    deteteRow = (index) => {
        this.setState({
          classList: this.state.classList.filter((s, sindex) => index !== sindex),
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
     
console.log("IN class FORM " ,this.state.classList)
        let data = this.state.classList
        axios
        .post(`/api/classmulti/`,data)
        .then(res =>{
            dispatch({
                type:ADD_CLASS,
                payload:res.data
            });
        }).catch(err=>console.log(err));
        this.props.history.push('/classes');
        window.location.reload(false);
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
                                <div className="card-header text-center"></div>
                                <div className="card-body">
                            
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required" >Class Name</th>
                                                <th className="required" >Description</th>
                                                <th>Room</th>
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