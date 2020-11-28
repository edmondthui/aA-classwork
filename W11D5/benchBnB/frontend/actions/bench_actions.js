import * as APIUtil from '../util/bench_api_util'

export const RECEIVE_BENCHES = "RECEIVE_BENCHES"
export const CREATE_BENCH = "CREATE_BENCH"

const receiveBenches = (benches) => {
    return {
        type: RECEIVE_BENCHES,
        benches
    }
}

export const fetchBenches = (filters) => {
    return (dispatch) => {
        APIUtil.fetchBenches(filters).then((benches) => dispatch(receiveBenches(benches)))
    }
}

const createBench = (bench) => {
    return {
        type: CREATE_BENCH,
        bench
    }
}

export const postBench = (bench) => {
    return (dispatch) => {
        APIUtil.postBench(bench).then((bench) => dispatch(createBench(bench)))
    }
}