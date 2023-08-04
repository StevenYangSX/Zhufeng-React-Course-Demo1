import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';


const store = createStore(reducer,
    applyMiddleware(reduxThunk));
export default store;