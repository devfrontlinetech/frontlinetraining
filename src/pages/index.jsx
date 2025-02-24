
import HomeMain from '../components/homes/home';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import { NextSeo } from 'next-seo';
import Head from 'next/head'; // Import Head from next/head

export default function Home() {
    return (
        <Wrapper>
            <SEO pageTitle={'Home Main'} />
            <NextSeo
                title="Why I Love Coding?"
                description="A simple explanation of why coding is so much fun!"
                openGraph={{
                    type: 'article',
                    article: {
                        publishedTime: '2025-01-27T00:00:00Z',
                        modifiedTime: '2025-01-27T08:00:00Z',
                        authors: ['https://myamazingwebsite.com/authors/jane-doe'],
                        tags: ['Coding', 'Web Development', 'Next.js', 'React.js'],
                    },
                }}
            />
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Article',
                            headline: 'frontlinetraining',
                            description: 'The art of “Communicating with Computers” is called coding, It allows us to be able to communicate with computers, and make them do what we want them to. One of the most exciting aspects of learning to code is the potential to bring your ideas to life and that’s how popular games, software, apps, web apps, and various other algorithms are built.',
                            datePublished: '2025-01-25T00:00:00Z',
                            dateModified: '2025-01-25T08:00:00Z',
                            author: {
                                '@type': 'Person',
                                name: 'Anbu',
                            },
                            publisher: {
                                '@type': 'Organization',
                                name: 'frontlinetraining',
                                logo: {
                                    '@type': 'ImageObject',
                                    url: 'https://frontlinetraining.in/public/assets/images/fnline/Frontline_Logo_White.png',
                                },
                            },
                            image: 'https://frontlinetraining.in/public/assets/images/fnline/Frontline_Logo_White.png',
                        }),
                    }}
                />
                 <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Product',
                            'name': 'frontlinetraining',
                            'aggregateRating': {
                                '@type': 'AggregateRating',
                                'ratingValue': 4.8,
                                'ratingCount': 200, 
                                'reviewCount': 200,
                            },    
                        }),
                    }}     
                />
            </Head>
            <HomeMain />
        </Wrapper>
    );
}   













// import HomeMain from '../components/homes/home';
// import SEO from '../components/seo';
// import { Wrapper } from '../layout';
// import { NextSeo } from 'next-seo';

// export default function Home() {
//     return (
//         <Wrapper>
//             <SEO pageTitle={'Home Main'} />
//             <NextSeo
//         title="Why I Love Coding ?"
//         description="A simple explanation of why coding is so much fun!"
//         openGraph={{
//           type: 'article',
//           article: {
//             publishedTime: '2025-01-27T00:00:00Z',
//             modifiedTime: '2025-01-27T08:00:00Z',
//             authors: ['https://myamazingwebsite.com/authors/jane-doe'],
//             tags: ['Coding', 'Web Development', 'Next.js','React.js'],
//           },
//         }}
//         jsonLd={{
//           '@context': 'https://schema.org',
//           '@type': 'Article',
//           headline: 'Why I Love Coding',
//           description: 'A simple explanation of why coding is so much fun!',
//           datePublished: '2025-01-25T00:00:00Z',
//           dateModified: '2025-01-25T08:00:00Z',
//           author: {
//             '@type': 'Person',
//             name: 'Jane Doe',
//           },
//           publisher: {
//             '@type': 'Organization',
//             name: 'My Amazing Website',
//             logo: {
//               '@type': 'ImageObject',
//               url: 'https://myamazingwebsite.com/logo.png',
//             },
//           },
//           image: 'https://myamazingwebsite.com/article-image.jpg',
//         }}
//       />
//             <HomeMain />
//         </Wrapper>
//     )
// }

