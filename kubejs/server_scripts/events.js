// Basic console log
console.log('Script start');

// Event listener for server load
ServerEvents.loaded(event => {
    console.log('Server loaded event fired');
});

// Simple command registration
ServerEvents.command('test', event => {
    console.log('Test command executed');
    event.server.tell('Test command works!');
});

// Scheduled task
ServerEvents.tick(event => {
    if (event.server.ticks % 100 === 0) {  // Every 5 seconds (100 ticks)
        console.log('Scheduled task executed');
    }
});

console.log('Script end');