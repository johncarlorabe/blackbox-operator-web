import React from 'react';

function Footer() {
  let date = new Date().getFullYear();
  return (
    <div className="footer">
      <footer className="py-1">
        <p className="m-0 text-center text-dark">
          <b>{process.env.REACT_APP_PROJECT_NAME}</b> <br />
          Copyright &copy; {date}. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;