(() => {
  const projectsHTML = document.getElementById("projects");
  projects.reverse();

  let html = "";
  projects.forEach(project => {
    html += `
      <div class="project">
        <div class="project__left">
          <div class="project__image">
            <img src="${'https://github.com/' + project.github + '.png'}" alt="profile image">
          </div>
        </div>
        <div class="project__right">
          <div class="project__name">${project.name}</div>
          <div class="project__college">${project.college}</div>
          <div class="project__socials">
            ${project.github ? `<a href="${'https://github.com/' + project.github}" target="_blank">
              <img src="img/images/Picture10.png" alt="GitHub">
            </a>` : ''}
            ${project.linkedin ? `<a href="${project.linkedin}" target="_blank">
              <img src="img/social/linkedin-logo.svg" alt="LinkedIn">
            </a>` : ''}
            ${project.website ? `<a href="${project.website}" target="_blank">
              <img src="img/social/website-logo.svg" alt="Website">
            </a>` : ''}
          </div>
        </div>
      </div>
    `
  });
  projectsHTML.innerHTML = html;
})()