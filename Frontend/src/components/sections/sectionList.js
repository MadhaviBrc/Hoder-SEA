import React from "react"
const TaskList = (props) => {
  return (
    props.secList.map((val, idx) => {
     // let projectName = `projectName-${idx}`, task = `task-${idx}`, taskNotes = `taskNotes-${idx}`, taskStatus = `taskStatus-${idx}`
     
      return (
        <tr key={val.index}>
          <td>
            <input type="text"  name="c_section_name" data-id={idx} className="form-control " />
          </td>
          <td>
            <input type="text"  name="c_room"  data-id={idx} className="form-control " />
          </td>
          <td>
            <textarea  name="c_description" data-id={idx} className="form-control"></textarea>
          </td>
          <td>
            <select name="c_status" data-id={idx} className="form-control" >
            <option>----Select Status----</option>
              <option value="pending">Active</option>
              <option value="In Progress">In Active</option>
            </select>
          </td>
          
          <td>
            {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
            }
          </td>
        </tr >
      )
    })
  )
}
export default TaskList