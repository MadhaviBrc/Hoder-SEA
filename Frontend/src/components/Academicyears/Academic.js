import React, { Component } from "react";
import { connect } from "react-redux";
import { getYears,getYearById,editYear,deleteYear } from '../../store/actions/academicAction';
import PropTypes from 'prop-types';
import AcademicForm from './AcademicForm';
import {Link, withRouter} from 'react-router-dom';



class Academic extends React.Component {
	static propTypes = {
		years : PropTypes.array.isRequired,
    getYears : PropTypes.func.isRequired,
    deleteYear : PropTypes.func.isRequired

	}

	componentDidMount()
	{
		this.props.getYears();
	}


	render() {		
		return (
			<div>
            
			{/* Row */}
            <div class="row">


              <div class="col-md-12 col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Academic_Years</h3>
                    <Link className ="btn btn-primary btn-md" to = "/addacademic">Add</Link>
                  </div>
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap table-primary mb-0">
                      <thead  class="bg-primary text-white">
                      
                        <tr >
                          <th class="text-white">Academic_Year</th>
                          <th class="text-white">Description</th>
                          <th class="text-white">Status</th>
                          <th class="text-white">Action</th>
                        </tr>
                      
                      </thead>
                      <tbody>
                      {this.props.years.map(year => (
                        <tr key={year.i_year_id}>

                          <th scope="row">{year.c_academic_year}</th>
                          <td>{year.c_description}</td>
                          <td>{year.c_status}</td>
                          <td>
                            <Link to = {`/academicedit/${year.i_year_id}`}><i className="fa fa-pencil-square"></i></Link>&nbsp;&nbsp;
                            <span onClick={this.props.deleteYear.bind(this,year.i_year_id)}><i className="fa fa-trash"></i></span>
                          </td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
				
			</div>
		);
	}
}

const mapStateToProps = state => ({
	years:state.years.years
});


export default connect(mapStateToProps,{ getYears,getYearById,editYear,deleteYear })(withRouter(Academic));