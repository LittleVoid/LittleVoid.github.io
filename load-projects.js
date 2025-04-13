import { tagIcons } from './tag-icons.js';

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

  <!-- Right: Text & Layout -->
  <div class="relative md:w-1/2 md:pl-6 flex flex-col justify-between mx-4">

    <!-- Top-Right Tags -->
    <div class="absolute top-0 right-0 mt-4 mr-4 flex flex-wrap gap-2 justify-end">
      ${project.topTags?.map(tag => `
        <span class="bg-yellow-500 text-black px-4 py-1.5 rounded-full text-sm font-semibold shadow-md uppercase tracking-wide">${tag}</span>
      `).join('')}
    </div>

    <!-- Top Content -->
    <div class="text-white space-y-6">
      <h3 class="text-6xl font-bold">${project.title}</h3>
      <p class="text-sm text-purple-400 uppercase tracking-wide">${project.genre}</p>
      <p class="text-2xl font-semibold">Role: ${project.role}</p>
      <p class="text-4xl text-gray-300 max-w-[90%]">${project.roleDescription}</p>
    </div>

    <!-- Bottom Row -->
    <div class="flex justify-between items-end mt-6">

      <!-- Bottom Left: Tags -->
      <div class="flex flex-wrap gap-2">
        ${project.tags.map(tag => {
          const tagIcon = tagIcons[tag];
          const iconHTML = tagIcon 
            ? `<img src="${tagIcon.icon}" alt="${tagIcon.alt}" class="w-4 h-4 inline-block mr-1 align-text-bottom" />` 
            : "";
        
          return `<span class="bg-purple-900 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">${iconHTML}${tag}</span>`;
        }).join('')}
      </div>

      <!-- Bottom Right: Buttons -->
      <div class="flex gap-4 text-2xl font-bold">
        <div class="relative group">
          <span class="block px-10 py-4 bg-purple-700 text-white rounded transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-95">More</span>
          <span class="absolute inset-0 flex items-center justify-center px-8 py-2 bg-purple-700 text-white rounded opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
            Coming soon...
          </span>
        </div>

        ${project.playLink ? `
          <a href="${project.playLink}" target="_blank" class="px-10 py-4 bg-green-600 text-white rounded hover:bg-green-500 transition">
            Play
          </a>
        ` : ""}
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
  