import React, { useState } from 'react'

interface IProps {}
interface IState {
  message: string
}

let Greeting: React.FC<IProps> = () => {
  let [state, setState] = useState<IState>({
    message: 'Hello',
  })

  let changeMessage = (greet: string) => {
    setState({
      message: greet,
    })
  }
  return (
    <React.Fragment>
      <h3>Greetings</h3>

      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <p className="h3 display 3">{state.message}</p>
                <button
                  className="btn btn-success m-1"
                  onClick={() => changeMessage('Good Morning')}
                >
                  Good Morning
                </button>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => changeMessage('Good Afternoun')}
                >
                  Good Morning
                </button>
                <button
                  className="btn btn-info m-1"
                  onClick={() => changeMessage('Good Evening')}
                >
                  Good Morning
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Greeting
