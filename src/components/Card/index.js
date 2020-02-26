import React, { Component } from 'react';
import { Container, Section, PostCard } from './styles';

import api from '../../services/api';

export default class Card extends Component {
  state = {
    posts: [],
    page: 1,
    totalPages: {},
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async (page = 1) => {
    const response = await api.get(`/posts?page=${page}`);

    const { docs, totalPages } = response.data;

    this.setState({ posts: docs, page, totalPages });
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadPosts(pageNumber);
  };

  nextPage = () => {
    const { totalPages, page } = this.state;

    if (page === totalPages) return;

    const pageNumber = page + 1;

    this.loadPosts(pageNumber);
  };

  render() {
    const { posts, page, totalPages } = this.state;

    return (
      <Container>
        <Section>
          {posts.map((post) => (
            <PostCard key={post._id} to={`/posts/${post._id}`}>
              <strong>{post.title}</strong>
            </PostCard>
          ))}
        </Section>
        <div>
          <button type="button" disabled={page === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <button
            type="button"
            disabled={page === totalPages}
            onClick={this.nextPage}
          >
            Proximo
          </button>
        </div>
      </Container>
    );
  }
}
