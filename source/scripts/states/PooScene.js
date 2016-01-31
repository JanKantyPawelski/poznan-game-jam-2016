export default class PooScene extends Phaser.State {
    preload() {
        this.game.load.image('background', 'assets/images/explosion.png');
        this.game.load.image('pooMan', 'assets/images/pooMan/01.png');
        this.game.load.image('toiletBarCorrect', 'assets/images/pooMan/toiletBarCorrect.png');
        this.game.load.image('toiletBarBad', 'assets/images/pooMan/toiletBarBad.png');
        this.game.load.image('toiletMarker', 'assets/images/pooMan/toiletMarker.png');
        this.game.load.image('hair', 'assets/images/pooMan/02.png');
        this.game.load.image('face', 'assets/images/pooMan/03.png');
        this.game.load.image('eyelashes', 'assets/images/pooMan/04.png');
        this.game.load.image('leftEye', 'assets/images/pooMan/05.png');
        this.game.load.image('underEyeSkin', 'assets/images/pooMan/06.png');
        this.game.load.image('rightEye', 'assets/images/pooMan/07.png');
        this.game.load.image('leftEyeBrow', 'assets/images/pooMan/08.png');
        this.game.load.image('rightEyeBrow', 'assets/images/pooMan/09.png');
        this.game.load.image('moustache', 'assets/images/pooMan/10.png');
        this.game.load.image('lips', 'assets/images/pooMan/11.png');
        //this.game.load.spritesheet('explosion', 'assets/images/explosion.png', 46.25, 37.5, 62);
    }

    create() {
        this.setSceneParameters();
        this.setPooMan();
        this.setBar();
        //this.explosion = this.game.add.sprite(0, 0, 'explosion');
        //this.explosion.animations.add('explode');
        //this.explosion.play('explode', 60, true);
    }

    setPooMan() {
        this.game.add.sprite(0, 0, 'background');
        this.pooManGroup = this.game.add.group();
        this.pooManGroup.create(0, 0, 'pooMan');

        this.setNormalHead();
        this.setRedHead();

        this.pooManGroup.add(this.pooManHeadNormal);
        this.pooManGroup.add(this.pooManHeadRed);
    }

    setRedHead() {
        this.pooManHeadRed = this.game.add.group();
        this.pooManHeadRed.alpha = 0;

        var face = this.game.add.sprite(0, 0, 'face');
        face = this.setHeadSprites(face, true);
        this.pooManHeadRed.add(face);

        var hair = this.game.add.sprite(0, 0, 'hair');
        hair = this.setHeadSprites(hair, true);
        this.pooManHeadRed.add(hair);

        var leftEyeBrow = this.game.add.sprite(0, 0, 'leftEyeBrow');
        leftEyeBrow = this.setHeadSprites(leftEyeBrow, false);
        this.pooManHeadRed.add(leftEyeBrow);

        var rightEyeBrow = this.game.add.sprite(0, 0, 'rightEyeBrow');
        rightEyeBrow = this.setHeadSprites(rightEyeBrow, false);
        this.pooManHeadRed.add(rightEyeBrow);

        var eyelashes = this.game.add.sprite(0, 0, 'eyelashes');
        eyelashes = this.setHeadSprites(eyelashes, false);
        this.pooManHeadRed.add(eyelashes);

        var leftEye = this.game.add.sprite(0, 0, 'leftEye');
        leftEye = this.setHeadSprites(leftEye, false);
        this.pooManHeadRed.add(leftEye);

        var rightEye = this.game.add.sprite(0, 0, 'rightEye');
        rightEye = this.setHeadSprites(rightEye, false);
        this.pooManHeadRed.add(rightEye);

        var underEyeSkin = this.game.add.sprite(0, 0, 'underEyeSkin');
        underEyeSkin = this.setHeadSprites(underEyeSkin, true);
        this.pooManHeadRed.add(underEyeSkin);

        var moustache = this.game.add.sprite(0, 0, 'moustache');
        moustache = this.setHeadSprites(moustache, true);
        this.pooManHeadRed.add(moustache);

        var lips = this.game.add.sprite(0, 0, 'lips');
        lips = this.setHeadSprites(lips, true);
        this.pooManHeadRed.add(lips);
    }

    setNormalHead() {
        this.pooManHeadNormal = this.game.add.group();

        var face = this.game.add.sprite(0, 0, 'face');
        face = this.setHeadSprites(face, false);
        this.pooManHeadNormal.add(face);

        var hair = this.game.add.sprite(0, 0, 'hair');
        hair = this.setHeadSprites(hair, false);
        this.pooManHeadNormal.add(hair);

        var leftEyeBrow = this.game.add.sprite(0, 0, 'leftEyeBrow');
        leftEyeBrow = this.setHeadSprites(leftEyeBrow, false);
        this.pooManHeadNormal.add(leftEyeBrow);

        var rightEyeBrow = this.game.add.sprite(0, 0, 'rightEyeBrow');
        rightEyeBrow = this.setHeadSprites(rightEyeBrow, false);
        this.pooManHeadNormal.add(rightEyeBrow);

        var eyelashes = this.game.add.sprite(0, 0, 'eyelashes');
        eyelashes = this.setHeadSprites(eyelashes, false);
        this.pooManHeadNormal.add(eyelashes);

        var leftEye = this.game.add.sprite(0, 0, 'leftEye');
        leftEye = this.setHeadSprites(leftEye, false);
        this.pooManHeadNormal.add(leftEye);

        var rightEye = this.game.add.sprite(0, 0, 'rightEye');
        rightEye = this.setHeadSprites(rightEye, false);
        this.pooManHeadNormal.add(rightEye);

        var underEyeSkin = this.game.add.sprite(0, 0, 'underEyeSkin');
        underEyeSkin = this.setHeadSprites(underEyeSkin, false);
        this.pooManHeadNormal.add(underEyeSkin);

        var moustache = this.game.add.sprite(0, 0, 'moustache');
        moustache = this.setHeadSprites(moustache, false);
        this.pooManHeadNormal.add(moustache);

        var lips = this.game.add.sprite(0, 0, 'lips');
        lips = this.setHeadSprites(lips, false);
        this.pooManHeadNormal.add(lips);
    }

    setHeadSprites(sprite, shouldBeRed) {
        if (shouldBeRed) {
            sprite.tint = 0x990000;
        }
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
        return sprite;
    }

    setSceneParameters() {
        this.startBadProgressWidth = 150;
        this.minMagneticPowerToCalculate = 10;
        this.minMagneticPower = 12;
        this.maxMagneticPower = 23;
        this.maxMagneticRandomPower = this.maxMagneticPower / 2;
        this.maxPlayerPower = 25;
        this.whenUpdateMinPower = 120;
        this.countFromUpdateMinPower = this.whenUpdateMinPower;
        this.timeInCorrectArea = 0;
        this.enteredIntoCorrectAreaTime = new Date().getTime();
        this.shouldSetEnetringTime = true;
        this.timeInCorrectAreToWin = 3000;
        this.totalTimeForScene = 8000;
        this.startTotalTime = new Date().getTime();
        this.test = true;
        this.maxHeadScale = 1.5;
        this.maxAlpha = 0.5;
    }

    setBar() {
        var barCenterY = this.game.height - 100;
        var hardnessBarMultiplier = this.game.settings.level * this.game.width / 20;
        this.toiletBarMargin = 20;
        this.toiletBarBadLeft = this.game.add.sprite(0, barCenterY, 'toiletBarBad');
        this.toiletBarBadLeft.x = this.toiletBarMargin;
        var maxX = this.game.width / 2 - this.toiletBarMargin;
        var badBarScale = this.startBadProgressWidth + Math.min(hardnessBarMultiplier, maxX);
        this.toiletBarBadLeft.scale.x = badBarScale;
        var endBarX = this.game.width - this.toiletBarMargin;
        this.toiletBarBadRight = this.game.add.sprite(0, barCenterY, 'toiletBarBad');
        this.toiletBarBadRight.x = endBarX - this.toiletBarBadLeft.width;
        this.toiletBarBadRight.scale.x = badBarScale;
        this.toiletBarCorrect = this.game.add.sprite(0, barCenterY, 'toiletBarCorrect');
        this.toiletBarCorrect.x = this.toiletBarMargin + this.toiletBarBadLeft.scale.x;
        this.toiletBarCorrect.scale.x = (this.game.width / 2 - this.toiletBarMargin - this.toiletBarBadRight.width) * 2;
        this.toiletMarker = this.game.add.sprite(0, 0, 'toiletMarker');
        this.toiletMarker.y = barCenterY;
        this.toiletMarker.x = this.game.width / 2 - this.toiletMarker.width / 2;
    }

    fail() {
        this.game.settings.level = Math.max(this.game.settings.level - 1, 1);
        this.game.state.start('PooScene');
    };

    win() {
        this.game.settings.level += 1;
        this.game.state.start('PooScene');
    };

    update() {
        if (this.timeInCorrectAreToWin < this.timeInCorrectArea) {
            this.win();
        }
        var markerCenter = new Phaser.Point(this.toiletMarker.x + this.toiletMarker.width / 2,
            this.toiletMarker.y + this.toiletMarker.height / 2);
        if (Phaser.Rectangle.containsPoint(this.toiletBarCorrect, markerCenter)) {
            if (this.shouldSetEnetringTime) {
                this.shouldSetEnetringTime = false;
                this.enteredIntoCorrectAreaTime = new Date().getTime();
            }
            this.timeInCorrectArea = new Date().getTime() - this.enteredIntoCorrectAreaTime;
        } else {
            this.timeInCorrectArea = 0;
            this.shouldSetEnetringTime = true;
            this.setHeadAnimation(markerCenter);
        }
        var halfGameWidth = this.game.width / 2;
        var markerPower = this.getMarkerPower(halfGameWidth);
        markerPower += this.getPlayerPower(halfGameWidth);
        this.toiletMarker.x += markerPower;

        if (this.isPlayerLoser()) {
            this.fail();
        }
    }

    setHeadAnimation(markerCenter) {
        var distanceToEdge;
        if (Phaser.Rectangle.containsPoint(this.toiletBarBadLeft, markerCenter)) {
            distanceToEdge = this.toiletBarBadLeft.x + this.toiletBarBadLeft.width - markerCenter.x;
        } else {
            distanceToEdge = markerCenter.x - this.toiletBarBadRight.x;
        }
        var scaleValue = distanceToEdge / this.toiletBarBadLeft.width * (this.maxHeadScale - 1) + 1;
        this.pooManHeadNormal.scale = new Phaser.Point(scaleValue, scaleValue);

        this.pooManHeadRed.scale = new Phaser.Point(scaleValue, scaleValue);
        this.pooManHeadRed.alpha = distanceToEdge / this.toiletBarBadLeft.width * this.maxAlpha;
    }

    isPlayerLoser() {
        return (this.toiletMarker.x <= this.toiletBarBadLeft.x
            || this.toiletMarker.x >= this.toiletBarBadRight.x + this.toiletBarBadRight.scale.x
            || new Date().getTime() - this.startTotalTime > this.totalTimeForScene)
            && this.timeInCorrectArea == 0;
    }

    getMarkerPower(halfGameWidth) {
        var distanceMarkerToCenter = (halfGameWidth - (this.toiletMarker.x + this.toiletMarker.width / 2)) * -1;
        var markerPower = distanceMarkerToCenter / (halfGameWidth - this.toiletBarMargin) * this.maxMagneticPower;
        if (Math.abs(markerPower) < this.minMagneticPowerToCalculate && ++this.countFromUpdateMinPower > this.whenUpdateMinPower) {
            this.countFromUpdateMinPower = 0;
            markerPower = this.getRandom(this.minMagneticPower, this.maxMagneticRandomPower);
            if (this.getRandomInt(0, 10000) % 2 == 0) {
                markerPower *= -1;
            }
        }
        return markerPower;
    }

    getPlayerPower(halfGameWidth) {
        if (!this.game.input.activePointer.isDown) {
            return 0;
        }
        var mouseDistanceToCenter = (halfGameWidth - this.game.input.x) * -1;
        return mouseDistanceToCenter / halfGameWidth * this.maxPlayerPower;
    }

    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min));
    }
}