import React, { FC } from 'react';
import { Link } from "react-router-dom";

const About: FC = () => {
  return (
    <div>
      <Link to="/">Back</Link>
      Project created by:
      <ul>
        <li>Yaryna Paslavska</li>
        <li>Oleksandr Zelinskyi</li>
        <li>Denys Doskach</li>
      </ul>
    </div>
  );
};

export default About;