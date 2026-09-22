import SEO from '../components/seo';
import { Wrapper } from '../layout';
import GalleryMain from '../components/gallery-grid';

export default function Gallery() {
    return (
        <Wrapper>
            <SEO pageTitle={'Gallery Grid'} />
            <GalleryMain />
        </Wrapper>
    )
}
