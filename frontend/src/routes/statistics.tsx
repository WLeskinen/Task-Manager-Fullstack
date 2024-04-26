import React, { useEffect, useState } from 'react';
// import axios from 'axios'; FOR LATER
import NavBar from './navBar';


// Statistics interface
interface StatisticsData {
  totalTasks: number;
  completedTasks: number;
  totalActivities: number;
  completedActivities: number;
}

const statistics: React.FC = () => {
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



    // AXIOS CODE FOR WHEN DATABASE IS IMPLEMENTED.

    // useEffect(() => {
    //  const fetchStatistics = async () => {
    //    const tasksResponse = await axios.get('/tasks/statistics');
    //   const activitiesResponse = await axios.get('/activities/statistics');
    //      setStatistics({
    //        totalTasks: tasksResponse.data.total,
    //        completedTasks: tasksResponse.data.completed,
    //        totalActivities: activitiesResponse.data.total,
    //        completedActivities: activitiesResponse.data.completed,
    //      });
    //    };
    //
    //    fetchStatistics();
    //  }, []); 


  return (
    <div>
      <NavBar />
      <h1 className="text-7xl font-bold text-white text-center bg-primary py-9 font-ebrima">Statistics</h1>
      <div className="flex justify-between px-4">
        <div className="text-center">
          <h2 className="text-2xl text-black bg-white font-ebrima font-bold py-12 px-8" style={{ fontSize: '100px' }}>Tasks</h2>
        </div>
        <div className="text-center">
        <h2 className="text-2xl text-black bg-white font-ebrima font-bold py-12 px-8" style={{ fontSize: '100px' }}>Activities</h2>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/2 h-6 bg-slash"></div>
        <div className="w-1/2 h-6 bg-slash"></div>
      </div>
      <p className="text-lg text-black font-ebrima fontpy-2">Total: {statistics.totalTasks}</p>
      <p>Completed: {statistics.completedTasks}</p>
      <p>Incomplete:</p>
      <p>Percentage:</p>
      <p>Total: {statistics.totalActivities}</p>
      <p>Completed: {statistics.completedActivities}</p>
      <p>Incomplete:</p>
      <p>Percentage:</p>
    </div>
  );
};

export default statistics;
