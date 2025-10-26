import React from 'react';
import Section from './Section';

interface VideoProps {
  videoUrl: string;
}

const Video: React.FC<VideoProps> = ({ videoUrl }) => {
  return (
    <Section title="Featured Video">
      <div className="aspect-video">
        <iframe
          className="w-full h-full rounded-lg shadow-xl"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </Section>
  );
};

export default Video;