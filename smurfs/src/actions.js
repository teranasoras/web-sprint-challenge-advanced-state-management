import axios from 'axios'


export const SUBMIT_SMURF = "SUBMIT_SMURF";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";


export const SubmitSmurf = (newsmurf) => (dispatch) => {
    dispatch({ type: SUBMIT_SMURF });
    console.log(newsmurf)
    axios.post('http://localhost:3333/smurfs', newsmurf)
      .then((res) => {
          console.log(res)
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };