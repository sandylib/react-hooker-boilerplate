
import React, {createContext, useContext, useReducer} from 'react';

import rootReducer, { initialState } from '../reducers/index';

const StateContext = createContext();
const DispatchContext = createContext();

export const useStateValue = () => useContext(StateContext);
export const useDispatch = () => useContext(DispatchContext);

function Store(props) {
    
    const [state, dispatch] = useReducer(rootReducer, initialState);
    
    return (
       <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
           {props.children}
        </StateContext.Provider>
      </DispatchContext.Provider>
    );
  }


  export default Store;
