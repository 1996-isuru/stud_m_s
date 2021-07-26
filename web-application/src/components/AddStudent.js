import React from "react";

export default function AddStudent() {

    
  return (
    <div
      className="container"
      style={{ marginLeft: 30, marginTop: 50, width: 900 }}
    >
      <form>
        <div className="form-group row">
          <label htmlFor="name" className="text-start">
            Student Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Student Name.."
            />
          </div>
        </div>
        <div className="form-group row" style={{ marginTop: 20 }}>
          <label htmlFor="age" className="text-start">
            Age
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="Enter Student Age.."
            />
          </div>
        </div>
        <div className="form-group row" style={{ marginTop: 20 }}>
          <label htmlFor="gender" className="text-start">
            Gender
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="gender"
              placeholder="Enter Student Gender.."
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="text-start" style={{ marginTop: 20 }}>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
