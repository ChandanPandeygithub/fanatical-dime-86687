import { GET_BRAND, GET_CATEGORIES, GET_ELITE_OFFERS, GET_MARAGINE, GET_NEW, GET_OFFERS, GET_SPLURGE } from "./actionType"

const initialState={
    categories:false,
    brand:false,
    offers:false,
    new:false,
    splurge:false,
    magazine:false,
    elite_offers:false
}

export function reducer(state=initialState,{type}){

    switch(type){
        case GET_CATEGORIES:return{...state,catetories:true};
        case GET_BRAND: return{...initialState,brand:true};
        case GET_OFFERS: return{...initialState,offers:true};
        case GET_NEW: return{...initialState,new:true};
        case GET_SPLURGE: return{...initialState,splurge:true};
        case GET_MARAGINE: return{...initialState,magazine:true};
        case GET_ELITE_OFFERS: return{...initialState,elite_offers:true};
        default:return state
    }
}