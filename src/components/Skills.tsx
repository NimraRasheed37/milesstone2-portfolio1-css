import Image from "next/image";

const skills = [
  { name: "HTML", percentage: "90%", logo: "/img/skills-logo/logo-html.webp" },
  { name: "CSS", percentage: "80%", logo: "/img/skills-logo/logo-css.webp" },
  { name: "JavaScript", percentage: "60%", logo: "/img/skills-logo/logo-js.jpg" },
  { name: "TypeScript", percentage: "60%", logo: "/img/skills-logo/logo-ts.png" },
  { name: "Bootstrap", percentage: "50%", logo: "/img/skills-logo/logo-bootstrap.png" },
  { name: "Tailwind", percentage: "80%", logo: "/img/skills-logo/logo-tailwind.webp" },
  { name: "React", percentage: "50%", logo: "/img/skills-logo/logo-react.png" },
  { name: "Node.js", percentage: "40%", logo: "/img/skills-logo/logo-node.png" },
  { name: "Next.js", percentage: "70%", logo: "/img/skills-logo/logo-nextjs.png" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h2 className="skill-name">{skill.name}</h2>
            <span className="skill-percentage">{skill.percentage}</span>
            <div className="skill-progress">
              <div
                className="skill-circle"
                style={{
                  background: `conic-gradient(#3e362e 0% ${skill.percentage}, #d3d3d3 ${skill.percentage} 100%)`,
                }}
              >
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  width={40}
                  height={40}
                  className="skill-logo"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
