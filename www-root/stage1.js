class Stage1 extends Phaser.Scene {
    constructor() {
        super("firstStage");
        this.ground;
        this.player;
        this.cursors;
        this.speed = 400;
    }

    preload() {
        console.log(this);
        this.load.image('ground', 'assets/ground.png');
        this.load.image('sky', 'assets/sky-wide.jpg');
        this.load.spritesheet('duck', 'assets/ankka.png', { frameWidth: 300, frameHeight: 300 });
    }

    create() {
        this.add.image(0, 0, 'sky').setOrigin(0).setScale(2.4);

        this.ground = this.physics.add.staticGroup();
        this.ground.create(500, 580, 'ground').setScale(1);

        this.player = this.physics.add.sprite(100, 300, 'duck').setScale(0.25);
        this.player.setBounce(0.2);
        this.player.body.setGravityY(300)
        this.player.setCollideWorldBounds(true);

        this.physics.add.collider(this.player, this.ground);

        this.cameras.main.setBounds(0, 0, config.width * 2, config.height);
        this.cameras.main.startFollow(this.player);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-this.speed);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(this.speed);
        } else {
            this.player.setVelocityX(0);
        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-600);
        }
    }
}