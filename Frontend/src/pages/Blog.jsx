import { team } from "../data/team";

const blogPosts = {
  Rafael: `Our project is a site that would allow SDSU students to quickly look at class catalogs for their
respective major and see what classes they need to take, as well as the prerequisites for those classes.
What makes our approach unique is bringing course information, prerequisites, and curriculum sections
together in a searchable layout. Students can search for a specific class or filter by curriculum section
to find the information they need more easily. My role in the project is working on the frontend, including
the page navigation, course search, curriculum filters, and displaying class information.`,
  Gian: ``,
  Bradley: `The SDSU Catalog site is designed to optimize the speed that the SDSU Catalog information can be gathered. 
The current SDSU Catalog site is very slow for simple queries, and even slower when looking up complex queries.
Our site solves this by using modern technology and SQL Databases with quicker queries to make gathering information bearable.`,
  Ajay: ``,
  Mateo: ``,
};

export default function Blog() {
  return (
    <section className="text-page">
      <h1>Team Blog</h1>

      <p>
        Each team member describes the project, its purpose, and what
        makes it unique.
      </p>

      {team.map((member) => {
        const paragraph = blogPosts[member.name];

        return (
          <article className="card" key={member.name}>
            <h2>{member.name} - {member.role}</h2>
            {paragraph ? (
              <p>{paragraph}</p>
            ) : (
              <p className="placeholder">
                {member.name}’s paragraph
              </p>
            )}
          </article>
        );
      })}
    </section>
  );
}