import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="main-container">

            <h1 className="title">Election DApp</h1>

            <div className="main-content">
                <div className="account">
                    <b>Current Account:</b> 
                    <b>Election Leader: </b> 
                </div>
                <h2>Candidates</h2>
                <ul>
                    <li>Name of Candidate </li>
                </ul>
            </div>

            <div className="main-process">
                <div className="reg-candidate">
                    <h3>Add Candidate</h3>
                    <input
                        type="text"
                        placeholder="Candidate Name"
                    />
                    <button className="button">
                        Add Candidate
                    </button>
                </div>

                <div className="reg-voter">
                    <h3>Register Voter</h3>
                    <input
                        type="text"
                        placeholder="Voter Address"
                    />
                    <button className="button">Register Voter</button>
                </div>

                <div className="cast-vote">
                    <h3>Cast Vote</h3>
                    <input
                        type="number"
                        placeholder="Candidate Index"
                    />
                    <button className="button">Vote</button>
                </div>
            </div>

            <div className="winning-candidate">
                <h3>Winning Candidate</h3>
                <button>Get Winning Candidate</button>
                <p></p>
            </div>
        </div>
    );
}

export default App;