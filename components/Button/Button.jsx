import "./Button.css";
import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <div className="btn">
      <Link href="/contact" className="btn">
        <span className="btn-line"></span>Send Transmission
      </Link>
    </div>
  );
};

export default Button;
