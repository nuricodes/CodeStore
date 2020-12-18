const React = require("react");
const Signup = require("../signup/signup.jsx");
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Landing extends React.Component {
    render() {
        const { notes } = this.props
        return (

            <Container className="landing">
                <Row>
                    <Col>
                        <h1 className="landing-title">Meet CodeStore++,<br></br>Keep the code that counts.</h1>
                        <p className="landing-message">Record, organize, and store notes from anywhere, <br></br>Code more by spending less time </p>
                    </Col>
                    <Col>
                        <Signup />
                    </Col>
                </Row>
            </Container>

        );
    }
}

module.exports = Landing;