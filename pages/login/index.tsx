import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import { testSignIn, testSignOut, testSignUp } from '../../firebase';
import { useRouter } from 'next/router';
//styled components
const LoginPageWrapper = styled.section``;
const loginpage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();
  return (
    <LoginPageWrapper>
      <Head>
        <title>Login</title>
      </Head>
    </LoginPageWrapper>
  );
};

export default loginpage;
