import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Pages/login/login'
// import './scss/custom.scss';
import '../scss/custom.scss'
// App Component
// This component is the main entry point of the application
export default function App() {
  return(
    <>
      <Login></Login>
    </>
  )
}
