import{applyMiddleware, combineReducers, legacy_createStore} from "redux";
 import {reducer as menuReducer} from "./MenuReducer/reducer";

 function mayMiddleWere(store){
     
    return function(next){
        return function(action){
            if( typeof action ==="function"){
                return store.dispatch(action)
            }
            return next(action)
        }
    }
 }
export const store =  legacy_createStore(menuReducer,applyMiddleware(mayMiddleWere))