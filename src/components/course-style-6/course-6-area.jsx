import React, { useState } from "react";
import course_two_data from "../../data/course-2-data";
import SortingArea from "../course-filter/sorting-area";
import CourseTypeNine from "../course/course-type-nine";

const CourseSixArea = () => {
  const coursePerView = 26;
  const [next, setNext] = useState(coursePerView);
  const [courses, setCourses] = useState(course_two_data);

  const visibleCourses = courses.slice(0, next);

  return (
    <div className="edu-course-area course-area-1 gap-tb-text">
      <div className="container">
        <SortingArea
          course_items={course_two_data}
          num={visibleCourses.length}
          setCourses={setCourses}
          courses={courses}
        />

        <div className="row g-5">
          {visibleCourses.map((course, key) => (
            <div
              key={course.id}
              className={`col-12 col-xl-4 col-lg-6 col-md-6 
                                ${(key + 1) % 3 === 0 && key !== 0 ? "course-style-3-third-item" : ""} 
                                ${(key + 1) % 2 === 0 && key !== 0 ? "course-style-3-even" : "course-style-3-odd"}`}
            >
              <CourseTypeNine data={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSixArea;

// import React from 'react';
// import { useState } from 'react';
// import { coursetwo_data } from '../../data';
// import SortingArea from '../course-filter/sorting-area';
// import CourseTypeNine from '../course/course-type-nine';

// const CourseSixArea = () => {
//     const coursePerView = 26;
//     const [next, setNext] = useState(coursePerView);
//     const [courses, setCourses] = useState(coursetwo_data);
//     // handleLoadData
//     const handleLoadData = () => {
//         setNext(value => value + 3)
//     }
//     return (
//         <div className="edu-course-area course-area-1 gap-tb-text">
//             <div className="container">
//                 <SortingArea course_items={coursetwo_data} num={courses?.slice(20,next)?.length} setCourses={setCourses} courses={courses} />

//                 <div className="row g-5">
//                     { courses?.slice(20, next)?.map((course, key) => (
//                         <div key={course.id}
//                             className={ `col-12 col-xl-4 col-lg-6 col-md-6
//                                 ${ ( key+1 ) % 3 === 0 && key !== 0 ? 'course-style-3-third-item' : '' }
//                                 ${ ( key+1 ) % 2 === 0 && key !== 0 ? 'course-style-3-even' : 'course-style-3-odd' }`
//                             }
//                         >
//                             <CourseTypeNine data={course} />
//                         </div>
//                     ) ) }
//                 </div>

//                 {/*next < courses.length &&
//                     <div onClick={handleLoadData} className="load-more-btn" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1200">
//                         <a className="edu-btn" style={{ cursor: 'pointer' }}>Load More <i className="icon-56"></i></a>
//                     </div>
//                 */}
//             </div>
//         </div>
//     )
// }

// export default CourseSixArea;
