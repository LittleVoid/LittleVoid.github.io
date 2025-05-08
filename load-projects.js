import { tagIcons } from './tag-icons.js';

export function loadProjects() {
  const checkProjectsExist = () => {
    const container = document.getElementById("projectList");
    if (container && window.projects) {
      container.innerHTML = "";
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
  
    <!-- Top Tags for Mobile -->
    <div class="flex flex-wrap gap-2 justify-end mb-4 md:hidden">
      ${project.topTags?.map(tag => `
        <span class="bg-yellow-500 text-black px-4 py-1.5 rounded-full text-sm font-semibold shadow-md uppercase tracking-wide">${tag}</span>
        `).join('')}
        </div>

    <!-- Top-Right Tags for Desktop-->
    <div class="absolute top-0 right-0 mt-4 mr-4 flex flex-wrap gap-2 justify-end hidden md:flex">
      ${project.topTags?.map(tag => `
        <span class="bg-yellow-500 text-black px-4 py-1.5 rounded-full text-sm font-semibold shadow-md uppercase tracking-wide">${tag}</span>
      `).join('')}
    </div>

    <!-- Top Content -->
    <div class="text-white space-y-6">
      <h3 class="text-6xl font-bold">${project.title}</h3>
      <p class="text-sm text-purple-400 uppercase tracking-wide">${project.genre}</p>
      <p class="text-2xl font-semibold">Role: ${project.role}</p>
      <p class="text-xl sm:text-2xl lg:text-4xl text-gray-300 max-w-[90%]">${project.roleDescription}</p>
    </div>

    <!-- Bottom Row -->
<div class="flex flex-col-reverse md:flex-row justify-between items-start md:items-end mt-6 gap-4">

  <!-- Bottom Left: Tags (will appear first on mobile due to column-reverse) -->
  <div class="flex flex-wrap gap-2">
    ${project.tags.map(tag => {
      const tagIcon = tagIcons[tag];
      const iconHTML = tagIcon 
        ? `<div class="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <img src="${tagIcon.icon}" alt="${tagIcon.alt}" class="w-5 h-5" />
          </div>`
        : "";
    
      return `<span class="bg-purple-900 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">${iconHTML}${tag}</span>`;
    }).join('')}
  </div>

  <!-- Bottom Right: Buttons -->
<div class="flex gap-4 text-2xl font-bold">
  
  <!-- More Button (Links to Project Detail Page) -->
  <a 
    href="?page=project-detail.html&project=${project.id}" 
    class="px-10 py-4 bg-purple-700 text-white rounded hover:bg-purple-600 transition-all duration-300 ease-in-out"
  >
    More
  </a>

  <!-- Optional Play Button -->
  ${project.playLink ? `
    <a 
      href="${project.playLink}" 
      target="_blank" 
      class="px-10 py-4 bg-green-600 text-white rounded hover:bg-green-500 transition"
    >
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
      setTimeout(checkProjectsExist, 200);
    }
  };

  checkProjectsExist();
}
