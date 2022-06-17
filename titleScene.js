class TitleScene extends Phaser.Scene {

    constructor() {
        super({ key: 'titleScene' });
        this.starfield = null;
        this.text = null;
    }

    preload() {
        this.load.image("starfield", "assets/starfield.png");
    }

    create() {
        this.starfield = this.add.tileSprite(0, 0, 4000, 1400, "starfield");
        this.add.text(300, -300, 'SPACE INVADERS!', {
            fill: '#0f0',
            fontSize: '75px'
        });
        // this.text = this.add.text(550,350, 'SPACE INVADERS!', { fill: '#0f0' });
        this.text = this.add.text(500, 200, '<Click To Play>', { fill: '#0f0', fontSize: '25px' });
        this.text.setInteractive({ useHandCursor: true });

        this.text.on('pointerdown', () => {
            this.scene.stop();
            this.scene.start('gameScene');
        });
        this.text.on('pointerover', () => { this.text.setColor('#ffff00') });
        this.text.on('pointerout', () => { this.text.setColor('#0f0') });
    }

    update() {
        this.starfield.tilePositionY -= 2;
    }

}
export default TitleScene;