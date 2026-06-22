import SEO from '../components/seo';
import { Wrapper } from '../layout';
import LoginArea from '../components/forms/login-form';

const Login= () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Login'} />
            <LoginArea />
        </Wrapper>
    )
}

export default Login;