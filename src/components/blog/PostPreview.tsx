import React from 'react';
import { Link } from 'gatsby';

type PostPrviewProps = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const PostPreview: React.FC<PostPrviewProps> = ({
  title,
  date,
  excerpt,
  slug,
}) => {
  return (
    <div>
      <Link to={slug}>
        <h3>{title}</h3>
      </Link>
      <p>{date}</p>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostPreview;
