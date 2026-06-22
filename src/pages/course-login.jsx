import SEO from '../components/seo';
import { Wrapper } from '../layout';
import LoginCourse from '../components/forms-course/login';

const CourseLogin= () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Login'} />
            <LoginCourse />
        </Wrapper>
    )
}

export default CourseLogin;