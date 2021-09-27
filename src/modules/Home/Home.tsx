import React, { FC } from "react";
import "./Home.css";

const Home: FC = () => {
  return (
    <div className="home">
      Проект створений:
      <ul>
        <li>Паславська Ярина</li>
        <li>Зелінський Олександр</li>
        <li>Дочкач Денис</li>
      </ul>
    </div>
  );
};

export default Home;
