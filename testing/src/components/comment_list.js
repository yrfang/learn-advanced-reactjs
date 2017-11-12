import React, { Component } from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
  return (
    <ul className="comment-list"></ul>
  );
};

export default connect()(CommentList);
