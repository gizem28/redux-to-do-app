import {ADD_TODO, DELETE_TODO, CLEAR_TODO_LIST, TOGGLE_TODO} from 
"../types/todoTypes";

const initialStates={
    counter:0,
    list:[{
        id:0,
        text:"Add Todo",
        completed:false,
    }]
}

const todoReducer =(state=initialStates, action)=>{
    switch (action.type) {
        case ADD_TODO:
            return{
                counter:state.action+1,
                list:[
                    ...state.list,
                    {
                        id:state.counter +1, 
                        text:action.payload,
                        completed:false
                    },
                ],
            };
            case ADD_TODO:
            return{
                counter:state.action+1,
                list:[
                    ...state.list,
                    {
                        id:state.counter +1, 
                        text:action.payload,
                        completed:false
                    },
                ],
            };
            default;
            break;
    }
}