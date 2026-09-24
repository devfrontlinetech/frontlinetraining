import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart_course } from "../../redux/features/cart-slice";
import {
  add_to_wishlist,
  wishlistItems,
} from "../../redux/features/wishlist-slice";

const CourseTypeEight = ({ data, classes }) => {
  const dispatch = useDispatch();

  const { cartCourses = [] } = useSelector((state) => state.cart);
  const wishlists = useSelector(wishlistItems) || [];

  // Prevent component crash if data is missing
  if (!data) {
    return null;
  }

  const courseId = Number(data.id);

  const isWishlistSelected = wishlists.some(
    (item) => Number(item.id) === courseId,
  );

  // --------------------------------
  // ADD / REMOVE WISHLIST
  // --------------------------------
  const handleWishlist = (courseItem) => {
    const isAlreadyWishlist = wishlists.some(
      (item) => Number(item.id) === Number(courseItem.id),
    );

    dispatch(
      add_to_wishlist({
        change_type: isAlreadyWishlist ? "remove_wishlist" : "add_wishlist",

        item: {
          id: courseItem.id,
          img: `/assets/images/course/course-06/${courseItem.img}`,
          title: courseItem.title,
          price: courseItem.course_price,
        },
      }),
    );
  };

  // --------------------------------
  // ADD TO CART
  // --------------------------------
  const handleAddToCart = (course) => {
    dispatch(
      cart_course({
        id: course.id,
        img: `/assets/images/course/course-06/${course.img}`,
        price: course.course_price,
        title: course.title,
      }),
    );
  };

  // --------------------------------
  // CHECK CART
  // --------------------------------
  const isInCart = cartCourses.some((course) => Number(course.id) === courseId);

  return (
    <div
      className={`edu-course course-style-4 course-style-9 ${
        classes ? classes : ""
      }`}
    >
      <div className="inner">
        {/* =========================
                    COURSE IMAGE
                ========================== */}
        <div className="thumbnail">
          <Link href={`/course-details/${data.id}`}>
            <img
              src={`/assets/images/course/course-06/${data.img}`}
              alt={data.title || "Course Thumb"}
            />
          </Link>

          <div className="time-top">
            <span className="duration">
              <i className="icon-61"></i>
              {data.duration || "N/A"}
            </span>
          </div>
        </div>

        {/* =========================
                    COURSE CONTENT
                ========================== */}
        <div className="content">
          {/* PRICE */}
          <div className="course-price">{data.course_price || "Free"}</div>

          {/* TITLE */}
          <h6 className="title">
            <Link href={`/course-details/${data.id}`}>
              {data.title || "Course Title"}
            </Link>
          </h6>

          {/* RATING */}
          <div className="course-rating">
            <div className="rating">
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
            </div>

            <span className="rating-count">
              ({data.rating || 0} / {data.rating_count || 0} Rating)
            </span>
          </div>

          {/* SHORT DESCRIPTION */}
          <p>{data.short_desc || "Course description unavailable."}</p>

          {/* COURSE META */}
          <ul className="course-meta">
            <li>
              <i className="icon-24"></i>
              {data.lesson || 0} Lessons
            </li>

            <li>
              <i className="icon-25"></i>
              {data.student || 0} Students
            </li>
          </ul>
        </div>
      </div>

      {/* =========================
                HOVER CONTENT
            ========================== */}
      <div className="hover-content-aside">
        <div className="content">
          {/* COURSE LEVEL */}
          <span className="course-level">{data.level || "Beginner"}</span>

          {/* TITLE */}
          <h5 className="title">
            <Link href={`/course-details/${data.id}`}>
              {data.title || "Course Title"}
            </Link>
          </h5>

          {/* RATING */}
          <div className="course-rating">
            <div className="rating">
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
            </div>

            <span className="rating-count">({data.rating || 0})</span>
          </div>

          {/* COURSE META */}
          <ul className="course-meta">
            <li>{data.lesson || 0} Lessons</li>

            <li>{data.duration || "N/A"}</li>

            <li>{data.level || "Beginner"}</li>
          </ul>

          {/* =========================
                        COURSE FEATURES
                    ========================== */}
          <div className="course-feature">
            <h6 className="title">What You’ll Learn?</h6>

            <ul>
              {(data.features || []).slice(0, 3).map((feature, featureKey) => (
                <li key={featureKey}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* =========================
                        BUTTON GROUP
                    ========================== */}
          <div className="button-group">
            {/* ADD TO CART */}
            <button
              type="button"
              onClick={() => handleAddToCart(data)}
              style={{ cursor: "pointer" }}
              className="edu-btn btn-medium"
            >
              {isInCart ? "Added to cart" : "Add to cart"}
            </button>

            {/* WISHLIST */}
            <button
              type="button"
              onClick={() => handleWishlist(data)}
              style={{ cursor: "pointer" }}
              className={`btn-outline-dark wishlist-btn ${
                isWishlistSelected ? "active" : ""
              }`}
            >
              <i className="icon-22"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTypeEight;
