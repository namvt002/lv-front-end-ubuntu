import { configureStore } from "@reduxjs/toolkit"
// import createSagaMiddleware from "redux-saga"

// import LayoutReducers from './slices/layoutSlice'
// import HomeReducers from './slices/homeSlice'
import SideBarReducers from './slices/sidebarSlice'
// import StoreReducers from './slices/storeSlice'

// import rootSaga from "./sagas/rootSaga"
// const sagaMiddleware = createSagaMiddleware()

const rootReducers = {
    // layout:LayoutReducers,
    // home:HomeReducers,
    sidebar:SideBarReducers
    // store:StoreReducers,
}

const store = configureStore({
    reducer:{
        ...rootReducers
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    //     serializableCheck: false
    //   })
    //   .concat(sagaMiddleware)
})

// sagaMiddleware.run(rootSaga)


export default store