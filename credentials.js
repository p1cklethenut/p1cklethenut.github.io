// credentials.js
const credJSON = process.env.CREDENTIALS;

try {
  // Parse the JSON string into a JavaScript array
  const credentials = JSON.parse(credJSON);


  console.log(credentials);
} catch (error) {
  console.error("Error parsing the secret list:", error);
}



// Export the credentials array
module.exports = credentials;
