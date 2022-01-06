import React from 'react';
import { Container, StyledFrame } from './editor.styled';

type Props = {
  sandboxName?: string;
};

const Editor: React.FC<Props> = ({ sandboxName = 'new' }) => {
  return (
    <Container>
      <StyledFrame src={`https://codesandbox.io/embed/${sandboxName}?autoresize=1`} />
    </Container>
  );
};

export default Editor;
