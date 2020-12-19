const React = require("react");
// const Layout = require("../layout.jsx");

class Signup extends React.Component {
    render() {
        const { notes } = this.props
        return (
            <>
                <form action="/auth/signup" method="post" className="landingform">
                    <h4>Sign up for free</h4>
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
            </>
        );
    }
}

module.exports = Signup;