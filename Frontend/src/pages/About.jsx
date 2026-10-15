import { team } from "../data/team";

export default function About() {
  return (
    <section className="text-page">
      <h1>About the Project</h1>

      <div className="card">
        <h2>Our company</h2>
        <p className="placeholder">
          WIP
        </p>

        <h3>Proposed mission</h3>
        <p>
          WIP
        </p>
      </div>

      <div className="card">
        <h2>The problem we want to solve</h2>
        <p>
          Our project aims to organize course information in one
          searchable interface and eventually connect it to a
          student’s completed coursework.
        </p>
      </div>

      <div className="card">
        <h2>Value for students</h2>
        <ul>
          <p>Find course descriptions and prerequisites quickly.</p>
          <p>Browse courses by curriculum section.</p>
          <p>
            Understand course dependencies before planning future
            semesters.
          </p>
          <p>
            Eventually track completed coursework and remaining
            requirements.
          </p>
        </ul>
      </div>

      <h2>Team members</h2>
      <div className="team-grid">
        {team.map((member) => (
          <article className="card" key={member.name}>
            <h3>{member.name} - {member.role}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}