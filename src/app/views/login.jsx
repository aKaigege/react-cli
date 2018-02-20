import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logined } from '../redux/actions/'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.login = this.login.bind(this)
  }
  login () {
    const { logined } = this.props
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    logined()
    this.props.history.push(from.pathname)
  }
  render () {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    return (
      <div>
        <p>You must log in to view this page at {from.pathname} </p>
        <button onClick={this.login}>Log in </button>
      </div>
    )
  }
}
// const mapStateToProps = state => ({
//   login: state.auth.logined
// })

const mapDispatchToProps = dispatch => ({
  logined: bindActionCreators(logined, dispatch)
})

export default connect( // 超级坑的 connect(mapStateToProps, mapDispatchToProps) 参数顺序不能反，如果只需要mapdispatch 前面需要加null
  null,
  mapDispatchToProps
)(Login)
