import React, { Component } from "react";

class ExchangeBox extends Component {
  render() {
    return (
      <>
        <div
          className="w-100 bg-secondary position-absolute top-0 start-0 "
          style={{ height: "400px", zIndex: "-1" }}
        ></div>
        <div className="" style={{ height: "125px" }}></div>
        <div
          className="bg-info m-auto my-5 rounded-5 shadow"
          style={{ height: "300px", maxWidth: "770px", minWidth: "570px" }}
        >
          {/* <div className="h-100 d-flex align-items-center">
            <div className="bg-success input-group w-100 px-5 justify-content-between">
              <input
                type="text"
                className="form-control m-2"
                placeholder="From"
              />
              <input
                type="text"
                className="form-control m-2"
                placeholder="To"
              />
              <button
                className="btn btn-light rounded-circle m-2"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "#BB4430",
                  }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
              </button>
              <input type="text" className="form-control m-2" placeholder="" />
            </div>

            <button className="btn btn-danger">Convert</button>
          </div> */}
          <div className="row h-100 w-100 gutter-0 m-0">
            <div className="row d-flex align-items-end gutter-0 m-0">
              <div className="input-group w-100 m-0 px-5 justify-content-between">
                <input
                  required
                  type="text"
                  className="form-control m-2"
                  placeholder="Amount"
                />
                <div className="dropdown m-2">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-light"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <input
                  required
                  type="text"
                  className="form-control m-2"
                  placeholder="From"
                /> */}
                <button className="btn btn-light rounded-5 m-2" type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    style={{
                      margin: "auto",
                      width: "20px",
                      height: "20px",
                      color: "#BB4430",
                    }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                    />
                  </svg>
                </button>
                <div className="dropdown m-2">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-light"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <input
                  required
                  type="text"
                  className="form-control m-2"
                  placeholder="To"
                /> */}
              </div>
            </div>
            <div className="row d-flex align-items-center gutter-0 m-0">
              <div className="col d-flex justify-content-end pe-5">
                <button className="btn btn-danger btn-lg">Convert</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ExchangeBox;
