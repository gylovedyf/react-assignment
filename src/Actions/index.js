import _ from 'lodash';
import data from '../Data/Data.json';
import {GET_INITIAL_STATE, REMOVE_FROM_MYLIST, ADD_FROM_RECOMMENDLIST} from '../Actiontypes';


export function getMovieList(){
    return function(dispatch,getState){
        const curState = data ;
        dispatch({
            type: GET_INITIAL_STATE,
            data: curState
        })
    }
}

export function removeFromMyList(id) {
    return function(dispatch,getState){
        //deep copy to avoid state mutation
        const curState = JSON.parse(JSON.stringify(getState()));
        const index = _.findIndex(curState.mylist, {id});
        curState.recommendations.push(curState.mylist[index]);
        curState.mylist.splice(index, 1);
        dispatch({
            type: REMOVE_FROM_MYLIST,
            data: curState
        })
    }
}

export const addFromRecommendList = (id) => (dispatch,getState)=> {
    const curState = JSON.parse(JSON.stringify(getState()));
    const index = _.findIndex(curState.recommendations, {id});
    curState.mylist.push(curState.recommendations[index]);
    curState.recommendations.splice(index, 1);
    dispatch ({
        type: ADD_FROM_RECOMMENDLIST,
        data: curState
    })
}