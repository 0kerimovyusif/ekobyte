import React from 'react';

/**
 * ContactMap Component
 * 
 * Replicates the .contact-map-area section from your website.
 * Uses Tailwind CSS for basic layout and inline styles for precise height matching.
 */
export default function ContactMap() {
  return (
    <section className="contact-map-area block w-full">
      <div className="te-map-widget block w-full" style={{ height: '650px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523.2909147381818!2d47.7109118!3d40.218364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403950ea7778f1f3%3A0x94b522611e522ab4!2zMyBzYXlsxLEgT3J0YSBNyZlrdMmZYg!5e0!3m2!1str!2saz!4v1778519161464!5m2!1str!2saz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Contact Location Map"
        ></iframe>
      </div>
    </section>
  );
}