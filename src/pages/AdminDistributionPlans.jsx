import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const AdminDistributionPlans = () => {
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState({ name: '', description: '' });

  useEffect(() => {
    const fetchPlans = async () => {
      const plansCollection = collection(db, 'distributionPlans');
      const plansSnapshot = await getDocs(plansCollection);
      const plansList = plansSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPlans(plansList);
    };

    fetchPlans();
  }, []);

  const handleAddPlan = async () => {
    await addDoc(collection(db, 'distributionPlans'), newPlan);
    setNewPlan({ name: '', description: '' });
  };

  const handleUpdatePlan = async (id, updatedPlan) => {
    const planDoc = doc(db, 'distributionPlans', id);
    await updateDoc(planDoc, updatedPlan);
  };

  const handleDeletePlan = async (id) => {
    const planDoc = doc(db, 'distributionPlans', id);
    await deleteDoc(planDoc);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Gestion des plans de distribution</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Nom du plan"
            value={newPlan.name}
            onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={newPlan.description}
            onChange={(e) => setNewPlan({ ...newPlan, description: e.target.value })}
          />
          <button onClick={handleAddPlan}>Ajouter plan</button>
        </div>
        <div className="mt-4">
          {plans.map(plan => (
            <div key={plan.id}>
              <p>{plan.name} - {plan.description}</p>
              <button onClick={() => handleUpdatePlan(plan.id, { description: 'newDescription' })}>Modifier</button>
              <button onClick={() => handleDeletePlan(plan.id)}>Supprimer</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDistributionPlans;