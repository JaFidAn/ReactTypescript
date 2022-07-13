import React from 'react'
import './App.css'
import Counter from './components/counter'
import Customer from './components/Customer'
import { CustomerClass } from './components/CustomerClass'
import { EmloyyeClass } from './components/EmloyeeClass'
import Employee from './components/Employee'
import Greeting from './components/Greeting'
import LoginForm from './components/LoginForm'

function App() {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="grid">
          {/* <div className="row">
            <div className="column">
              <p className="h3 fw bold text-success">
                Salam, bu ilk componentdir
              </p>
              <button className="btn btn-success btn-sm">
                <i className="fa fa-book" /> Read more
              </button>
            </div>
          </div> */}
          {/* <div className="row">
            <div className="column">
              <Customer name="Rasim" age={38} title="Proqramist" />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <CustomerClass name="Rasim" age={38} title="Proqramist" />
            </div>
          </div> */}
          {/* 
          <div className="row">
            <div className="column">
              <Employee />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <EmloyyeClass />
            </div>
          </div> */}
          {/* 
          <div className="row">
            <div className="column">
              <Counter />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <Greeting />
            </div>
          </div> */}
          <div className="row">
            <div className="column">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
