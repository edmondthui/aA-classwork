export const UPDATE_FILTER = "UPDATE_FILTER"
import {fetchBenches} from './bench_actions'

export const updateFilters = (bounds, value) => {
    return {
        type: UPDATE_FILTER,
        bounds,
        value
    }
}

export function updateFilter(filter, value) {
    return (dispatch, getState) => {
      dispatch(updateFilters(filter, value));
      return fetchBenches(getState().ui.filter)(dispatch);
    };
}