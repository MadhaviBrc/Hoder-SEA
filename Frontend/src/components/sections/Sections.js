import React, { Component } from "react";
import { connect } from "react-redux";
import { getSection,getSectionById,editSection,deleteSection } from '../../store/actions/sectionAction';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';



class SectionStructure extends React.Component {
	static propTypes = {
	  sections : PropTypes.array.isRequired,
    getSection : PropTypes.func.isRequired,
    deleteSection : PropTypes.func.isRequired

	}

	componentDidMount()
	{
		this.props.getSection();
	}


	render() {		
		return (
			<div>
            
    
            <div class="row">

              <div class="col-md-12 col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Sections</h3>

      <Link className ="btn btn-primary btn-md float-right" to = "/addsection">Add</Link>
      
                    </div>
                    
      
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap table-primary mb-0">
                      <thead  class="bg-primary text-white">
                      
                        <tr >
                          <th class="text-white">Name</th>
                          <th class="text-white">Room</th>
                          <th class="text-white">Description</th>
                          <th class="text-white">Status</th>
                          <th class="text-white">Action</th>

                        </tr>
                      
                      </thead>
                      <tbody>
                      {this.props.sections.map(classd => (
                        <tr key={classd.i_section_id}>

                          <th scope="row">{classd.c_section_name}</th>
                          <td>{classd.c_room}</td>
                          <td>{classd.c_description}</td>
                          <td>{classd.c_status}</td>
                          <td class="actions">
                            <Link to = {`/sectionedit/${classd.i_section_id}`}><i class="fa fa-pencil-square"></i></Link>&nbsp;&nbsp;
                            <span onClick={this.props.deleteSection(this,classd.i_section_id)}><i className="fa fa-trash"></i></span>
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
	sections:state.sections.sections
});


export default connect(mapStateToProps,{ getSection,getSectionById,editSection,deleteSection})(withRouter(SectionStructure));