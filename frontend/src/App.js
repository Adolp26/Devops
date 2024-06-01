
import './App.css';
import React, { useState } from 'react';


function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault(); 

   
    const formData = {
      nome: nome,
      idade: idade,
      email: email
    };
    console.log(formData);
  fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
      
        console.log('Dados enviados com sucesso:', data);
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
      });
   
  };

  
  const users = [
    { name: 'João Silva', age: 30, email: 'joaosilva@email.com' },
    { name: 'Maria Oliveira', age: 25, email: 'mariaoliveira@email.com' },
    { name: 'Pedro Souza', age: 40, email: 'pedrosouza@email.com' }
  ];
  return (
    
    <div classNome="App">
      <br></br>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' value={nome} onChange={e => setNome(e.target.value)} placeholder='Nome' />
          <input type='number' value={idade} onChange={e => setIdade(e.target.value)} placeholder='idade' />
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
          <button type='submit' id='enviar'>Enviar</button>
        </form>
        <br></br>
        <div>
        <table className='user-table'>
          <thead>
            <th className='user-table'>Nome</th> 
            <th className='user-table'>Idade</th>
            <th className='user-table'>Email</th>
            <th className='user-table'>Funcoes</th>
          </thead>
          <tbody>
        {users.map((user) => (
          <tr key={user.name}>
            <td className='user-table'>{user.name}</td>
            <td className='user-table'>{user.age}</td>
            <td className='user-table'>{user.email}</td>
            <td className='user-table'>
              <button>Editar</button>
              <button>Excluir</button>
              </td>
          </tr>
        ))}
      </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default App;
