const projectFiles = [
  {
    title: "GitHub Repository",
    description:
      "Browse the project source code.",
    url: "https://github.com/AnotherCsStudent/CS514-Catalog",
  },
  {
    title: "Setup Instructions",
    description:
      "Link to instructions for installing dependencies and starting the application.",
    url: "https://github.com/AnotherCsStudent/CS514-Catalog/blob/main/README.md",
  },
  {
    title: "Technical Document",
    description:
      "Link to our technical document (needs to be written still)",
    url: null,
  },
];

export default function ProjectFiles() {
  return (
    <section className="text-page">
      <h1>Project Files</h1>

      <p>
        Access our source code, setup instructions, and draft project
        deliverables.
      </p>

      {projectFiles.map((file) => (
        <article className="card" key={file.title}>
          <h2>{file.title}</h2>
          <p>{file.description}</p>

          {file.url ? (
            <a
              className="file-link"
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open {file.title} ↗
            </a>
          ) : (
            <span className="pending">Not uploaded yet</span>
          )}
        </article>
      ))}
    </section>
  );
}