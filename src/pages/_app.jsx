import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import sal from "sal.js";
import { ThemeProvider } from "next-themes";

import "../styles/index.scss";

/* Move plain CSS imports here (NOT in SCSS) */
import "swiper/css/bundle";
import "react-image-lightbox/style.css";
import "react-toastify/dist/ReactToastify.css";
import "../public/assets/css/vendor/icomoon.css";
import "../public/assets/css/vendor/remixicon.css";

import { store } from "../redux/store";
import Theme from "../components/common/theme";
import { MouseMoveProvider } from "../contexts/mouse-move-context";
import SEO from "../components/seo";
import { DefaultSeo } from "next-seo";
import defaultSEOConfig from "../../next-seo.config";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  /* Better Bootstrap JS loading for Next */
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  useEffect(() => {
    sal({ threshold: 0.1, once: true });
  }, [router.asPath]);

  useEffect(() => {
    sal();
  }, []);

  return (
    <>
      <SEO font="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Spartan:wght@400;500;600;700;800&display=swap" />
      <Provider store={store}>
        <ThemeProvider defaultTheme="light">
          <MouseMoveProvider>
            <DefaultSeo {...defaultSEOConfig} />
            <Component {...pageProps} />
          </MouseMoveProvider>
          <Theme />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;

// OLD FILE 05-02-2026

// import { useRouter } from 'next/router';
// import React, { useEffect } from 'react';
// import { Provider } from 'react-redux';
// import sal from 'sal.js';
// import { ThemeProvider } from 'next-themes';
// if (typeof window !== 'undefined') {
//   require( 'bootstrap/dist/js/bootstrap' );
// }
// import '../styles/index.scss';
// import { store } from '../redux/store';
// import Theme from '../components/common/theme';
// import { MouseMoveProvider } from '../contexts/mouse-move-context';
// import SEO from '../components/seo';
// import { DefaultSeo } from 'next-seo';
// import defaultSEOConfig from '../../next-seo.config';

// function MyApp( { Component, pageProps } ) {
//     const router = useRouter();
//     useEffect( () => {
//         sal( { threshold: 0.1, once: true } );
//     }, [router.asPath] );

//     useEffect( () => {
//         sal();
//     }, [] );
//     return (
//         <React.Fragment>
//             <SEO font="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Spartan:wght@400;500;600;700;800&display=swap" />
//             <Provider store={ store }>
//                 <ThemeProvider defaultTheme="light">
//                     <MouseMoveProvider>
//                     <DefaultSeo {...defaultSEOConfig} />
//                         <Component { ...pageProps } />
//                     </MouseMoveProvider>
//                     <Theme />
//                 </ThemeProvider>
//             </Provider>
//         </React.Fragment>
//     )
// }

// export default MyApp;
