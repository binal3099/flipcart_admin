import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
// import storage from 'redux-persist/lib/storage';
import { Product_reducer } from './Services/Reducer/ProductReducer';
// import {persistStore} from 'redux-persist';
// import {persistReducer} from 'redux-persist';
// import { mainReducer } from './Services/Reducer/MainReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const sagamiddle = createSagaMiddleware();

// const persistConfig = {
//     key: 'myroot',
//     storage,
//     blacklist : ['counter_Reducer']
//   }

// const persister = persistReducer(persistConfig)

const store = createStore (
    Product_reducer
    ,composeEnhancers(applyMiddleware(thunk))
    // ,composeEnhancers(applyMiddleware(sagamiddle))
)
// const persistor = persistStore(store)

// sagamiddle.run(CountWatcher)

// export  {persistor};
export default store