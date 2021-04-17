import React, { useState, userEffect, Component, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from '../components/ErrorBoundry';
import "./App.css";


const App = () => {
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") //fetch the list of users
        .then((response) => response.json()) //getting a response
        .then((users) => setRobots(users )); //assigning the res 
  })

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };


  const filteredRobots = robots.filter((robot) => {
    return robot.name
      .toLowerCase()
      .includes(searchfield.toLowerCase());
  });

  return(
    <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
            <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
  )
}
export default App;
