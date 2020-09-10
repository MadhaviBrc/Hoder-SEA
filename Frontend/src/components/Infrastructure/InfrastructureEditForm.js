import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editInfra,getInfraById } from '../../store/actions/infrastructureAction';
import AUX from '../../hoc/Aux_';
import { withRouter } from 'react-router-dom';


export class InfrastructureEditForm extends Component {
  constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        
    
      }
      state = {
    university:[]
  };

    

    componentDidMount() {
        
        const infraId = this.props.match.params.infra_id
        this.props.getInfraById(infraId)

        fetch('http://localhost:8000/api/university_list/')
            .then(response => response.json())
            .then(data => {
            this.setState({university: data});
        })
    } 


    

    onChange = e => this.props.infra[e.target.name]=e.target.value ;
    onChange2 = e => this.props.infra[e.target.name]=e.target.files[0] ;
        
    onSubmit = e => {

        e.preventDefault();
        const {c_name,c_code,c_address,c_description,c_logo,i_university,c_status,c_created_by,c_updated_by} = this.props.infra;
        const infra = { c_name,c_code,c_address,c_description,c_logo,i_university,c_status,c_created_by,c_updated_by };
        this.props.editInfra(this.props.infra.i_infra_id,infra);       
        this.props.history.push('/infrastructure');
      
        
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
                        <label>University/Group</label>
                        <input
                            className = "form-control"
                            type = "text"
                            name = "c_name"
                            defaultValue = {this.props.infra.c_name}
                            onChange = {this.onChange}
                            />
                    </div>
                    <div className = "form-group">
                        <label>Code</label>
                        <input
                            className = "form-control"
                            type = "text"
                            name = "c_code"
                            onChange = {this.onChange}
                            defaultValue = {this.props.infra.c_code}
                            />
                    </div>
                    <div className = "form-group">
                        <label>Address</label>
                        <input
                            className = "form-control"
                            type = "text"
                            name = "c_address"
                            onChange = {this.onChange}
                            defaultValue = {this.props.infra.c_address}
                            />
                    </div>

                    <div className = "form-group">
                        <label>Description</label>
                        <input
                            className = "form-control"
                            type = "text"
                            name = "c_description"
                            onChange = {this.onChange}
                            defaultValue = {this.props.infra.c_description}
                            />
                    </div>

                    <div className = "form-group">
                        <label>Logo</label>
                        <input
                            className = "form-control"
                            type = "file"
                            name = "c_logo"
                                onChange = {this.onChange2}
                            /><img src = {this.props.infra.c_logo}  height="30" width="30" />
                    </div>
          
                    <div className = "form-group">
                        <label>Status</label>
                        <select class="form-control" onChange={this.onChange} name="c_status">
                            <option value={this.props.infra.c_status}>{this.props.infra.c_status}</option>
                            {this.props.infra.c_status=="Active"?
                            <option value="In-Active">In-Active</option>
                            :
                            <option value="Active">Active</option>
                            }
                            

                            
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
    infra:state.infra.infra //state.infra(this is from reducer).infra
  });

export default connect(
  mapStateToProps,
  {getInfraById,editInfra})
  (withRouter(InfrastructureEditForm));