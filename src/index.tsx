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




//
// import React from 'react'
// import ReactDOM from 'react-dom/client';
//
//
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
    //dispatch, getState
// 📜 Описание:
// Вместо XXX и YYY через пробел напишите параметры которые приходят в санку.
//
// 🖥 Пример ответа: useCallback state




//
//
// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";
//
// // Types
// type PostType = {
//     body: string;
//     id: string;
//     title: string;
//     userId: string;
// };
//
// type PayloadType = {
//     title: string;
//     body?: string;
// };
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.ru/api/" });
//
// const postsAPI = {
//     getPosts() {
//         return instance.get<PostType[]>("posts");
//     },
//     updatePostTitle(postId: string, post: PayloadType) {
//         return instance.put<PostType>(`posts/${postId}`, post);
//     },
// };
//
// // Reducer
// const initState = [] as PostType[];
//
// type InitStateType = typeof initState;
//
// const postsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "POSTS/GET-POSTS":
//             return action.posts;
//
//         case "POSTS/UPDATE-POST-TITLE":
//             return state.map((p) => {
//                 if (p.id === action.post.id) {
//                     return { ...p, title: action.post.title };
//                 } else {
//                     return p;
//                 }
//             });
//
//         default:
//             return state;
//     }
// };
//
// const getPostsAC = (posts: PostType[]) => ({ type: "POSTS/GET-POSTS", posts }) as const;
// const updatePostTitleAC = (post: PostType) => ({ type: "POSTS/UPDATE-POST-TITLE", post }) as const;
// type ActionsType = ReturnType<typeof getPostsAC> | ReturnType<typeof updatePostTitleAC>;
//
// const getPostsTC = (): AppThunk => (dispatch) => {
//     postsAPI.getPosts().then((res) => {
//         dispatch(getPostsAC(res.data));
//     });
// };
//
// const updatePostTC =
//     (postId: string): AppThunk =>
//         (dispatch, getState: any) => {
//
//             try {
//                 const currentPost = getState().posts.find((p: PostType) =>
//                     p.id === postId
//                 );
//                 if (currentPost) {
//                     const payload = { title: "Это просто заглушка. Backend сам сгенерирует новый title" };
//                     postsAPI.updatePostTitle(postId, payload).then((res) => {
//                         dispatch(updatePostTitleAC(res.data));
//                     });
//                 }
//             } catch (e) {
//                 alert("Обновить пост не удалось 😢");
//             }
//         };
//
// // Store
// const rootReducer = combineReducers({
//     posts: postsReducer,
// });
//
// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//
// // App
// const App = () => {
//     const dispatch = useAppDispatch();
//     const posts = useAppSelector((state) => state.posts);
//     useEffect(() => {
//         dispatch(getPostsTC());
//     }, []);
//
//     const updatePostHandler = (postId: string) => {
//         dispatch(updatePostTC(postId));
//     };
//
//     return (
//         <>
//             <h1>📜 Список постов</h1>
//             {posts.map((p) => {
//                 return (
//                     <div key={p.id}>
//                         <b>title</b>: {p.title}
//                         <button onClick={() => updatePostHandler(p.id)}>Обновить пост</button>
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



