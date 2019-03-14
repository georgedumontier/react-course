import React from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };
  myInput = React.createRef();

  goToStore = e => {
    e.preventDefault();
    //get text from input
    //console.log(this.current.value);
    console.log(this);
    let storeName = this.myInput.current.value;
    //change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <>
        {/* ^^ this is the same as <React.Fragment> */}
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="store name"
            defaultValue={getFunName()}
          />
          <button type="submit"> Visit Store -></button>
        </form>
      </>
    );
  }
}

export default StorePicker;
