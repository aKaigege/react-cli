import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import PrivateRoute from '../../components/Hoc/PrivateRoute'
import Imported from 'react-imported-component'

const Login = Imported(() => import(/* webpackChunkName:'login' */ '../login'))

const Page2 = () => (
  <h1>page2</h1>
)
const mapStateToProps = state => ({
  login: state.auth.logined
})

const Home = ({match, login}) => (
  <div>
    <Header />
    <hr />
    <Switch>
      <Route exact path={match.path} render={() => (
        <h1>Home</h1>
      )} />
      <Route path='/page1' render={() => (
        <h1>Page1</h1>
      )} />
      <PrivateRoute authed={login} path='/Page2' component={Page2} />
      <Route exact path='/login' component={Login} />
    </Switch>
  </div>
)

Home.prototype.propTypes = {
  match: PropTypes.object,
  login: PropTypes.bool
}

export default withRouter(connect(mapStateToProps)(Home))
