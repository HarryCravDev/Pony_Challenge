# Welcome

Hello, my name is Harry, I am a full-stack developer hoping to impress you with my code. Enjoy!

# Trust Pilot Coding Challenge - Pony

Here is my attempt at solving the Pony challenge. To do this, I have created a front-end React app, which is written in TypeScript. This app makes sense of the maze array response from the Pony API and displays walls according to the response, such that the user can navigate through the maze to successfully escape.

When the maze is set up and initialised by the user, each move thereafter is sent to the Pony API using HTTP to inform where exactly the user has decided to go. After each request, the maze is refreshed by pulling the new maze game state.

# Setup Instructions

There are two methods to set up this application in case one of them goes wrong, detailed below.

### Method 1

Assuming you have access to the zip file I sent to you, and Node installed on your machine:

1 - Start by unzipping the file.

2 - Once done, navigate to that folder using your terminal or command line.

3 - When you are within the repository, run this command:

```node
npm install
```

4 - Once that has finished installing, run this command to start the application process:

```node
npm run start
```

### Method 2

Assuming you have Node and Git installed on your machine:

1 - Using your terminal or command line window, run the following command:

```node
git clone https://github.com/HarryCravDev/Pony_Challenge.git
```

2 - Once done, navigate to the folder that is created from that command.

3 - When you are within the repository, run this command:

```node
npm install
```

4 - Once that has finished installing, run this command to start the application process:

```node
npm run start


```
