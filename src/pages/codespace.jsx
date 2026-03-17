import SEO from '../components/seo';
import { Wrapper } from '../layout';
import CodeSpace from '../components/code-runner';

const CodeSpacePage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Code Space'} />
            <CodeSpace/>
        </Wrapper>
    )
}

export default CodeSpacePage;