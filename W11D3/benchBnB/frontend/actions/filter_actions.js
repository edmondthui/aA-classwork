export const UPDATE_BOUNDS = "UPDATE_BOUNDS"
import {fetchBenches} from './bench_actions'

export const updateBounds = (bounds) => {
    return {
        type: UPDATE_BOUNDS,
        bounds
    }
}

export function updateFilter(filter, value) {
    return (dispatch, getState) => {
      dispatch(updateBounds(filter, value));
      return fetchBenches(getState().filters)(dispatch);
      // delicious curry!
    };
}