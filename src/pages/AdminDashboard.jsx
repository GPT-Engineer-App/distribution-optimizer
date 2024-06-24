import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const AdminDashboard = () => {
  const [plans, setPlans] = useState([]);
  const [stats, setStats] = useState({ totalPlans: 0, totalUsers: 0 });

  useEffect(() => {
    const fetchPlans = async () => {
      const plansCollection = collection(db, 'distributionPlans');
      const plansSnapshot = await getDocs(plansCollection);
      const plansList = plansSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPlans(plansList);
      setStats({ totalPlans: plansList.length, totalUsers: 0 }); // Update totalUsers accordingly
    };

    fetchPlans();
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Dashboard</h1>
        <div className="mt-4">
          <p>Total Plans: {stats.totalPlans}</p>
          <p>Total Users: {stats.totalUsers}</p>
        </div>
        <div className="mt-4">
          {plans.map(plan => (
            <div key={plan.id}>
              <p>{plan.name} - {plan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;