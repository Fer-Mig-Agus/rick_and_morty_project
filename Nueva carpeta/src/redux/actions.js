

export const ADD_FAVORITE="ADD_FAVORITE";
export const REMOVE_FAVORITE="REMOVE_FAVORITE";
export const FILTER_CARDS="FILTER_CARDS";
export const ORDER_CARDS="ORDER_CARDS";
export const ALL_FAVORITES="ALL_FAVORITES";
export const SET_ACCESS="SET_ACCESS";


export const allFavorites=()=>{
    return{type:ALL_FAVORITES}
}

export const addFavorite=(personaje)=>{
    return {type: ADD_FAVORITE,payload:personaje};
}


export const removeFavorite=(id)=>{
    return{type: REMOVE_FAVORITE ,payload:id };
}

export const filterCards=(status)=>{   
    return {type:FILTER_CARDS, payload:status};
}

export const orderCards=(tipo)=>{
    
    return {type:ORDER_CARDS,payload:tipo}
}

export const setAccess=(acceso)=>{
    return {type: SET_ACCESS,payload:acceso};
}