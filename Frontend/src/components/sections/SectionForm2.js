import React from "react"
import TaskList from "./sectionList"
import axios from 'axios';
import { connect } from 'react-redux';
import { addClass } from '../../store/actions/classAction';

export class SectionFormMulti extends React.Component {
    state = {
        secList: [{ index: Math.random(), c_section_name: "", c_description: "", c_room: "", i_class_id:1, c_status: "", c_created_by: 'Admin',
        c_updated_by: 'Admin',
        i_branch_id:3, }]
    }

    handleChange = (e) => {
        if (["c_section_name", "c_room", "c_description", "c_status"].includes(e.target.name)) {
            let secList = [...this.state.secList]
            secList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
            secList: [...prevState.secList, { index: Math.random(), c_class_name: "", c_description: "", c_room: "", c_status: "" }],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            secList: this.state.secList.filter((s, sindex) => index !== sindex),
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();

        let data = { formData: this.state}
        axios
        .post(`/api/section/`,data)
        .then(res =>{
            dispatch({
                type:ADD_CLASS,
                payload:res.data
            });
        }).catch(err=>console.log(err));
        this.props.history.push('/sections');
    }
    clickOnDelete(record) {
        this.setState({
            secList: this.state.secList.filter(r => r !== record)
        });
    }
    render() {
        let { secList } = this.state
        return (
            <div className="content">
               
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-header text-center"><h3 className="card-title">Add Sections</h3></div>
                                <div className="card-body">
                            
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required" >Section Name</th>
                                                <th className="required" >Room</th>
                                                <th>Descrption</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} secList={secList} />
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
export default connect(null, { addClass })(SectionFormMulti);