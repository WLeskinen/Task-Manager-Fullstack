import React, { useEffect, useState } from 'react';
// import axios from 'axios'; FOR LATER
import { Link } from 'react-router-dom';

// Statistics interface
interface StatisticsData {
  totalTasks: number;
  completedTasks: number;
  totalActivities: number;
  completedActivities: number;
}

const Statistics: React.FC = () => {
  const [statistics, setStatistics] = useState<StatisticsData>({
    totalTasks: 0,
    completedTasks: 0,
    totalActivities: 0,
    completedActivities: 0,
  });

  useEffect(() => {                             // TEMPORARY HARDCODED DATA.
    const fetchStatistics = async () => {       // REPLACE WITH AXIOS LATER.
      // Temporary placeholders for statistics data
      const tasksResponse = { data: { total: 10, completed: 5 } };
      const activitiesResponse = { data: { total: 15, completed: 7 } };

      setStatistics({
        totalTasks: tasksResponse.data.total,
        completedTasks: tasksResponse.data.completed,
        totalActivities: activitiesResponse.data.total,
        completedActivities: activitiesResponse.data.completed,
      });
    };

    fetchStatistics();
  }, []);

  // Calculate incomplete tasks and activities
  const incompleteTasks = statistics.totalTasks - statistics.completedTasks;
  const incompleteActivities = statistics.totalActivities - statistics.completedActivities;

  // Calculate percentage difference between completed and total tasks and activities
  const tasksPercentageDifference = ((statistics.completedTasks / statistics.totalTasks) * 100).toFixed(2);
  const activitiesPercentageDifference = ((statistics.completedActivities / statistics.totalActivities) * 100).toFixed(2);

  return (
    <div>
      <h1>Statistics</h1>
      {/* Link to dashboard */}
      <Link to="/">Dashboard</Link>
      <h2>Tasks</h2>
      <p>Total: {statistics.totalTasks}</p>
      <p>Completed: {statistics.completedTasks}</p>
      <p>Incomplete: {incompleteTasks}</p>
      <p>Percentage Completion: {tasksPercentageDifference}%</p>
      <h2>Activities</h2>
      <p>Total: {statistics.totalActivities}</p>
      <p>Completed: {statistics.completedActivities}</p>
      <p>Incomplete: {incompleteActivities}</p>
      <p>Percentage Completion: {activitiesPercentageDifference}%</p>
    </div>
  );
};

export default Statistics;
