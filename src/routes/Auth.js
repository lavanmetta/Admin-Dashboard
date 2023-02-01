import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const getAccessTokenFromCookies = () => {
  const cookie = document.cookie;
  const tokenStartIndex = cookie.indexOf('accessToken=') + 'accessToken='.length;
  if (tokenStartIndex === -1) return null;
  const tokenEndIndex = cookie.indexOf(';', tokenStartIndex);
  const token = tokenEndIndex === -1 ?
    cookie.substring(tokenStartIndex) :
    cookie.substring(tokenStartIndex, tokenEndIndex);
  return token;
};

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const accessToken = getAccessTokenFromCookies();
      if (!accessToken) {
        navigate('/login');
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <WrappedComponent {...props} />;
    
  };
};
 
export default withAuth;
