/* eslint-disable no-undef */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GithubAPI extends Component {
  constructor() {
    super()

    this.state = {
      resp: {
        total_count: 0,
        items: [],
      },
      page: 1,
    }
  }

  componentDidMount() {
    this.getRepos(1)
  }

  getRepos(page, searchWord) {
    const {
      username,
    } = this.props

    const searchParam = (searchWord) ? `${searchWord}+in:name+` : ''

    fetch(`https://api.github.com/search/repositories?q=${searchParam}user:${username}&page=${page}&per_page=5`)
      .then((res) => res.json())
      .then(
        (resp) => {
          this.setState({ resp, page })
        },
      )
  }

  filterList(e) {
    const {
      page,
    } = this.state

    if (e.target.value.length >= 3) {
      this.getRepos(page, e.target.value)
    } else {
      this.getRepos(page)
    }
  }

  render() {
    const {
      resp,
      page,
    } = this.state

    return (
      <>
        <div className="form-container">
          <label htmlFor="filtar">Filtrar por nombre del repositorio</label>
          <input name="filtrar" id="filtrar" type="text" className="form-field" onKeyUp={(e) => this.filterList(e)} />
        </div>
        <table className="content" width="100%">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Lenguaje</th>
            </tr>
          </thead>
          <tbody>
            {resp.items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.language}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="content">
          {(page > 1)
          && <button onClick={() => this.getRepos(page - 1)} type="button">&laquo; Anterior</button>}
          {(page < resp.total_count / 5)
          && <button onClick={() => this.getRepos(page + 1)} type="button">Siguiente &raquo;</button>}
        </div>
      </>
    )
  }
}

GithubAPI.propTypes = {
  username: PropTypes.string.isRequired,
}

export default GithubAPI
