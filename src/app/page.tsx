"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("frontend");
  const headerRef = useRef<HTMLElement>(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add(
            "bg-white/95",
            "shadow-md",
            "dark:bg-gray-900/95"
          );
          headerRef.current.classList.remove("bg-transparent");
        } else {
          headerRef.current.classList.remove(
            "bg-white/95",
            "shadow-md",
            "dark:bg-gray-900/95"
          );
          headerRef.current.classList.add("bg-transparent");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle theme toggle
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Sass",
    ],
    backend: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "REST API",
      "GraphQL",
      "Prisma",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Docker",
      "AWS",
      "Vercel",
      "Netlify",
    ],
  };

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with payment integration and admin dashboard.",
      image: "/placeholder.svg?height=200&width=400&text=E-commerce",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    },
    {
      id: 2,
      title: "Social Media App",
      description:
        "A social networking platform with real-time messaging and notifications.",
      image: "/placeholder.svg?height=200&width=400&text=Social+Media",
      tags: ["React", "Firebase", "Socket.io", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Task Management",
      description:
        "A productivity app for managing tasks, projects, and team collaboration.",
      image: "/placeholder.svg?height=200&width=400&text=Task+App",
      tags: ["React", "Redux", "Node.js", "MongoDB"],
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills.",
      image: "/placeholder.svg?height=200&width=400&text=Portfolio",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "A weather application with location-based forecasts and interactive maps.",
      image: "/placeholder.svg?height=200&width=400&text=Weather+App",
      tags: ["React", "OpenWeather API", "Leaflet", "Tailwind CSS"],
    },
    {
      id: 6,
      title: "Blog Platform",
      description:
        "A content management system for creating and publishing blog posts.",
      image: "/placeholder.svg?height=200&width=400&text=Blog+Platform",
      tags: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header
        ref={headerRef}
        className="fixed top-0 z-50 w-full border-b border-transparent transition-all duration-300 bg-transparent"
      >
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-purple-600 dark:text-purple-400"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg> */}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-extrabold">
              {/* Portfolio */}
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 transition-all group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <Link href="#contact">
              <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity text-white font-medium">
                Contact Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </Link>
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm md:hidden">
          <div className="fixed top-0 right-0 w-full max-w-xs h-full bg-white dark:bg-gray-900 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-extrabold">
                  Portfolio
                </span>
              </Link>
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              <Link
                href="#about"
                className="text-lg font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-lg font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-lg font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity text-white font-medium">
                  Contact Me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </Link>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {darkMode ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center pt-16">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-white dark:from-purple-900/20 dark:via-gray-900 dark:to-gray-900 opacity-80"></div>
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-600/10 dark:to-pink-600/10 blur-3xl -z-10"></div>
          </div>
          <div className="container mx-auto px-4 py-10 md:py-24">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm">
                    <span className="text-purple-600 dark:text-purple-400 font-medium">
                      Software Engineer
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Hi, Im{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-extrabold animate-gradient">
                      Vinay Choudhary
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
                    I create beautiful, functional, and user-friendly websites
                    that leave a lasting impression.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Link href="#projects">
                    <button className="w-full min-[400px]:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity text-white font-medium">
                      View My Work
                    </button>
                  </Link>
                  <Link href="#contact">
                    <button className="w-full min-[400px]:w-auto px-6 py-3 rounded-full border border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors font-medium">
                      Get in Touch
                    </button>
                  </Link>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative mx-auto lg:mr-0 animate-fade-in-up">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-2xl"></div>
                <div className="relative">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D5603AQGYrmwcnxrnbg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724527254811?e=1752710400&v=beta&t=WKi3Q-tr_Q03zVY9w4KXW3s4p62CRV9ucA4fKZVfnRg"
                    alt="Profile"
                    width={350}
                    height={550}
                    className="mx-auto  overflow-hidden rounded-2xl lg:order-last shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#about">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors h-10 w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 rotate-90"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
                <span className="sr-only">Scroll down</span>
              </button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm mb-4">
                  <span className="text-purple-600 dark:text-purple-400 font-medium">
                    About Me
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
                  My Journey
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Im a passionate web developer with a keen eye for design and a
                  love for creating exceptional user experiences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative animate-fade-in-left">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-70 blur-2xl"></div>
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="About Me"
                    width={400}
                    height={400}
                    className="mx-auto aspect-square overflow-hidden rounded-2xl object-cover object-center sm:w-full shadow-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6 animate-fade-in-right">
                <ul className="grid gap-6">
                  <li className="rounded-xl bg-gray-50 dark:bg-gray-800/50 p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                        Background
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        I have a background in computer science and have been
                        working in web development for over 5 years,
                        specializing in creating responsive and accessible web
                        applications.
                      </p>
                    </div>
                  </li>
                  <li className="rounded-xl bg-gray-50 dark:bg-gray-800/50 p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                        Education
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Bachelors degree in Computer Science from University
                        Name, where I focused on web technologies and user
                        experience design.
                      </p>
                    </div>
                  </li>
                  <li className="rounded-xl bg-gray-50 dark:bg-gray-800/50 p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                        Interests
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        When Im not coding, I enjoy hiking, reading science
                        fiction, photography, and exploring new technologies
                        that push the boundaries of web development.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-white dark:from-purple-900/20 dark:via-gray-900 dark:to-gray-900 opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-tr from-purple-200/20 to-pink-200/20 dark:from-purple-600/10 dark:to-pink-600/10 blur-3xl -z-10"></div>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm mb-4">
                  <span className="text-purple-600 dark:text-purple-400 font-medium">
                    My Work
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Featured Projects
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent work. These projects showcase my
                  skills and expertise in web development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="overflow-hidden h-full group border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 relative rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="p-0">
                      <div className="overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className="line-clamp-2 mb-4 text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-2.5 py-0.5 text-xs font-medium text-purple-600 dark:text-purple-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 pt-0 flex justify-between">
                      <Link href={`#project-${project.id}`}>
                        <button className="px-4 py-2 rounded-full border border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors text-sm font-medium">
                          View Details
                        </button>
                      </Link>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Live Demo"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm mb-4">
                  <span className="text-purple-600 dark:text-purple-400 font-medium">
                    Expertise
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
                  My Skills
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have experience with a wide range of technologies and tools.
                  Here are some of my key skills.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12 animate-fade-in">
              <div className="w-full">
                <div className="grid w-full grid-cols-3 mb-8 bg-gray-100 dark:bg-gray-800/50 p-1 rounded-full">
                  <button
                    onClick={() => setActiveTab("frontend")}
                    className={`rounded-full py-2 transition-colors ${
                      activeTab === "frontend"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    Frontend
                  </button>
                  <button
                    onClick={() => setActiveTab("backend")}
                    className={`rounded-full py-2 transition-colors ${
                      activeTab === "backend"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    Backend
                  </button>
                  <button
                    onClick={() => setActiveTab("tools")}
                    className={`rounded-full py-2 transition-colors ${
                      activeTab === "tools"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    Tools
                  </button>
                </div>
                {Object.entries(skills).map(
                  ([category, skillList]) =>
                    activeTab === category && (
                      <div key={category} className="mt-6">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                          {skillList.map((skill, index) => (
                            <div
                              key={skill}
                              className="group animate-fade-in-up"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <div className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-300 dark:hover:border-purple-700 hover:-translate-y-1">
                                <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/30 transition-colors">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6 text-purple-600 dark:text-purple-400"
                                  >
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                  </svg>
                                </div>
                                <div className="text-center font-medium">
                                  {skill}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-white dark:from-purple-900/20 dark:via-gray-900 dark:to-gray-900 opacity-80"></div>
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-600/10 dark:to-pink-600/10 blur-3xl -z-10"></div>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm mb-4">
                  <span className="text-purple-600 dark:text-purple-400 font-medium">
                    Contact
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Get in Touch
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or want to chat? Feel free to reach out
                  to me.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-6 animate-fade-in-left">
                <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                    Contact Information
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Feel free to reach out to me through any of the following
                    channels:
                  </p>
                  <div className="grid gap-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-purple-600 dark:text-purple-400"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Email
                        </p>
                        <a
                          href="mailto:your.email@example.com"
                          className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
                        >
                          your.email@example.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-purple-600 dark:text-purple-400"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          LinkedIn
                        </p>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
                        >
                          linkedin.com/in/yourname
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-purple-600 dark:text-purple-400"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          GitHub
                        </p>
                        <a
                          href="https://github.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
                        >
                          github.com/yourusername
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in-right">
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 dark:from-purple-600/10 dark:to-pink-600/10"></div>
                  <div className="relative">
                    <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                      Send Me a Message
                    </h3>
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-white dark:ring-offset-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-white dark:ring-offset-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-white dark:ring-offset-gray-900 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your message"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity text-white font-medium"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 dark:text-gray-400 md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Your Name
            </span>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
