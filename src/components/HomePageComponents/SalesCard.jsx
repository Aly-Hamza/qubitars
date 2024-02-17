import React from 'react';
import '../../styles/SalesCard.css';
import SalePic1 from '../../images/sale Pic 1.png';
import SalePic2 from '../../images/Sale Pic 2.png';
import TwoWatches from '../../images/TwoWatches.png';

const SalesCard = () => {
  return (
    <div className=" my-5 custom-container-sales-card">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-md-6">
              <div className="upper-left">
                <img src={SalePic1} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="upper-right">
                <img src={SalePic2} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="lower-left" style={{ display: 'flex', alignItems: 'center' }}>
           <div style={{ flex: 1, background: `url(${TwoWatches})`, backgroundSize: 'cover' }}></div>
             <div style={{ flex: 1, padding: '20px' }}>
               <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Find the best watch for you!</p>
               <p style={{ color: '#0F75BC', fontSize: '25px', fontWeight: 'bold', textAlign: 'center' }}>Smart</p>
               <p style={{ color: '#F7941D', fontSize: '25px', fontWeight: 'bold', textAlign: 'center' }}>Watches</p>
             </div>
           </div>
        </div>
        <div className="col-lg-4 d-none d-lg-block">
          <div className="right-section" style={{ background: `url(${TwoWatches})`, backgroundSize: 'cover', height: '400px', width:'100%' }}>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
