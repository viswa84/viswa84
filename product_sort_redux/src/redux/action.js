

import * as types from "./actiontype";
import axios from "axios"

 const getMusicRecord=(queryParams) =>async (dispatch)=>{
 dispatch({type:types.GET_MUSIC_RECORD_REQUEST})
 try {
       const r = await axios.get("http://localhost:3000/albums", queryParams);
       dispatch({
          type: types.GET_MUSIC_RECORD_SUCESS,
          payload: r.data
       });
    } catch (e) {
       dispatch({ type: types.GET_MUSIC_RECORD_FAILUR });
    }
}
export  default getMusicRecord