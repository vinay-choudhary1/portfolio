"use client";
import React from 'react';
import { skillsData } from '../data/mock';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Skills</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div 
              key={category} 
              className="bg-card-bg border border-card-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-primary mb-6 border-b border-card-border pb-4">{category}</h3>
              <div className="flex flex-wrap gap-3 mt-auto">
                {skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-secondary-dark text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
