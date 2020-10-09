import {SUBMIT_SMURF, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE} from "./actions";

export const initialstate = {
    smurfs:[
        
    ]
  };



  export const Myreducer = (state=initialstate, action) =>{
    switch(action.type){
        case FETCH_SMURF_SUCCESS:
            console.log(state)
            return{
                ...state, 
                smurfs: action.payload
            }
        default:
            return {...state}
    }
}