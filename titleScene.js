class TitleScene extends Phaser.Scene {

	constructor() {
		super({key:'titleScene'});
	}

	preload() {
		this.load.image("starfield", "assets/starfield.png");
	}

	create() {
		var starfield = this.add.tileSprite(0, 0, 4000, 1400, "starfield");
		var text = this.add.text(550,350, 'SPACE INVADERS!');
        var text = this.add.text(550,390, '<Click To Play>');

        text.setInteractive({ useHandCursor: true });
        text.on('pointerdown', () => this.clickButton());
	}
    clickButton() {
        this.scene.switch('gameScene');
    }

}
export default TitleScene;