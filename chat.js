const chat = document.getElementById('chat');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');

// Reference to the Firebase Realtime Database
const database = firebase.database().ref('chat');

// Listen for new messages
database.on('child_added', (snapshot) => {
    const message = snapshot.val();
    displayMessage(message);
});

// Function to display a message
function displayMessage(message) {
    chat.innerHTML += `<p>${message.name}: ${message.text}</p>`;
}

// Event listener for sending messages
sendButton.addEventListener('click', () => {
    const text = messageInput.value;
    if (text.trim() !== '') {
        const message = {
            name: 'User', // Replace with the user's name or username
            text: text,
        };
        database.push(message);
        messageInput.value = '';
    }
});
