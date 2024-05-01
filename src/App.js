import './App.css';
import LoginButton from './Component/Login';
import LogoutButton from './Component/Logout';
import Profile from './Component/Profile';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, "user");
  return (
    <div>
      {
        isAuthenticated ? (
          <>
            <Profile />

          </>
        ) : (
          <LoginButton />
        )
      }
    </div>
  )




}

export default App;
