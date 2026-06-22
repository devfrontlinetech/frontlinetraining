import SEO from '../components/seo';
import { Wrapper } from '../layout';
import FreeCoursesContent from '../components/homes/home-free-courses';

const FreeCourses = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Free Courses'} />
            <FreeCoursesContent />
        </Wrapper>
    )
}

export default FreeCourses;