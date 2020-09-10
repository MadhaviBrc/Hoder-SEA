import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editBranch,getYearById,getGroup } from '../../store/actions/branchAction';
import AUX from '../../hoc/Aux_';
import { withRouter } from 'react-router-dom';


export class BranchEditForm extends Component {
  constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onUniversity = this.onUniversity.bind(this);
    
      }

      state = {
        university:[],
        group:[]
      };

    

    componentDidMount() {
        
        const yearId = this.props.match.params.branch_id
        this.props.getYearById(yearId)

        fetch('http://localhost:8000/api/university_list/')
            .then(response => response.json())
            .then(data => {
            this.setState({university: data});
        })

        fetch('http://localhost:8000/api/group_list/')
            .then(response => response.json())
            .then(data => {
            this.setState({group: data});
        })

    }

    onChange = e => this.props.branches[e.target.name]=e.target.value ;

    onUniversity = (e) => {
    
        this.setState({ [e.target.name]: e.target.value });
        const id = e.target.value
        this.props.getGroup(e.target.value)
      }

    
    onChange2 = e => this.props.branches[e.target.name]=e.target.files[0] ;
        
    onSubmit = e => {

        e.preventDefault();
        const {c_name,c_code,c_address,c_description,c_logo,i_university,i_group,c_status,c_created_by,c_updated_by} = this.props.branches;
        const branch = { c_name,c_code,c_address,c_description,c_logo,i_university,i_group,c_status,c_created_by,c_updated_by };
        this.props.editBranch(this.props.branches.i_branch_id,branch);
        this.props.history.push('/branch');
        
      
       
    };

    render() {
        
        let optionItems = this.state.university.map((item) =>
            
        <option key={item.i_infra_id} value={item.i_infra_id}>{item.c_name}</option>
    );

        return (
            <AUX>
            <div className = 'card card-body mt-4 mb-4'>
                <form onSubmit = {this.onSubmit.bind(this)}>
                    <div className = "form-group">
                        <label>Branch</label>
                        <input
                            className = "form-control"
                            type = "text"
                            name = "c_name"
                            defaultValue = {this.props.branches.c_name}
                            onChange = {this.onChange}
                            />
                    </div>
                    <div className="form-group">
                        <label>Code</label>
                        <input
                        className="form-control"
                        type="text"
                        name="c_code"
                        onChange={this.onChange}
                        defaultValue = {this.props.branches.c_code}
                        />
                    </div>   

                    <div className="form-group">
                        <label>Address</label>
                        <input
                        className="form-control"
                        type="text"
                        name="c_address"
                        onChange={this.onChange}
                        defaultValue = {this.props.branches.c_address}
                        />
                    </div>    

                    <div className = "form-group">
                        <label>Description</label>
                        <input
                            className = "form-control"
                            type = "text"
                            name = "c_description"
                            onChange = {this.onChange}
                            defaultValue = {this.props.branches.c_description}
                            />
                    </div>
                    <div className = "form-group">
                        <label>Logo</label>
                        <input
                            className = "form-control"
                            type = "file"
                            name = "c_logo"
                                onChange = {this.onChange2}
                            /><img src = {this.props.branches.c_logo}  height="30" width="30" />
                    </div>
                    <div className = "form-group">
                        <label>Status</label>
                            <select className="form-control" onChange={this.onChange} name="c_status">
                                <option value="{this.props.branches.c_status}">{this.props.branches.c_status}</option>
                                <option value="Active">Active</option>
                                <option value="In-Active">In-Active</option>
                            </select>
                    </div>
                    <div className = "form-group">
                        <button type = "submit" className = "btn btn-success">
                            Submit
                        </button>

                    </div>
                </form>
                
            </div>
            </AUX>
        )
    }
}

const mapStateToProps = state =>({
    branches:state.branches.branches 
  });

export default connect(
  mapStateToProps,
  {getYearById,editBranch,getGroup})
  (withRouter(BranchEditForm));