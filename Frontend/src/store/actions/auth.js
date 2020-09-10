import {AUTH_START,AUTH_SUCCESS,AUTH_FAIL,AUTH_LOGOUT} from '../actions/action';
import axios from 'axios';
export const authStart = () => {
    return {
        type:AUTH_START
    }
}

export const authSuccess = token => {
    return {
        
        type:AUTH_SUCCESS,
        token:token
        
    }
}

export const authFail = error => {
    return {
        type:AUTH_FAIL,
        error:error
        
    }
}

export const logout = () => dispatch => {
    const token = localStorage.getItem('token')
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    axios
    .post('/auth/token/logout/',null,token)
    .then(res =>{
        dispatch({
            type:AUTH_LOGOUT
        });
    })

}

export const checkAuthTimeout = expirationTime =>{
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}
export const authLogin = (username,password) =>{
    return dispatch =>{
        dispatch(authStart());
        axios.post('/auth/token/login/',{
            username:username,
            password:password
        })
        .then(res => {
            const token = res.data.auth_token;
            console.log("Token in action is ",token);
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            console.log("Expiration date is : ",expirationDate);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err =>{
            dispatch(authFail(err))
        })
    }
}
 
export const authSignup = (username,email,password1,password2) =>{
    return dispatch =>{
        dispatch(authStart());
        axios.post('/auth/users/',{
            username:username,
            email:email,
            password1:password1,
            password2:password2

        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            console.log("Expiration date is : ",expirationDate);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err =>{
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch =>{
        // const token = res.data.key;
        const token = localStorage.getItem('token');
        if(token === undefined || token === null) {
            dispatch(logout());
        } else {
            
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            // const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if( expirationDate <= new Date() ) {
                console.log("expiration")
                dispatch(logout());
            } else {
                console.log(token)
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) /1000 ));
            }
        }

    }
}