const fetch = require('node-fetch'); 

async function createUser(user) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user) 
    });

    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }
}


createUser({ name: "Sam", email: "fjsnfkjns2342@gmail.com" })
  .then(data => console.log(data));

module.exports = createUser;
