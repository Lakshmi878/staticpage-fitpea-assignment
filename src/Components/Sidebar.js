import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Sidebar() {
  return (
    <div>
      <div className="Sidebar d-flex flex-column bg-dark justify-content-between text-white min-vh-100">
        <div>
          <a href="d-flex align-items-center text-white ">
            <i class="bi bi-browser-edge text-white">
              <span className='fs-3 text-white'>DASHBOARD </span>
            </i>
          </a>
          <hr className='text-white mt-2' />
          <ul className='nav nav-pills flex-column'>

            <li className='nav-item p-1 '>
              <a href="" className="nav-link text-white active">
                <i class="bi bi-speedometer me-2 fs-5"></i>
                <span className=' me-2'>Dashboard</span>
              </a>
            </li>
            <li className='nav-item p-1'>
              <a href="" className="nav-link text-white">
                <i class="bi bi-box me-2 fs-5"></i>
                <span className='me-2'>Product</span>
              </a>
            </li>
            <li className='nav-item p-1'>
              <a href="" className="nav-link text-white">
                <i class="bi bi-person me-2 fs-5"></i>
                <span className=' me-2'>Customer</span>
              </a>
            </li>
            <li className='nav-item p-1'>
              <a href="" className="nav-link text-white">
                <i class="bi bi-cash me-2 fs-5"></i>
                <span className=' me-2'>Income</span>
              </a>
            </li>
            <li className='nav-item p-1'>
              <a href="" className="nav-link text-white">
                <i class="bi bi-megaphone me-2 fs-5"></i>
                <span className=' me-2'>Promote</span>
              </a>
            </li>
            <li className='nav-item p-1'>
              <a href="" className="nav-link text-white">
                <i class="bi bi-question-circle me-2 fs-5"></i>
                <span className=' me-2'>Help</span>
              </a>
            </li>

          </ul>
        </div>
        <div>
          <hr className='text-white mt-2' />
          <i class="bi bi-question-circle me-2 fs-5"></i>
          <span className='fs-4 me-2'>fitpea</span>
        </div>
      </div>

    </div>

  );
};

export default Sidebar;
