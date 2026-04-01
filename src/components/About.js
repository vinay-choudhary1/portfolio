"use client";
import React from 'react';
import { profileData } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg text-foreground/80 leading-relaxed bg-card-bg p-8 rounded-2xl shadow-sm border border-card-border animate-fade-in-up">
          <p>
            {profileData.summary}
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="font-semibold text-foreground">Location:</span> {profileData.location}
            </div>
            <div>
              <span className="font-semibold text-foreground">Email:</span> {profileData.email}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
