import React from 'react';


function Nav() {
  return (
    <div className="row">
                <div className="col-6 d-flex align-items-left">
                <h4 className='text-left'>Hello Fitpea <i class="bi bi-hand-thumbs-up text-primary"></i></h4>
                </div>
                <div className="col-6 align-items-right">
                  <input className="form-control me-sm-2" type="text" placeholder="Search" />
                </div>

              </div>
    
    
  );
}


export default Nav;
