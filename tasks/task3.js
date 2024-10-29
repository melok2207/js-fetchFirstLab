const fetch = require('node-fetch');

async function updateUser(id, updatedData) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    return null;   
  }
}


updateUser(1, { name: 'New Name' })
  .then(data => console.log(data));

module.exports = updateUser;
