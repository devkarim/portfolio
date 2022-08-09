import Head from 'next/head';
import { DOMAIN, METADATA } from '../config/constants';

const AppHead: React.FC<any> = () => (
  <Head>
    <title>{METADATA.title}</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps:wght@700&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="title" content={METADATA.title} />
    <meta name="description" content={METADATA.description} />
    <meta name="theme-color" content="#000" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={DOMAIN} />
    <meta property="og:title" content={METADATA.title} />
    <meta property="og:description" content={METADATA.description} />
    <meta property="og:image" content="img/template.png" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={DOMAIN} />
    <meta property="twitter:title" content={METADATA.title} />
    <meta property="twitter:description" content={METADATA.description} />
    <meta property="twitter:image" content="img/template.png" />
    <link rel="icon" href="/svg/logo.svg" />
  </Head>
);

export default AppHead;
