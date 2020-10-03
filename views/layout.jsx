const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="/css/style.css"></link>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        </head>
        <body>
          <header>
            <nav class="navbar navbar-dark bg-dark">
              <a class="navbar-brand" href="/"><span class="code">CodeStore++</span></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                  </li>
                   <li class="nav-item">
                    <a class="nav-link" href="/auth/signup">Get Started</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/auth/login">Log In</a>
                  </li>
                 
                  <li class="nav-item">
                    <a class="nav-link disabled" href="/auth/logout" tabindex="-1" aria-disabled="true">Sign Out</a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <main>{this.props.children}</main>
          <footer>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;