import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editYear,getYearById } from '../../store/actions/academicAction';
import AUX from '../../hoc/Aux_';
import { withRouter } from 'react-router-dom';


export class AcademicEditForm extends Component {
  constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    
      }

    

    componentDidMount() {
        
        const yearId = this.props.match.params.year_id
        this.props.getYearById(yearId)

    }

    onChange = e => this.props.years[e.target.name]=e.target.value ;
        
    onSubmit = e => {
        console.log(this.props.years);

        e.preventDefault();
        const {c_academic_year,c_description,i_branch_id,c_status,c_created_by,c_updated_by} = this.props.years;
        const year = { c_academic_year,c_description,i_branch_id,c_status,c_created_by,c_updated_by };
        this.props.editYear(this.props.years.i_year_id,year);
        this.props.history.push('/academic');
        window.location.reload(false);

      
       
    };

    render() {
        


        return (
            <AUX>
            <div className = 'card card-body mt-4 mb-4'>
                {/* <h4>Update Academicyears</h4> */}
                <form onSubmit = {this.onSubmit.bind(this)}>
                    <div className = "form-group">
                        <label>Academic_year</label>
                        <input
                            className = "form-control"
                            type = "text"
                            name = "c_academic_year"
                            defaultValue = {this.props.years.c_academic_year}
                            onChange = {this.onChange}
                            />
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <input
                            className = "form-control"
                            type = "text"
                            name = "c_description"
                            onChange = {this.onChange}
                            defaultValue = {this.props.years.c_description}
                            />
                    </div>
                    <div className = "form-group">
                        <label>Status</label>
                            <select className="form-control" onChange={this.onChange} name="c_status">
                                <option value="{this.props.years.c_status}">{this.props.years.c_status}</option>
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
    years:state.years.years //state.year(this is from reducer).years
  });

export default connect(
  mapStateToProps,
  {getYearById,editYear})
  (withRouter(AcademicEditForm));