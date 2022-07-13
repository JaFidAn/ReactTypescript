import React, { useState } from 'react'

interface IProps {}

interface IState {
  count: number
}

let Counter: React.FC<IProps> = () => {
  let [state, setState] = useState<IState>({
    count: 0,
  })

  let Incr = () => {
    setState({
      count: state.count + 1,
    })
  }

  let Decr = () => {
    setState({
      count: state.count - 1,
    })
  }

  return (
    <React.Fragment>
      <h3>Counter Component</h3>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="h3 display 3">{state.count}</p>
                <button onClick={Incr} className="btn btn-success m-1">
                  INCR
                </button>
                <button onClick={Decr} className="btn btn-danger m-1">
                  DECR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Counter
