import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
    <Head>
        <title>
            {pageTitle && `${pageTitle} || FrontlineTraining Education Platform React Next js Template`}
        </title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Unlock your career potential at the best IT training center in Karur, serving Namakkal, Erode, and Dindigul. At Frontline Training, we offer certified courses in Ethical Hacking, UI/UX Design, MEAN Full Stack Development, Data Science, and more. Gain industry-relevant skills through hands-on learning from expert instructors and access job placement opportunities through our job portal. Enroll today and elevate your career in the dynamic world of technology!" />
{/*         <meta name="robots" content="noindex, follow" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="keywords" content="IT training Karur, IT courses Namakkal, Karur Software Development course, Karur IT courses, Ethical Hacking training, UI/UX Design courses, MEAN Full Stack Development, Data Science training, Artificial Intelligence courses, Machine Learning classes, Data Analytics training, career development IT, hands-on IT learning, job placement IT training, Frontline Training, technology skills, professional development."/>
        {font && <link href={font} rel="stylesheet" />}
        <link rel="icon" href="/favicon.ico" />
    </Head>
)

export default SEO;
