import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.init'
import { useState } from "react";
const Login = () => {

  const [user, setUser] = useState(null)
  const provider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGithubLogin = () => {
   signInWithPopup(auth, gitHubProvider).then((result) => {
    console.log(result.user);
    setUser(result.user)
   }).catch((error) => {
    console.log(error)
   })
  }

  const handleGoogleLogin = () => {
    console.log('google logIn');
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user);
      setUser(result.user)
    }).catch((error) => {
      console.log(error)
    })
  }

  const hangleSignOut = () => {
    signOut(auth).then(() => {
    console.log('sign out success ');
    setUser(null)
    }).catch((error) => {
      console.log(error)
    })
  }


  return (
    <div className='py-16'>      
               
      {
        user?  <button onClick={hangleSignOut} className="btn"> Log Out </button> : <div>
          <button onClick={handleGoogleLogin} className='btn'> Google Login </button>
          <button onClick={handleGithubLogin} className='btn'> Google with gitHub </button>
        </div>
      }     

      {
        user &&
        <div>
          <h2>{user.displayName} </h2>
          <p>{user.email} </p>
          <img src={user.photoURL} alt="photo" />
        </div>

      }
    </div>
  );
};

export default Login;