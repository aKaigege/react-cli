import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}
PrivateRoute.prototype.propTypes = {
  component: PropTypes.element,
  authed: PropTypes.bool
}
export default withRouter(PrivateRoute)
