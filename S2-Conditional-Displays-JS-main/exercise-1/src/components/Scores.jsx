import React from "react";

const Scores = ({ courseName, courseResults }) => {
  const getScore = (score) => {
    return score < 50 ? "warning" : "";
  };

  const calculateStatistics = () => {
    const scores = courseResults.map((result) => result.score);

    if (scores.length === 0) {
      return {
        min: 0,
        max: 0,
        average: 0,
      };
    }

    const average = (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(2);
    const min = Math.min(...scores);
    const max = Math.max(...scores);

    return { average, min, max };
  };

  const statistic = calculateStatistics();

  return (
    <section className="scores">
      <h2>{courseName} Scores</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {courseResults.map((result, index) => (
            <tr key={index}>
              <td>{result.firstName}</td>
              <td>{result.lastName}</td>
              <td className={getScore(result.score)}>{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div id="statistics">
        <h3>Statistics</h3>
        <p>Min: {statistic.min}</p>
        <p>Max: {statistic.max}</p>
        <p>Avg: {statistic.average}</p>
      </div>
    </section>
  );
};

export default Scores;
