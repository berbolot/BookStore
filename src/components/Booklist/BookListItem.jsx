import { Button } from "react-bootstrap";
import classes from "./styles.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/reducers/cartSlice";
import React from "react";

const BookListItem = ({ book }) => {
  const dispatch = useDispatch();
  // const [_total, setTotal] = React.useState(0)
  // const [_count, setCount] = React.useState(1)

  const { id, title, author, price, imgUrl } = book;

  const onCLickAddToCart = async () => {
    // setTotal(_total + price)
    // setCount(_count + 1)
    const book = {
      id,
      title,
      count: 1,
      price: price,
      total: price,
      author,
    };
    dispatch(addItem(book));
  };

  return (
    <li className={classes.list_item}>
      <div className={classes.list_item_cover}>
        <img src={imgUrl} alt="book" />
      </div>

      <div className={classes.list_item_details}>
        <h4>{title}</h4>
        <div>{author}</div>
        <div className={classes.list_item_price}>{price}$</div>
        <Button onClick={onCLickAddToCart}>Add to cart</Button>
      </div>
    </li>
  );
};

export default BookListItem;
