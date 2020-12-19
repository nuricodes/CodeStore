const React = require("react");
const Layout = require("../layout.jsx");
// const { default: Editor } = require("./editor.js");

class Index extends React.Component {
  render() {
    const { notes } = this.props;
    return (
      <Layout title="My Notes">
        <div class="plus" id="plus">
          <div id="addNoteContainer" class="noteContainer">
            <a href="/notes/new"><span id="addIcon" title="Click to add a note" onclick="addNote()">+</span></a>
          </div>
        </div>
        {/* <Editor> */}
        {notes.map((note) => (
          <div class="new-note">
            {/* title */}
            <div className="notes">{note.note}
              {/* body */}
              <form action={`/notes/${note._id}?_method=DELETE`} method="POST">
                {/* delete button */}
                <input type="submit" value="Delete" />
              </form>
              <form action={`/notes/edit/${note._id}`} method="GET">
                <input type="submit" value="Edit" />
              </form>
            </div>
          </div>
        ))}
        {/* </Editor> */}
      </Layout>
    );
  }
}

module.exports = Index;
