// Redux Toolkit
import { 
    configureStore
} from '@reduxjs/toolkit';

// React Redux
import { 
    useDispatch,
    useSelector, 
} from 'react-redux';

// Crowstream
import rootReducer from './reducers';



export const store= configureStore({
    reducer: rootReducer
});

export const useReduxDispatch = ()  => useDispatch();
export const useReduxSelector = useSelector;

export default store;