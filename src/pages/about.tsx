import AuthorLayout from '../layouts/AuthorLayout';
import avatar from '../../data/authors/marco.jpeg'

const About = () => {

  const content = {
    name: 'Marco Antonio Gonzalez Junior',
    avatar: avatar,
    occupation: 'Software Engineer',
    company: 'IBM',
    email: 'm@rco.sh',
    twitter: 'https://twitter.com/kayaman',
    linkedin: 'https://linkedin.com/in/marcoantoniogonzalezjunior',
    github: 'https://github.com/kayaman'
  }
  
  return (

    <AuthorLayout content={content} avatar={avatar}>
      
      <div>I am an engineer who loves challenges, hard problems and to learn something new everyday. I am a fast paced and proactive self learner. I have passion for learning new idioms, languages and technologies. I am a result-oriented and motivated person, and I assume responsibilities.</div>

      <div>I have over 20 years of programming experience, what made me become a polyglot programmer. Experienced technical leader. Problem solver: solid engineering foundation. Passionate about evangelism, research and sharing bleeding edge technologies. Experience with Basic, Assembler, Cobol, Pascal, C, C++, PHP, Java, JavaScript, Python, Ruby, R and others. Full stack and DevOps. Web development frameworks. Polyglot persistence. Deep web standards and HTTP knowledge. Great UNIX/Linux experience. Deep knowledge of Facebook and Google applications and APIs.</div>

      <div>Besides having a strong technical education, I appreciate working with people and the exchange of knowledge and experiences between different people. For me it is easy to relate to people and to work in teams. Leadership attitude and management ability are natural features that I intend to improve professionally with technique and experience.</div>

      <div>Over the last months I dedicated all my free time to studying and learning emerging technologies and frameworks. I love to learn new things and got excited about the number of new stacks I've found along the way. The list is huge. TypeScript, Zod, NextJS, Vercel, React, Sanity.io, Prisma, TypeORM, NestJS, Nuxt, tRPC, Vite, Vitest, Pactum, Algolia, Tailwind, Styled Components.. among others! And it doesn't seem to end. I would love to get an opportunitty to work with new stuff like this ones!</div>
  </AuthorLayout>
  )
}

export default About