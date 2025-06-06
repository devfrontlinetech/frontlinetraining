import SEO from '../components/seo';
import { Wrapper } from '../layout';
import CodeIntro from '../components/code-intro';


const CodeIntroPage = () => {
    return (

        <Wrapper>
            <SEO pageTitle={'Code Intro'} />
            <CodeIntro/>
        </Wrapper>
    )
}

export default CodeIntroPage;