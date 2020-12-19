const React = require("react");
const Layout = require("../layout.jsx");
// const { default: Editor } = require("./editor.js");

class Index extends React.Component {
  render() {
    const { note } = this.props
    return (
      <Layout title="Edit Note">
        {/* <Editor> */}
        <div className="notes">
          <form action={`/notes/edit/${note._id}?_method=PUT`} method="post">
            <input type="text" value={note.note} placeholder="write your note here" name="note" className="note-content" />
            <input type="submit" value="edit note" />
          </form>
        </div>
        {/* </Editor> */}
      </Layout>
    );
  }
}

module.exports = Index;
