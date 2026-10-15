import { useState } from "react";
import { courses } from "../data/courses";

export default function CourseCatalog() {
    const [search, setSearch] = useState("");
    const [section, setSection] = useState("All");

    const uniqueSections = [
        ...new Set(
            courses
                .map((course) => course.curriculum_section)
                .filter(Boolean)
        ),
    ];

    const priority = ["Major Prerequisites", "Major"];

    const sections = [
        "All",
        ...priority.filter((section) => uniqueSections.includes(section)),
        ...uniqueSections
            .filter((section) => !priority.includes(section))
            .sort((a, b) => a.localeCompare(b)),
    ];

    const query = search.trim().toLowerCase();

    const filteredCourses = courses.filter((course) => {
        const searchableText =
            `${course.course_code} ${course.course_title}`.toLowerCase();

        const matchesSearch = searchableText.includes(query);
        const matchesSection =
            section === "All" || course.curriculum_section === section;

        return matchesSearch && matchesSection;
    });

    function clearFilters() {
        setSearch("");
        setSection("All");
    }

    return (
        <section>
            <div className="page-heading">
                <h1>Course Catalog</h1>
                <p>
                    Browse computer science curriculum data and review course
                    descriptions and prerequisites.
                </p>
            </div>

            <div className="filters">
                <label>
                    Search courses
                    <input
                        type="search"
                        placeholder="Try CS 210 or Data Structures"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </label>

                <label>
                    Curriculum section
                    <select
                        value={section}
                        onChange={(event) => setSection(event.target.value)}
                    >
                        {sections.map((item) => (
                            <option key={item} value={item}>
                                {item === "Preparation for the Major"
                                    ? "Major Prerequisites"
                                    : item}
                            </option>
                        ))}
                    </select>
                </label>

                <button
                    type="button"
                    className="secondary-button"
                    onClick={clearFilters}
                >
                    Clear filters
                </button>
            </div>

            <p className="result-count" role="status">
                Showing {filteredCourses.length} of {courses.length} courses
            </p>

            {filteredCourses.length === 0 ? (
                <div className="card empty-state">
                    <h2>No courses found</h2>
                    <p>Try another search or clear your filters.</p>
                </div>
            ) : (
                <div className="course-grid">
                    {filteredCourses.map((course) => (
                        <article className="card" key={course.course_code}>
                            <div className="course-header">
                                <span className="course-code">
                                    {course.course_code}
                                </span>

                                <span className="badge" style={{ marginLeft: "12px" }}>
                                    {course.units} units
                                </span>
                            </div>

                            <h2>{course.course_title}</h2>

                            <p className="muted">
                                {course.curriculum_section}
                            </p>

                            <details>
                                <summary>
                                    Details & prerequisites
                                    <span className="sr-only">
                                        {" "}for {course.course_code}
                                    </span>
                                </summary>

                                <h3>Description</h3>
                                <p>
                                    {course.description ||
                                        "No description provided in the dataset."}
                                </p>

                                <h3>Prerequisites</h3>
                                <p>
                                    {course.prerequisites ||
                                        "No prerequisite information provided in the dataset."}
                                </p>

                                {course.catalog_url && (
                                    <a
                                        href={course.catalog_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View catalog entry ↗
                                    </a>
                                )}
                            </details>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}