import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        <Link to="/"> Back to Home</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
