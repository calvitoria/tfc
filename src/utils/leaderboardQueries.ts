const homeCase = `SELECT t.team_name as name,
COUNT(t.team_name) as totalGames,
(SUM(IF (m.home_team_goals > m.away_team_goals, 3, 0)) +
SUM(IF (m.home_team_goals < m.away_team_goals, 0, 0)) +
SUM(IF (m.home_team_goals = m.away_team_goals, 1, 0))) AS totalPoints,
SUM(IF (m.home_team_goals > m.away_team_goals, 1, 0)) AS totalVictories,
SUM(IF (m.home_team_goals = m.away_team_goals, 1, 0)) AS totalDraws,
SUM(IF (m.home_team_goals < m.away_team_goals, 1, 0)) AS totalLosses,
SUM(m.home_team_goals) AS goalsFavor,
SUM(m.away_team_goals) AS goalsOwn,
(SUM(m.home_team_goals) - SUM(m.away_team_goals)) AS goalsBalance,
ROUND(((SUM(IF (m.home_team_goals > m.away_team_goals, 3, 0)) +
SUM(IF (m.home_team_goals < m.away_team_goals, 0, 0)) +
SUM(IF (m.home_team_goals = m.away_team_goals, 1, 0))) /
(COUNT(t.team_name) * 3)) * 100, 2) AS efficiency
FROM TRYBE_FUTEBOL_CLUBE.teams AS t
join TRYBE_FUTEBOL_CLUBE.matches AS m ON t.id = m.home_team
WHERE in_progress = 0
GROUP BY t.team_name
ORDER BY totalPoints DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn DESC`;

export default { homeCase };
