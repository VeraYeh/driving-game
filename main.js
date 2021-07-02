var $body = document.querySelector('body');
var $image = document.querySelector('img');
var $imageContainer = document.querySelector('.image-container');
var car = {
  directions: [
    {
      keyPressed: 'ArrowRight',
      direction: 'right'
    },
    {
      keyPressed: 'ArrowDown',
      direction: 'down'
    },
    {
      keyPressed: 'ArrowUp',
      direction: 'up'
    },
    {
      keyPressed: 'ArrowLeft',
      direction: 'left'
    }
  ],
  location: {
    x: 0,
    y: 0
  },
  isMoving: false
};
var timer;

$body.addEventListener('keydown', function (event) {
  if (event.key === ' ') {
    car.isMoving = !car.isMoving;
    if (car.isMoving) {
      setTimer();
    } else {
      clearInterval(timer);
    }
  }

  for (let i = 0; i < car.directions.length; i++) {
    if (event.key === car.directions[i].keyPressed) {
      $image.className = car.directions[i].direction;
      if (car.isMoving) {
        clearInterval(timer);
        setTimer();
      }
    }
  }
});

function goRight() {
  car.location.x += 12;
  $imageContainer.style.left = car.location.x + 'px';
}

function goLeft() {
  car.location.x -= 12;
  $imageContainer.style.left = car.location.x + 'px';
}

function goUp() {
  car.location.y -= 12;
  $imageContainer.style.top = car.location.y + 'px';
}

function goDown() {
  car.location.y += 12;
  $imageContainer.style.top = car.location.y + 'px';
}

function setTimer() {
  if ($image.className === 'left') {
    timer = setInterval(goLeft, 16);
  }
  if ($image.className === 'right') {
    timer = setInterval(goRight, 16);
  }
  if ($image.className === 'up') {
    timer = setInterval(goUp, 16);
  }
  if ($image.className === 'down') {
    timer = setInterval(goDown, 16);
  }
}
