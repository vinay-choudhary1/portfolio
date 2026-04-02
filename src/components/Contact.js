"use client";
import React from 'react';
import { profileData } from '../data/mock';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">Get In Touch</h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto leading-relaxed">
          I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out to me through any of the following channels.
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-card-bg p-8 rounded-3xl border border-card-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 shadow-inner">
              📍
            </div>
            <h4 className="font-bold text-lg text-foreground mb-2">Location</h4>
            <p className="text-foreground/70">{profileData.location}</p>
          </div>

          <div className="bg-card-bg p-8 rounded-3xl border border-card-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 shadow-inner">
              ✉️
            </div>
            <h4 className="font-bold text-lg text-foreground mb-2">Email</h4>
            <a href={`mailto:${profileData.email}`} className="text-foreground/70 hover:text-primary transition-colors font-medium">
              {profileData.email}
            </a>
          </div>

          <div className="bg-card-bg p-8 rounded-3xl border border-card-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
             <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 shadow-inner">
              📞
            </div>
            <h4 className="font-bold text-lg text-foreground mb-2">Phone</h4>
            <a href={`tel:${profileData.phone}`} className="text-foreground/70 hover:text-primary transition-colors font-medium">
              {profileData.phone}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
