// store  ---> index.js
import { configureStore } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import voterSliceReducer from './features/voterSlice';

import { combineReducers } from 'redux'

const reducer = combineReducers({
    // here we will be adding reducers
    voter:voterSliceReducer
  })

const store = configureStore({
    // 指定reducer 按模块管理各个切片4
    reducer,
    
    // 使用中间件
    middleware:[reduxLogger, reduxThunk]
})

export default store;