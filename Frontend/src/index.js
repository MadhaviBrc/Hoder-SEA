import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import * as serviceWorker from './components/serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore ,combineReducers, applyMiddleware } from 'redux';
import  UIreducer from './store/reducers/reducer';
import  academicReducer from './store/reducers/academicReducer';
import infrastructureReducer from './store/reducers/infrastructureReducer';
import branchReducer from './store/reducers/branchReducer';
import classReducer from './store/reducers/classReducer';
import sectionReducer from './store/reducers/sectionReducer';
import subjectReducer from './store/reducers/subjectReducer';
import auth from './store/reducers/auth';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const middleWare = applyMiddleware(thunk);

const rootReducer = combineReducers({
    ui_red:UIreducer,
    years : academicReducer,
    infra : infrastructureReducer,
    branches: branchReducer,
    classes: classReducer,
    sections : sectionReducer,
    subjects : subjectReducer,
    token:auth
});
const store = createStore(rootReducer,middleWare);
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(app, document.getElementById('app'));
serviceWorker.unregister();


