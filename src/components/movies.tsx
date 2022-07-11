import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { getMovies } from '../services/fakeMovieService'

class Movies extends React.Component {
  state = {
    movies: getMovies(),
  }

  handleDelete = (movie: any) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id)
    this.setState({ movies })
  }

  render() {
    const { length: count } = this.state.movies

    if (count === 0)
      return (
        <h3>
          <p>There are no movie in the database</p>
        </h3>
      )
    return (
      <div>
        <h3>
          <p>Showing {count} movies in the database </p>
        </h3>

        <table className="ui single line table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Movies
