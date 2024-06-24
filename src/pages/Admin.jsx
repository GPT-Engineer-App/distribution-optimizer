import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Administration</h1>
        <div className="text-center mt-4">
          <Link to="/admin/users" className="mr-4">Gestion des utilisateurs</Link>
          <Link to="/admin/distribution-plans" className="mr-4">Gestion des plans de distribution</Link>
          <Link to="/admin/dashboard">Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;