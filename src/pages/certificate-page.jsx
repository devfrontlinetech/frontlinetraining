import SEO from '../components/seo';
import { Wrapper } from '../layout';
import CertificateMain from '../components/free-course-certificate';

const CertificatePage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Certificate'} />
            <CertificateMain />
        </Wrapper>
    )
}

export default CertificatePage;