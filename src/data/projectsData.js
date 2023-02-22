// import youtubeGif from "../assets/youtube.gif";
// import bodegaGif from "../assets/bodega.gif";
import eventfulGif from "../assets/eventful.gif";
import calcGif from "../assets/calcGiphy1.gif"

const projectsData = [
  {
    src: eventfulGif,

    caption:
      "A full stack application. The Event(ful) app is a one-stop shop for your vendor-booking organization. Save time and reduce the stress of planning an event by using this site to search for and favorite vendors that you need, while keeping track of the vendors you’ve booked and your budget, all in one place! ",
    technologies: ["NodeJS", "Express", "PostgreSQL", "Firebase", "React", "CSS", "Toastify" , "Netlify", "Heroku" ],
    alt: "event planning app giphy",
    title: "Event(ful)",
    githubLink: "https://github.com/teyannaearle/Event-ful",
    siteLink: "https://eventful-application.netlify.app/"
  }, 
  {
    src: calcGif,
    caption:"A basic React calculator. Add, subtract, multiply and divide to your heart's content",
    technologies: ["React", "CSS", "Netlify"],
    title:"React Calculator",
    githubLink:"https://github.com/teyannaearle/react_calculator",
    siteLink:"https://teyannas-calculator.netlify.app/"
  }
  // {
  //   src: bodegaGif,
  //   caption: "A full stack application. Users are able to perform full CRUD actions to add, edit, update and delete items from the online store.",
  //   technologies: ["Express", "PostgreSQL", "React", "CSS", "Netlify", "Heroku" ],
  //   alt: "online bodega app giphy",
  //   title: "Online Bodega",
  //   githubLink: "https://github.com/angelinaebreo/Online-Bodega-PERN-Store",
  //   siteLink: "https://online-bodega.netlify.app/"
  // },
  // {
  //   src: youtubeGif,
  //   caption: "A YouTube clone. Users can search for and watch any videos that exist on YouTube. They can also leave comments, like and dislike comments, as well as choose their very own avatar (avatar options change on refresh)! ",
  //   technologies: ["YouTube Data API" , "Firebase", "React", "CSS"],
  //   alt: "youtube clone app giphy",
  //   title: "YouTube?",
  //   githubLink: "https://github.com/teyannaearle/youtube_react_application",
  //   siteLink: "https://youtube-earle-ebreo.netlify.app/"
  // }
];
export default projectsData;
