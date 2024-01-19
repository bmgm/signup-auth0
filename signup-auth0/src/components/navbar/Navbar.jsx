import s from "./Navbar.module.css";

const Navbar = () => {
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
