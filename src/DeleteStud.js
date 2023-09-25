import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const DeleteStud = () => {
    
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://6511744f829fa0248e401d76.mockapi.io/students/${id}`, {
      method: "DELETE",
    })     
      .then(() => navigate("/delete-student"));
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default DeleteStud;