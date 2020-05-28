export default class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        this.speed = 400;

        scene.load.spritesheet('forwards', 'assets/forward-run.png', { frameWidth: 641, frameHeight: 542 });
        scene.load.spritesheet('backwards', 'assets/run-backwards.png', { frameWidth: 641, frameHeight: 542 });
        scene.load.spritesheet('idleing', 'assets/idle.png', { frameWidth: 641, frameHeight: 542 });

        const anims = scene.anims;
        anims.create({
            key: 'forward',
            frameRate: '30',
            frames: anims.generateFrameNumbers('forwards', {
                start: 0, 
                end: 7
            })
        });
        anims.create({
            key: 'backward',
            frameRate: '30',
            frames: anims.generateFrameNumbers('backwards', {
                start: 0, 
                end: 7
            })
        });
        anims.create({
            key: 'idle',
            frameRate: '30',
            frames: anims.generateFrameNumbers('idleing', {
                start: 0, 
                end: 8
            })
        });

        this.sprite = scene.physics.add.sprite(x, y, 'player').setScale(0.4)
        .setDrag(600, 0)
        .setMaxVelocity(300, 400);
        this.sprite.setCollideWorldBounds(true);
        this.sprite.setBounce(0.15);

        this.cursors = scene.input.keyboard.createCursorKeys();
    }

    update() {
        // if (this.cursors.left.isDown) {
        //     this.sprite.setVelocityX(-this.speed);
        // } else if (this.cursors.right.isDown) {
        //     this.sprite.setVelocityX(this.speed);
        // } else /*if (this.player.body.touching.down) */{
        //     this.sprite.setVelocityX(this.sprite.body.velocity['x'] * (1-this.sprite.body.friction['x']));
        // }
        // if (this.cursors.up.isDown /*&& this.player.body.touching.down*/) {
        //     this.sprite.setVelocityY(-600);
        // }
        if (this.cursors.left.isDown) {
            this.sprite.setVelocityX(-this.speed);
        } else if (this.cursors.right.isDown) {
            this.sprite.setVelocityX(this.speed);
        } else {
            this.sprite.setVelocityX(0);
        }
        if (this.cursors.up.isDown) {
            this.sprite.setVelocityY(-600);
        }
        // if (this.sprite.body.blocked.down) {
            if (this.sprite.body.velocity.x > 0) this.sprite.anims.play('forward', this);
            else if (this.sprite.body.velocity.x < 0) this.sprite.anims.play('backaward', this);
            else this.sprite.anims.play('idle', this);
        // } else {
        //     this.sprite.anims.stop();
        //     this.sprite.setTexture('idleing', 0);
        // }
    }

    destroy() {
        this.sprite.destroy();
    }
}