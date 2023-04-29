import React, { Component } from "react";
import Button from "../common/Button";

class Contact extends Component {
  render() {
    return (
      <div className="bg-ccOrange bg-opacity-40">
        <div className="container mx-auto flex flex-col xl:flex-row bg-white items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-260px)] bg-white ">
            <h3 className="text-3xl mt-16 text-ccOrange">Contact Us</h3>
            <p className="text-ccOrange my-4">We're waiting</p>
            <input
              type="text"
              placeholder="Name"
              className="border-b-2 px-5 my-8 placeholder:text-ccOrange border-ccOrange focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email"
              className="border-b-2 px-5 my-8 placeholder:text-ccOrange border-ccOrange focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border-b-2 px-5 my-8 placeholder:text-ccOrange border-ccOrange focus:outline-none"
            />
            <textarea
              placeholder="say something..."
              rows={7}
              className="border-2 p-5 my-8 border-ccOrange bg-ccGray placeholder:text-ccOrange focus:outline-none"
            />
            <Button />
          </div>
          <div className="relative w-full hidden xl:block">
            <img
              src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-ccOrange bg-opacity-20"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
