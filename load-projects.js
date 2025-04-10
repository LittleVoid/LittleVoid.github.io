window.addEventListener('DOMContentLoaded', () => {
    const checkProjectsExist = () => {
      const container = document.getElementById("projectList");
      if (container && window.projects) {
        window.projects.forEach(project => {
          const html = `
            <div class="flex flex-col md:flex-row bg-gray-800 p-6 rounded-xl shadow-lg">
              <div class="md:w-1/2 mb-4 md:mb-0">
                <div class="aspect-video w-full">
                  <iframe
                    class="rounded-lg"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/${project.videoId}"
                    title="${project.title}"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div class="md:w-1/2 md:pl-6 flex flex-col justify-center">
                <h3 class="text-2xl font-semibold mb-2">${project.title}</h3>
                <p class="mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2">
                  ${project.tags.map(tag => `<span class="bg-purple-900 text-white px-3 py-1 rounded-full text-sm">${tag}</span>`).join('')}
                </div>
              </div>
            </div>
          `;
          container.innerHTML += html;
        });
      } else {
        // Retry in case content not loaded yet
        setTimeout(checkProjectsExist, 200);
      }
    };
  
    checkProjectsExist();
  });
  