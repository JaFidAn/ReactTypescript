import React from 'react'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="grid">
          <div className="row">
            <div className="column">
              <p className="h3 fw bold text-success">
                Salam, bu ilk componentdir
              </p>
              <button className="btn btn-success btn-sm">
                <i className="fa fa-book" /> Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
