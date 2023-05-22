import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../../store/actions/booksCreator";

const Booklist = () => {
  const { books, booksIsLoading, booksIsError } = useSelector(
    (state) => state.booksReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/users");
    const interval = setInterval(() => {
      console.log("first");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

        

  console.log(books, booksIsError, booksIsLoading);

  return <div>Booklist</div>;
};

export default Booklist;
