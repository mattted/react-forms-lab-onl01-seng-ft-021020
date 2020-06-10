import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      tweetText: "",
      remaining: props.maxChars
    };
  }

  tweetChange = (e) => {
    this.setState({
      tweetText: e.target.value,
      remaining: this.props.maxChars - e.target.value.length
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.tweetChange} name="message" id="message" value={this.state.tweetText} />
        <p>Remaining characters: {this.state.remaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
