  async function loadPortfolioDetails() {
    // Get project slug from query params
    const urlParams = new URLSearchParams(window.location.search);
    const projectSlug = urlParams.get("id") || "magic-rewards"; // default project

    // Fetch JSON data
    const response = await fetch("projects.json");
    const data = await response.json();
    console.log(data);
    const project = data.projects[projectSlug];

    if (!project) {
      document.querySelector(".page-title h1").textContent = "Project Not Found";
      return;
    }

    // Page title
    document.querySelector(".page-title h1").textContent = project.title;

    // Image(s)
    document.querySelector(".swiper-wrapper").innerHTML = `
      <div class="swiper-slide">
        <img src="${project.image}" alt="${project.title}" class="img-fluid" loading="lazy">
      </div>
    `;

    // Info section
    const infoHTML = `
      <li><strong>Category</strong>: ${project.category}</li>
      <li><strong>Role</strong>: ${project.Role}</li>
    `;
    document.querySelector(".portfolio-info ul").innerHTML = infoHTML;

    // Overview
    const overviewHTML = `<p>${project.overview}</p>`;
    const descBox = document.querySelector(".portfolio-description");
    descBox.querySelectorAll("p").forEach(p => p.remove());
    descBox.querySelector("h2").insertAdjacentHTML("afterend", overviewHTML);

    // Features
    const featuresHTML = project.key_features.map((f, i) => `
      <div class="col-md-6">
        <div class="feature-item" data-aos="fade-up" data-aos-delay="${400 + i * 100}">
          <i class="bi ${f.icon}"></i>
          <h4>${f.heading}</h4>
          <p>${f.feature}</p>
        </div>
      </div>
    `).join("");
    document.querySelector(".features .row").innerHTML = featuresHTML;
  }

  loadPortfolioDetails();

