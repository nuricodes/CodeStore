const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <div class="logindiv">
          <form action="/auth/login" method="post" className="loginform">
            <h4 className="signuphere">Welcome back!</h4>
            <p>Sign in to access your personalized CodeStore from anywhere!</p>
            <br></br>
            <div class="form-group">
              <label for="formGroupExampleInput">Username:</label>
              <input type="text" class="form-control" id="formGroupExampleInput" name="username" placeholder="johndoe" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Password:</label>
              <input type="password" name="password" class="form-control" id="formGroupExampleInput2" placeholder="********"></input>
            </div>
            <br></br>
            <input type="submit" value="signup" />
            <p className="terms">By clicking Sign up, I agree to the <a href="/">Terms of Service</a> and <a href="/">Privacy Policy.</a></p>
            <br></br>
          </form>
        </div>

      </Layout>
    );
  }
}

module.exports = Login;
