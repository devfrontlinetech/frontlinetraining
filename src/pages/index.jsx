// import HomeMain from '../components/homes/home';
// import SEO from '../components/seo';
// import { Wrapper } from '../layout';

// export default function Home() {
//     return (
//         <Wrapper>
//             <SEO pageTitle={'Home Main'} />
//             <HomeMain />
//         </Wrapper>
//     )
// }


import HomeMain from '../components/homes/home';
import { Wrapper } from '../layout';
import { NextSeo } from 'next-seo'; // Import NextSeo for SEO management

export default function Home() {
  return (
    <Wrapper>
      {/* Insert the NextSeo with title, description, openGraph, and JSON-LD */}
      <NextSeo
        title="Welcome to My Website"
        description="This is a description of my homepage."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://frontlinetraining.in/',  // Replace with your actual URL
          site_name: 'frontlinetraining',
        }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'frontlinetraining',
          description: 'This is the homepage of my website.',
          url: 'https://frontlinetraining.in/', // Replace with your actual URL
        }}
      />
      
      {/* Your HomeMain component */}
      <HomeMain />
    </Wrapper>
  );
}
