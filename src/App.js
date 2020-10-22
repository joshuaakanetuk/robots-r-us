import React from "react";
import data from "./data";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: [0],
    };
  }

  render() {
    return (
      <div className="App">
        <h2>Robots-R-Us</h2>
        <div className="robotContain">
          {data.map((robot, i) => {
            return (
              // Flex
              <div
                onClick={() => {
                  this.setState({
                    follow:
                      this.state.follow.indexOf(i) !== -1
                        ? this.state.follow.filter((f) => f !== Number(i))
                        : [...this.state.follow, i],
                  });
                }}
                key={i}
                className="robotGroup"
              >
                <div
                  style={{ backgroundImage: (robot.avatar ? "url(" + robot.avatar + ")" : "url('https://place-hold.it/100x100?text=NO%20ROBO')") }}
                  className="robotAvatar"
                ></div>
                <div className="robotName">
                  {robot.first_name + " " + robot.last_name}
                </div>
                <div
                  className={
                    this.state.follow.indexOf(i) !== -1
                      ? "robotFollowedButton"
                      : "robotFollowButton"
                  }
                >
                  {this.state.follow.indexOf(i) !== -1
                      ? "Followed"
                      : "Follow"}
                </div>
                <span className="robotTitle">{robot.title}</span>
                <span className="robotEmail">{robot.email}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
