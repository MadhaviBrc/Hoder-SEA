import {GET_CLASS,DELETE_CLASS,ADD_CLASS,GET_CLASSBYID,EDIT_CLASS} from '../actions/action';

const initialState = {
	subjects : [],
	model : false,
}

export default function(state=initialState,action){
	console.log(action.payload);
	switch(action.type){
		case GET_CLASS:
		return {
			...state,
			subjects:action.payload
		};
		case DELETE_CLASS:
		//console.log(state.infra);
		return{
			...state,
			subjects:state.subjects.filter(classd=>classd.i_class_id !== action.payload)
		};
		case ADD_CLASS:
		return {
			...state,
			subjects:[...state.subjects,action.payload]
		};
		case GET_CLASSBYID:
            return{
                ...state,
                subjects:action.payload
        };
        case EDIT_CLASS:
            return{
                ...state,
                subjects:action.payload
        };
		default:
		return state;


	}


}