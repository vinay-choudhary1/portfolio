"use client";
import Image from "next/image";
import { useState } from "react";

const personalImageUrl =
  "data:image/jpeg;base64,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";

const projectsData = [
  {
    imgUrl: "https://propelgpayments.com/Logos/airindia-express.png",
    title: "AirIndia Express",
    description:
      "Enhanced UI using Next.js and Context API, developed dynamic dashboard with Chart.js, implemented authentication and role-based access control.",
    tech: "Next.js, Tailwind CSS, TypeScript, Node.js, Express.js, MongoDB, SQL, AWS",
    link: "https://airindia-express.com",
  },
  {
    imgUrl: "https://fitnessmates.com.au/static/fitness-logo.svg",
    title: "Fitness Mates",
    description:
      "Social platform for fitness enthusiasts with Google Sign-Up, event creation, and comprehensive API integration.",
    tech: "React.js, Material UI, TypeScript, Redux, Node.js, Express.js, MongoDB, CI/CD",
  },
  {
    imgUrl:
      "https://jerseysure-dev.playeongames.com/static/media/login-image.ada915ee3255ab2dc7c5.png",
    title: "Rario (Cricket Card Game)",
    description:
      "Real-time cricket card game with WebSocket integration and dynamic animations for enhanced user experience.",
  },
  {
    imgUrl: "https://propelgpayments.com/Logos/airindia-express.png",
    title: "Purdriven",
    description:
      "Enhanced UI using Next.js and Context API, developed dynamic dashboard with Chart.js, implemented authentication and role-based access control.",
    tech: "Next.js, Tailwind CSS, TypeScript, Node.js, Express.js, MongoDB, SQL, AWS",
  },
  {
    imgUrl: "https://fitnessmates.com.au/static/fitness-logo.svg",
    title: "Crowdteria",
    description:
      "Social platform for fitness enthusiasts with Google Sign-Up, event creation, and comprehensive API integration.",
    tech: "React.js, Material UI, TypeScript, Redux, Node.js, Express.js, MongoDB, CI/CD",
  },
  {
    imgUrl:
      "https://jerseysure-dev.playeongames.com/static/media/login-image.ada915ee3255ab2dc7c5.png",
    title: "APIAM (Events Pro)",
    description:
      "Real-time cricket card game with WebSocket integration and dynamic animations for enhanced user experience.",
  },
  {
    imgUrl: "https://propelgpayments.com/Logos/airindia-express.png",
    title: "Superconnects",
    description:
      "Enhanced UI using Next.js and Context API, developed dynamic dashboard with Chart.js, implemented authentication and role-based access control.",
    tech: "Next.js, Tailwind CSS, TypeScript, Node.js, Express.js, MongoDB, SQL, AWS",
  },
  {
    imgUrl: "https://fitnessmates.com.au/static/fitness-logo.svg",
    title: "Crowdteria",
    description:
      "Social platform for fitness enthusiasts with Google Sign-Up, event creation, and comprehensive API integration.",
    tech: "React.js, Material UI, TypeScript, Redux, Node.js, Express.js, MongoDB, CI/CD",
  },
  {
    imgUrl:
      "https://jerseysure-dev.playeongames.com/static/media/login-image.ada915ee3255ab2dc7c5.png",
    title: "Sixth Degree",
    description:
      "Real-time cricket card game with WebSocket integration and dynamic animations for enhanced user experience.",
  },
  {
    imgUrl:
      "https://jerseysure-dev.playeongames.com/static/media/login-image.ada915ee3255ab2dc7c5.png",
    title: "AirTrips",
    description:
      "Real-time cricket card game with WebSocket integration and dynamic animations for enhanced user experience.",
  },
  {
    imgUrl:
      "https://jerseysure-dev.playeongames.com/static/media/login-image.ada915ee3255ab2dc7c5.png",
    title: "Pet Meadows",
    description:
      "Real-time cricket card game with WebSocket integration and dynamic animations for enhanced user experience.",
  },
  {
    imgUrl:
      "https://jerseysure-dev.playeongames.com/static/media/login-image.ada915ee3255ab2dc7c5.png",
    title: "Unlcked",
    description:
      "Real-time cricket card game with WebSocket integration and dynamic animations for enhanced user experience.",
  },
  {
    imgUrl:
      "https://jerseysure-dev.playeongames.com/static/media/login-image.ada915ee3255ab2dc7c5.png",
    title: "Unlcked",
    description:
      "Real-time cricket card game with WebSocket integration and dynamic animations for enhanced user experience.",
  },
  {
    imgUrl:
      "https://jerseysure-dev.playeongames.com/static/media/login-image.ada915ee3255ab2dc7c5.png",
    title: "Mploi",
    description:
      "Real-time cricket card game with WebSocket integration and dynamic animations for enhanced user experience.",
  },
];

