import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
`;

export const Header = styled.h1`
  margin-bottom: 28px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
`;
export const Article = styled.article`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(18,18,18, 0.38);
  border-radius: 4px;
  margin-bottom: 12px;
  justify-content: center;
  padding: 14px 8px;
`;
export const Paragraph = styled.p`
  margin-bottom: 8px;
`;

export const Textarea = styled.textarea`
  margin-bottom: 12px;
  border: 0;
  height: 90px;
  resize: none;
  border-radius: 4;
  padding 8px;
`;
// ------- Buttons Area
export const Button = styled.button`
  height: 36px;
  border: 0;
  border-radius: 4px;
  background-color: #3366ff;
  color: #fff;
  font-size: 18px;
  margin-bottom: 28px;
`;

export const Buttons = styled.div`
  margin-right: 8px;
  border: 0;
  border-radius: 4px;
  padding: 4px;
`;
export const ButtonEdit = styled.button`
  margin-right: 8px;
  border: 0;
  border-radius: 4px;
  padding: 4px;
  font-size: 15px;
`;

export const ButtonDone = styled.button`
  color: #ffcc23;
  background-color: transparent;
  margin-right: 8px;
  border: 0;
  border-radius: 4px;
  padding: 4px;
  font-size: 15px;
`;

export const ButtonLogout = styled.button`
   position: absolute;
   bottom: 6%;
   left: 4%;
   height: 60px;
   width: 60px;
   border-radius: 30px;
   border: 0;
   font-weight: bold;
   background-color: rgba(219, 38, 41, 0.35);
   color: #fafafa;
   transition: all 0.5s;
   &:hover {
    background-color: rgba(219, 38, 41, 1);
   color: #fff;
  }
`;