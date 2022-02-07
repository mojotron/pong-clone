# Pong Clone

My next step in making classic arcade game and learning web dev is Atari's pong.
Try [Pong Clone here](https://mojotron.github.io/pong-clone/), game hosted via Github Pages.

## What have I learned?

### 1.requestAnimationFrame

Instead of using setInterval function requestAnimationFrame is better approach for couple of reasons. It gives smoother animation because browser can optimize it between calls. Animation is mostly 60 fps. setInterval is bad practice, cannot guaranty accurate callback calls. raF will call callbacks every time screen is rerendered.

### 2.changing css values with js using css variables

Using getComputedStyle, getPropertyValue, setProperty to dynamically change DOM element position.

### 3. getting element size depending on screen size

Learning to work with window.innerHeight and window.innerWidth. Interact between elements using getBoundingClientRect method.

### 4. bounding box collision detection

Basic algoritham of detecting the intersection of two objects. Two objects are intersecting when:

- ObjectA.top <= ObjectB.bottom AND
- ObjectA.bottom >= ObjectB.top AND
- ObjectA.left <= ObjectB.right AND
- ObjectA.right >= ObjectB.left

## Useful resources

Awesome video tutorial by [Kyle Cook](https://github.com/WebDevSimplified), that was motivation to this project.I have learned many new concepts.

Great explanation for bounding box collision detection by in this [video](https://www.youtube.com/watch?v=SoSHVoIZYbY)
