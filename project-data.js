// project-data.js

export const detailedProjects = {

  // Project: Kyoto Conflict
    "kyoto-conflict": {
      title: "Kyoto Conflict",
      image: "images/projects/kyoto_conflict/project_kyoto_logo.png",

      info: {
        genre: "Tactical Shooter",
        engine: "Unreal Engine",
        teamSize: "13 people",
        duration: "8 weeks",
        role: "Design Lead"
      },
      shortDescription: "In this online-only first-person shooter, you'll be thrust into a world where tradition is challenged by futuristic technology in a brutal fight for dominance.At the center of this conflict lies the coveted artifact—a helmet of immense power, capable of turning the tide of battle and securing victory for its possessors.",
      sections: [
        {
          title: "Level Design",
          text: "For Kyoto Conflict, we aimed for a traditional three-lane map layout—a classic structure known from competitive multiplayer shooters. However, our goal was to implement player guidance in a subtle way, ensuring that players were naturally directed through the environment without overt markers.<br><br>I started the level design process with 2D sketches, which were then translated into graybox blockouts in Unreal Engine. From there, I iteratively refined the layout and flow using the provided art assets, while making sure each route offered distinct strategic value for both teams. Key areas of focus included maintaining sightlines, balancing risk and reward across paths, and encouraging movement variety without overwhelming the player.",
          image: "images/projects/kyoto_conflict/project_kc_leveldesign.png"
        },
        {
          title: "Playtesting",
          text: "Since Kyoto Conflict was an online multiplayer shooter, extensive playtesting was crucial. Unlike single-player projects, we had to plan test sessions involving multiple players, which required time management and precise coordination.<br><br>Every change—whether in map layout or gameplay logic—had to be tested repeatedly to ensure no new bugs or imbalances were introduced. I worked closely with Taiga and the QA team to manage a structured, document-based bug tracking system. Each report was written clearly and directed to the appropriate department, ensuring fast iteration and fixes.",
          image: "images/projects/kyoto_conflict/project_kc_playtest.png"
        },
        {
            title: "Cross-Discipline Collaboration",
            text: "As Design Lead, one of my core responsibilities was communication across departments. Coordinating with programmers, artists, and audio designers meant being in frequent meetings, answering questions, and helping others understand how their work connected to the overall game design.<br><br>Balancing this communication load with my own tasks was a constant challenge, so I focused on efficient time management and clear documentation to support smooth collaboration. Acting as a bridge between departments gave me a stronger understanding of team dynamics and the value of unified creative direction.",
          image: "images/projects/kyoto_conflict/project_kc_crossdisc.png"
        },
        {
          title: "Documentation",
          text: "Strong documentation was key to the success of Kyoto Conflict. Together with the Producer deparment I ensured that all systems, mechanics, level layouts, and gameplay rules were well-documented and accessible to the entire team.<br><br>Good documentation could not only help new team members to be onboard quickly but also served as a reliable reference point during decision-making or feature changes. For the design department, I maintained clear breakdowns of level structure, gameplay flow, and iteration goals.<br><br<Having consistent, up-to-date documentation meant fewer misunderstandings across departments and allowed us to maintain a shared vision—even as the project evolved. It also made internal reviews and feedback sessions more productive and focused. ",
          image: "images/projects/kyoto_conflict/project_kc_documentation.png"
      },
      ]
    },

// Project: Nautilus
"nautilus": {
  "title": "Nautilus",
  "image": "images/projects/nautilus/project_nautilus_logo.png",
  "info": {
    "genre": "Action RPG",
    "engine": "Unreal Engine 5.3",
    "teamSize": "11",
    "duration": "8 weeks",
    "role": "Teach Lead"
  },
  "shortDescription": "In this 3D Action Adventure you play as a resilient human captured by a Great Old One, striving to escape a city filled with monstrous entities and enigmatic dungeon. Armed with a versatile harpoon and magical bracelet, you’ll navigate the intricate dungeon, find keys to unlock new paths and engage in fast-paced combat against terrifying sea creatures.",
  "sections": [
    {
      "title": "Enemy AI",
      "text": "Using Unreal Engine’s Behavior Trees, I developed three distinct enemy types: standard melee, elite melee, and ranged. Each type featured unique behavior patterns, movement styles, and combat reactions. Enemies could dynamically react to player presence through visual detection, sound cues (like footsteps or attacks), and damage taken. For example, ranged enemies maintained distance and sought cover, while elites could enter aggressive states with increased pursuit behavior.<br><br>Balancing complexity with performance was a key challenge—ensuring that AI felt intelligent and reactive without overwhelming the system. Through iteration and testing, we created engaging encounters that required players to adapt their strategies.",
      "image": "images/projects/nautilus/project_nautilus_enemyAI.png"
    },
    {
      "title": "Technical Lead: Structuring a Strong Development Pipeline",
      "text": "As my final project during the programming semester, I stepped into the role of Tech Lead again. I structured the technical development process and collaborated closely with the rest of the programming team to establish priorities, workflows, and clear documentation.<br><br>By drawing on everything I had learned, I was able to help teammates overcome technical roadblocks and ensure our core systems integrated smoothly. It was a valuable experience in leadership, mentorship, and cross-discipline collaboration.",
      "image": "images/projects/nautilus/project_nautilus_teachlead.png"
    },
    {
      "title": "Sound Implementation",
      "text": "Nautilus used FMOD for audio implementation, and I handled the setup and integration of sounds and events across the project. Working with FMOD allowed for precise control over spatial audio, layering, and real-time parameter changes. It streamlined the process and gave us flexibility for sound design without heavy engine-side scripting.<br><br>It also was a nice experience to work closely together with the sound designers, as I was able to help them with the implementation of their sounds and events. I also learned a lot about the FMOD workflow and how to use it effectively in Unreal Engine.",
      "image": "images/projects/nautilus/project_nautilus_fmod.png"
    },
  ]
},

// Project: Arrythmic Death
"arrythmic-death": {
  "title": "Arrythmic Death",
  "image": "images/projects/arrythmic_death/project_ad_logo.png",
  "info": {
    "genre": "Survial Horror",
    "engine": "Unreal Engine 5.1.1",
    "teamSize": "8",
    "duration": "8 weeks",
    "role": "Teach Lead"
  },
  "shortDescription": "Arrythmic Death is a post modern survival horror game, where players explore an eerie expanse of corridors and rooms within an old hotel, attempting to escape from an inexhaustable monster relentlessly pursuing them.",
  "sections": [
    {
      "title": "Movement System",
      "text": "One of the core challenges and innovations in Arrhythmic Death was designing a unique movement system centered around just two keys: A and D. Inspired by games like QWOP, the player moves by tapping these keys in rhythm—a concept that quickly became the defining mechanic of the project.<br><br>Since this was my first experience working in Unreal Engine, the initial prototype was rough, but functional. I approached it with rapid iteration and constant user testing. Feedback loops were essential to improving responsiveness and feel. Small additions, like camera shake and input buffers, added greatly to the sense of physicality and control, and I was able to turn a clunky prototype into a satisfying mechanic that required real skill and attention.<br><br> Developing this system taught me a lot about Unreal’s scripting environment, and input systems, while also showing how a simple mechanical constraint can define a game’s identity.",
      "image": "images/projects/arrythmic_death/project_ad_movement.mp4"
    },
    {
      "title": "Elevator/Puzzle Mechanic",
      "text": "In collaboration with the design lead, I implemented one of the game's key progression mechanics: the Elevator. Players needed to locate four hidden numbers across the map to unlock it—creating a non-linear exploration challenge in a tightly scoped level.<br><br>The design encouraged players to fully engage with the environment and offered a clear reward for exploration without relying on combat or traditional puzzles. My responsibility was to ensure the system was functional and readable, including UI integration, trigger zones, and the logic for validating input. <br><br>Balancing clarity with discovery was central here, and this mechanic helped elevate the pacing of the experience while giving players a satisfying goal.",
      "image": "images/projects/arrythmic_death/project_ad_elevator.png"
    },
    {
      "title": "UI Implementation",
      "text": "I was responsible for integrating all core UI elements into the game. This included the main HUD, puzzle interfaces, and visual feedback for the movement system. Using Unreal’s UMG system, I ensured that the UI complemented the game’s unique rhythm-based mechanics without overwhelming the player.<br><br>Each screen was designed with clarity in mind—supporting both gameplay function and aesthetic coherence. I also handled animations, event bindings, and conditional displays based on game state, ensuring the UI always responded to player actions in a satisfying way.",
      "image": "images/projects/arrythmic_death/project_ad_ui.png"
    }
  ]
},

// Project: Aeternox
"aeternox": {
  "title": "Aeternox",
  "image": "images/projects/aeternox/project_aeternox_logo.png",
  "info": {
    "genre": "Action RPG",
    "engine": "Unreal Engine 5.3",
    "teamSize": "16",
    "duration": "8 weeks",
    "role": "Co-Teach Lead"
  },
  "shortDescription": "The main goal of Spectral Production was the development of a 3D Action RPG in Unreal Engine 5.3 with the use of the latest technologies available. Tessellation and displacements made with Nanite were supposed to be used to make the environment look even more stunning, however, as these technologies would not work the way they were supposed to, the team switched to vertex painting with hide blending to achieve a wonderful atmosphere. Whereas level streaming helps keeping the performance in check, the foilage used in the levels are painted with Nanite enabled to further boost performance, while achieving a visual pleasing result. Niagara is used as a base for all VFX.",
  "sections": [
    {
      "title": "Quest System",
      "text": "For Aeternox, I developed a flexible and expandable quest system using Unreal Engine's Data Tables. Designers could easily create various types of quests—including Kill, Collect, Interact, or Find Location—without needing to touch code. I also implemented quest stages and dependencies, allowing quests to unlock based on player progress (e.g., completing Quest A enables Quest B).<br><br>The system featured a fully functional quest log, which displayed relevant quest information like objectives, giver, and dialogue. A tracker kept the active quest visible and updated in real-time, enhancing clarity and immersion for the player. This system enabled scalable content creation and narrative branching, making it a cornerstone of the game’s design.",     
      "image": "images/projects/aeternox/project_aeternox_questDT.png"
    },
    {
      "title": "Dialogue System",
      "text": "Using Unreal’s Behavior Trees, I built a reactive dialogue system that adapted based on completed quests and previous interactions. Dialogue choices and branches were dynamic, allowing the game world to feel responsive to player decisions.<br><br>We added voice recordings—recorded by the team during a dedicated audio session—integrated directly into the system to enhance immersion and bring characters to life.",
      "image": "images/projects/aeternox/project_aeternox_dialogBT.png"
    },
    {
      "title": "Interaction & Cutscenes",
      "text": "I developed the general interaction system for objects in the world, as well as custom triggers that initiated cutscenes based on player actions. These were especially important for the mysterious statues scattered across the game world, which served as major narrative milestones.",
      "image": "images/projects/aeternox/project_aeternox_interaction.mp4"
    },
  ]
},
}