import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(evt) {
  console.log(evt.seconds);
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}

const time = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(time).then(function (seconds) {
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError': break;
       default: break;
    }
  });