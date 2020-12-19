const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { notes } = this.props;
    return (
      <Layout title="My Notes">
        <body id="background-color">
          <ul id="notesContainer">
            {/* create plus button in the middle of the screem */}
            <li id="addNoteContainer" class="noteContainer">
              <a href="/notes/new"><span id="addIcon" title="Click to add a note" onclick="addNote()">+</span></a>
            </li>
          </ul>

          {notes.map((note) => (
            <div class="notes">
              {/* not created */}
              <h2>{note.note}</h2>
              {/* delete button */}
              <form action={`/notes/${note._id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete" />
              </form>
              {/* edit button */}
              <form action={`/notes/edit/${note._id}`} method="GET">
                <input type="submit" value="Edit" />
              </form>
            </div>
          ))}
        </body>
      </Layout>
    );
  }
}

module.exports = Index;
