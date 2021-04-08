import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label for="fname">User:</label>
          <input type="text" id="fname" name="fname"></input>
          <br></br>
          <label for="lname">Comment:</label>
          <input type="text" id="lname" name="lname"></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Form;
