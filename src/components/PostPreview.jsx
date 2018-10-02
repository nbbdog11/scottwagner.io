import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const PostPreview = (props) => {
  const {
    title,
    date,
    excerpt,
    slug,
  } = props;

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

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

PostPreview.defaultProps = {
  date: '',
  excerpt: '',
};

export default PostPreview;
