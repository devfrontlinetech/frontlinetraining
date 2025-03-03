import SEO from '../components/seo';
import { Wrapper } from '../layout';
import CourseStyleOneMain from '../components/course-style-1';

const CourseStyleOne = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'web-development'} />
            <CourseStyleOneMain />
        </Wrapper>
    )
}

export default CourseStyleOne;
