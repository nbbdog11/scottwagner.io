import React from "react";
import Link from "components/Link";

type PostPrviewProps = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview: React.FC<PostPrviewProps> = ({
  title,
  date,
  excerpt,
  slug
}) => {
  return (
    <div>
      <h3>
        <Link to={slug}>{title}</Link>
      </h3>
      <p>{date}</p>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostPreview;
