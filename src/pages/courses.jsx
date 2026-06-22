import SEO from '../components/seo';
import { Wrapper } from '../layout';
import CoursesMain from '../components/free-course'

const Courses = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Courses'} />
            <CoursesMain />
        </Wrapper>
    )
}

export default Courses;