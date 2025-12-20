

import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="connect" className="py-24 px-6 text-center">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* <h2 className="text-accent-light dark:text-accent-dark font-mono mb-4 text-lg">04. What's Next?</h2> */}
          <h3 className="text-4xl md:text-6xl font-bold mb-8">Get In Touch</h3>
          <p className="text-muted-light dark:text-muted-dark mb-12 text-lg">
            Whether you want to chat about <span className="text-accent-light dark:text-accent-dark">Robotics, IoT</span>, 
            the latest in <span className="text-accent-light dark:text-accent-dark">ML, Gen AI</span>, 
            or just want to say hi, my inbox is always open.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {SOCIAL_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank"
                className="group flex flex-col items-center p-6 glass-card rounded-2xl hover:-translate-y-2 transition-all border border-transparent hover:border-accent-light dark:hover:border-accent-dark"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark mb-4 group-hover:scale-110 transition-transform">
                  {/* Fix: Added <any> to ReactElement cast to allow 'size' prop in cloneElement */}
                  {React.cloneElement(link.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <span className="font-mono text-sm tracking-wide">{link.name}</span>
              </a>
            ))}
          </div>

          <a 
            href="mailto:sairuthvikami@gmail.com" 
            className="inline-block px-12 py-5 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark font-mono font-bold rounded-lg text-xl hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;