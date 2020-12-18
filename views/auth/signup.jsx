const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <div class="signupcontainer">
          <div class="row">
            <div class="col" id="login">
              <h1>Already have an account?</h1>
              <p>Please sign in below with your credentials</p>
              <a href="/auth/login"><button class="switch-button" id="slide-right-button">Sign In</button></a>
            </div>
            <div class="col" id="signup">
              <h1>Create Account</h1>
              <p class="small">Please enter your desired login information</p>
              <div className="form">
                <form action="/auth/signup" method="post">
                  <label>Username:</label>
                  <input type="text" placeholder="johndoe" />
                  <label>Password:</label>
                  <input type="password" placeholder="*******" />
                  <br></br>
                  <br></br>
                  <input type="submit" value="Sign Up" />

                </form>
              </div>
            </div>
            <div class="sign-up" id="sign-up-info">
            </div>
          </div>
        </div>


      </Layout>
    );
  }
}

module.exports = Index;
