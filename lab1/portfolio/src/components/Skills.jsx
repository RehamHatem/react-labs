import '../Skills.css';

const technicalSkills = [
  { name: 'Dart & Flutter', level: 85 },
  { name: 'Firebase & APIs', level: 80 },
  { name: 'HTML, CSS, JavaScript', level: 75 },
  { name: 'Python & Machine Learning', level: 70 },
  { name: 'Git & Version Control', level: 80 },
  { name: 'MySQL & MongoDB', level: 65 },
  { name: 'Angular', level: 60 },
];

const personalSkills = [
  { name: 'Team Work', level: 90 },
  { name: 'Creativity', level: 85 },
  { name: 'Work Under Stress', level: 80 },
  { name: 'Learning Flexibility', level: 85 },
];

function Skills () {
  return (
    <section id="skills">
      <div>
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-column">
            {technicalSkills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="skills-column">
            {personalSkills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
