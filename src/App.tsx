import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header className="hero-section">
        <div className="hero-content">
          <img src="/src/assets/react.svg" alt="Avatar" className="avatar" />
          <h1>Nguyễn Văn A</h1>
          <h2>Web Developer</h2>
          <p>Sinh viên năm 4 mới ra trường, đam mê phát triển web hiện đại, sáng tạo và hiệu quả.</p>
          <div className="hero-links">
            <a href="#contact">Liên hệ</a>
            <a href="#projects">Dự án</a>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </header>
      <main>
        <section className="skills-section" id="skills">
          <h2>Kỹ năng</h2>
          <ul className="skills-list">
            <li>HTML, CSS, JavaScript, TypeScript</li>
            <li>React, Next.js, Vue</li>
            <li>Node.js, Express</li>
            <li>MongoDB, MySQL</li>
            <li>Git, Figma, Docker</li>
          </ul>
        </section>
        <section className="projects-section" id="projects">
          <h2>Dự án nổi bật</h2>
          <div className="projects-list">
            {/* Thay thế các project bên dưới bằng dự án thật của bạn */}
            <div className="project-card">
              <img src="https://placehold.co/300x180" alt="Project 1" />
              <h3>Project 1</h3>
              <p>Mô tả ngắn về dự án, công nghệ sử dụng, vai trò của bạn.</p>
              <a href="https://github.com/your-github/project1" target="_blank" rel="noopener noreferrer">Xem GitHub</a>
            </div>
            <div className="project-card">
              <img src="https://placehold.co/300x180" alt="Project 2" />
              <h3>Project 2</h3>
              <p>Mô tả ngắn về dự án, công nghệ sử dụng, vai trò của bạn.</p>
              <a href="https://github.com/your-github/project2" target="_blank" rel="noopener noreferrer">Xem GitHub</a>
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <h2>Liên hệ</h2>
          <ul className="contact-list">
            <li>Email: <a href="mailto:your.email@gmail.com">your.email@gmail.com</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-linkedin</a></li>
            <li>GitHub: <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">github.com/your-github</a></li>
          </ul>
        </section>
      </main>
      <footer>
        <p>© 2024 Nguyễn Văn A. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
