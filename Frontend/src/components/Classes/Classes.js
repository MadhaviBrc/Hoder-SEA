import React, { Component } from "react";
import { connect } from "react-redux";
import { getClass,getClassById,editClass,deleteClass } from '../../store/actions/classAction';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';



class Classestructure extends React.Component {
	static propTypes = {
	  classes : PropTypes.array.isRequired,
    getClass : PropTypes.func.isRequired,
    deleteClass : PropTypes.func.isRequired

	}

	componentDidMount()
	{
    this.props.getClass();
    console.log(this.props.classes)
	}


	render() {		
		return (
			<div>
            
    
            <div class="row">

              <div class="col-md-12 col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Classes</h3>

      <Link className ="btn btn-primary btn-md float-right" to = "/addclass">Add</Link>
      
                    </div>
                    
      
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap table-primary mb-0">
                      <thead  class="bg-primary text-white">
                      
                        <tr >
                          <th class="text-white">Name</th>
                          <th class="text-white">Description</th>
                          <th class="text-white">Room</th>
                          <th class="text-white">Status</th>
                          <th class="text-white">Action</th>

                        </tr>
                      
                      </thead>
                      <tbody>
                      {this.props.classes.map(classd => (
                        <tr key={classd.i_class_id}>

                          <th scope="row">{classd.c_class_name}</th>
                          <td>{classd.c_room}</td>
                          <td>{classd.c_description}</td>
                          <td>{classd.c_status}</td>
                          <td class="actions">
                            <Link to = {`/classedit/${classd.i_class_id}`}><i class="fa fa-pencil-square"></i></Link>&nbsp;&nbsp;
                            <span onClick={this.props.deleteClass.bind(this,classd.i_class_id)}><i className="fa fa-trash"></i></span>
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
	classes:state.classes.classes
});


export default connect(mapStateToProps,{ getClass,getClassById,editClass,deleteClass})(withRouter(Classestructure));