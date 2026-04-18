import { useRouter } from "next/router";
import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import FreeCourseDetailsMain from "../../components/free-course-layout";

import free_course_data from "../../data/free-course-data";

const DynamicFreeCourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) return <div>Loading...</div>;

  const course = free_course_data.find(
    (item) => String(item.id) === String(id)
  );

  if (!course) return <div>Course Not Found</div>;

  return (
    <Wrapper>
      <SEO pageTitle={course.title} />
      <FreeCourseDetailsMain course={course} />
    </Wrapper>
  );
};

export default DynamicFreeCourseDetails;