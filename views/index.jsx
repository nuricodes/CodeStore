const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
        <h1> {this.props.hello} </h1>
      </Layout>
    );
  }
}

module.exports = Index;
