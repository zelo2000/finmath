import React, { FC } from 'react';
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string
}

const PageHeader: FC<PageHeaderProps> = ({ title }: PageHeaderProps) => {
  return (
    <div>
      <Link to="/">Back</Link>
      {title}
    </div>
  );
};

export default PageHeader;