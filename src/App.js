import React, { Component } from 'react';
class NbaStanding extends Component {
  constructor() {
    super();
    this.state = {
      standings: [],
      eastStanding: [],
      westStanding: []
    };
  }
  /**
   * Create Standing Template
   * @public
   * @param {Array}
   * @return {Array} Array of DOM Elements
   */
  createStandingTemplate(standingConference) {
    return standingConference.map((team) => 
       <p key={team.idTeam}>
        {team.idTeam} {' '} 
	{team.leagueID} {' '} 
	{team.seasonID} {' '}
        {team.standingsDate} {' '} 
	{team.conference} {' '} 
        {team.team} {' '} 
	{team.numberGamePlayed} {' '}
        {team.numberGameWon} {' '}
	{team.numberGameLoose} {' '}
        {team.percentageWin} {' '}
	{team.homeRecord} {' '}
        {team.roadRecord}
      </p>
    )
  }

  async componentDidMount() {
    try {
      const data = await fetch("http://localhost:8080/controller/equipe");
      const body = await data.json();
      this.setState({
        standings: body,
        eastStanding: body[0],
        westStanding: body[1]
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return(
      <div>
        {this.createStandingTemplate(this.state.eastStanding)}
	{this.createStandingTemplate(this.state.westStanding)}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <NbaStanding />
      </div>
    );
  }
}

export default App;
