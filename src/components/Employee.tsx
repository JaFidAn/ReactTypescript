import React, { useState } from 'react'

interface IProps {}

interface IState {
  name: string
  age: number
  title: string
}

let Employee: React.FC<IProps> = () => {
  let [state, setState] = useState<IState>({
    name: 'Rasim',
    age: 38,
    title: 'Proqramist',
  })
  return (
    <React.Fragment>
      <h3>Employee Component</h3>
      <ul className="list-group">
        <li className="list-group-item">Name: {state.name}</li>
        <li className="list-group-item">Age: {state.age}</li>
        <li className="list-group-item">Title: {state.title}</li>
      </ul>
    </React.Fragment>
  )
}

export default Employee
