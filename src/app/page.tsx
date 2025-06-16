"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, skills, contactInformation } from "@/utils/common";
import {
  SunIcon,
  MoonIcon,
  GithubIcon,
  LinkedinIcon,
  EmailIcon,
  PhoneIcon,
  MenuIcon,
  CloseIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  ArrowDownIcon,
} from "@/components/icons";

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
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <a
              href={contactInformation.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={contactInformation.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <Link href="#contact">
              <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity text-white font-medium">
                Contact Me
                <ArrowRightIcon />
              </button>
            </Link>
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
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
                <CloseIcon />
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
                  <ArrowRightIcon />
                </button>
              </Link>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={contactInformation.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </a>
                <a
                  href={contactInformation.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {darkMode ? <SunIcon /> : <MoonIcon />}
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
                    Software Engineer with 2.5+ years of experience specializing
                    in React.js, Next.js, and Node.js development. Skilled in
                    building scalable, user-centric, and data-driven web
                    applications.
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
                    href={contactInformation.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={contactInformation.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href={`mailto:${contactInformation.email}`}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Email"
                  >
                    <EmailIcon />
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
                <ArrowDownIcon />
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
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 ">
              {/* <div className="relative animate-fade-in-left">
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
              </div> */}
              <div className="flex flex-col justify-center space-y-6 animate-fade-in-right w-fit mx-auto">
                <ul className="grid gap-6">
                  <li className="rounded-xl bg-gray-50 dark:bg-gray-800/50 p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                        Experience
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Associate Software Engineer at Dianapps (Nov 2022 -
                        Present)
                        <br />
                        • Designed and developed scalable, responsive web
                        applications
                        <br />
                        • Created and integrated RESTful APIs and third-party
                        services
                        <br />
                        • Debugged and resolved issues in live production
                        environments
                        <br />• Contributed to architectural discussions and
                        technical enhancements
                      </p>
                    </div>
                  </li>
                  <li className="rounded-xl bg-gray-50 dark:bg-gray-800/50 p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                        Education
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Bachelor of Technology (BTech) in Computer Science &
                        Engineering
                        <br />
                        Global Institute of Technology, Jaipur
                        <br />
                        July 2019 to May 2023
                        <br />
                        GPA: 8.4
                      </p>
                    </div>
                  </li>
                  <li className="rounded-xl bg-gray-50 dark:bg-gray-800/50 p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                        Achievements
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        • Rising Star of the Year (2023): Recognized for
                        exceptional contributions and innovation
                        <br />• Director's Choice Award (2022): Awarded for
                        outstanding performance with a ₹25,000 Amazon voucher
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
                  <div className="overflow-hidden h-full flex flex-col justify-between  group border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 relative rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="p-0">
                      <div className="overflow-hidden h-20 flex items-center ">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={200}
                          className="w-auto m-auto h-auto max-h-20 transition-transform duration-500 group-hover:scale-110"
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
                    <div className="p-6 pt-0 flex justify-between relative z-10">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full border border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors text-sm font-medium"
                      >
                        View Project
                      </a>

                      <a
                        href={project?.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                          !project.link ? "cursor-not-allowed opacity-50" : ""
                        }`}
                        aria-label="Live Demo"
                      >
                        <ExternalLinkIcon />
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
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 ">
              <div className="flex flex-col gap-6 animate-fade-in-left">
                <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 p-6 shadow-sm w-fit mx-auto">
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
                        <EmailIcon />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Email
                        </p>
                        <a
                          href={`mailto:${contactInformation.email}`}
                          className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
                        >
                          {contactInformation.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3">
                        <LinkedinIcon />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          LinkedIn
                        </p>
                        <a
                          href={contactInformation.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
                        >
                          linkedin.com/in/vinay-choudhary1
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3">
                        <PhoneIcon />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Phone
                        </p>
                        <a
                          href={`tel:${contactInformation.phone}`}
                          className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
                        >
                          {contactInformation.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="animate-fade-in-right">
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
              </div> */}
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
              Vinay Choudhary
            </span>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={contactInformation.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={contactInformation.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${contactInformation.email}`}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
