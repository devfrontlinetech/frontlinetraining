import { useRouter } from "next/router";
import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import CourseDetailsMain from "../../components/course-details";

import course_data from "../../data/course-data";
import course_two_data from "../../data/course-2-data";

const CourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const allCourses = [
    ...(course_data || []),
    ...(course_two_data || [])
  ];

  const course = allCourses.find(
    (item) => String(item.id) === String(id)
  );

  if (!course) return <div>Course not found</div>;

  return (
    <Wrapper>
      <SEO pageTitle={course.title} />
      <CourseDetailsMain course={course} />
    </Wrapper>
  );
};

export default CourseDetails;


// import React from 'react';
// import SEO from '../../components/seo';
// import { Wrapper } from '../../layout';
// import CourseDetailsMain from '../../components/course-details';
// import { course_data } from '../../data';

// const course = course_data[0];

// const CourseDetails = () => {
//     return (
//         <Wrapper>
//             <SEO pageTitle={'Course Details'} />
//             <CourseDetailsMain course={course} />
//         </Wrapper>
//     )
// }

// export default CourseDetails;
