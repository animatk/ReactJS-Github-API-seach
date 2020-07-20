import React from 'react'
import PropTypes from 'prop-types'

const Formtextfield = (({
  action, name, label, type,
}) => (
  <div className="form-container">
    <label htmlFor={name}>
      {label}
    </label>
    <input name={name} id={name} type={type} className="form-field" onChange={action} required />
  </div>
))

Formtextfield.propTypes = {
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
}

Formtextfield.defaultProps = {
  type: 'text',
}

export default Formtextfield
