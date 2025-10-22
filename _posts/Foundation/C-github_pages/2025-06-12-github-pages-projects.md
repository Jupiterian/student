---
toc: false
layout: post
data: web-dev
title: Projects – Snake Game & Turtle
description: Hands-on projects editing and enhancing classic games like Snake and Turtle to practice JavaScript, DOM manipulation, and game logic.
categories: ["GitHub Pages"]
permalink: /web-dev/projects
breadcrumb: true
---

##  Snake Game Project Overview

For the Snake game project, go to the `hacks` directory and open `snake.md`. This file contains the full game logic and structure. You’ll experiment with core elements of the game to build your JavaScript and DOM skills.

###  What You Can Edit

Here are some customization ideas with example code snippets:

---

###  1. Change the Color of the Snake and Food
```js
let activeDot = function(x, y){
    ctx.fillStyle = "#FFFFFF";  // Change this to your desired color
    ctx.fillRect(x * BLOCK, y * BLOCK, BLOCK, BLOCK);
}
```

---

### 2. Change the Background Color
```js
ctx.fillStyle = "royalblue";  // Game area background
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

---

### 3. Change Border Color (Wall Setting)
```js
let setWall = function(wall_value){
    wall = wall_value;
    if(wall === 0){ screen_snake.style.borderColor = "#606060"; }  // Wall off
    if(wall === 1){ screen_snake.style.borderColor = "#FFFFFF"; }  // Wall on
}
```

---

### 4. Adjust Snake Speed
```js
let setSnakeSpeed = function(speed_value){
    snake_speed = speed_value;  // Example values: 120, 75, 35 (ms delay)
}
```

---

###  5. Customize Game Board Size
```html
<canvas id="snake" width="320" height="320"></canvas>
```

---

### 6. Change Snake Block Size
```js
const BLOCK = 10;  // Size of each snake segment
```

---

### Additional Ideas
- **Add a score display** – Use a counter that updates each time the snake eats.
- **Pause and resume the game** – Use keyboard events like the spacebar to toggle game state.
- **Change snake growth logic** – Modify how much the snake grows with each food item.

---

Feel free to explore the code, try the above suggestions, and add your own creative twists!

