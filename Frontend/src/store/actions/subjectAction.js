import axios from 'axios';
import {GET_CLASS,DELETE_CLASS,ADD_CLASS,GET_CLASSBYID,EDIT_CLASS} from './action';

export const getClass = () => dispatch => {

	axios.get('/api/subject/')
	.then(res => {
		dispatch({
			type : GET_CLASS,
			payload : res.data
		});
	}).catch(err => console.log(err));

}

export const deleteClass = (id) => dispatch =>{
    axios
    .delete(`/api/subject/${id}/`)
    .then(res =>{
        dispatch({
            type:DELETE_CLASS,
            payload:id
        });
    })
    .catch(err=>console.log(err));
};

export const addClass = (year) => dispatch =>{
    axios
    .post(`/api/subject/`,year)
    .then(res =>{
        dispatch({
            type:ADD_CLASS,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const getClassById = (id) => dispatch =>{
    axios
    .get(`/api/subject/${id}/`)
    .then(res =>{
    	console.log(res.data)
        dispatch({
            type:GET_CLASSBYID,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const editClass = (id,year) => dispatch =>{
    axios
    .put(`/api/subject/${id}/`,year)
    .then(res =>{
        dispatch({
            type:EDIT_CLASS,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};
