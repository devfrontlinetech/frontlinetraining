import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

import {
  cart_course,
  decrease_quantity,
  remove_cart_course,
} from "../../redux/features/cart-slice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(remove_cart_course(item));
  };

  return (
    <tr>
      {/* Remove */}
      <td className="product-remove">
        <button
          type="button"
          onClick={handleRemove}
          className="remove-wishlist"
          style={{
            cursor: "pointer",
            border: "none",
            background: "transparent",
            padding: 0,
          }}
          aria-label={`Remove ${item.title}`}
        >
          <i className="icon-73"></i>
        </button>
      </td>

      {/* Image */}
      <td className="product-thumbnail">
        <Link href={`/course-details/${item.id}`}>
          <a>
            <img src={item.img} alt={item.title} />
          </a>
        </Link>
      </td>

      {/* Title */}
      <td className="product-title">
        <Link href={`/course-details/${item.id}`}>
          <a>{item.title}</a>
        </Link>
      </td>

      {/* Price */}
      <td className="product-price" data-title="Price">
        <span className="currency-symbol">$</span>
        {Number(item.price).toFixed(2)}
      </td>

      {/* Quantity */}
      <td className="product-quantity" data-title="Qty">
        <div className="pro-qty">
          <span
            className="dec qtybtn"
            onClick={() => dispatch(decrease_quantity(item))}
            style={{ cursor: "pointer" }}
          >
            -
          </span>

          <input type="text" value={item.quantity} readOnly />

          <span
            className="inc qtybtn"
            onClick={() => dispatch(cart_course(item))}
            style={{ cursor: "pointer" }}
          >
            +
          </span>
        </div>
      </td>

      {/* Subtotal */}
      <td className="product-subtotal" data-title="Subtotal">
        <span className="currency-symbol">$</span>
        {(Number(item.quantity) * Number(item.price)).toFixed(2)}
      </td>
    </tr>
  );
};

export default CartItem;
