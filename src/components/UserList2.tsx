import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserService2 } from '../services/UserService2'
import { IUser3 } from './models/IUser3'

interface IProps {}

interface IState {
  loading: boolean
  users: IUser3[]
  errorMessage: string
}

let UserList2: React.FC<IProps> = () => {
  let [state, setState] = useState<IState>({
    loading: false,
    users: [] as IUser3[],
    errorMessage: '',
  })

  useEffect(() => {
    setState({
      ...state,
      loading: true,
    })
    UserService2.getAllUsers()
      .then((response) => {
        setState({
          ...state,
          loading: false,
          users: response.data,
        })
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message,
        })
      })
  }, [])

  let { users, loading, errorMessage } = state
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="column">
            <p className="h3 fw-bold text-success">User List</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              dolorum quod earum nisi blanditiis provident cumque corrupti nemo?
              Id modi temporibus, nostrum reiciendis assumenda nulla architecto
              laudantium harum dolorem est?
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="column">
            <table className="table table-hover text-center table-striped">
              <thead className="bg-success text-white">
                <tr>
                  <th>SNO</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Company</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>
                          <Link
                            to={`/contacts/${user.id}`}
                            className="text-decoration-non text-success fw-bold"
                          >
                            {user.name}
                          </Link>
                        </td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.company.name}</td>
                        <td>{user.website}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserList2
