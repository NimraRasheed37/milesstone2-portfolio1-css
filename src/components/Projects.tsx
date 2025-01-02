import Image from "next/image";

const projects = [
  {
    name: "Ababeel Bookstore",
    image: "/img/projects/ababeel.PNG",
    link: "https://milestone3-ecommerce-by-nimra.vercel.app/",
  },
  {
    name: "Panacloud",
    image: "/img/projects/panacloud.PNG",
    link: "https://panaclound-final-assignment-by-nimra.vercel.app/",
  },
  {
    name: "BookWorms Blog",
    image: "/img/projects/blog.PNG",
    link: "https://milestone3-blog-by-nimra-gamma.vercel.app/",
  },
  {
    name: "Music Player",
    image: "/img/projects/music-player.PNG",
    link: "https://music-player-by-nimra.vercel.app/",
  },
  {
    name: "Foodily Ever After",
    image: "/img/projects/food-recipes.PNG",
    link: "https://react-food-recipe-app-by-nimra.vercel.app/",
  },
  {
    name: "Resume Generator",
    image: "/img/projects/rb1.PNG",
    link: "https://resume-builder-by-nimra.vercel.app/",
  },
  {
    name: "Wallpapers Downloader",
    image: "/img/projects/wallpapers.PNG",
    link: "https://wallpaper-downloader-by-nimra-rasheed.vercel.app/",
  },
  {
    name: "Comforty E-commerce",
    image: "/img/projects/comforty.PNG",
    link: "https://q2-hackathon-by-nimra.vercel.app/",
  },
  {
    name: "Jadoo Travel",
    image: "/img/projects/jadoo.PNG",
    link: "https://figma-to-next-js-beige.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <Image
                src={project.image}
                alt={project.name}
                className="image"
                width={300}
                height={150}
              />
            </div>
            <div className="project-info">
              <h2 className="project-name">{project.name}</h2>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
