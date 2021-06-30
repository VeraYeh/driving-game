var $body = document.querySelector('body');
var $image = document.querySelector('img');
var rotate = [
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
];

$body.addEventListener('keydown', function (event) {
  for (let i = 0; i < rotate.length; i++) {
    if (event.key === rotate[i].keyPressed) {
      $image.className = rotate[i].direction;
    }
  }
});
