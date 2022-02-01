# Pong Clone

My next step in making classic arcade game and learning web dev is Atari's pong.
Try [Pong Clone here](https://mojotron.github.io/pong-clone/), game hosted via Github Pages.

## What have I learned?

### 1.requestAnimationFrame

Instead of using setInterval function requestAnimationFrame is better approach for couple of reasons. It gives smoother animation because browser can optimize it between calls. Animation is mostly 60 fps. setInterval is bad practice, cannot guaranty accurate callback calls. raF will call callbacks every time screen is rerendered.

### 2.changing css values with js using css variables

Using getComputedStyle, getPropertyValue, setProperty to dynamically change html element position.

### 3. getting element size depending on screen size

Learning to work with window.innerHeight and window.innerWidth. Interact between elements using getBoundingClientRect method.

### bounding box collision

## Useful resources:

Awesome video tutorial.
Great explanation for bounding box collision detection by in this [video](https://www.youtube.com/watch?v=SoSHVoIZYbY)
