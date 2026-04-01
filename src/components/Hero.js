"use client";
import React from 'react';
import { profileData } from '../data/mock';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-primary-hover/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <p className="text-primary font-bold tracking-widest uppercase mb-6 text-sm md:text-base">Hello, I'm</p>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent py-2">
            {profileData.name}
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-foreground/80">
            {profileData.title}
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            I specialize in building high-performance, scalable, and accessible web applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="px-8 py-4 w-full sm:w-auto bg-primary text-white rounded-full font-bold shadow-lg hover:shadow-primary/30 hover:-translate-y-1 hover:bg-primary-hover transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 w-full sm:w-auto border-2 border-card-border text-foreground hover:border-primary hover:text-primary rounded-full font-bold hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
            >
              View Resume
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-8 mt-16">
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-all hover:scale-110 font-medium text-lg">
              GitHub
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-accent transition-all hover:scale-110 font-medium text-lg">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
