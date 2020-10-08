import React from "react"
import { Link } from "react-router-dom"
import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Mail, Lock, Check } from "react-feather"
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions"
import { connect } from "react-redux"
import { history } from "../../../../history"
import axios from "axios";
import {Alert} from "reactstrap";
// import { useHistory } from "react-router-dom";

// const history = useHistory();
class LoginJWT extends React.Component {
  state = {
    email: "",
    password: "",
    remember: false,
    error : "",
  }

  handleLogin = e => {
    e.preventDefault()
    this.callApi();
  }

  componentDidMount(){

  }

  callApi(){
    console.log('calling api');
    const {email, password} = this.state;
    const base_url = "http://localhost:2000";
     axios
      .post(base_url + "/api/v1/auth/login", {
        email: email,
        password: password,
        login_type : 'email',
      })
      .then(response => {
        var loggedInUser
        console.log(response);
        if (response.data) {
          loggedInUser = response.data.user
          history.push("/profile");
        }
      })
      .catch(err => {
        this.setState({error : err.response.data.error})
        console.log(err.response.data.error)
      })
  }

  render() {
    const {error} = this.state;
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          {error !== "" &&  <Alert color="warning">{error}</Alert>}
          <Form action="/" onSubmit={this.handleLogin}>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Mail size={15} />
              </div>
              <Label>Email</Label>
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Lock size={15} />
              </div>
              <Label>Password</Label>
            </FormGroup>
            <FormGroup className="d-flex justify-content-between align-items-center">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={false}
                onChange={this.handleRemember}
              />
              <div className="float-right">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </FormGroup>
            <div className="d-flex justify-content-between">
              <Button.Ripple
                color="primary"
                outline
                // onClick={() => {
                //   history.push("/register")
                // }}
                href="/register"
              >
                Register
              </Button.Ripple>
              <Button.Ripple color="primary" type="submit">
                Login
              </Button.Ripple>
            </div>
          </Form>
        </CardBody>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.login
  }
}
export default connect(mapStateToProps, { loginWithJWT })(LoginJWT)
