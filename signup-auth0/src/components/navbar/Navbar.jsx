import s from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <nav>
      <div className={s.wrapper}>
        <div className={s.left}>
          <h1>MyAuth0</h1>
        </div>
        <div className={s.right}>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            {isAuthenticated ? (
              <div className={s.uname}>
                <p>{user.name}</p>
                <li>
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                </li>
              </div>
            ) : (
              <div className={s.uname}>
              <li>
                <button onClick={() => loginWithRedirect()}>Log In</button>
              </li></div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
