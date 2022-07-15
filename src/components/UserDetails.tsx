import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { UserService2 } from '../services/UserService2'
import { IUser3 } from './models/IUser3'

interface IProps {}
interface IState {
  loading: boolean
  user: IUser3
  errorMessage: string
}
interface UrlParams {
  id: string
}

let UserDetails: React.FC = () => {
  let { id } = useParams<UrlParams | any>()
  let [state, setState] = useState<IState>({
    loading: false,
    user: {} as IUser3,
    errorMessage: '',
  })

  useEffect(() => {
    if (id) {
      setState({
        ...state,
        loading: true,
      })
      UserService2.getUser(id)
        .then((response) => {
          setState({
            ...state,
            loading: false,
            user: response.data,
          })
        })
        .catch((error) => {
          setState({
            ...state,
            loading: false,
            errorMessage: error.message,
          })
        })
    }
  }, [id])
  let { user, loading, errorMessage } = state
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="column">
            <p className="h3 text-success fw-bold">User Details</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              quo. Fugit eos inventore magnam omnis temporibus quis unde aut,
              libero suscipit ducimus expedita aliquam perspiciatis,
              consequuntur ipsam aperiam earum sequi.
            </p>
          </div>
        </div>
        {Object.keys(user).length > 0 && (
          <div className="row mt-3">
            <div className="column">
              <ul className="list-group">
                <li className="list-group-item">
                  Name: <span className="fw-bold">{user.name}</span>
                </li>
                <li className="list-group-item">
                  Email: <span className="fw-bold">{user.email}</span>
                </li>
                <li className="list-group-item">
                  City: <span className="fw-bold">{user.address.city}</span>
                </li>
                <li className="list-group-item">
                  Street: <span className="fw-bold">{user.address.street}</span>
                </li>
                <li className="list-group-item">
                  Phone: <span className="fw-bold">{user.phone}</span>
                </li>
                <li className="list-group-item">
                  Company: <span className="fw-bold">{user.company.name}</span>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className="row">
          <div className="column">
            <Link to={'/'} className="btn btn-success mt-3">
              Back
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserDetails
