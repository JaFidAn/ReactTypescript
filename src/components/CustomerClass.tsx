import React from 'react'

interface IProps {
  name: string
  age: number
  title: string
}
interface IState {}

export class CustomerClass extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    let { name, age, title } = this.props
    return (
      <React.Fragment>
        <h3>Customer Class Component</h3>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Name: {age}</li>
          <li className="list-group-item">Name: {title}</li>
        </ul>
      </React.Fragment>
    )
  }
}
