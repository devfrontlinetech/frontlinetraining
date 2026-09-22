import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <Head>
    <title>
      {pageTitle
        ? `${pageTitle} | Frontline Training Karur`
        : "Frontline Training Karur | IT Training & Career Development"}
    </title>

    <meta httpEquiv="x-ua-compatible" content="ie=edge" />

    <meta
      name="description"
      content="Frontline Training is a leading IT training institute in Karur offering industry-focused courses in Full Stack Development, Data Science, Artificial Intelligence, Machine Learning, UI/UX Design, Ethical Hacking, Digital Marketing, Cloud, DevOps, Java, Python and more. Learn from experienced trainers through practical, hands-on training and build job-ready technology skills."
    />

    <meta
      name="keywords"
      content="IT training institute in Karur, IT courses in Karur, software training in Karur, computer courses in Karur, Full Stack Development course Karur, React JS training Karur, Python training Karur, Java training Karur, Data Science course Karur, Artificial Intelligence course Karur, Machine Learning course Karur, Data Analytics course Karur, UI UX Design course Karur, Ethical Hacking course Karur, Cyber Security training Karur, Digital Marketing training Karur, DevOps training Karur, Cloud Computing course Karur, career development Karur, job oriented courses Karur, software development training Karur, Frontline Training Karur"
    />

    <meta
      name="robots"
      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <meta name="author" content="Frontline Training" />

    <meta name="theme-color" content="#ffffff" />

    <link rel="canonical" href="https://frontlinetraining.in/" />

    {font && <link href={font} rel="stylesheet" />}

    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default SEO;



// import Head from "next/head";

// const SEO = ({ pageTitle, font }) => (
//   <Head>
//     <title>
//       {pageTitle &&
//         `${pageTitle} || FrontlineTraining Education Platform React Next js Template`}
//     </title>
//     <meta httpEquiv="x-ua-compatible" content="ie=edge" />
//     <meta
//       name="description"
//       content="Unlock your career potential at the best IT training center in Karur, serving Namakkal, Erode, and Dindigul. At Frontline Training, we offer certified courses in Ethical Hacking, UI/UX Design, MEAN Full Stack Development, Data Science, and more. Gain industry-relevant skills through hands-on learning from expert instructors and access job placement opportunities through our job portal. Enroll today and elevate your career in the dynamic world of technology!"
//     />
//     {/*         <meta name="robots" content="noindex, follow" /> */}
//     <meta
//       name="viewport"
//       content="width=device-width, initial-scale=1, shrink-to-fit=no"
//     />
//     <meta
//       name="keywords"
//       content="IT training Karur, Digital Marketing Training karur, data science training karur, Dev Ops Training karur, Java Training Karur, Full Stack Training in Karur, Python Training Karur, UI/UX Training Karur, Cloud Security Training Karur, IT courses karur, Karur Software Development course, Karur IT courses, Ethical Hacking training in karur, UI/UX Design course in kare, MEAN Full Stack Development Karur, Data Science training in karur, Artificial Intelligence course in karur, Machine Learning classes in Karur, Data Analytics training karur, career development IT, hands-on IT learning, job placement IT training Karur , Frontline Training, technology skills,  professional development, react code runner, react compiler, code checker."
//     />
//     {font && <link href={font} rel="stylesheet" />}
//     <link rel="icon" href="/favicon.ico" />
//   </Head>
// );

// export default SEO;
