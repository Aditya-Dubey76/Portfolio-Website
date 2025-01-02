import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    threejs,
    git,
    figma,
    canva,
    keras,
    python,
    sql,
    tensorflow,
    sync,
    image,
    lexi,
    sarcasm,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "AI/ML/Deep Learning Engineer",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "keras",
      icon: keras,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "tensorflow",
      icon: tensorflow,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "canva",
      icon: canva,
    },
  ];
  
  const experiences = [
    {
      title: "UI/UX Designer",
      company_name: "RASYNC Global Solutions Pvt Ltd",
      icon: sync,
      iconBg: "#383E56",
      date: "December 2024 - Present",
      points: [
        "Designing intuitive user interfaces, wireframes and prototypes for web and mobile applications.",
        "Collaborated with cross-functional teams to refine user flows and optimize user experiences.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "His ability to develop intuitive and responsive user interfaces during his UI/UX design internship has been commendable.",
      name: "Raunak Shukla",
      designation: "FOUNDER",
      company: "RASYNC Global Solution",
      image: "src/assets/raunak.png",
    },
    {
      testimonial:
       "Aditya's expertise in AI/ML and time series forecasting reflects his deep analytical mindset and technical proficiency.",
      name: "Pramod Kr Dubey",
      designation: "ELECTRICAL HEAD",
      company: "Technip Energies",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      testimonial:
        "Aditya excels at merging AI techniques with practical applications, as seen in his chatbot and sarcasm detection projects.",
      name: "Rashmi Kumari",
      designation: "ASST. PROFESSOR",
      company: "Bennett University",
      image: "src/assets/maam.png",
    },
  ];
  
  const projects = [
    {
      name: "Wind-Speed-Forecasting-Using-Hybrid-Deep-Learning-Techniques",
      description:
        "An advanced time series analysis and predictive modelling system based on a hybrid deep learning technique for wind speed forecasting by decomposition methods and neural network architectures.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "dl Models",
          color: "green-text-gradient",
        },
        {
          name: "time series",
          color: "pink-text-gradient",
        },
      ],
      image: image,
      source_code_link: "https://github.com/Aashmn/Wind-Speed-Forecasting-Using-Hybrid-Deep-Learning-Techniques.git",
    },
    {
      name: "Lexi",
      description:
        "Developed Conversational Image Recognition Chatbot with image recognition, NLP, and OCR. Enhanced responses with 20% more context through object and text detection. Contributed in website’s Frontend and supported Backend and Model development.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: lexi,
      source_code_link: "https://github.com/Aditya-Dubey76/Conversational_Image_Processing_Chatbot-SIH_Project.git",
    },
    {
      name: "Sarcasm-Detection-using-Bidirectional_LSTM",
      description:
        "This project intends to build a model that will detect if the sentence is a sarcastic sentence or a non sarcastic one using the (Bidirectional LSTMs Dataset News Headlines – Sarcasm Detection) dataset. The dataset is collected from two news websites, theonion.com and huffingtonpost.com This new dataset has the following advantages over the existing Twitter datasets.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "dl",
          color: "green-text-gradient",
        },
      ],
      image: sarcasm,
      source_code_link: "https://github.com/Aditya-Dubey76/Sarcasm-Detection-using-Bidirectional_LSTM.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };