const React = require("react");
const Layout = require("../layout.jsx");
// const { default: Editor } = require("./editor.js");

class Index extends React.Component {
  render() {
    const { notes } = this.props
    return (
      <Layout title="New Notes">
        {/* <Editor> */}
        <div className="notes">
          <form action="/notes/" method="post">
            {/* <input type="text" placeholder="title" /> */}
            <input type="text" placeholder="write your note here" name="note" className="note-content" />
            {/* <br></br> */}
            <input type="submit" value="create note" />
          </form>
        </div>
        {/* </Editor> */}
      </Layout>
    );
  }
}

module.exports = Index;
