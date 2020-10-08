import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(180deg, #02844e 0%, #01bf71 100%);
  height: 100vh;
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 440px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;

export const Icon = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 90px;
  margin-top: 20px;
  text-decoration: none;
`;

export const FormContent = styled.div`
  max-width: 440px;
  background: #000;
  color: #fff;
  padding: 40px 20px;
  border-radius: 4px;
  margin-left: 25px;
`;

export const Form = styled.div``;

export const FormH1 = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 60px;
`;

export const FormLabel = styled.div`
  display: block;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 4px;
  outline: none;
  padding: 25px 20px;
  margin-bottom: 30px;
  box-sizing: border-box;
`;

export const FormButton = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: #01bf71;
  padding: 18px;
  border-radius: 4px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
`;

export const Text = styled.div`
  text-align: center;
`;
