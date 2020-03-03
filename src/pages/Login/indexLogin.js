import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './styleLogin';

export default function indexLogin() {
  return (
    <Button>
      <Link to="/" className="btn-link">
        voltar
      </Link>
    </Button>
  );
}
