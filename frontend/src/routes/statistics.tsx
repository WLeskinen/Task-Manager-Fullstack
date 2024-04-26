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
        
        {/* Tasks Statistics */}
        <div className="flex justify-between px-4">
          <div className="text-center">
            <h2 className="text-2xl text-black bg-white font-ebrima font-bold py-12 px-8" style={{ fontSize: '100px' }}>Tasks</h2>
            <p className="text-2xl text-black font-ebrima font-bold py-8 px-4" style={{ fontSize: '52px' }}>Total: {statistics.totalTasks}</p>
            <p className="text-2xl text-black font-ebrima font-bold py-8 px-4" style={{ fontSize: '52px' }}>Completed: {statistics.completedTasks}</p>
            <p className="text-2xl text-black font-ebrima font-bold py-8 px-4" style={{ fontSize: '52px' }}>Incomplete:</p>
            <p className="text-2xl text-black font-ebrima font-bold py-8 px-4" style={{ fontSize: '52px' }}>Percentage:</p>
          </div>
          
          {/* Activities Statistics */}
          <div className="text-center">
            <h2 className="text-2xl text-black bg-white font-ebrima font-bold py-12 px-8" style={{ fontSize: '100px' }}>Activities</h2>
            <p className="text-2xl text-black font-ebrima font-bold py-8 px-4" style={{ fontSize: '52px' }}>Total: {statistics.totalActivities}</p>
            <p className="text-2xl text-black font-ebrima font-bold py-8 px-4" style={{ fontSize: '52px' }}>Completed: {statistics.completedActivities}</p>
            <p className="text-2xl text-black font-ebrima font-bold py-8 px-4" style={{ fontSize: '52px' }}>Incomplete:</p>
            <p className="text-2xl text-black font-ebrima font-bold py-8 px-4" style={{ fontSize: '52px' }}>Percentage:</p>
          </div>
        </div>
      </div>
    );    
};

export default statistics;
