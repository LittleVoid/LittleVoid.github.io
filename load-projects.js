window.addEventListener('DOMContentLoaded', () => {
    const checkProjectsExist = () => {
      const container = document.getElementById("projectList");
      if (container && window.projects) {
        window.projects.forEach(project => {
          const html = `
  <div class="flex flex-col md:flex-row bg-gray-800 p-6 rounded-xl shadow-xl glow-hover">
    
    <!-- Left: Video -->
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

    <!-- Right: Text & Bottom Layout -->
    <div class="md:w-1/2 md:pl-6 flex flex-col justify-between mx-4">
      
      <!-- Top Content -->
      <div class="text-white">
        <h3 class="text-6xl font-bold mb-6">${project.title}</h3>
        <p class="text-sm text-purple-400 uppercase tracking-wide mb-12">${project.genre}</p>
        <p class="text-2xl font-semibold mb-16">Role: ${project.role}</p>
        <p class="text-4xl text-gray-300">${project.roleDescription}</p>
      </div>

      <!-- Bottom Content -->
      <div class="flex justify-between items-end mt-6">
        
        <!-- Tags (bottom left) -->
        <div class="flex flex-wrap gap-2">
          ${project.tags.map(tag => `<span class="bg-purple-900 text-white px-3 py-1 rounded-full text-sm">${tag}</span>`).join('')}
        </div>
        
        <!-- Buttons (bottom right) -->
        <div class="flex gap-4">
          ${project.moreLink ? `<a href="${project.moreLink}" class="px-8 py-2 bg-purple-700 text-white rounded hover:bg-purple-600 transition">More</a>` : ""}
          ${project.playLink ? `<a href="${project.playLink}" target="_blank" class="px-8 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition">Play</a>` : ""}
        </div>

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
  