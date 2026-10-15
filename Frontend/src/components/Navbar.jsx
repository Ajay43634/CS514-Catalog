const navigation = [
  { id: "catalog", label: "Course Catalog" },
  { id: "overview", label: "Overview & Instructions" },
  { id: "about", label: "About" },
  { id: "blog", label: "Blog" },
  { id: "files", label: "Project Files" },
];

export default function Navbar({ activePage, onNavigate }) {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="brand">
          <strong>CS Course Catalog</strong>
          <span>CS 514 · Draft Project</span>
        </div>

        <nav aria-label="Main navigation">
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activePage === item.id ? "nav-active" : ""}
              aria-current={activePage === item.id ? "page" : undefined}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}