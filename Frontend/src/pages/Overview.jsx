export default function Overview() {
  return (
    <section className="text-page">
      <h1>Overview & Instructions</h1>

      <div className="card">
        <h2>What is this project?</h2>
        <p>
          Our project aims to help students explore major requirements,
          understand course prerequisites, and track completed courses
          in one place.
        </p>
      </div>

      <div className="card">
        <h2>How to use the catalog</h2>
        <ol className="steps">
          <p>
            Select Course Catalog in the navigation.
          </p>
          <p>
            Enter a course code or title in the search box.
          </p>
          <p>
            Use the curriculum section dropdown to narrow the results.
          </p>
          <p>
            Select “Details & prerequisites” on a course to view its
            description and prerequisite information.
          </p>
          <p>
            Select “View catalog entry” to open the course’s source
            catalog page, when a link is available.
          </p>
          <p>
            Select “Clear filters” to display all courses again.
          </p>
        </ol>
      </div>

      <div className="card">
        <h2>Available in this draft</h2>
        <ul>
          <p>Browse courses included in the provided CSV.</p>
          <p>Search by course code or course title.</p>
          <p>Filter by curriculum section.</p>
          <p>Expand course descriptions and prerequisite details.</p>
          <p>Open linked source catalog entries.</p>
        </ul>
      </div>

      <div className="card">
        <h2>Planned features</h2>
        <ul>
          <p>Account creation and login.</p>
          <p>Saving completed courses to a student account.</p>
          <p>Browsing requirements for different majors.</p>
          <p>Semester-by-semester degree planning as a stretch goal.</p>
        </ul>
      </div>

      <div className="card">
        <h2>Current limitations</h2>
        <p>
          The catalog displays only the records we have scraped so far for our database.
          It should not be treated as a complete or current list of all
          graduation requirements.
        </p>
        <p>
          Prerequisites are displayed as text. The application does not
          yet evaluate eligibility, prerequisite alternatives, or
          concurrent enrollment requirements.
        </p>
        <p>
          Search and filter selections reset when you leave the catalog
          screen or refresh the page. There is no account-based saving
          in this draft.
        </p>
      </div>
    </section>
  );
}