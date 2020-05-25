'use strict';

let config = {
    type: Phaser.WegGL,
    width: 1000,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 1200 }
        }
    },
    /* scene: {
        preload: preload,
        create: create,
        update: update
    } */
    scene: [Stage1]
};

let game = new Phaser.Game(config);

