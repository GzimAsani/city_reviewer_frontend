import React from 'react';

class GoogleAuth extends React.Component  {
  state = { isSignedIn: null }
  
  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1052472155569-beigfl93tiqk2e15m4kgvd0ucnebrimu.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        // this.setState({ Username: this.auth.currentUser.Wd.Rs.Qe })
        this.auth.isSignedIn.listen(this.onAuthCHange);;
      });
    });
  };

  onAuthCHange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton = () => {
    if (this.state.isSignedIn === null){
      return null;
    }else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} type="button" className="btn btn-danger">
          <i className="fab fa-google mr-5"/>
          Sign Out
        </button>
      )
    }else {
     return (
       <button onClick={this.onSignInClick} type="button" className="btn btn-danger">
         <i className="fab fa-google mr-5" />
         Sign In
       </button>
     )
    }
  }
  render() {
    return(
      <div>{this.renderAuthButton()}</div>
    );
  };
};

export default GoogleAuth;