var throttle = require('lodash.throttle');

import Player from '@vimeo/player';
const player = new Player('vimeo-player', {
    id: 'vimeo-player',
    width: 640
});

const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log('hello');
};
const throttled = throttle(onPlay, 1000);

player.on('timeupdate', throttled);

let playingTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(playingTime).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            
            break;

        default:
            
            break;
    }
});