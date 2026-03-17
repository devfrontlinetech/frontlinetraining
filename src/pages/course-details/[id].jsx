import { useRouter } from "next/router";
import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import CourseDetailsMain from "../../components/course-details";

import course_data from "../../data/course-data";
import course_two_data from "../../data/course-2-data";

const DynamicCourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const allCourses = [...course_data, ...course_two_data];

  const course = allCourses.find((item) => String(item.id) === String(id));

  if (!course) return <div>Loading...</div>;

  return (
    <Wrapper>
      <SEO pageTitle={course.title} />
      <CourseDetailsMain course={course} />
    </Wrapper>
  );
};

export default DynamicCourseDetails;

export async function getStaticPaths() {
  const allCourses = [...course_data, ...course_two_data];

  const paths = allCourses.map((course) => ({
    params: {
      id: String(course.id),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}


// import { useRouter } from 'next/router';
// import React from 'react';
// import SEO from '../../components/seo';
// import { course_data } from '../../data';
// import { Wrapper } from '../../layout';
// import CourseDetailsMain from '../../components/course-details';

// const DynamicCourseDetails = () => {
//     const router = useRouter();
//     const { id } = router.query;
//     const course = course_data.find(item => String(item.id) === String(id))
//     return (
//         <Wrapper>
//             <SEO pageTitle={'Course Details'} />
//             <CourseDetailsMain course={course} />
//         </Wrapper>
//     )
// }

// export default DynamicCourseDetails;

// export async function getStaticPaths() {
//     const paths = course_data.map((course) => {
//         return {
//             params:{
//                 id:`${course.id}`
//             }
//         }
//     })
//     return {
//       paths,
//       fallback: false,
//     }
//   }

// export async function getStaticProps(context) {
//     return {
//         props: {}
//     }
// }
