import { Booklist, Header } from "../components";
import classes from "./styles.module.css";

const MainPage = () => {
  return (
    <>
      <header className={classes.header}>
        <Header />
      </header>
      <main className="container">
        <Booklist />
      </main>
    </>
  );
};

export default MainPage;
