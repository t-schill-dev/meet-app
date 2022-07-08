import React from 'react';
import { Container, Button } from 'react-bootstrap';

function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <>
        <Container className="p-5 m-5">
          <div className="WelcomeScreen">
            <h1>Welcome to the Meet app</h1>
            <h4>
              Log in to see upcoming events around the world for full-stack developers
            </h4>
            <div className="button_cont" align="center">
              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="Google sign-in"
                  />
                </div>
                <Button variant='primary' onClick={() => { props.getAccessToken() }}
                  rel="nofollow noopener"
                  className="login-btn-text"
                >
                  <b>Sign in with google</b>
                </Button>
              </div>
            </div>
            <a
              href="../../public/privacy.html"
              rel="nofollow noopener"
            >
              Privacy policy
            </a>
          </div>
        </Container>
      </>
    )
    : null
}
export default WelcomeScreen;