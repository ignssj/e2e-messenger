import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import SignIn from './features/SignIn/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store.ts';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App/>,
            children: [
                {
                    path: '/',
                    element: <SignIn/>
                },
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
