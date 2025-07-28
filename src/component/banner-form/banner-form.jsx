import React from 'react';
import styles from './Bannerform.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bannerform() {
  return (
    <div className={`${styles.formContainer} container py-5`}>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <form className={styles.requirementForm}>
            <div className="row">
              <div className="col-md-6 mb-4">
                <input 
                  type="text" 
                  className={`form-control p-3 ${styles.formInput}`} 
                  id="fullName" 
                  placeholder='Full Name'
                  required 
                />
              </div>
              <div className="col-md-6 mb-4">
                <input 
                  type="tel" 
                  className={`form-control p-3 ${styles.formInput}`} 
                  id="phoneNumber" 
                  placeholder='Phone Number'
                  required 
                />
              </div>
            </div>
            
            <div className="mb-4">
              <textarea 
                className={`form-control p-3 ${styles.formInput}`} 
                id="requirement" 
                rows="3" 
                placeholder='Your Requirement'
                required
              ></textarea>
            </div>
            
            <div className="row">
              <div className="col-md-6 mb-4">
                <input 
                  type="email" 
                  className={`form-control p-3 ${styles.formInput}`} 
                  id="email" 
                  placeholder='Email'
                  required 
                />
              </div>

              <div className="col-md-6 mb-4">
                <input 
                  type="text" 
                  className={`form-control p-3 ${styles.formInput}`} 
                  id="companyName" 
                  placeholder='Company Name'
                  required 
                />
              </div>
            </div>
            
            <div className="text-center">
              <button type="submit" className={`btn ${styles.submitButton} w-100 bg-black text-white p-3`}>
                Submit Your Requirement
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Bannerform;