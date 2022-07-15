import React from 'react'

interface IProps {}
interface IState {}

let About: React.FC = () => {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="column">
            <p className="h3 text-success fw-bold">About Us</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              molestiae harum veritatis a voluptas quaerat tempora fuga, ea
              cumque doloribus dolorem non quod rerum? Culpa est rem ex error
              nam?
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="column">
            <ul className="list-group">
              <li className="list-group-item">
                Author: <span className="fw-bold">Rasim Alagezov</span>
              </li>
              <li className="list-group-item">
                Email: <span className="fw-bold">r.alagezov@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default About
