import React from 'react';

export const About = () => {
  return (
    <main className="p-6 mt-20">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="mb-4">
        This is a multi-theme switcher app built using React and TypeScript. It showcases the use of Context API, theme persistence, and dynamic styling.
      </p>
      <ul className="list-disc list-inside">
        <li>Built with React, TypeScript, Tailwind CSS</li>
        <li>Supports three distinct themes</li>
        <li>Responsive design for all devices</li>
        <li>Theme persists using localStorage</li>
      </ul>
    </main>
  );
};
