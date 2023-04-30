import React, { Component } from "react";
import SendButton from "../common/SendButton";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      textarea: "",
    };
  }

  inputUpdate = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

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
              value={this.state.name}
              name="name"
              onChange={this.inputUpdate}
              className="border-b-2 px-5 my-8 placeholder:text-ccOrange border-ccOrange text-ccDark focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email"
              value={this.state.email}
              name="email"
              onChange={this.inputUpdate}
              className="border-b-2 px-5 my-8 placeholder:text-ccOrange border-ccOrange text-ccDark focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone"
              value={this.state.phone}
              name="phone"
              onChange={this.inputUpdate}
              className="border-b-2 px-5 my-8 placeholder:text-ccOrange border-ccOrange text-ccDark focus:outline-none"
            />
            <textarea
              placeholder="say something..."
              rows={7}
              value={this.state.textarea}
              name="textarea"
              onChange={this.inputUpdate}
              className="border-2 p-5 my-8 border-ccOrange bg-ccGray placeholder:text-ccOrange text-ccDark focus:outline-none"
            />
            <SendButton
              name={this.state.name}
              email={this.state.email}
              phone={this.state.phone}
              textarea={this.state.textarea}
            />
          </div>
          <div className="relative w-full min-h-[calc(100vh-260px)] hidden xl:flex">
            <img
              src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"
              alt=""
              className=""
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-ccOrange bg-opacity-20"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
