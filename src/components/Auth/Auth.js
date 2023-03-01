import React from 'react';

const AuthPageComp = () => {
  return (
    <div>
      <p>This is auth page</p>
    </div>
  );
};

const AuthPage = React.memo(AuthPageComp);
export default AuthPage;
