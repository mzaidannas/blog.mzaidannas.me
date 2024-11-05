export const navbarData = {
  homeTitle: 'Zaid\'s Blog',
}

export const footerData = {
  author: 'Zaid Annas',
  aboutAuthor: 'Hi! I am Zaid Annas, a Tech enthusiast, Problem solver and Software engineer. Currently working at Transreport.',
  authorInterest: 'I have a fair amount of knowledge in Full Stack Development, Distributed Systems and Data Engineering. If you have an interesting idea, either open source or paid let\'s connect.',
  aboutTheSite: 'This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Currently it\'s deployed in Vercel.',
}

export const homePage = {
  title: 'Welcome To My Blog Site',
  description: 'Get Web Development, Databases, Data Engineering, Linux, Backend Development Tips, Learning resources and more.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description: 'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Zaid Annas',
  description: 'Software Engineer, Data Engineer, Problem Solver, Web Enthusiast, Gamer.',
  aboutMe: 'Hello, fellow techis! I\'m a software wizard who spends most of his day crafting code spells at @Transreport in the RailSafe team. When I\'m not crafting code, you will find me tinkering with operating systems, playing video games, or solving solutions to problems that are prevalent in the tech world. I\'m passionate about testing my skills on sufficiently advanced problems. I\'m excited to connect with you and see how we can make the tech world a better place. Welcome to my blog! :)',
}

export const seoData = {
  description: 'Zaid Annas, Software Engineer at Transreport, with over 8+ years experience in full stack development.',
  ogTitle: 'Zaid Annas codes and helps others learn Web Development, Backend Development, Data Engineering & Problem Solving',
  twitterDescription: 'My blog website, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc',
  image: 'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://mzaidannas.me',
  twitterHandle: '@mzaidannas',
  mailAddress: 'm.zaid.annas@gmail.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
