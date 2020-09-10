import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSection } from '../../store/actions/sectionAction';
import axios from 'axios';

export class SectionForm extends Component {
  state = {
    values: []
  };

  componentDidMount() {
      axios.get('/api/class/')
      .then(res => {
        this.setState({values: res.data});
      }).catch(err => console.log(err));
      
    }
    onChange = (e) => {
      alert(e.target.value)
      this.props.history.push('/addsectionmulti');}
  render() {
   
    let optionItems = this.state.values.map((item) =>
            
    <option key={item.i_class_id} value={item.i_class_id}>{item.c_class_name}</option>
);

    return (
      <div className="card card-body mt-4 mb-4">
        {/* <h3>Add Academicyear</h3> */}
        <div className = "form-group">
        
                        <label>Select Class</label>
                        <select class="form-control" name="c_status"  onChange={this.onChange}>
                      {optionItems}
                        </select>
                    </div>

      </div>
    );
  }
}

export default connect(null, { addSection })(SectionForm);