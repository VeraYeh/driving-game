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
  }
};

$body.addEventListener('keydown', function (event) {
  for (let i = 0; i < car.directions.length; i++) {
    if (event.key === car.directions[i].keyPressed) {
      $image.className = car.directions[i].direction;
    }
  }
});

$body.addEventListener('keydown', function (event) {
  if (event.key === ' ') {
    setInterval(start, 16);
  }
});

function start() {
  car.location.x += 12;
  $imageContainer.style.left = car.location.x + 'px';
}
