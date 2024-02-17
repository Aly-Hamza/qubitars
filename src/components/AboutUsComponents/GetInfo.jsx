import React from 'react';
import '../../styles/AboutUs.css';

const GetInfo = () => {
  return (
    <div className="container text-center my-5">  
      <h1>Get Info</h1>
      <p>
        If your business has an online store, learn how we can help you increase
        your revenue. Free checking by the expert team.
      </p>
      <form>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control red-asterisk"
              placeholder="Name*"
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number*"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input
              type="email"
              className="form-control"
              placeholder="Email*"
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Category*"
              required
            />
          </div>
        </div>
        <div className="mb-3" style={{ position: 'relative' }}>
          <textarea
            className="form-control red-asterisk textarea"
            placeholder="Message*"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary inside-textarea-button"
            style={{borderRadius:'30px', width:'150px'}}
          >
            Send Query
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInfo;
