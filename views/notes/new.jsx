const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { notes } = this.props
    return (
      <Layout title="New Notes">
        <div className="new">
          <div className="notes crud-notes">
            <form action="/notes/" method="post">
              {/* <input type="text" placeholder="title" /> */}
              <input type="text" placeholder="write your note here" name="note" className="note-content" />
              {/* <br></br> */}
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

