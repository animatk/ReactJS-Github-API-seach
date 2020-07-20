import React, { Component } from 'react'
import PropTypes from 'prop-types'

// resources
import FormTextField from '../Resources/FormTextField'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.setData = this.setData.bind(this)
  }

  onSubmit(e) {
    const {
      data,
    } = this.state

    const {
      setProfile,
    } = this.props

    localStorage.setItem('profile', JSON.stringify(data))

    setProfile(data)

    e.preventDefault()
  }

  setData(e) {
    const {
      data,
    } = this.state

    const newData = {
      ...data,
    }

    newData[e.target.name] = e.target.value

    this.setState({
      data: newData,
    })
  }

  render() {
    return (
      <div className="form-content">
        <form onSubmit={this.onSubmit}>
          <div className="grid grid--columns grid--gap">
            <FormTextField name="firstname" label="Nombres *" action={this.setData} />
            <FormTextField name="lastname" label="Apellidos *" action={this.setData} />
            <FormTextField name="uid" type="number" label="Cedula *" action={this.setData} />
            <FormTextField name="birthday" type="date" label="Fecha de nacimiento *" action={this.setData} />
            <FormTextField name="email" type="email" label="Correo electrónico *" action={this.setData} />
            <FormTextField name="github" label="Usuario en Github *" action={this.setData} />
          </div>
          <button className="button" type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

Search.propTypes = {
  setProfile: PropTypes.func.isRequired,
}

export default Search
