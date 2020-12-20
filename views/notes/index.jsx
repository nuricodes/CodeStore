const React = require("react");
const Layout = require("../layout.jsx");

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
        {notes.map((note) => (
          // editor
          <div className="new-note">
            {/* body */}
            <div className="notes">
              {/* delete edit nav */}
              <div id="note-nav">
                <form action={`/notes/${note._id}?_method=DELETE`} method="POST" className="delete" >
                  <input type="image" src="https://i.imgur.com/TQOFzNU.png" border="0" alt="Submit" className="delete" />
                </form>
                <form action={`/notes/edit/${note._id}`} method="GET" className="edit">
                  <input type="image" src="https://i.imgur.com/MTXrXlp.png" height="30px" border="0" alt="Submit" className="edit" />
                </form>
              </div>
              {note.note}
            </div>

          </div >

        ))
        }
      </Layout>
    );
  }
}

module.exports = Index;
