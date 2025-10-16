import React from 'react'
import { createBrowserRouter } from 'react-router'
import Main from '../components/Main'
import Home from '../pages/Home'
import ErrorPage from '../ErrorPage'
import Register from '../pages/Register'
import SignIn from '../pages/SignIn'
import JobDetails from '../pages/JobDetails/JobDetails'
import PrivateRoute from './PrivateRoute'
import JobApply from '../pages/JobApply/JobApply'
import MyApplication from '../pages/MyApplication/MyApplication'

const router = createBrowserRouter([
   {
     path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage/>,
    children:[
       {
        path:'/',
        element:<Home></Home>
       },
       {
         path:'/job/:id',
         element:<PrivateRoute><JobDetails/></PrivateRoute>,
         loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
       },
       {
         path:'/myapplications',
         element:<PrivateRoute><MyApplication/></PrivateRoute>,
         loader:({params})=>fetch(`http://localhost:3000/job-application/${params.id}`)
       },
       {
        path:'/jobapply/:id',
        element:<PrivateRoute><JobApply/></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
       },
       {
        path:'/register',
        element:<Register/>
       },
       {
         path:'/signIn',
         element:<SignIn/>
       }
    ]
   }
])

export default router