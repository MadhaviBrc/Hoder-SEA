import {GET_YEARS,DELETE_YEAR,ADD_YEAR,GET_YEARBYID,EDIT_YEAR} from '../actions/action';

const initialState = {
	years : [],
	model : false,
}

export default function(state=initialState,action){
	switch(action.type){
		case GET_YEARS:
		return {
			...state,
			years:action.payload
		};
		case DELETE_YEAR:
		return{
			...state,
			years:state.years.filter(year=>year.i_year_id !== action.payload)
		};
		case ADD_YEAR:
		return {
			...state,
			years:[...state.years,action.payload]
		};
		case GET_YEARBYID:
            return{
                ...state,
                years:action.payload
        };
        case EDIT_YEAR:
            return{
                ...state,
                years:action.payload
        };
		default:
		return state;


	}


}