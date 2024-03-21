import React from 'react';
import { Button } from '../ui/button/Button';
import { useNavigate } from 'react-router-dom';
import { Container } from '../ui/container/Container';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="NotFound" data-testid="NotFound">
      <Container>
        <p>Page you are looking for does not exist</p>
        <br />
        <br />
        <br />
        <Button onClick={() => navigate('/')}>BACK</Button>
      </Container>
    </div>
  );
};
