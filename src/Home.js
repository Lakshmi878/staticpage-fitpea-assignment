import React from 'react';
import Nav from './Nav';
import Chart from './Chart';

function Home() {
  return (
    <div className=" bg-light text-dark" style={{ opacity: 1 }}>
      <Nav />
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-3">
            <div className=" bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <i className="bi bi-currency-dollar bi-10x  bg-warning rounded" style={{ fontSize: '2rem' }}></i>
              <div>
                <h6>Earning</h6>
                <h5 >$23</h5>
                <p > <i class="bi bi-arrow-up"></i>37.8% this month</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className=" bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <i className="bi bi-cart4 bi-10x bg-warning  rounded " style={{ fontSize: '2rem' }}></i>
              <div>
                <h6>Order</h6>
                <h5 >$45</h5>
                <p > <i class="bi bi-arrow-down"></i>8% this month</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className=" bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <i className="bi bi-wallet2 bi-10x bg-warning  rounded " style={{ fontSize: '2rem' }}></i>
              <div>
                <h6>Balance</h6>
                <h5 >$35</h5>
                <p > <i class="bi bi-arrow-up"></i>8% this month</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className=" bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <i className="bi bi-calculator bg-warning  rounded bi-10x" style={{ fontSize: '2rem' }}></i>
              <div>
                <h6>Total</h6>
                <h5 >20</h5>
                <p><i class="bi bi-arrow-up"></i>10% this month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">

          <Chart />
        </div>
        <div className="row g-3 my-2 bg-white border ">
        <div className="col-12">
    <div className="table-responsive">
      <table className="table rounded">
            <thead>
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <h5>Product sell</h5>
                </div>
                <div className="col-6">
                  <input className="form-control me-sm-2" type="text" placeholder="Search" />
                </div>

              </div>

              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Stock</th>
                <th scope="col">Price</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><i class="bi bi-emoji-smile bi-10x text-danger bg-dark" style={{ fontSize: '2rem' }}></i>Group1</th>
                <td>32</td>
                <td>$45</td>
                <td>$66</td>
              </tr>
              <tr>
                <th scope="row"><i class="bi bi-emoji-smile bi-10x text-danger bg-dark" style={{ fontSize: '2rem' }}></i>Group2</th>
                <td>32</td>
                <td>$45</td>
                <td>$33</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Home;
