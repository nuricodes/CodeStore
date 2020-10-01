const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {notes} = this.props
    return (
      <Layout title="New Notes">
       <form action="/notes/" method="post">
         <input type="text" placeholder="write your note here" name="note"/>
         <input type="submit" value="create note"/>
       </form>
      </Layout>
    );
  }
}

module.exports = Index;
