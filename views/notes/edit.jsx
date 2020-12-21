const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { note } = this.props
    return (
      <Layout title="Edit Note" class="layout" >
        <div className="editNote">
          <div className="notes crud-notes">
            <form action={`/notes/edit/${note._id}?_method=PUT`} method="post">
              <input type="text" value={note.note} name="note" className="note-content" />

              <div class="plus" id="plus">
                <div id="addNoteContainer" class="noteContainer">
                  <input type="submit" id="addIcon" value="+" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
