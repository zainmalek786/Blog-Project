import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Protected} from './components'
// import {Protected,Login} from './components'
import Postpg from './pages/Postpg.jsx'
import AddPostpg from './pages/AddPostpg.jsx'
import AllPostpg from './pages/AllPostspg.jsx'
import EditPostpg from './pages/EditPostpg.jsx'
import Homepg from './pages/Homepg.jsx'
import Loginpg from './pages/Loginpg.jsx'
import Signuppg from './pages/Signuppg.jsx'





const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Homepg/>
      },
      {
        path:'/login',
        element:(
       <Protected authentication={false}><Loginpg/></Protected>
        )
      },
      {
        path:'/signup',
        element:(
       <Protected authentication={false}><Signuppg/></Protected>
      
        )
      },
      {
        path:'/all-posts',
        element:(
       <Protected authentication>
        {"  "}
        <AllPostpg/>
       </Protected>
        )
      },
      {
        path:'/edit-post:slug',
        element:(
       <Protected authentication>
        {"  "}
        <EditPostpg/>
       </Protected>
        )
      },
      
        {
          path:'/add-posts',
          element:(
         <Protected authentication>
          {"  "}
          <AddPostpg/>
         </Protected>
          )
        },
        {
          path:'/post/:slug',
          element:<Postpg/>
         
        },
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
    </React.StrictMode> 
)
