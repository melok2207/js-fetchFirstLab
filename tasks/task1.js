const fetch = require('node-fetch'); 

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const users = await response.json(); 


    return users.map(user => ({ id: user.id, name: user.name }));
  } catch (error) {
    console.error('Error fetching users:', error);
    return []; 
  }
}

// Використання функції
fetchUsers().then(users => console.log(users));

module.exports = fetchUsers;
