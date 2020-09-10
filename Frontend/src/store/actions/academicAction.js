import axios from 'axios';
import {GET_YEARS,DELETE_YEAR,ADD_YEAR,GET_YEARBYID,EDIT_YEAR} from './action';

export const getYears = () => dispatch => {

	axios.get('/api/academic/')
	.then(res => {
		dispatch({
			type : GET_YEARS,
			payload : res.data
		});
	}).catch(err => console.log(err));

}


export const deleteYear = (id) => dispatch =>{
    axios
    .delete(`/api/academic/${id}/`)
    .then(res =>{
        dispatch({
            type:DELETE_YEAR,
            payload:id
        });
    })
    .catch(err=>console.log(err));
};

export const addYear = (year) => dispatch =>{
    axios
    .post(`/api/academic/`,year)
    .then(res =>{
        dispatch({
            type:ADD_YEAR,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const getYearById = (id) => dispatch =>{
    axios
    .get(`/api/academic/${id}/`)
    .then(res =>{
    	console.log(res.data)
        dispatch({
            type:GET_YEARBYID,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const editYear = (id,year) => dispatch =>{
    axios
    .put(`/api/academic/${id}/`,year)
    .then(res =>{
        dispatch({
            type:EDIT_YEAR,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

