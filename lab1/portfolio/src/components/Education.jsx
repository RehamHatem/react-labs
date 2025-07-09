import '../Education.css';

function Education() {
  const educationList = [
    {
      title: "Bachelor's Degree in Computer Science and Artificial Intelligence",
      institution: "Cairo University, Giza, Egypt",
      duration: "2020 - 2024"
    },
    {
      title: "Flutter Development Diploma",
      institution: "Route IT Center"
    },
    {
      title: "Full Stack PHP Web Development",
      institution: "ITI Trainee",
      duration: "March 2025 - Present"
    },
    {
      title: "Machine Learning, Deep Learning, Supervised/Unsupervised/Reinforcement Learning",
      institution: "Coursera"
    }
  ];

  return (
    <section id="education">
      <div>
        <h2>Education & Courses</h2>
        {educationList.map((item, index) => (
          <div className="education-item" key={index}>
            <h4>{item.title}</h4>
            <p>{item.institution} {item.duration ? `| ${item.duration}` : ''}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
