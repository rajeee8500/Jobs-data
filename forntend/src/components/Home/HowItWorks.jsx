import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <div className="container">
        <h3>How SKILL-SAFARI Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p>Create Account</p>
            <p>
              Join our platform and unlock a world of opportunities. Sign up
              today to manage your applications and receive personalized job
              alerts.
            </p>
          </div>
          <div className="card">
            <MdFindInPage />
            <p>Find a Job/Post a Job</p>
            <p>
              Explore thousands of job listings or post your own. Whether you're
              looking to hire or seeking a new opportunity, our platform has you
              covered.
            </p>
          </div>
          <div className="card">
            <IoMdSend />
            <p>Apply For Job/Recruit Suitable Candidates</p>
            <p>
              Streamline your job search or recruitment process. Apply for your
              dream job or find the perfect candidate quickly and easily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
