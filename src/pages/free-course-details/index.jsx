import { useRouter } from "next/router";
import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import FreeCourseDetailsMain from "../../components/free-course-layout";

import free_course_data from "../../data/free-course-data";

const FreeCourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const allCourses = [
   
    ...(free_course_data || [])
  ];

  const course = allCourses.find(
    (item) => String(item.id) === String(id)
  );

  if (!course) return <div>Course not found</div>;

  return (
    <Wrapper>
      <SEO pageTitle={course.title} />
      <FreeCourseDetailsMain course={course} />
    </Wrapper>
  );
};

export default FreeCourseDetails;