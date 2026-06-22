import SEO from '../components/seo';
import { Wrapper } from '../layout';
import BlogSectionContent from '../components/blog-free-course';

const BlogSection = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Blog Section'} />
            <BlogSectionContent />
        </Wrapper>
    )
}

export default BlogSection;