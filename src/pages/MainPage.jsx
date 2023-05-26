import { useSelector } from "react-redux";
import { Booklist, CartItems, Header } from "../components";
import classes from "./styles.module.css";

const MainPage = () => {
  const { isOpen } = useSelector((state) => state.cartReducer)
  return (
    <>
      <header className={classes.header}>
        <Header />
      </header>
      <main className="container">
        <Booklist />
      </main>

     {isOpen && <CartItems />} 
    </>
  );
};

export default MainPage;
