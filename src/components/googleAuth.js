import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../Actions';
import '../stylecss/googleauth.css';
import { Link } from 'react-router-dom';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1052472155569-beigfl93tiqk2e15m4kgvd0ucnebrimu.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthCHange(this.auth.isSignedIn.get());
        // this.setState({ Username: this.auth.currentUser.Wd.Rs.Qe })
        this.auth.isSignedIn.listen(this.onAuthCHange);
      });
    });
  }

  onAuthCHange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().Rs.Qe);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} type="button" className="btn btn-danger my-btn">
          <i className="fab fa-google mr-5" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} type="button" className="btn btn-danger my-btn">
          <i className="fab fa-google mr-5" />
          Sign In
        </button>
      );
    }
  }

  renderCurrentUser = () => {
    if (this.props.username === null) {

    } else {
      return (
        this.props.username
      );
    }
  }

  renderIfLogged = () => {
    if (this.props.isSignedIn) {
      return <Link to="/cities">Visit ballkan capital cities</Link>;
    }
  }

  render() {


    return (
      <div className="container mt-5">
        <h1 className="main-title"> BALLKAN REVIEW APP </h1>
        <p className="main-text"> Welcome to the Ballkan Reviewer app. In this app you can check the reviews given to the ballkan capital cities before you decide which one to visit. Log in with you gmail and share your experience with us! </p>
        <div className="mb-5 main-text">
          {this.renderAuthButton()}
        </div>
        <div>
          {/* {this.renderCurrentUser()} */}
        </div>
        <div className="tolink main-text">
          {this.renderIfLogged()}
        </div>
        <div className=" mb-5">
          <img className="main-img" src="https://upload.wikimedia.org/wikipedia/commons/8/80/Karte_Suedosteuropa_03_01.png" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
  username: state.auth.username,
});

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
