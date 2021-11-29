import React, { useState, useEffect } from "react";
import axios from "axios";

const Results = () => {
  const recommendedSongsURL =
    "http://127.0.0.1:8000/songs?min_tempo=120&min_energy=0.75";

  const [song, setSong] = useState([{ name: "Fever", artists: "Black Keys" }]);

  useEffect(() => {
    axios.get(recommendedSongsURL).then((response) => {
      setSong(response.data);
    });
  }, [recommendedSongsURL]);

  return (
    <div className="container">
      <div className="locationResultContainer">
        <h1>Locations Results</h1>
        <table>
          <tr>
            <th>Location</th>
            <th>Climate</th>
            <th>Best Time Visit</th>
          </tr>
          <tr>
            <td>Italy</td>
            <td>Warm</td>
            <td>July</td>
          </tr>
        </table>
      </div>
      <div className="songContainer">
        <h2>Song Recommendations</h2>
        <table>
          <tr>
            <th>Song Name</th>
            <th>Artist Name</th>
          </tr>
          {song.map((song) => {
            return (
              <tr>
                <td>{song.name}</td>
                <td>{song.artists}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Results;