const skillsData = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git",
];
export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsToShow = 6; // Initial number of projects to display

  const visibleProjects = showAllProjects
    ? projectsData
    : projectsData.slice(0, projectsToShow);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image
              src={personalImageUrl || ""}
              alt="Vinay Choudhary"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Vinay Choudhary
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
            Software Engineer | ReactJS | NextJS | TypeScript | NodeJS |
            ExpressJS
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600 dark:text-gray-300">
            <a
              href="tel:+918209308885"
              className="hover:text-blue-600 transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 8209308885
            </a>
            <span>•</span>
            <a
              href="mailto:vinay071001@gmail.com"
              className="hover:text-blue-600 transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              vinay071001@gmail.com
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/vinay-choudhary1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Software Engineer with 2.5+ years of experience in MERN stack
            development, specializing in React, TypeScript, Node.js, and
            Express. Proven track record of building scalable, user-focused, and
            data-driven web applications. Passionate about creating intuitive
            data products and interactive visualizations that drive informed
            decision-making for large-scale clients.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {skillsData.map((skill) => (
              <div
                key={skill}
                className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:border-blue-500 border-2 border-transparent"
              >
                <span className="text-gray-900 dark:text-white font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Associate Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-300">Dianapps</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600 dark:text-gray-300">Nov 2022 - Present</p>
                <p className="text-gray-600 dark:text-gray-300">Jaipur</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Designed and developed scalable, responsive web applications with visually appealing, user-friendly interfaces</li>
              <li>Created and integrated RESTful APIs, third-party services, and external libraries</li>
              <li>Debugged and resolved issues in live production environments</li>
              <li>Contributed to architectural discussions and recommended technical enhancements</li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section
        id="projects"
        className="container mx-auto my-20 px-4 py-20 bg-gray-50 dark:bg-gray-800"
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500"
            >
              <div className="relative h-48">
                <Image
                  src={project?.imgUrl || "/project-placeholder.jpg"}
                  alt={project?.title || "Project"}
                  fill
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                {project.tech && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.split(", ").map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {projectsData.length > projectsToShow && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md inline-flex items-center gap-2"
            >
              {showAllProjects ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  Show Less
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  View More Projects
                </>
              )}
            </button>
          </div>
        )}
      </section>

      {/* Education & Achievements Section */}
      {/* <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Education & Achievements
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Education</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Bachelor of Technology (BTech) in Computer Science & Engineering
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              July 2019 - May 2023 | GPA: 8.4
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Achievements</h3>
            <ul className="space-y-4">
              <li className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Rising Star of the Year (2023):</span> Recognized for exceptional contributions and innovation.
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Director's Choice Award (2022):</span> Awarded for outstanding performance with a ₹25,000 Amazon voucher.
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section
        id="contact"
        className="container mx-auto px-4 py-20 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/vinay-choudhary1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:vinay071001@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <a
              href="tel:+918209308885"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-gray-900 py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} Vinay Choudhary. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
