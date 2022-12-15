import styled from 'styled-components';
import { Link as Router } from 'react-router-dom';

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 8px;
`;
export const Span = styled.span`
  margin-bottom: 28px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
`;

export const Input = styled.input`
  border: 0;
  margin-bottom: 12px;
  height: 36px;
  border-radius: 4px;
  padding: 0 8px;
`;
export const Button = styled.button`
  height: 36px;
  border: 0;
  border-radius: 4px;
  background-color: #3366ff;
  color: #fff;
  font-size: 18px;
`;

export const Link = styled(Router)`
  color: #b4b8bb;
  text-decoration: none;
  margin: 14px 0;
  font-size: 14px;
`;




export const Textarea = styled.textarea`
  margin-bottom: 12px;
  border: 0;
  height: 90px;
  resize: none;
  border-radius: 4;
`;