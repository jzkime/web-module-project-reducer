import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_TOTAL, SET_MEMORY, USE_MEMORY, CLEAR_MEMORY, EQUAL, SET_NUMBER } from './../actions';

export const initialState = {
    displayVal: 0,
    operation: "+",
    firstNum: 0,
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                displayVal: state.total + 1
            });

        case(SET_NUMBER):
            return({
                ...state,
                displayVal: state.displayVal ? state.displayVal.toString().concat(action.payload) : action.payload
            })

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                displayVal: calculateResult(state.displayVal, action.payload, state.operation),
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload,
                firstNum: state.displayVal,
                displayVal: 0
            });
            
        case(CLEAR_TOTAL):
            return({
                ...state,
                displayVal: 0
            });

        case(SET_MEMORY):
            return({
                ...state,
                memory: state.displayVal
            });

        case(USE_MEMORY):
            return({
                ...state,
                displayVal: calculateResult(state.displayVal, state.memory, state.operation)
            })
        
        case(CLEAR_MEMORY):
            return({
                ...state,
                memory: 0
            })
        
        case(EQUAL):
            return({
                ...state,
                displayVal: calculateResult(parseInt(state.firstNum), parseInt(state.displayVal), state.operation)
            })
        
        default:
            return state;
    }
}

export default reducer;