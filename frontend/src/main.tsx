import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store.ts';
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import SignIn from './features/SignIn/index.tsx'
import SignUp from './features/SignUp/index.tsx'
import Inbox from './features/Inbox/index.tsx'

const router = createBrowserRouter(
    [
        {
            path: '/',
            children: [
                {
                    path: '/',
                    element: <SignIn/>
                },
                {
                    path: '/signup',
                    element: <SignUp/>
                },
                {
                    path: '/inbox',
                    element: <Inbox></Inbox>
                }
            ],
        },
    ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
