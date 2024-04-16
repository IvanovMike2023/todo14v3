import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './state/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
    <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

///++++++++++++
// import axios from "axios";
// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import {AnyAction} from "redux";
// import {AppRootStateType} from "./state/store";
//
// // Types
// type CommentType = {
//     postId: string;
//     id: string;
//     name: string;
//     email: string;
//     body: string;
// };
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.ru/api/" });
//
// const commentsAPI = {
//     getComments() {
//         return instance.get<CommentType[]>("comments");
//     },
// };
//
// // Reducer
// const initState = [] as CommentType[];
//
// type InitStateType = typeof initState;
//
// const commentsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "COMMENTS/GET-COMMENTS":
//             return action.comments;
//         default:
//             return state;
//     }
// };
//
// const getCommentsAC = (comments: CommentType[]) =>
//     ({ type: "COMMENTS/GET-COMMENTS", comments }) as const;
// type ActionsType = ReturnType<typeof getCommentsAC>;
// // type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
//
// const getCommentsTC = (): ThunkAction<void, RootState, unknown, ActionsType> => (dispatch) => {
//     commentsAPI.getComments().then((res) => {
//         dispatch(getCommentsAC(res.data));
//     });
// };
//
// // Store
// const rootReducer = combineReducers({
//     comments: commentsReducer,
// });
//
// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//
// // App
// export const App = () => {
//     const comments = useAppSelector((state) => state.comments);
//     const dispatch = useAppDispatch();
//
//     useEffect(() => {
//         dispatch(getCommentsTC());
//     }, []);
//
//     return (
//         <>
//             <h1>📝 Список комментариев</h1>
//             {comments.map((c) => {
//                 return (
//                     <div key={c.id}>
//                         <b>Comment</b>: {c.body}{" "}
//                     </div>
//                 );
//             })}
//         </>
//     );
// };
//
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

//📜 Описание:
// Ваша задача стоит в том чтобы правильно передать нужные типы в дженериковый тип ThunkAction<any, any, any, any>.
// Что нужно написать вместо any, any, any, any чтобы правильно типизировать thunk creator?
// Ответ дайте через пробел
//
// 🖥 Пример ответа: unknown status isDone void

//
//+++++++++++++++++++++
// import React from 'react'
// import ReactDOM from 'react-dom/client';
//
// !!!!!!!!!!!!!!!!!!!dispatch, getState
// const thunkCreator = () => (dispatch: any, action: any) => {
//     // сode...
// }
//
//
// // App
// const App = () => {
//     return (
//         <>
//             <h1>В этом задании смотреть на экран не нужно. Ничего не изменится 😈</h1>
//             <p>Читайте описание к заданию</p>
//         </>
//     )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)
    // 📜 Описание:
// Вместо XXX и YYY через пробел напишите параметры которые приходят в санку.
//
// 🖥 Пример ответа: useCallback state
// !!!!!!!!!!!!!!!!!!!dispatch, getState


