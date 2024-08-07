import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="footer">
          <p>
            &copy; {new Date().getFullYear()} repair.Me | All rights reserved 
          </p>
      </footer>
    </>
  );
}
