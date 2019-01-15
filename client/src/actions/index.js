import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')//we want to dispatch action when this request id completed
        dispatch({ type: FETCH_USER, payload: res.data });
};



