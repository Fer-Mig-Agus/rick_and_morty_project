import { ADD_FAVORITE, REMOVE_FAVORITE, ORDER_CARDS, FILTER_CARDS, ALL_FAVORITES } from "../redux/actions.js";

const initialState = {
    allCharacters: [],
    myFavorites: [],
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {

        case ALL_FAVORITES:
            return {
                ...state,
                allCharacters: state.myFavorites
            }

        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (favorite) => favorite.id !== action.payload
                ),
            };

        case FILTER_CARDS:
            if(action.payload !== "All"){
                return {
                    ...state,
                    allCharacters: state.allCharacters.filter(
                        (char) => char.gender === action.payload
                    )
    
                }
            }else{
                return{
                    ...state
                }
            }
            
            
        
        case ORDER_CARDS:

            return {

                ...state,
                allCharacters: ordenarArray(action.payload, state.allCharacters)

            }


        default: return { ...state };
    }

}



const ordenarArray = (tipo, array) => {

    if (tipo === "Descendente") {

        for (let i = 0; i < array.length; i++) {
            var miIndex = i;
            for (let j = i + 1; j < array.length; j++) {
                const valor1 = parseInt(array[j].id, 10);
                const valor2 = parseInt(array[miIndex].id, 10);
                if (valor1 > valor2) miIndex = j;
            }
            var aux = array[i];
            array[i] = array[miIndex];
            array[miIndex] = aux;
        }
        
        return array;

    } else {

        for (let i = 0; i < array.length; i++) {
            var miIndex = i;
            for (let j = i + 1; j < array.length; j++) {
                const valor1 = parseInt(array[j].id, 10);
                const valor2 = parseInt(array[miIndex].id, 10);
                if (valor1 < valor2) miIndex = j;
            }
            var aux = array[i];
            array[i] = array[miIndex];
            array[miIndex] = aux;
        }
    
        return array;



    }
}
