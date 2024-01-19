import Navbar from "../navbar/Navbar";
import s from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={s.main}>
        <h1 className={s.heading}>Authentication</h1>
        <div className={s.imgdiv}>
          <img src="https://images.unsplash.com/photo-1584728091931-4988fd921e88?q=80&w=2752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
