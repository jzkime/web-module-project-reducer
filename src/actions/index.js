export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_TOTAL =  "CLEAR_TOTAL"
export const SET_MEMORY = "SET_MEMORY"
export const USE_MEMORY = "USE_MEMORY"
export const CLEAR_MEMORY = "CLEAR_MEMORY"
export const EQUAL = "EQUAL"

export const SET_NUMBER = "SET_NUMBER"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (op) => {
    return({type:CHANGE_OPERATION, payload: op})
}

export const clearAction = () => {
    return({type:CLEAR_TOTAL})
}

export const setMemory = () => {
    return({type:SET_MEMORY})
}

export const useMemory = () => {
    return({type:USE_MEMORY})
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY})
}

export const equal = () => {
    return({type: EQUAL})
}

export const setNumber = (num) => {
    return({type:SET_NUMBER, payload: num})
}