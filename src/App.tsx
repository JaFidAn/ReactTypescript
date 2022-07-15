import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import AuthUser from './components/AuthUser'
import Counter from './components/counter'
import Customer from './components/Customer'
import { CustomerClass } from './components/CustomerClass'
import { EmloyyeClass } from './components/EmloyeeClass'
import Employee from './components/Employee'
import Greeting from './components/Greeting'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import UserDetails from './components/UserDetails'
import UserList from './components/UserList'
import UserList2 from './components/UserList2'

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'} />} />
        <Route path={'/contacts/list'} element={<UserList2 />} />
        <Route path={'/contacts/:id'} element={<UserDetails />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
