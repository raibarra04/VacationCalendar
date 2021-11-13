import React, { useState, useEffect } from "react";
import axios from "axios";

const Results = () => {
  const recommendedSongsURL =
    "http://127.0.0.1:8000/songs?min_tempo=120&min_energy=0.75";

  const [song, setSong] = useState([{ artist: "Black Keys", name: "Fever" }]);

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
          <tr>
            <td>{song[0].name}</td>
            <td>{song[0].artists}</td>
          </tr>
          <tr>
            <td>{song[1].name}</td>
            <td>{song[1].artists}</td>
          </tr>
          <tr>
            <td>{song[2].name}</td>
            <td>{song[2].artists}</td>
          </tr>
          <tr>
            <td>{song[3].name}</td>
            <td>{song[3].artists}</td>
          </tr>
          <tr>
            <td>{song[4].name}</td>
            <td>{song[4].artists}</td>
          </tr>
          <tr>
            <td>{song[5].name}</td>
            <td>{song[5].artists}</td>
          </tr>
          <tr>
            <td>{song[6].name}</td>
            <td>{song[6].artists}</td>
          </tr>
          {/* {song.forEach((song) => {
            <tr>
              <td>{song.name}</td>
              <td>{song.artist}</td>
            </tr>;
          })} */}
        </table>
      </div>
    </div>
  );
};

export default Results;
