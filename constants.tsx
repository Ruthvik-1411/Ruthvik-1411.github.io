
import React from 'react';
import { 
  Database, 
  Headset, 
  Wand2, 
  // MessageSquare,
  TrendingUp, 
  Key, 
  PenTool, 
  Hand, 
  Eye, 
  // Maximize, 
  Barcode, 
  Sprout,
  Cpu,
  Github,
  Linkedin,
  Youtube,
  Mail
} from 'lucide-react';
import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Memsrv",
    description: "A lightweight, self-hosted memory service boilerplate for LLMs and agent frameworks. It extracts and stores key facts from conversations, enabling semantic retrieval using vector embeddings.",
    categories: ["genai"],
    technologies: ["Python", "FastAPI", "GenAI", "RAG", "LangGraph", "ChromaDB"],
    links: {
      github: "https://github.com/Ruthvik-1411/memsrv",
      demo: "https://github.com/Ruthvik-1411/memsrv"
    },
    icon: "database"
  },
  {
    id: 2,
    title: "Gemini Multimodal Live Boiler Plate",
    description: "A minimal client-server setup for real-time audio streaming with Gemini Live. The client handles audio capture/playback via websockets.",
    categories: ["genai"],
    technologies: ["Python", "Gemini 2.0 Live", "Quart", "Websockets"],
    links: {
      github: "https://github.com/Ruthvik-1411/GenAI-Projects/tree/main/gemini_live_boilerplate#gemini-live-boilerplate",
      demo: "https://github.com/Ruthvik-1411/GenAI-Projects/blob/main/gemini_live_boilerplate/assets/gemini_live_ui.png"
    },
    icon: "headset"
  },
  {
    id: 3,
    title: "Youtube Thumbnail Generator",
    description: "AI-powered app generating eye-catching YouTube thumbnails from URLs. Uses LLMs to analyze video content and Imagen 3 for generation.",
    categories: ["genai"],
    technologies: ["Python", "Streamlit", "Gemini", "Imagen 3"],
    links: {
      github: "https://github.com/Ruthvik-1411/GenAI-Projects/tree/main/yt_thumbnail_generation#youtube-thumbnail-generation",
      demo: "https://youtu.be/7eOuXiq0qLU"
    },
    icon: "wand"
  },
  {
    id: 4,
    title: "Finance Tracker App",
    description: "Minimalistic finance tracking with spending analysis, investment tracking, and electronic wallet features.",
    categories: ["apps"],
    technologies: ["React Native", "Javascript", "Expo", "Appscript"],
    links: {
      github: "https://github.com/Ruthvik-1411/Finance_Tracker_app",
      demo: "https://youtu.be/8o-5a1XjGV4"
    },
    icon: "chart"
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

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Generative AI" }, { name: "RAG" }, { name: "AI Agents" },
      { name: "Prompt Engineering" }, { name: "NLP" }, { name: "Computer Vision" },
      { name: "TensorFlow" }, { name: "Deep Learning" }
    ]
  },
  {
    title: "Software & Frameworks",
    skills: [
      { name: "Python" }, { name: "JavaScript" }, { name: "React Native" },
      { name: "FastAPI" }, { name: "LangGraph" }, { name: "Streamlit" }
    ]
  },
  {
    title: "Cloud & Databases",
    skills: [
      { name: "GCP" }, { name: "Dialogflow CX" }, { name: "PostgreSQL" },
      { name: "Firebase" }, { name: "Docker" }, { name: "Linux" }
    ]
  },
  {
    title: "Certifications",
    skills: [
      { name: "Associate Cloud Engineer (Google Cloud)" },
      { name: "Professional ML Engineer (Google Cloud)" }
    ]
  },
];

export const SOCIAL_LINKS = [
  { name: 'Email', icon: <Mail />, url: 'mailto:sairuthvikami@gmail.com' },
  { name: 'GitHub', icon: <Github />, url: 'https://github.com/ruthvik-1411' },
  { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/knsruthvik' },
  { name: 'Youtube', icon: <Youtube />, url: 'https://youtube.com/@sairuthvik7727' },
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'database': return <Database className="w-5 h-5" />;
    case 'headset': return <Headset className="w-5 h-5" />;
    case 'wand': return <Wand2 className="w-5 h-5" />;
    case 'pen': return <PenTool className="w-5 h-5" />;
    case 'chart': return <TrendingUp className="w-5 h-5" />;
    case 'key': return <Key className="w-5 h-5" />;
    case 'hand-paper': return <Hand className="w-5 h-5" />;
    case 'eye': return <Eye className="w-5 h-5" />;
    case 'barcode': return <Barcode className="w-5 h-5" />;
    case 'seedling': return <Sprout className="w-5 h-5" />;
    default: return <Cpu className="w-5 h-5" />;
  }
};
