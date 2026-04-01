"use client";
import React from 'react';
import { profileData } from '../data/mock';

const Footer = () => {
  return (
    <footer className="py-8 bg-card-bg border-t border-card-border text-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-foreground/70 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
            GitHub
          </a>
          <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
