// project-data.js

export const detailedProjects = {
    'kyoto-conflict': {
      title: "Kyoto Conflict",
      info: {
        genre: "Tactical Shooter",
        engine: "Unreal Engine",
        teamSize: "6 people",
        duration: "10 weeks",
        role: "Design Lead"
      },
      shortDescription: "A tactical shooter set in futuristic Kyoto where players must navigate hostile environments using stealth and smart combat decisions.",
      sections: [
        {
          title: "Design Process",
          text: "We started with a mood board, then defined mechanics inspired by stealth-action classics...",
          image: "images/kyoto1.jpg"
        },
        {
          title: "Level Design",
          text: "I designed a vertical multi-path map to encourage exploration and replayability...",
          image: "images/kyoto2.jpg"
        },
        {
            title: "Challenges",
            text: "Balancing the AI difficulty without overwhelming the player was tricky, but we implemented a vision cone system...",
            image: "images/kyoto3.jpg"
        },
        {
            title: "Challenges",
            text: "Balancing the AI difficulty without overwhelming the player was tricky, but we implemented a vision cone system...",
            image: "images/kyoto3.jpg"
        }
      ]
    },

    'nautilus': {
      "title": "Title aaaaaaaa",
  "info": {
    "genre": "Genre aaaaaaaa",
    "engine": "Engine aaaaa",
    "teamSize": "Team size 8",
    "duration": "Duration 89",
    "role": "Role AAAAAA"
  },
  "shortDescription": "Short Descrpiton",
  "sections": [
    {
      "title": "Title 1",
      "text": "asdkasdk",
      "image": "asdkadsk"
    },
    {
      "title": "Title 2",
      "text": "asdk",
      "image": "asdkas"
    }
  ]
},

// Arrythmic Death
"arrythmic-death": {
  "title": "Arrythmic Death",
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
      "text": "One of the core challenges and innovations in Arrhythmic Death was designing a unique movement system centered around just two keys: A and D. Inspired by games like QWOP, the player moves by tapping these keys in rhythm—a concept that quickly became the defining mechanic of the project.<br><br>Since this was my first experience working in Unreal Engine, the initial prototype was rough, but functional. I approached it with rapid iteration and constant user testing. Feedback loops were essential to improving responsiveness and feel. Small additions, like camera shake and input buffers, added greatly to the sense of physicality and control, and I was able to turn a clunky prototype into a satisfying mechanic that required real skill and attention.<br><br> Developing this system taught me a lot about Unreal’s scripting environment, input systems, and animation blending, while also showing how a simple mechanical constraint can define a game’s identity.",
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

// Aeternox
"aeternox": {
  "title": "Aeternox",
  "info": {
    "genre": "Action RPG",
    "engine": "Unreal Engine 5.3",
    "teamSize": "16",
    "duration": "8 weeks",
    "role": "Co-Teach Lead"
  },
  "shortDescription": "In Aeternox, you will embark on a journey to restore balance between two worlds, created by the twin gods Lysandra of Light and Obskurion of Darkness. Through Obskurion's evil influence, it now lies in your hands to repell the armies of darkness. To achieve this feat, you will learn to wield a mysterious sword, enchanted by even more mysterious powers. Throughout your journey you will become more powerful and ultimately discover an ancient plot surrounding you and the entire world, that has been set in motion nearly a millenia ago.",
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