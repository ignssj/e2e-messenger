import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import SignIn from './features/SignIn/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
