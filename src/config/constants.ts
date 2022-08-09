export const APP_NAME = 'Portfolio';
export const APP_VERSION = '1.0.0';

export const DOMAIN = 'karimwael.com';
export const APP_URL = `https://${DOMAIN}`;

export const __prod__ = process.env.NODE_ENV == 'production';
export const __dev__ = !__prod__;

export const METADATA = {
  title: 'Karim Wael | Software Engineer',
  description:
    'Karim Wael is a self-taught Undergraduate Full-Stack Software Engineer with 5-6 years whose main passion is to build projects with ideas out of the box.',
};
