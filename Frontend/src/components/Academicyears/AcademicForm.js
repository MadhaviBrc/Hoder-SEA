import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addYear } from '../../store/actions/academicAction';

export class AcademicForm extends Component {
  state = {
    c_academic_year: '',
    c_description: '',
    i_branch_id:5,
    c_status: '',
    c_created_by: 'Admin',
    c_updated_by: 'Admin'
  };

  static propTypes = {
    addYear: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { c_academic_year, c_description,i_branch_id, c_status,c_created_by,c_updated_by } = this.state;
    const year = { c_academic_year, c_description,i_branch_id, c_status ,c_created_by,c_updated_by};
    console.log(year)
    this.props.addYear(year);
    this.props.history.push('/academic');
    window.location.reload(false);
  
  };

  render() {
    const { c_academic_year, c_description,c_status } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        {/* <h3>Add Academicyear</h3> */}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Academicyear</label>
            <input
              className="form-control"
              type="text"
              name="c_academic_year"
              onChange={this.onChange}
              value={c_academic_year}
            />
          </div>          
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="c_description"
              onChange={this.onChange}
              value={c_description}
            />
          </div>          
          <div className="form-group">
            <label>Status</label>
            <select class="form-control" onChange={this.onChange} name="c_status">
              <option>----Select Status----</option>
              <option value="Active">Active</option>
              <option value="In-Active">In-Active</option>
           </select>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addYear })(AcademicForm);