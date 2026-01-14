module.exports = {
  siteTitle: "Interoke Digital | Full-Stack Developer | Bath, Bristol, Wiltshire", // <title>
  manifestName: 'Interoke Digital',
  manifestShortName: 'Interoke Digital', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#FDB813',
  manifestThemeColor: '#FDB813',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/icon-grey.png',
  pathPrefix: ``, // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Ben',
  lastName: 'Lumley',
  // Local business info
  location: {
    city: 'Bath',
    region: 'Wiltshire',
    country: 'England',
    areas: ['Bath', 'Bristol', 'Wiltshire', 'UK'],
  },
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/benlumley',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://linkedin.com/in/benlumley/',
    },
    {
      icon: 'fa-stack-overflow',
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/39161/benlumley',
    },
  ],
  email: 'hello@interokedigital.co.uk',
  phone: '07732 806321',
  // Google Analytics - add your tracking ID here
  googleAnalyticsId: process.env.GATSBY_GA_ID || '',
};
