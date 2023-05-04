import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

import Layout from "../components/Layout"

const home = () => {
  return (
    <>
     <h3>Referrals</h3>
          
            
      <Hero>
        <Banner
          title="Complete Form below For Referral"
          subtitle=" If you refer someone you will recieve 15% of the total rental"
          
        >
          <Link to="/cars" className="btn-primary">
            Back to Cars 
          </Link>
          
        </Banner>
        
      </Hero>
    
      <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Referral</h3>
          <form action="https://formspree.io/mwkrlpzl" method="POST">
            <div className="form-group">
              <input type="text" name ="name" placeholder="name" className="form-control" />

              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                id=""
                rows="5"
                placeholder="Referral name and car you need"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
     
    </>
  );
};

export default home;
