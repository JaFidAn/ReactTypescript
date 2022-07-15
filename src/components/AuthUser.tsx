import React, { useState } from 'react'

interface IProps {}

interface IState {
  isLoggedIn: boolean
}

let AuthUser: React.FC<IProps> = () => {
  let [state, setState] = useState<IState>({
    isLoggedIn: false,
  })

  let login = () => {
    setState({
      isLoggedIn: true,
    })
  }

  let logout = () => {
    setState({
      isLoggedIn: false,
    })
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            {state.isLoggedIn ? (
              <React.Fragment>
                <div>
                  <p className="h3 text-primary">Welcome User</p>
                  <p className="h5 text-primary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore harum, ullam aliquam id libero obcaecati
                    exercitationem vitae saepe provident fugiat laborum maiores
                    porro tempore nulla explicabo accusantium odit hic? Ipsum.
                  </p>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div>
                  <p className="h3 text-success">Thank You</p>
                  <p className="h5 text-success">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magni repudiandae quod at nihil quam, unde velit omnis
                    voluptates perferendis debitis incidunt consequatur
                    voluptatem molestias dolores nisi totam tempora autem
                    veniam!
                  </p>
                </div>
              </React.Fragment>
            )}
          </div>
          <div className="row">
            <div className="col">
              {state.isLoggedIn ? (
                <button className="btn btn-danger m-1" onClick={logout}>
                  Logout
                </button>
              ) : (
                <button className="btn btn-success m-1" onClick={login}>
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default AuthUser
