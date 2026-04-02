"use client";
import React from 'react';
import { experienceData } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((job, index) => (
            <div 
              key={job.id} 
              className="bg-card-bg border border-card-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">{job.position}</h3>
                  <h4 className="text-lg font-semibold text-foreground/80">{job.company}</h4>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <span className="inline-block bg-secondary text-foreground/80 px-3 py-1 rounded-full text-sm font-medium mb-1">
                    {job.duration}
                  </span>
                  <p className="text-sm text-foreground/60">{job.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mt-6 md:ml-4">
                {job.responsibilities.map((task, i) => (
                  <li key={i} className="leading-relaxed">{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
