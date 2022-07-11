import React from 'react';
import { Container, Button } from 'react-bootstrap';

function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <>
        <Container className="p-5 m-5 WelcomeScreen">
          <div className="content">
            <h1 className='title slide-in-elliptic-right-fwd'>Welcome to the Meet app</h1>
            <div id='login-screen'>
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
            </div>
            <div>
              <a
                href="https://t-schill-dev.github.io/meet-app/privacy.html"
                target='_blank'
                rel="nofollow noreferrer"
              >
                Privacy policy
              </a>
            </div>
          </div>
        </Container>
      </>
    )
    : null
}
export default WelcomeScreen;
