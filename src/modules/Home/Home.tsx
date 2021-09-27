import React, { FC } from 'react';
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/task/1">Task 1</Link>
          </li>
          <li>
            <Link to="/task/2">Task 2</Link>
          </li>
          <li>
            <Link to="/task/3">Task 3</Link>
          </li>
          <li>
            <Link to="/task/4">Task 4</Link>
          </li>
          <li>
            <Link to="/task/5">Task 5</Link>
          </li>
          <li>
            <Link to="/task/6">Task 6</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;