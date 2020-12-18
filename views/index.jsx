const React = require("react");
const Layout = require("./layout.jsx");
const Landing = require('./landing/landing')
// const Signup = require('./signup/signup');

class Index extends React.Component {
  render() {
    const { notes } = this.props
    return (
      <Layout title="Landing">
        <div className="homepage">
          <Landing />
          {/* <Signup /> */}
        </div>

      </Layout>
    );
  }
}

module.exports = Index;
