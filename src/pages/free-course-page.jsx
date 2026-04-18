import SEO from '../components/seo';
import { Wrapper } from '../layout';
import FreeCoursePages from '../components/free-course-layout';

const FreeCourses = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Free Course Page'} />
            <FreeCoursePages />
        </Wrapper>
    )
}

export default FreeCourses;