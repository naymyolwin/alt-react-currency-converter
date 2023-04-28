import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="bg-ccOrange bg-opacity-40 h-[calc(100vh-15rem)]">
        <div className="container relative mx-auto flex">
          <div className="flex flex-col items-center w-full md:w-1/2 bg-white h-[calc(100vh-15rem)]">
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
          </div>
          <div className="relative w-1/2 h-[calc(100vh-15rem)] hidden md:block ">
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
