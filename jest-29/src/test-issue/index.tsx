import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledExample = styled.div`
  display: block;
`;
StyledExample.displayName = 'StyledExample';


const Component: FunctionComponent = () => <StyledExample />;

export default Component;
