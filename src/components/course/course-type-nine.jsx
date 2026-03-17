import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart_course } from "../../redux/features/cart-slice";
import {
  add_to_wishlist,
  wishlistItems,
} from "../../redux/features/wishlist-slice";

const CourseTypeNine = ({ data, classes }) => {
  const { cartCourses } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const wishlists = useSelector(wishlistItems);

  const isWishlistSelected = wishlists.find(
    (w) => Number(w.id) === Number(data.id),
  );

  // wishlist
  const handleWishlist = (course_item) => {
    if (wishlists.find((i) => i.id === course_item.id)) {
      dispatch(
        add_to_wishlist({
          change_type: "remove_wishlist",
          item: {
            id: course_item.id,
            img: `/assets/images/course/course-07/${course_item.img}`,
            title: course_item.title,
            price: course_item.course_price,
          },
        }),
      );
    } else {
      dispatch(
        add_to_wishlist({
          change_type: "add_wishlist",
          item: {
            id: course_item.id,
            img: `/assets/images/course/course-07/${course_item.img}`,
            title: course_item.title,
            price: course_item.course_price,
          },
        }),
      );
    }
  };

  // add to cart
  const handleAddToCart = (course) => {
    dispatch(
      cart_course({
        id: course.id,
        img: `/assets/images/course/course-07/${course.img}`,
        price: course.course_price,
        title: course.title,
      }),
    );
  };

  return (
    <div className={`edu-course course-style-5  ${classes ? classes : ""}`}>
      <div className="inner">
        {/* thumbnail */}
        <div className="thumbnail">
          <Link href={`/course-details/${data.id}`} legacyBehavior>
            <a>
              <img
                src={`/assets/images/course/course-07/${data.img}`}
                alt={data.title}
              />
            </a>
          </Link>
        </div>

        {/* main card */}
        <div className="content">
          <div className="course-price price-round">
            {data.course_price ? `$${data.course_price}` : "Free"}
          </div>

          <span className="course-level">{data.level}</span>

          <h5 className="title">
            <Link href={`/course-details/${data.id}`} legacyBehavior>
              <a>{data.title}</a>
            </Link>
          </h5>

          <div className="course-rating">
            <div className="rating">
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
            </div>
            <span className="rating-count">({data.rating})</span>
          </div>

          <p>{data.short_desc}</p>

          <ul className="course-meta">
            <li>
              <i className="icon-24"></i> {data.lesson} Lessons
            </li>
            <li>
              <i className="icon-25"></i> {data.student} Students
            </li>
          </ul>
        </div>
      </div>

      {/* hover panel */}
      <div className="hover-content-aside">
        <div className="content">
          <span className="course-level">{data.category}</span>

          <h5 className="title">
            <n-link to="/course/course-details">{data.title}</n-link>
          </h5>

          <div className="course-rating">
            <div className="rating">
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
            </div>
            <span className="rating-count">({data.rating})</span>
          </div>

          <ul className="course-meta">
            <li>{data.lesson} Lessons</li>
            <li>{data.duration}</li>
            <li>{data.level}</li>
          </ul>

          <div className="course-feature">
            <h6 className="title">What You’ll Learn?</h6>

            <ul>
              {data.features?.slice(0, 3).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* buttons */}
          <div className="button-group">
            {/* <a      
              className="edu-btn btn-medium"
              onClick={() => handleAddToCart(data)}
              style={{ cursor: "pointer" }}
            >
              {cartCourses.some((item) => item.id === data.id)
                ? "Added to cart"
                : "Add to cart"}
              <i className="icon-4"></i>
            </a> */}

            {/* <button
              onClick={() => handleWishlist(data)}
              className={`wishlist-btn btn-outline-dark ${
                isWishlistSelected ? "active" : ""
              }`}
            >
              <i className="icon-22"></i>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTypeNine;
