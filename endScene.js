class EndScene extends Phaser.Scene {

    constructor() {
        super({ key: 'endScene' });
        this.starfield = null;
        this.gameName = null;
        this.playAgain = null;
        this.goToHome = null;
    }

    preload() {
        this.load.image("starfield", "assets/starfield.png");
    }

    create() {
        this.starfield = this.add.tileSprite(0, 0, 4000, 1400, "starfield");
        this.gameName = this.add.text(300, -300, 'SPACE INVADERS!', {
            fill: '#0f0',
            fontSize: '75px'
        });

        // changes the scene to gameScene
        this.playAgain = this.add.text(500, 200, 'PLAY AGAIN!', { fill: '#0f0', fontSize: '25px' });
        this.playAgain.setInteractive({ useHandCursor: true });
        this.playAgain.on('pointerdown', () => {
            this.scene.stop();
            this.scene.start('gameScene');
        });
        // this.playAgain.on('pointerover', () => {this.text.setColor('#ffff00')});
        // this.playAgain.on('pointerout', () => {this.text.setColor('#0f0')});

        // changes the scene to titleScene
        this.goToHome = this.add.text(500, 350, 'GO TO HOME', { fill: '#0f0', fontSize: '25px' });
        this.goToHome.setInteractive({ useHandCursor: true });
        this.goToHome.on('pointerdown', () => {
            this.scene.stop();
            this.scene.start('titleScene');
        });
        // this.goToHome.on('pointerover', () => {this.text.setColor('#ffff00')});
        // this.goToHome.on('pointerout', () => {this.text.setColor('#0f0')});
    }

    update() {
        this.starfield.tilePositionY -= 2;
    }

}
export default EndScene;