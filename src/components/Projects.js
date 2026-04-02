"use client";
import React from 'react';
import { projectsData } from '../data/mock';

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-card-bg border border-card-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up flex flex-col h-full group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.image && (
                <div className="h-48 w-full overflow-hidden bg-white/10 dark:bg-black/10 flex items-center justify-center p-4">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              )}
              <div className="p-8 flex-1 flex flex-col relative z-10 border-t border-card-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/70 mb-6 flex-1 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags?.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 border border-card-border rounded-lg text-foreground/80 hover:bg-secondary hover:text-foreground transition-all font-medium text-sm"
                    >
                      Code
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 bg-primary text-white rounded-lg hover:bg-primary-hover shadow-md hover:shadow-lg transition-all font-medium text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
