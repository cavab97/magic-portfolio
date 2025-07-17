import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "LEONG",
  lastName: "WEI MEN",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/leongweimen.jpg",
  location: "Asia/Kuala Lumpur", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Malay", "Mandarin"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/leong-wei-men-3380731b0/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:tanyoke@hotmail.my",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design engineer and builder</>,
  subline: (
    <>
      I'm Leong Wei Men, a design engineer at <InlineCode>FLY</InlineCode>,
      where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/leong-erddhp",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        LEONG WEI MEN is a Malaysia-based software engineer with hands-on
        experience in both Singaporean and Malaysian working cultures.
        Specializing in mobile application development using React Native and
        Flutter, Wei Men is passionate about building seamless, high-performance
        mobile experiences. He transforms complex requirements into intuitive,
        scalable solutions, bridging the gap between design and technology to
        deliver user-centric, cross-platform applications.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Itvantages ",
        timeframe: "April 2024 - December 2024",
        role: "Mobile Application Developer",
        achievements: [
          <>
            Consistently ensured well-functioning applications by testing the
            app’s functionality after each dependency upgrade and resolving any
            arising complex technical issues promptly.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/itvantages/appStock.png",
            alt: ".. Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "ShipsFocus",
        timeframe: "2022 - 2024",
        role: "Mobile Application Developer",
        achievements: [
          <>
            Collaborated with product managers and designers to translate
            requirements into technical specifications, ensuring timely and
            successful project deliveries.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/shipsfocus/tiansanIpadMap.png",
            alt: ".. Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Lignar Lab",
        timeframe: "2021 - 2022",
        role: "Full Stack Developer",
        achievements: [
          <>
            Collaborated with the UX/UI team to optimize the user interface and
            improvement in user satisfaction. Actively participated in
            brainstorming and knowledge-sharing initiatives, providing
            innovative solutions to challenges and conducting workshops on new
            tools and techniques, leading to a more efficient team and improved
            workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "Marslab Solution",
        timeframe: "2021 - 2021",
        role: "Software Engineering",
        achievements: [
          <>
            Built and maintained mobile applications for clients. Experience in
            implementing state and props in React Native projects. Experience in
            maintaining mobile applications in Flutter development.
          </>,
        ],
        images: [],
      },
      {
        company: "Marslab Solution",
        timeframe: "2020 - 2020",
        role: "Intern-Software Engineering",
        achievements: [
          <>
            Experience in Visual Studio suite of products . Exposure to React
            Native for building web apps. Exposure to WordPress Elementor for
            building websites. Experience working for a startup.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Southern University College",
        description: <>Studied Bachelor of software engineering.</>,
      },
      // {
      //   name: "Southern University College",
      //   description: <>Studied Foundation in Art.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Bridge the gap: Figma designs, shipped as working code.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/itvantages/stockFigma.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/lignar/lignarFigma.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "React Native",
        description: (
          <>
            I build performant cross-platform apps with modern React Native,
            bridging design and engineering.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/shipsfocus/yorksg.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
