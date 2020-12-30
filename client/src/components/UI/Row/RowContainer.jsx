import { Box } from '@material-ui/core';
import styled from "styled-components";

export default styled(Box)`
  background-color: #FFFDFB;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.one}px
`;
