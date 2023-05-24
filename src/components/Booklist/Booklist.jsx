import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../../store/actions/booksCreator";
import BookListItem from "./BookListItem";
import Loading from "../IsLoading/Loading";
import error from "./img/404.webp"


const Booklist = () => {
  const { books, booksIsLoading, booksIsError } = useSelector(
    (state) => state.booksReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  console.log(books, booksIsError, booksIsLoading);

  if (booksIsError) {
    return <div><img style={{width: '500px'}} src={error} alt="books" /></div>;
  }

  return (
    <ul>
      {booksIsLoading ? (
       <Loading />
      ) : (
        books.map((el) => <BookListItem key={`books-${el.id}`} book={el} />)
      )}
    </ul>
  );
};

export default Booklist;
