import {GET_SECTION,DELETE_SECTION,ADD_SECTION,GET_SECTIONBYID,EDIT_SECTION} from '../actions/action';

const initialState = {
	sections : [],
	model : false,
}

export default function(state=initialState,action){
	console.log(action.payload);
	switch(action.type){
		case GET_SECTION:
		return {
			...state,
			sections:action.payload
		};
		case DELETE_SECTION:
		//console.log(state.infra);
		return{
			...state,
			sections:state.sections.filter(classd=>classd.i_class_id !== action.payload)
		};
		case ADD_SECTION:
		return {
			...state,
			sections:[...state.sections,action.payload]
		};
		case GET_SECTIONBYID:
            return{
                ...state,
                sections:action.payload
        };
        case EDIT_SECTION:
            return{
                ...state,
                sections:action.payload
        };
		default:
		return state;


	}


}