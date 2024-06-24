import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updatePassword, deleteUser } from 'firebase/auth';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ email: '', password: '', role: '' });

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, 'users');
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);
    };

    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    const { email, password, role } = newUser;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await addDoc(collection(db, 'users'), { uid: user.uid, email, role });
    setNewUser({ email: '', password: '', role: '' });
  };

  const handleUpdateUser = async (id, updatedUser) => {
    const userDoc = doc(db, 'users', id);
    await updateDoc(userDoc, updatedUser);
  };

  const handleDeleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Gestion des utilisateurs</h1>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          />
          <input
            type="text"
            placeholder="Rôle"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          />
          <button onClick={handleAddUser}>Ajouter utilisateur</button>
        </div>
        <div className="mt-4">
          {users.map(user => (
            <div key={user.id}>
              <p>{user.email} - {user.role}</p>
              <button onClick={() => handleUpdateUser(user.id, { role: 'newRole' })}>Modifier</button>
              <button onClick={() => handleDeleteUser(user.id)}>Supprimer</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;