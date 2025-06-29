export const projects = [
    {
      id: 1,
      title: "Gemini Multimodal Live Application",
      description: "A minimal client-server setup for real-time audio streaming with Gemini Live. The client handles audio capture/playback, while the Quart-based server manages audio processing and API communication via websockets.",
      categories: ["genai"],
      technologies: ["Python", "Gemini 2.0 Live", "Quart", "Websockets", "HTML/CSS/JS"],
      links: {
        github: "https://github.com/Ruthvik-1411/GenAI-Projects/tree/main/gemini_live_boilerplate#gemini-live-boilerplate",
        demo: "https://github.com/Ruthvik-1411/GenAI-Projects/blob/main/gemini_live_boilerplate/assets/sample_ui.png"
      },
      icon: "headset"
    },
    {
      id: 2,
      title: "Youtube Thumbnail Generator",
      description: "An AI-powered app that generates eye-catching YouTube thumbnails from video URLs in under a minute. Using LLMs to analyze video content, the app creates fitting thumbnail suggestions and allows you to refine them through prompt editing. You can regenerate results, customize video descriptions, and even modify the final image—like adding text or changing backgrounds—just by chatting with the bot.",
      categories: ["genai"],
      technologies: ["Python", "Streamlit", "Gemini", "Imagen 3", "Gemini 2.0 Flash", "YT_DLP"],
      links: {
        github: "https://github.com/Ruthvik-1411/GenAI-Projects/tree/main/yt_thumbnail_generation#youtube-thumbnail-generation",
        demo: "https://youtu.be/7eOuXiq0qLU"
      },
      icon: "wand-magic-sparkles"
    },
    {
      id: 3,
      title: "Simple RAG chatbot",
      description: "A simple Retrieval-Augmented Generation (RAG) project that is part of a broader collection exploring LLMs, document understanding, and creative applications of generative AI. Designed to demonstrate practical uses of RAG pipelines with modern AI tools and frameworks.",
      categories: ["genai"],
      technologies: ["Python", "Mesop", "Gemini", "RAG", "LangChain", "LangGraph"],
      links: {
        github: "https://github.com/Ruthvik-1411/GenAI-Projects",
        demo: "https://youtu.be/u_Gm_Hi7gV4"
      },
      icon: "comments"
    },
    {
      id: 4,
      title: "Finance Tracker App",
      description: "A minimalistic personal finance tracking application with spending pattern analysis, investments tracking and acts as a electronic wallet.",
      categories: ["apps"],
      technologies: ["React Native", "Javascript", "Expo", "Appscript"],
      links: {
        github: "https://github.com/Ruthvik-1411/Finance_Tracker_app",
        demo: "https://youtu.be/8o-5a1XjGV4"
      },
      icon: "chart-line"
    },
    {
      id: 5,
      title: "SRpass Password Manager",
      description: "A minimalitic, secure and convenient password manager for android to manage passwords accross different accounts.",
      categories: ["apps"],
      technologies: ["React Native", "Javascript", "Expo", "Appscript", "Cryptography"],
      links: {
        github: "https://github.com/Ruthvik-1411/SRpass",
        demo: "https://youtu.be/O2BMTajYNWo"
      },
      icon: "key"
    },
    {
      id: 6,
      title: "XY Pen Plotter",
      description: "A custom-built drawing machine that converts digital designs into physical artwork using a precision-controlled mechanical system.",
      categories: ["electronics", "robotics"],
      technologies: ["Arduino", "Stepper Motors", "G-code"],
      links: {
        github: "https://github.com/Ruthvik-1411/XY_Pen_Plotter",
        demo: "https://youtu.be/HnFqBWPk73Q"
      },
      icon: "pen"
    },
    {
      id: 7,
      title: "Robotic Arm Projects",
      description: "Robotic arm implementations with various control mechanisms including programmable patterns and remote control to control 4-DOF Arm.",
      categories: ["robotics", "electronics"],
      technologies: ["Arduino", "Servo Motors", "Python", "Robotics"],
      links: {
        github: "https://github.com/Ruthvik-1411/Robotic_Arm_Projects",
        demo: "https://youtu.be/WAM7KDY48Zk"
      },
      icon: "hand-paper"
    },
    {
      id: 8,
      title: "OpenCV Projects",
      description: "A collection of computer vision applications including object detection, facial recognition and face tracking.",
      categories: ["cv"],
      technologies: ["OpenCV", "Python", "Computer Vision"],
      links: {
        github: "https://github.com/Ruthvik-1411/Open_CV_Projects",
        demo: "https://youtu.be/z-2_2DfBp2M"
      },
      icon: "eye"
    },
    {
      id: 9,
      title: "Device Control using OpenCV",
      description: "A computer vision application to manage electronic device in house.",
      categories: ["cv", "electronics"],
      technologies: ["OpenCV", "Python", "Computer Vision", "Arduino", "ESP32"],
      links: {
        github: "https://github.com/Ruthvik-1411/Device_control_using_OpenCV",
        demo: "https://youtu.be/rrYz_PNi9wM"
      },
      icon: "eye"
    },
    {
      id: 10,
      title: "Automated Conveyor Belt Checkout",
      description: "An automated system using computer vision to identify and track items on a conveyor belt, facilitating a streamlined checkout process.",
      categories: ["cv", "electronics"],
      technologies: ["OpenCV", "Python", "Arduino"],
      links: {
        github: "https://github.com/Ruthvik-1411/Automated_Conveyerbelt_Checkout",
        demo: "https://youtu.be/lck1uOHtO9k"
      },
      icon: "barcode"
    },
    {
      id: 11,
      title: "Smart Agriculture Model",
      description: "An IoT-based system for monitoring and automatically managing agricultural environments, including soil moisture, temperature, and irrigation control.",
      categories: ["electronics"],
      technologies: ["ESP32", "Sensors", "Arduino", "ThingSpeak", "Webhooks"],
      links: {
        github: "https://github.com/Ruthvik-1411/IoT_Based_Smart_Agriculture_Model",
        demo: "https://youtu.be/6Th6-AA5KNU"
      },
      icon: "seedling"
    },
  ];
  
export const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Generative AI" },
      { name: "RAG" },
      { name: "AI Agents" },
      { name: "Prompt Engineering" },
      { name: "NLP" },
      { name: "Computer Vision" },
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "TensorFlow" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
    ]
  },
  {
    title: "Software Development & Frameworks",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "HTML/CSS" },
      { name: "React Native" },
      { name: "FastAPI" },
      { name: "Streamlit" },
      { name: "Mesop" },
      { name: "Google Apps Script" },
      { name: "Behave (BDD Testing)" },
      { name: "LangGraph"}
    ]
  },
  {
    title: "Cloud, Databases & DevOps",
    skills: [
      { name: "Google Cloud Platform (GCP)" },
      { name: "Dialogflow CX" },
      { name: "PostgreSQL" },
      { name: "Firebase" },
      { name: "Git/GitHub" },
      { name: "Docker" },
      { name: "Linux" },
    ]
  },
  {
    title: "Certifications",
    skills: [
      { name: "Associate Cloud Engineer (Google Cloud)" },
      { name: "Professional ML Engineer (Google Cloud)" }
    ]
  },
  {
    title: "IoT & Hardware",
    skills: [
      { name: "Arduino" },
      { name: "Raspberry Pi" },
      { name: "MPU6050" },
      { name: "Other sensors"}
    ]
  }
];