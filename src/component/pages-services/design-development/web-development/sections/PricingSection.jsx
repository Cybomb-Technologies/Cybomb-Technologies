import React from "react";
import styles from "./PricingSection.module.css";

export default function PricingSection() {
  return (
    <section className="container py-5">
      <h4 className="text-center mb-4">Choose Your Plan</h4>
      <div className="row text-center">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Basic</h5>
            <p>$99/month</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Standard</h5>
            <p>$199/month</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Premium</h5>
            <p>$299/month</p>
          </div>
        </div>
      </div>
    </section>
  );
}
