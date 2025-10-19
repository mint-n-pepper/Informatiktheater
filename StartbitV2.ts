/*  */// Auto init hiwonder board when extension is added
informatiktheater.startbit_Init();

/**
 * Well known colors for a NeoPixel strip
 */
enum NeoPixelColors {
    //% block=red
    //% block.loc.de="rot"
    Red = 0xff0000,
    //% block=orange
    //% block.loc.de="orange"
    Orange = 0xffa500,
    //% block=yellow
    //% block.loc.de="gelb"
    Yellow = 0xffff00,
    //% block=green
    //% block.loc.de="grün"
    Green = 0x00ff00,
    //% block=blue
    //% block.loc.de="blau"
    Blue = 0x0000ff,
    //% block=indigo
    //% block.loc.de="indigo"
    Indigo = 0x4b0082,
    //% block=violet
    //% block.loc.de="violett"
    Violet = 0x8a2be2,
    //% block=purple
    //% block.loc.de="magenta"
    Purple = 0xff00ff,
    //% block=white
    //% block.loc.de="weiss"
    White = 0xffffff,
    //% block=black
    //% block.loc.de="schwarz"
    Black = 0x000000,
}


/**
 * DC motors on Hiwonder board
 */
enum HiwonderMotors {

    //% block="Motor 1"
    M1,
    //% block="Motor 2"
    M2,
    //% block="Motor 1 + 2"
    M12
}

/**
 * DC motors directions
 */
enum MotorDirections {

    //% block="Forward"
    //% block.loc.de="Vorwärts"
    Forward,
    //% block="Backward"
    //% block.loc.de="Rückwärts"
    Backward
}

/**
 * Named indexes for pre-defined icons below
 */
enum IconIndex {
    //% block="Smiley lachen"
    smiley_high,
    //% block="Smiley schmunzeln"
    smiley_b_high,
    //% block="Smiley Strich"
    smiley_underscore,
    //% block="Smiley betrübt"
    smiley_b_down,
    //% block="Smiley traurig"
    smiley_down,
    //% block="Herz gross"
    heart_big,
    //% block="Herz mittel"
    heart_medium,
    //% block="Herz klein"
    heart_small,
    //% block="Totenkopf 1"
    skull_1,
    //% block="Totenkopf 2"
    skull_2,
    //% block="Pfeil rechts"
    arrow_right,
    //% block="Pfeil links"
    arrow_left,
    //% block="Sonne"
    sun,
    //% block="X"
    X,
    //% block="Tanz rechts"
    dance_r,
    //% block="Tanz mitte"
    dance_c,
    //% block="Tanz links"
    dance_l,
    //% block="Musiknote"
    note,
    //% block="Verboten"
    forbidden,
}

/**
 * Array of arrays with pre-defined icons with a size of 16x16 pixels.
 */
const Icons: number[][] = [
    [0, 0, 0, 7224, 7224, 7224, 0, 384, 8580, 12300, 6168, 4080, 2016, 0, 0, 0],
    [0, 0, 0, 7224, 7224, 7224, 0, 384, 384, 0, 6168, 4080, 2016, 0, 0, 0],
    [0, 0, 0, 7224, 7224, 7224, 0, 384, 384, 0, 0, 4080, 4080, 0, 0, 0],
    [0, 0, 0, 7224, 7224, 7224, 0, 384, 384, 0, 0, 2016, 4080, 4104, 0, 0],
    [0, 0, 0, 7224, 7224, 7224, 0, 384, 384, 0, 0, 2016, 4080, 6168, 12300, 0],
    [
        0, 14364, 31806, 65151, 65535, 65535, 65535, 32766, 16380, 8184, 4080, 2016,
        960, 384, 0, 0,
    ],
    [0, 0, 0, 6168, 15420, 15996, 16380, 8184, 4080, 2016, 960, 384, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1056, 3696, 2016, 960, 384, 0, 0, 0, 0, 0, 0],
    [
        0, 2032, 2056, 4100, 8194, 8194, 8194, 9058, 4964, 2184, 5140, 3048, 1040,
        992, 0, 0,
    ],
    [
        0, 256, 1984, 8176, 16376, 8176, 13208, 5008, 4064, 1728, 2976, 1088, 896,
        256, 0, 0,
    ],
    [0, 0, 0, 16, 24, 28, 32766, 32767, 32766, 32764, 24, 16, 0, 0, 0, 0],
    [
        0, 0, 0, 2048, 6144, 14336, 32767, 65535, 32767, 16383, 6144, 2048, 0, 0, 0,
        0,
    ],
    [
        128, 128, 4228, 2056, 1488, 992, 2032, 30711, 2032, 992, 2512, 4104, 8324,
        128, 128, 0,
    ],
    [
        32769, 16386, 8196, 4104, 2064, 1056, 576, 384, 384, 576, 1056, 2064, 4104,
        8196, 16386, 32769,
    ],
    [
        1984, 448, 456, 264, 8184, 4480, 4480, 384, 768, 768, 768, 992, 544, 544,
        7712, 4144,
    ],
    [
        1984, 896, 256, 256, 8184, 5000, 5000, 896, 256, 896, 896, 4064, 2080, 2080,
        2080, 6192,
    ],
    [
        896, 768, 4864, 4352, 8160, 800, 800, 768, 384, 384, 1920, 1152, 1152, 1152,
        1216, 3136,
    ],
    [
        0, 0, 0, 512, 768, 640, 576, 576, 576, 512, 512, 7680, 15872, 15872, 7168,
        0,
    ],
    [
        4080, 12300, 24582, 20482, 34817, 33793, 33281, 33025, 32897, 32833, 32801,
        32785, 16394, 24582, 12300, 4080,
    ],
];

/**
 * Different modes for RGB or RGB+W NeoPixel strips
 */
enum NeoPixelMode {
    //% block="RGB (GRB format)"
    //% block.loc.de="GRB"
    RGB_GRB = 1,
    //% block="RGB+W"
    //% block.loc.de="RGB+W"
    RGBW = 2,
    //% block="RGB (RGB format)"
    //% block.loc.de="RGB"
    RGB_RGB = 3,
}

/**
 * NeoPixel matrix size definiitons
 */
enum matrixSizes {
    //% block="16x16"
    medium_16x16,
    //% block="32x8"
    medium_32x8,
    //% block="64x8"
    large_64x8,
    //% block="8x8"
    small_8x8,
    //% block="Netz 20x20"
    netz_20x20,
}

/**
 * Available pins on ports (connectors)
 */
enum HiwonderPins {
    P2 = DigitalPin.P2,
    P1 = DigitalPin.P1,
    P14 = DigitalPin.P14,
    P13 = DigitalPin.P13,
    P16 = DigitalPin.P16,
    Board= DigitalPin.P15,
}

/**
 * Available pins on ports (connectors)
 */
enum HiwonderMatrixPins {
    P2 = DigitalPin.P2,
    P1 = DigitalPin.P1,
    P14 = DigitalPin.P14,
    P13 = DigitalPin.P13,
    P16 = DigitalPin.P16,
}

enum PowerSource {
    //% block="intern"
    Intern,
    //% block="extern"
    Extern,
}

const font8x3 = hex`
    0000000000000000 1038381010001000 6C6C480000000000 00287C28287C2800
    2038403008701000 64640810204C4C00 2050502054483400 3030200000000000
    1020202020201000 2010101010102000 0028387C38280000 0010107C10100000
    0000000000303020 0000007C00000000 0000000000303000 0004081020400000
    38444C5464443800 1030101010103800 3844041820407C00 3844043804443800
    081828487C080800 7C40407804443800 1820407844443800 7C04081020202000
    3844443844443800 3844443C04083000 0000303000303000 0000303000303020
    0810204020100800 00007C00007C0000 2010080408102000 3844041810001000
    38445C545C403800 384444447C444400 7844447844447800 3844404040443800
    7844444444447800 7C40407840407C00 7C40407840404000 3844405C44443C00
    4444447C44444400 3810101010103800 0404040444443800 4448506050484400
    4040404040407C00 446C544444444400 4464544C44444400 3844444444443800
    7844447840404000 3844444454483400 7844447848444400 3844403804443800
    7C10101010101000 4444444444443800 4444444444281000 4444545454542800
    4444281028444400 4444442810101000 7808102040407800 3820202020203800
    0040201008040000 3808080808083800 1028440000000000 00000000000000FC
    3030100000000000 000038043C443C00 4040784444447800 0000384440443800
    04043C4444443C00 0000384478403800 1820207820202000 00003C44443C0438
    4040704848484800 1000101010101800 0800180808084830 4040485060504800
    1010101010101800 0000685454444400 0000704848484800 0000384444443800
    0000784444447840 00003C4444443C04 0000582420207000 0000384038043800
    0020782020281000 0000484848582800 0000444444281000 00004444547C2800
    0000484830484800 0000484848381060 0000780830407800 1820206020201800
    1010100010101000 3008080C08083000 2850000000000000`;

/*
 Informatiktheater package
*/
//% weight=110  color=#3a4cf7
namespace informatiktheater {

    let leds_total = 0;
    let motor_1_speed = 0;
    let motor_2_speed = 0;


    /**
     * To be used as a shadow color picker block containing a custom array
     */
    //% blockId=brightColorNumberPicker block="%value"
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.defl='#ff0000'  
    //% value.fieldOptions.colours='["#000000","#ff0000","#ffa500","#ffff00","#00ff00","#0000ff","#00ffff","#ff00ff","#8a2be2","#ffffff"]'
    //% value.fieldOptions.columns=5 value.fieldOptions.className='rgbColorPicker' 
    //% 
    // weight=200
    //% group="Farben"
    export function __colorNumberPicker(value: number) {
        return value;
    }

    // Create a class to hold variable length lists of colors. This also helps to keep color lists
    // from being used as function arguments to code blocks that shouldn't accept them
    export class ColorPattern {
        _colorList: Array<number>;

        constructor(val: Array<number>) {
            this._colorList = val.slice(0);
        }

        getColors(): Array<number> {
            return this._colorList;
        }
    }

    /**
     * Create a new NeoPixel driver for `numleds` LEDs.
     * @param pin the pin where the neopixel is connected on the Hiwonder board
     * @param numleds number of leds in the strip, eg: 24,30,60,64
     * @param power_source whether the board is powered from an external battery pack or with the onboard battery
     */
    //% blockId="neopixel_create"
    //% block="NeoPixel at pin %pin| with %numleds leds| power source %power_source"
    //% block.loc.de="NeoPixels an Pin %pin|mit %numleds Pixeln| Spannungsquelle %power_source"
    //% jsdoc.loc.de="Erzeuge einen neuen Treiber für die gegebene Anzahl NeoPixels, die am angegebenen Port angeschlossen sind. Der Modus bestimmt die genaue Bauart der NeoPixel."
   
    //% parts="neopixel"
    //% power_source.defl=PowerSource.Intern
    //% subcategory="Stripe"
    //% weight=110
    // TODO: How is trackArgs supposed to work? Without this, the simulator will work again, but without neopixel simulation enabled
    // trackArgs=0, 2
    //% blockSetVariable=strip
    //% group="Setup"
    export function create(
        pin: HiwonderPins,
        numleds: number,
        power_source: PowerSource
    ): Strip {
        let strip = new Strip();
        const mode = NeoPixelMode.RGB_GRB;
        let stride = (mode as NeoPixelMode) === NeoPixelMode.RGBW ? 4 : 3;
        strip.buf = pins.createBuffer(numleds * stride);
        strip.start = 0;
        strip._length = numleds;
        strip._mode = mode || NeoPixelMode.RGB_GRB;
        strip.setBrightness(128);
        strip._power = power_source;
        if (strip._power == PowerSource.Intern) {
            leds_total += numleds;
        }
        // TODO: How can we solve this more elegant? When trying to cast,
        // we can't use string literals here and can't change DigitalPin to non constant enum
        let p;
        switch (pin) {
             case HiwonderPins.P2:
                p = DigitalPin.P2;
                break;   
            case HiwonderPins.P1:
                p = DigitalPin.P1;
                break;
            case HiwonderPins.P14:
                p = DigitalPin.P14;
                break;
            case HiwonderPins.P13:
                p = DigitalPin.P13;
                break;
            case HiwonderPins.P16:
                p = DigitalPin.P16;
                break;
            case HiwonderPins.Board:
                p = DigitalPin.P15;
                break;
        }
        strip.setPin(p);
        return strip;
    }


    /**
     * A NeoPixel strip
     */
    export class Strip {
        buf: Buffer;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: NeoPixelMode;
        _power: PowerSource;

        /**
         * Shows all LEDs to a given color (range 0-255 for r, g, b).
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_strip_color" block="%strip|show color %rgb=neopixel_colors"
        //% block.loc.de="%strip|zeige Farbe %rgb=neopixel_colors"
        //% jsdoc.loc.de="Setze alle Pixel auf die angegebene Farbe und rufe ```` auf."
        //% strip.defl=strip
        //% weight=50
        //% parts="neopixel"
        //% subcategory=Stripe
        //% group="Kontrolle"
        showColor(rgb: number) {
            rgb = rgb >> 0;
            this.setAllRGB(rgb);
            this.show();
        }

        /**
         * Shows a rainbow pattern on all LEDs.
         * @param startHue the start hue value for the rainbow, e.g. 0 is red, 120 green, 240 blue, 360 red
         * @param endHue the end hue value for the rainbow
         */
        //% blockId="neopixel_set_strip_rainbow" block="%strip|show rainbow from %startHue|to %endHue"
        //% block.loc.de="%strip|zeige Regenbogen von Farbton %startHue|bis %endHue"
        //% jsdoc.loc.de="Zeigt ein Regenbogenmuster auf allen NeoPixeln an."
        //% strip.defl=strip
        //% startHue.shadow="colorWheelHsvPicker"
        //% startHue.defl=1
        //% endHue.defl=255
        //% endHue.shadow="colorWheelHsvPicker"
        //% weight=20
        //% parts="neopixel"
        //% subcategory="Stripe"
        //% group="Kontrolle"
        showRainbow(startHue: number = 1, endHue: number = 255) {
            if (this._length <= 0) return;

            startHue = (startHue * 360) / 255;
            startHue = startHue >> 0;
            endHue = (endHue * 360) / 255;
            endHue = endHue >> 0;

            const saturation = 100;
            const luminance = 50;
            const steps = this._length;
            const direction = HueInterpolationDirection.Clockwise;
            // if (endHue > startHue) {
            //     direction = HueInterpolationDirection.Clockwise;
            // } else if (endHue < startHue) {
            //     direction = HueInterpolationDirection.CounterClockwise;
            // }

            //hue
            const h1 = startHue;
            const h2 = endHue;
            let hDistCW;
            let hDistCCW;
            let hStepCW;
            let hStepCCW;

            // In case we have a full rainbow
            if (h2 !== h1 && (h2 + 360 - h1) % 360 == 0) {
                hDistCW = 360;
                hDistCCW = 360;
            } else {
                hDistCW = (h2 + 360 - h1) % 360;
                hDistCCW = (h1 + 360 - h2) % 360;
            }
            hStepCW = Math.idiv(hDistCW * 100, steps);
            hStepCCW = Math.idiv(-(hDistCCW * 100), steps);
            let hStep: number;

            if (direction === HueInterpolationDirection.Clockwise) {
                hStep = hStepCW;
            } else if (direction === HueInterpolationDirection.CounterClockwise) {
                hStep = hStepCCW;
            } else {
                hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;
            }

            const h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation

            //sat
            const s1 = saturation;
            const s2 = saturation;
            const sDist = s2 - s1;
            const sStep = Math.idiv(sDist, steps);
            const s1_100 = s1 * 100;

            //lum
            const l1 = luminance;
            const l2 = luminance;
            const lDist = l2 - l1;
            const lStep = Math.idiv(lDist, steps);
            const l1_100 = l1 * 100;

            //interpolate
            if (steps === 1) {
                this.setPixelColor(0, hsl(h1 + hStep, s1 + sStep, l1 + lStep));
            } else {
                this.setPixelColor(0, hsl(startHue, saturation, luminance));
                for (let i = 1; i < steps - 1; i++) {
                    const h = Math.idiv(h1_100 + i * hStep, 100) + 360;
                    const s = Math.idiv(s1_100 + i * sStep, 100);
                    const l = Math.idiv(l1_100 + i * lStep, 100);
                    this.setPixelColor(i, hsl(h, s, l));
                }
                this.setPixelColor(steps - 1, hsl(endHue, saturation, luminance));
            }
            this.show();
        }

        /**
         * Set LED to a given color (range 0-255 for r, g, b).
         * You need to call ``show`` to make the changes visible.
         * @param pixeloffset position of the NeoPixel in the strip
         * @param range how many pixels starting at position
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_pixel_color" block="%strip|set color of Neopixel %pixeloffset|to %rgb=neopixel_colors|amount %number"
        //% block.loc.de="%strip|setze Farbe von Neopixel %pixeloffset|auf %rgb=neopixel_colors|Anzahl %number"
        //% jsdoc.loc.de="Setzt die NeoPixel im Interval mit der angegebenen Startnummer auf die angegebene Farbe. Damit die Änderung sichtbar wird, muss anschließend ``anzeigen`` aufgerufen werden."
        //% strip.defl=strip
        //% number.defl=1
        //% number.min=1
        //% number.max=255
        //% pixeloffset.defl=0
        //% pixeloffset.min=0
        //% pixeloffset.max=255

        //% rgb.shadow=neopixel_colors
        //% parts="neopixel"
        //% subcategory="Stripe"
        //% group="Kontrolle"
        setPixelColorRange(pixeloffset: number, rgb: number, number: number): void {
            for (let i = 0; i < number; i++) {
                this.setPixelRGB((pixeloffset + i) >> 0, rgb >> 0);
            }
        }

        setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB(pixeloffset >> 0, rgb >> 0);
        }

        /**
         * Send all the changes to the strip.
         */
        //% blockId="neopixel_show" block="%strip|show"
        //% block.loc.de="%strip|anzeigen"
        //% jsdoc.loc.de="Sendet alle Änderungen an die NeoPixel."
        //% strip.defl=strip
        //% weight=10
        //% parts="neopixel"
        //% subcategory=Stripe
        //% group="Kontrolle"
        show() {
            // only supported in beta
            // ws2812b.setBufferMode(this.pin, this._mode);
            ws2812b.sendBuffer(this.buf, this.pin);
        //   console.log("Estimated current for neopixels = " + this.power());
        }

        /**
         * Turn off all LEDs.
         * You need to call ``show`` to make the changes visible.
         */
        //% blockId="neopixel_clear" block="%strip|clear"
        //% block.loc.de="%strip|ausschalten"
        //% jsdoc.loc.de="Schalte alle NeoPixel aus. Damit die Änderung sichtbar wird, muss anschließend ``anzeigen`` aufgerufen werden."
        //% strip.defl=strip
        //% weight=9
        //% parts="neopixel"
        //% subcategory=Stripe
        //% group="Kontrolle"
        clear(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
        }

        /**
         * Gets the number of pixels declared on the strip
         */
        //% blockId="neopixel_length" block="%strip|length"
        //% block.loc.de="%strip|Länge"
        //% jsdoc.loc.de="Die Anzahl der NeoPixel, die der Treiber verwaltet."
        //% strip.defl=strip
        //% weight=60
        //% subcategory=Stripe
        //% group="Features"
        length() {/*  */
            return this._length;
        }

        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * The highest possible brightness level depends on the number of individual LED's set at ``create``.
         * The brightness will be capped at this threshold.
         * @param brightness a measure of LED brightness in 0-255. eg: 100
         */
        //% blockId="neopixel_set_brightness" block="%strip|set brightness %brightness"
        //% block.loc.de="%strip|setze Helligkeit auf (0-255) %brightness"
        //% jsdoc.loc.de="Setze die Helligkeit der NeoPixel (0-255). Die Änderung betrifft nur zukünftige Operationen! Die höchst möglichste Helligkeit hängt von der Anzahl LED's ab. Die Helligkeit wird bei diesem Schwellwert begrenzt."
        //% brightness.defl=150 brightness.min=0 brightness.max=255
        //% strip.defl=strip
        //% weight=41
        //% parts="neopixel"
        //% subcategory=Stripe
        //% group="Setup"
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        /**
         * Shift LEDs forward and clear with zeros.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to shift forward, eg: 1
         */
        //% blockId="neopixel_shift" block="%strip|shift pixels by %offset"
        //% block.loc.de="%strip|verschiebe NeoPixel um %offset"
        //% jsdoc.loc.de="Verschiebt die Farben der NeoPixel. Damit die Änderung sichtbar wird, muss anschließend ``anzeigen`` aufgerufen werden."
        //% strip.defl=strip
        //% weight=40
        //% parts="neopixel"
        //% subcategory="Stripe"
        //% group="Kontrolle"
        shift(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.shift(
                -offset * stride,
                this.start * stride,
                this._length * stride
            );
        }

        /**
         * Rotate LEDs forward.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to rotate forward, eg: 1
         */
        //% blockId="neopixel_rotate" block="%strip|rotate pixels by %offset"
        //% block.loc.de="%strip|rotiere NeoPixel um %offset"
        //% jsdoc.loc.de="Rotiert die Farben der NeoPixel. Damit die Änderung sichtbar wird, muss anschließend ``anzeigen`` aufgerufen werden."
        //% strip.defl=strip
        //% weight=39
        //% parts="neopixel"
        //% subcategory="Stripe"
        //% group="Kontrolle"
        rotate(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.rotate(
                -offset * stride,
                this.start * stride,
                this._length * stride
            );
        }

        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
        }

        /**
         * Estimates the electrical current (mA) consumed by the current light configuration.
         */
        power(): number {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            const end = this.start + this._length;
            let p = 0;
            for (let i = this.start; i < end; ++i) {
                for (let j = 0; j < stride; ++j) {
                    p += this.buf[i + j];
                }
            }
            return (
                Math.idiv(this.length() * 7, 10) /* 0.7mA per neopixel */ +
                Math.idiv(p * 480, 10000)
            ); /* rought approximation */
        }

        private setBufferRGB(
            offset: number,
            red: number,
            green: number,
            blue: number
        ): void {
            if (this._mode === NeoPixelMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            let br: number;
            if (this._power == PowerSource.Intern) {
                br =
                    this.brightness < total_brightness_limit()
                        ? this.brightness
                        : total_brightness_limit();
            } else if (this._power == PowerSource.Extern) {
                br = this.brightness;
            }
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            const end = this.start + this._length;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * stride, red, green, blue);
            }
        }

        setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0 || pixeloffset >= this._length) return;

            let stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            let br: number;
            if (this._power == PowerSource.Intern) {
                br =
                    this.brightness < total_brightness_limit()
                        ? this.brightness
                        : total_brightness_limit();
            } else if (this._power == PowerSource.Extern) {
                br = this.brightness;
            }
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(pixeloffset, red, green, blue);
        }
    }

    function total_brightness_limit(): number {
        // a WS2812B LED has a current of about 60mA at full brightness with white color
        // The TP5400 voltage regulator on the Hiwonder board can deliver around 740mA. To have a little margin we choose a max current of 700mA.
        // NOTE sja: Removed !!!exceptional double current!!!! for testing the library on hardware. Having this enabled is not useful. Please set to "external" power supply if you don't want to have power limitation enabled.
        return Math.idiv(700 * 255, leds_total * 60) & 0xff;
    }

    /**
     * creates a color from rgb numbers
     * @param r red channel
     * @param g green channel
     * @param b blue channel
     */
    
    //% blockId="neopixel_rgb" block="red %red|green %green|blue %blue"
    //% block.loc.de="rot %red|grün %green|blau %blue"
    //% jsdoc.loc.de="Erstellt eine RGB-Farbe"
    //% red.defl=255 red.min=0 red.max=255
    //% blue.defl=255 blue.min=0 blue.max=255
    //% green.defl=255 green.min=0 green.max=255
    //% 
    //% weight=21
    //% group="Farben" 
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * creates a color from hsv color picker
     * @param hue color
     */
    //% 
    //% blockId="neopixel_hsv" block="hue %hue"
    //% block.loc.de="Farbe (0-255) %hue"
    //% jsdoc.loc.de="Erstellt eine Farbe"
    //% hue.shadow="colorWheelHsvPicker"
    //% 
    //% weight=80
    //% group="Farben" 

    export function hsv_picker(hue: number): number {
        let mapped_hue = (hue * 360) / 255;
        return hsl(mapped_hue, 100, 50);
    }

    /**
     * Gets the RGB value of a known color
     */

    //% blockId="neopixel_colors" block="%color"
    //% block.loc.de="%color"
    //% jsdoc.loc.de="Bekannte RGB-Farben"
    //% 
    //% weight=90
    //% group="Farben"
    export function colors(color: NeoPixelColors): number {
        return color;
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xff) << 16) | ((b & 0xff) << 8) | (c & 0xff);
    }
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xff;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xff;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = rgb & 0xff;
        return b;
    }

    /**
     * Converts a hue saturation luminosity value into a RGB color
     * @param h hue from 0 to 360
     * @param s saturation from 0 to 99
     * @param l luminosity from 0 to 99
     */
    export function hsl(h: number, s: number, l: number): number {
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);

        h = h % 360;
        s = Math.clamp(0, 99, s);
        l = Math.clamp(0, 99, l);
        let c = Math.idiv(((100 - Math.abs(2 * l - 100)) * s) << 8, 10000); //chroma, [0,255]
        let h1 = Math.idiv(h, 60); //[0,6]
        let h2 = Math.idiv((h - h1 * 60) * 256, 60); //[0,255]
        let temp = Math.abs((h1 % 2 << 8) + h2 - 256);
        let x = (c * (256 - temp)) >> 8; //[0,255], second largest component of this color
        let r$: number;
        let g$: number;
        let b$: number;
        if (h1 == 0) {
            r$ = c;
            g$ = x;
            b$ = 0;
        } else if (h1 == 1) {
            r$ = x;
            g$ = c;
            b$ = 0;
        } else if (h1 == 2) {
            r$ = 0;
            g$ = c;
            b$ = x;
        } else if (h1 == 3) {
            r$ = 0;
            g$ = x;
            b$ = c;
        } else if (h1 == 4) {
            r$ = x;
            g$ = 0;
            b$ = c;
        } else if (h1 == 5) {
            r$ = c;
            g$ = 0;
            b$ = x;
        }
        let m = Math.idiv(Math.idiv((l * 2) << 8, 100) - c, 2);
        let r = r$ + m;
        let g = g$ + m;
        let b = b$ + m;
        return packRGB(r, g, b);
    }

    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest,
    }

    /**
     * Erstelle ein neues Matrix Objekt
     * @param pin Pin an welchem die Matrize angeschlossen ist
     * @param size Dimension des Panels in Breite x Höhe
     * @param power_source Spannungsquelle welche die LED's versorgt (intern/extern)
     */
    //% blockId="Matrix_Create"
    //% block="matrix auf Pin %pin|mit einer Grösse von %size| Spannungsquelle %power_source"

    //% power_source.defl=PowerSource.Intern
    //% subcategory="Matrix"    
    //% group="Setup"
    //% parts="neopixel"
    //% blockSetVariable=matrix

    export function create_matrix(
        pin: HiwonderMatrixPins,
        size: matrixSizes,
        power_source: PowerSource
    ): Matrix {
        let matrix = new Matrix();
        let w, h;
        switch (size) {
            case matrixSizes.medium_16x16:
                w = 16;
                h = 16;
                break;
            case matrixSizes.medium_32x8:
                w = 32;
                h = 8;
                break;
            case matrixSizes.large_64x8:
                w = 64;
                h = 8;
                break;
            case matrixSizes.small_8x8:
                w = 8;
                h = 8;
                break;
            case matrixSizes.netz_20x20:
                w = 20;
                h = 20;
                break;
        }

        let p: HiwonderPins;
        switch (pin) {
            case HiwonderMatrixPins.P1:
                p = HiwonderPins.P1;
                break;
            case HiwonderMatrixPins.P2:
                p = HiwonderPins.P2;
                break;
            case HiwonderMatrixPins.P13:
                p = HiwonderPins.P13;
                break;
            case HiwonderMatrixPins.P14:
                p = HiwonderPins.P14;
                break;
            case HiwonderMatrixPins.P16:
                p = HiwonderPins.P16;
                break;
        }
        matrix.strip = informatiktheater.create(p, h * w, power_source);
        matrix.Width = w;
        matrix.Height = h;

        return matrix;
    }

    export class Matrix {
        strip: informatiktheater.Strip;
        Width: number;
        Height: number;

        //%blockId="Matrix_show" block="%matrix| anzeigen"
        //% subcategory=Matrix
        //% group="Features"
        show(): void {
            this.strip.show();
        }

        //%blockId="Matrix_Brighness" block="%matrix setze Helligkeit auf (0-255) %setpoint"
        //%setpoint.defl=32
        //%setpoint.min=0
        //%setpoint.max=255
        //% subcategory="Matrix"
        //% group="Setup"
        setBrightness(setpoint: number): void {
            this.strip.setBrightness(setpoint);
        }

        /**
         * Clear all LED's
         * You have to call ``show`` afterwards
         */
        //%blockId="Matrix_clear" block="%matrix| ausschalten"
        //% jsdoc.loc.de="Schalte alle NeoPixel aus. Damit die Änderung sichtbar wird, muss anschließend ``anzeigen`` aufgerufen werden."
        //% weight=33
        //% subcategory=Matrix
        //% group="Features"
        clear(): void {
            this.strip.clear();
            this.strip.show();
        }

        /**
         * Setzt eine Farbe auf einem bestimmten Pixel in einer LED Matrize.
         * Das Koordinaten System für eine oben links Anfangende Matrize ist wie folgt:
         * ----> X
         * |
         * |
         * |
         * v
         * Y
         * Die Anordnung für alle ungeraden Spalten ist von unten nach oben (Zig-Zag)
         * Die Pixel gehen von Index 0 bis Breite/Länge - 1
         */
        //%blockId="Matrix_setPixel" block="%matrix| setze Pixel x %x| y %y| auf Farbe %colour"
        //%weight=40
        //%colour.shadow=neopixel_colors
        //% subcategory="Matrix"
        //% group="Features"
        setPixel(x: number, y: number, colour: number): void {
            console.log("matrix: show color : " + colour);
            if (x < 0 || x > this.Width || y < 0 || y > this.Height) {
                //If the pixel does not fit on screen, do not draw it
                return;
            }
            if (x % 2 == 0) {
                //Because of the zig-zag formation of the panel all even rows (including 0) are drawn top to bottom
                this.strip.setPixelColor(y + x * this.Height, colour);
            } else {
                //While all odd rows are drawn bottom to top
                this.strip.setPixelColor(this.Height - 1 - y + x * this.Height, colour);
            }
        }



        /**
         * Zeige Text auf Matrix mit fixer 6x8 Pixel Schrift. Der Text ist vertikal mittig-zentriert.
         * Es muss anschliessend ``anzeigen`` aufgerufen werden.
         */
        //% blockId="Matrix_text" block="%matrix Text 32x8: %text|Position: %x_offset|Farbe: %colour"
        //% subcategory="Matrix" 
        //% group="Features"
        //% colour.shadow=neopixel_colors
        //% x_offset.defl=0 x_offset.min=0 x_offset.max=32
        
        showText(text: string, x_offset: number, colour: number): void {
            for (let letter = 0; letter < text.length; letter++) {
                //for loop to retrieve all the letters from te text
                let bitmap = getLettermap(text.charAt(letter));
                this.drawBitmapVcentered(bitmap, x_offset + 6 * letter, 6, 8, colour);
            }
            this.strip.show();
        }

        /**
         * Scrolle Text über Matrix mit fixer 6x8 Pixel Schrift.
         * Der Bildschirminhalt wird gelöscht und ``anzeigen`` muss nicht aufgerufen werden
         */
        //% blockId="Matrix_scrollText" block="%matrix Text 32x8: %text|Geschwindigkeit (0-200): %speed|Farbe: %colour"

        //% subcategory="Matrix"
        //% group="Features" 
        //% colour.shadow=neopixel_colors
        //% speed.min=1 speed.max=200 speed.defl=50
       
        scrollText(text: string, speed: number, colour: number): void {
            this.strip.clear();
            for (let Xpos = this.Width; Xpos > -6 * text.length; Xpos--) {
                //for loop to scroll across the entire matrix
                for (let letter = 0; letter < text.length; letter++) {
                    //for loop to retrieve all the letters from the text
                    let x_pointer = Xpos + 6 * letter;
                    if (((Xpos + 6 * letter) < this.Width) && ((Xpos + 6 * letter) > -6)){
                        let bitmap = getLettermap(text.charAt(letter));
                        this.drawBitmapVcentered(bitmap, Xpos + 6 * letter, 6, 8, colour);
                    }
                }
                this.strip.show();
                basic.pause(1000 / speed);
                this.strip.clear();
            }
        }

        /**
         * Zeige vordefinierte Icons auf 16x16 grosser Matrixe an.
         * Hat die Matrix eine andere Grösse, wird nichts angezeigt.
         */
        //% blockId="Matrix_icons" block="%matrix Icon 16x16: %icon|Farbe: %colour"
        //% subcategory=Matrix
        //% group="Features"
        //% colour.shadow=neopixel_colors
       
        draw_icon(icon: IconIndex, colour: number): void {
            if (this.Height != 16 || this.Width != 16) {
                return;
            }
            let icon_data = Icons[icon];
            this.drawBitmapIcon16x16(icon_data, 16, 16, colour);
            this.strip.show();
        }

        drawBitmapIcon16x16(
            bitmap: number[],
            width: number,
            height: number,
            colour: number
        ): void {
            console.log("draw bitmap[]= " + JSON.stringify(bitmap));
            for (let bitmask = 0; bitmask < width; bitmask++) {
                if (!(bitmask % 2)) {
                    //Zigzag pixel string: if the row that's being drawn to (Xpos+bitmask) is odd, then draw from bottom to top
                    for (let Ypos = height; Ypos >= 0; Ypos--) {
                        if (bitmap[Ypos] & (0x8000 >> bitmask)) {
                            //draw the pixel when there is a "1" in the bitmap
                            this.strip.setPixelColor(
                                bitmask * this.Height + Ypos + (this.Height - 16) / 2,
                                colour
                            );
                        }
                    }
                } else {
                    //else draw from top to bottom
                    for (let Ypos = 0; Ypos < this.Height; Ypos++) {
                        if (bitmap[15 - Ypos] & (0x8000 >> bitmask)) {
                            this.strip.setPixelColor(
                                bitmask * this.Height + Ypos + (this.Height - 16) / 2,
                                colour
                            );
                        }
                    }
                }
            }
        }

        drawBitmapVcentered(
            bitmap: number[],
            x: number,
            width: number,
            height: number,
            colour: number
        ): void {
            console.log("draw bitmap[]= " + JSON.stringify(bitmap));
            for (let bitmask = 0; bitmask < width; bitmask++) {
                if (!((x + bitmask) % 2)) {
                    //Zigzag pixel string: if the row that's being drawn to (Xpos+bitmask) is odd, then draw from bottom to top
                    for (let Ypos = height; Ypos >= 0; Ypos--) {
                        if (bitmap[Ypos] & (0x80 >> bitmask)) {
                            //draw the pixel when there is a "1" in the bitmap
                            this.strip.setPixelColor(
                                (x + bitmask) * this.Height + Ypos + (this.Height - 8) / 2,
                                colour
                            );
                        }
                    }
                } else {
                    //else draw from top to bottom
                    for (let Ypos = 0; Ypos < this.Height; Ypos++) {
                        if (bitmap[7 - Ypos] & (0x80 >> bitmask)) {
                            this.strip.setPixelColor(
                                (x + bitmask) * this.Height + Ypos + (this.Height - 8) / 2,
                                colour
                            );
                        }
                    }
                }
            }
        }

        //% blockId="neopixel_set_matrix_16" block="Matrix %matrix %c_0|%c_1|%c_2|%c_3|%c_4|%c_5|%c_6|%c_7|%c_8|%c_9|%c_10|%c_11|%c_12|%c_13|%c_14|%c_15" 
        //% weight=100
        //% subcategory=Matrix
        //% group="Features" weight=10
        //% c_0.shadow=color_for_led_16
        //% c_1.shadow=color_for_led_16
        //% c_2.shadow=color_for_led_16
        //% c_3.shadow=color_for_led_16
        //% c_4.shadow=color_for_led_16
        //% c_5.shadow=color_for_led_16
        //% c_6.shadow=color_for_led_16
        //% c_7.shadow=color_for_led_16
        //% c_8.shadow=color_for_led_16
        //% c_9.shadow=color_for_led_16
        //% c_10.shadow=color_for_led_16
        //% c_11.shadow=color_for_led_16
        //% c_12.shadow=color_for_led_16
        //% c_13.shadow=color_for_led_16
        //% c_14.shadow=color_for_led_16
        //% c_15.shadow=color_for_led_16
        setMatrix_16(c_0: ColorPattern, c_1: ColorPattern, c_2: ColorPattern, c_3: ColorPattern, c_4: ColorPattern, c_5: ColorPattern, c_6: ColorPattern, c_7: ColorPattern, c_8: ColorPattern, c_9: ColorPattern, c_10: ColorPattern, c_11: ColorPattern, c_12: ColorPattern, c_13: ColorPattern, c_14: ColorPattern, c_15: ColorPattern): void {
            let color = [c_0, c_1, c_2, c_3, c_4, c_5, c_6, c_7, c_8, c_9, c_10, c_11, c_12, c_13, c_14, c_15]

            for (let y = 0; y < 16; y++) {
                for (let x = 0; x < 16; x++) {
                    this.setPixel(x, y, color[y].getColors()[x])
                }
            }
            this.show();
        }

        //% blockId="neopixel_set_matrix_32x8" block="Matrix %matrix %c_0|%c_1|%c_2|%c_3|%c_4|%c_5|%c_6|%c_7|%c_8|%c_9|%c_10|%c_11|%c_12|%c_13|%c_14|%c_15" weight=99
        //% subcategory="Matrix"
        //% group="Features" weight=9
        //% c_0.shadow=color_for_led_32
        //% c_1.shadow=color_for_led_32
        //% c_2.shadow=color_for_led_32
        //% c_3.shadow=color_for_led_32
        //% c_4.shadow=color_for_led_32
        //% c_5.shadow=color_for_led_32
        //% c_6.shadow=color_for_led_32
        //% c_7.shadow=color_for_led_32
        setMatrix_32x8(c_0: ColorPattern, c_1: ColorPattern, c_2: ColorPattern, c_3: ColorPattern, c_4: ColorPattern, c_5: ColorPattern, c_6: ColorPattern, c_7: ColorPattern): void {
            let color = [c_0, c_1, c_2, c_3, c_4, c_5, c_6, c_7]

            for (let y = 0; y < 8; y++) {
                for (let x = 0; x < 32; x++) {
                    this.setPixel(x, y, color[y].getColors()[x])
                }
            }
            this.show();
        }
        
    } // end matrix class

    //Take in a string-character and return a bitmap to draw on the display
    function getLettermap(char: string): number[] {
        let letterMap: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
        let offset = char.charCodeAt(0) - 32; //Convert the ASCII-Character to it's code to generate the offset in the font-array
        if (offset >= 0) {
            for (let i = 0; i < 8; i++) {
                //Every character has 8 arguments in the array, so multiply the offset by 8, and then take the next 8 arguments as the value for the correct bitmap.
                letterMap[i] = font8x3.getNumber(NumberFormat.UInt8BE, offset * 8 + i);
            }
        }
        return letterMap;
    }

    /**
     * Returns list of 16 color choices for the LEDs
     */
    //% blockId="color_for_led_16" block="$c_1|$c_2|$c_3|$c_4|$c_5|$c_6|$c_7|$c_8$c_9$c_10$c_11$c_12$c_13$c_14$c_15$c_16"
    //% subcategory=Matrix
    //% group="Farben" weight=200

    //% c_1.shadow="brightColorNumberPicker"
    //% c_2.shadow="brightColorNumberPicker"
    //% c_3.shadow="brightColorNumberPicker"
    //% c_4.shadow="brightColorNumberPicker"
    //% c_5.shadow="brightColorNumberPicker"
    //% c_6.shadow="brightColorNumberPicker"
    //% c_7.shadow="brightColorNumberPicker"
    //% c_8.shadow="brightColorNumberPicker"
    //% c_9.shadow="brightColorNumberPicker"
    //% c_10.shadow="brightColorNumberPicker"
    //% c_11.shadow="brightColorNumberPicker"
    //% c_12.shadow="brightColorNumberPicker"
    //% c_13.shadow="brightColorNumberPicker"
    //% c_14.shadow="brightColorNumberPicker"
    //% c_15.shadow="brightColorNumberPicker"
    //% c_16.shadow="brightColorNumberPicker"
    //% c_1.defl='#000000'
    //% c_2.defl='#000000'
    //% c_3.defl='#000000'
    //% c_4.defl='#000000'
    //% c_5.defl='#000000'
    //% c_6.defl='#000000'
    //% c_7.defl='#000000'
    //% c_8.defl='#000000'
    //% c_9.defl='#000000'
    //% c_10.defl='#000000'
    //% c_11.defl='#000000'
    //% c_12.defl='#000000'
    //% c_13.defl='#000000'
    //% c_14.defl='#000000'
    //% c_15.defl='#000000'
    //% c_16.defl='#000000'
    //% inlineInputMode=inline 
    export function colorForLed_16(c_1: number, c_2: number, c_3: number, c_4: number, c_5: number, c_6: number, c_7: number, c_8: number, c_9: number, c_10: number, c_11: number, c_12: number, c_13: number, c_14: number, c_15: number, c_16: number): ColorPattern {
        return new ColorPattern([c_1, c_2, c_3, c_4, c_5, c_6, c_7, c_8, c_9, c_10, c_11, c_12, c_13, c_14, c_15, c_16]);
    }


    /**
     * Returns list of 32 color choices for the LEDs
     */
    //% blockId="color_for_led_32" block="$c_1|$c_2|$c_3|$c_4|$c_5|$c_6|$c_7|$c_8|$c_9|$c_10|$c_11|$c_12|$c_13|$c_14|$c_15|$c_16|$c_17|$c_18|$c_19|$c_20|$c_21|$c_22|$c_23|$c_24|$c_25|$c_26|$c_27|$c_28|$c_29|$c_30|$c_31|$c_32|"
    //% subcategory=Matrix
    //% group="Farben" weight=110 

    //% c_1.shadow="brightColorNumberPicker"
    //% c_2.shadow="brightColorNumberPicker"
    //% c_3.shadow="brightColorNumberPicker"
    //% c_4.shadow="brightColorNumberPicker"
    //% c_5.shadow="brightColorNumberPicker"
    //% c_6.shadow="brightColorNumberPicker"
    //% c_7.shadow="brightColorNumberPicker"
    //% c_8.shadow="brightColorNumberPicker"
    //% c_9.shadow="brightColorNumberPicker"
    //% c_10.shadow="brightColorNumberPicker"
    //% c_11.shadow="brightColorNumberPicker"
    //% c_12.shadow="brightColorNumberPicker"
    //% c_13.shadow="brightColorNumberPicker"
    //% c_14.shadow="brightColorNumberPicker"
    //% c_15.shadow="brightColorNumberPicker"
    //% c_16.shadow="brightColorNumberPicker"
    //% c_17.shadow="brightColorNumberPicker"
    //% c_18.shadow="brightColorNumberPicker"
    //% c_19.shadow="brightColorNumberPicker"
    //% c_20.shadow="brightColorNumberPicker"
    //% c_21.shadow="brightColorNumberPicker"
    //% c_22.shadow="brightColorNumberPicker"
    //% c_23.shadow="brightColorNumberPicker"
    //% c_24.shadow="brightColorNumberPicker"
    //% c_25.shadow="brightColorNumberPicker"
    //% c_26.shadow="brightColorNumberPicker"
    //% c_27.shadow="brightColorNumberPicker"
    //% c_28.shadow="brightColorNumberPicker"
    //% c_29.shadow="brightColorNumberPicker"
    //% c_30.shadow="brightColorNumberPicker"
    //% c_31.shadow="brightColorNumberPicker"
    //% c_32.shadow="brightColorNumberPicker"
    //% c_1.defl='#000000'
    //% c_2.defl='#000000'
    //% c_3.defl='#000000'
    //% c_4.defl='#000000'
    //% c_5.defl='#000000'
    //% c_6.defl='#000000'
    //% c_7.defl='#000000'
    //% c_8.defl='#000000'
    //% c_9.defl='#000000'
    //% c_10.defl='#000000'
    //% c_11.defl='#000000'
    //% c_12.defl='#000000'
    //% c_13.defl='#000000'
    //% c_14.defl='#000000'
    //% c_15.defl='#000000'
    //% c_16.defl='#000000'
    //% c_17.defl='#000000'
    //% c_18.defl='#000000'
    //% c_19.defl='#000000'
    //% c_20.defl='#000000'
    //% c_21.defl='#000000'
    //% c_22.defl='#000000'
    //% c_23.defl='#000000'
    //% c_24.defl='#000000'
    //% c_25.defl='#000000'
    //% c_26.defl='#000000'
    //% c_27.defl='#000000'
    //% c_28.defl='#000000'
    //% c_29.defl='#000000'
    //% c_30.defl='#000000'
    //% c_31.defl='#000000'
    //% c_32.defl='#000000'
    //% inlineInputMode=inline 
    export function colorForLed_32(c_1: number, c_2: number, c_3: number, c_4: number, c_5: number, c_6: number, c_7: number, c_8: number, c_9: number, c_10: number, c_11: number, c_12: number, c_13: number, c_14: number, c_15: number, c_16: number, 
                                   c_17: number, c_18: number, c_19: number, c_20: number, c_21: number, c_22: number, c_23: number, c_24: number, c_25: number, c_26: number, c_27: number, c_28: number, c_29: number, c_30: number, c_31: number, c_32: number): ColorPattern {
        return new ColorPattern([c_1, c_2, c_3, c_4, c_5, c_6, c_7, c_8, c_9, c_10, c_11, c_12, c_13, c_14, c_15, c_16, 
                                c_17, c_18, c_19, c_20, c_21, c_22, c_23, c_24, c_25, c_26, c_27, c_28, c_29, c_30, c_31, c_32]);
    }

  export enum startbit_ultrasonicPort {
    P2_P1 = 0x01,
    P14_P13 = 0x02,
  }

    function isSimulator(): boolean {
    // Try-catch: serial might be undefined in simulator
    try {
        serial.writeString(""); // harmless
        return false; // no error → real hardware
    } catch (e) {
        return true; // simulator: serial not available
    }
}
    
  export function startbit_Init() {
    serial.redirect(SerialPin.P12, SerialPin.P8, BaudRate.BaudRate115200);

    basic.forever(() => {
      getHandleCmd();
      if (0 < currentVoltage && currentVoltage < 6800) {
        music.playTone(988, music.beat(BeatFraction.Whole));
      }
    });
    basic.pause(2000);
    console.log("Informatiktheater initialized");
  }

  let handleCmd: string = "";
  let currentVoltage: number = 0;

  let MESSAGE_MAC = 0xff;
  let MESSAGE_ANGLE = 0x100;

  function getHandleCmd() {
    // Skip serial in simulator (since it’s undefined there)
      if (isSimulator()) {
        return;
      } 
      
    let charStr: string = serial.readString();
     if (!charStr) return; // avoid undefined
      
    handleCmd = handleCmd.concat(charStr);
    let cnt: number = countChar(handleCmd, "$");
    if (cnt == 0) return;
      
    let index = findIndexof(handleCmd, "$", 0);
    if (index != -1) {
      let cmd: string = handleCmd.substr(0, index);
      if (cmd.charAt(0).compare("A") == 0) {
        if (cmd.length == 7) {
          let arg1Int: number = strToNumber(cmd.substr(1, 2));
          let arg3Int: number = strToNumber(cmd.substr(5, 2));

          if (arg3Int != -1) {
            currentVoltage = arg3Int * 78.63;
            currentVoltage = Math.round(currentVoltage);
          }
        }
      }
      if (cmd.charAt(0).compare("C") == 0 && cmd.length == 11) {}
      if (cmd.charAt(0).compare("M") == 0 && cmd.length == 18) {
        control.raiseEvent(MESSAGE_MAC, 1);
      }
      if (cmd.charAt(0).compare("S") == 0 && cmd.length == 5) {
        let arg1Int: number = strToNumber(cmd.substr(1, 1));
        let arg2Str = cmd.substr(2, 3);
        if (arg2Str.compare("XXX") == 0) {
          return;
        }
        let arg2Int: number = 0;
        if (arg2Str.charAt(0).compare("F") != 0) {
          arg2Int = strToNumber(arg2Str);
        }
        if (arg2Int > 1000) arg2Int = 1000;
        if (arg1Int == 1) {
          control.raiseEvent(MESSAGE_ANGLE, 1);
        } else if (arg1Int == 2) {
          control.raiseEvent(MESSAGE_ANGLE, 2);
        }
      }
    }
    handleCmd = "";
  }

  function findIndexof(
    src: string,
    strFind: string,
    startIndex: number
  ): number {
    for (let i = startIndex; i < src.length; i++) {
      if (src.charAt(i).compare(strFind) == 0) {
        return i;
      }
    }
    return -1;
  }

  function countChar(src: string, strFind: string): number {
    let cnt: number = 0;
    for (let i = 0; i < src.length; i++) {
      if (src.charAt(i).compare(strFind) == 0) {
        cnt++;
      }
    }
    return cnt;
  }

  function strToNumber(str: string): number {
    let num: number = 0;
    for (let i = 0; i < str.length; i++) {
      let tmp: number = converOneChar(str.charAt(i));
      if (tmp == -1) return -1;
      if (i > 0) num *= 16;
      num += tmp;
    }
    return num;
  }

  function converOneChar(str: string): number {
    if (str.compare("0") >= 0 && str.compare("9") <= 0) {
      return parseInt(str);
    } else if (str.compare("A") >= 0 && str.compare("F") <= 0) {
      if (str.compare("A") == 0) {
        return 10;
      } else if (str.compare("B") == 0) {
        return 11;
      } else if (str.compare("C") == 0) {
        return 12;
      } else if (str.compare("D") == 0) {
        return 13;
      } else if (str.compare("E") == 0) {
        return 14;
      } else if (str.compare("F") == 0) {
        return 15;
      }
      return -1;
    } else return -1;
  }

  export enum ServoIndex {
    //% block="S1"
    S1 = 1,
    //% block="S2"
    S2,
    //% block="S3"
    S3,
    //% block="S4"
    S4,
    //% block="S5"
    S5,
    //% block="S6"
    S6,
  }

  //% weight=100
  //% blockId=setServo
  //% block="set servo motor %index| angle (°) %angle| duration (ms) %duration"
  //% angle.shadow="protractorPicker"
  //% block.loc.de="setze Servomotor %index| auf Winkel (0 - 180°) %angle|für Dauer (ms) %duration"
  
  //% index.defl=1
  //% duration.shadow=timePicker
  //% inlineInputMode=inline
  //% subcategory=Servo/Motor
  //% group=Servo
  export function setPwmServo(
    index: ServoIndex = 1,
    angle: number,
    duration: number = 300
  ) {
    let position = mapValue(angle, 0, 180, 500, 2500);
    console.log("servo index= " + index);

    let buf = pins.createBuffer(10);
    buf[0] = 0x55;
    buf[1] = 0x55;
    buf[2] = 0x08;
    buf[3] = 0x03; //cmd type
    buf[4] = 0x01;
    buf[5] = duration & 0xff;
    buf[6] = (duration >> 8) & 0xff;
    buf[7] = index;
    buf[8] = position & 0xff;
    buf[9] = (position >> 8) & 0xff;
    serial.writeBuffer(buf);
    basic.pause(1);
  }


    /**
    *	Set the speed of motor 1, 2 or both with speed (0-100)
    */
    //% weight=96 blockId=startbit_setMotorSpeed 
    //% block="Set %motor| in direction %direction| with speed %speed (0-100)"
    //% block.loc.de="%motor | in Richtung %direction | mit Geschwindigkeit %speed (0-100)"
    //% speed.min=0 speed.max=100
    //% subcategory=Servo/Motor
    //% group=Motor
    export function startbit_setMotorSpeed(motor: HiwonderMotors, direction: MotorDirections, speed: number) {
        if (speed > 100 || speed < 0 ) {
            return;
        }

        if (direction == MotorDirections.Forward){
            speed = speed * -1; // in original code, forward direction are negative values
        }

        switch (motor) {
            case HiwonderMotors.M1:
                motor_1_speed = speed;
                break;
            case HiwonderMotors.M2:
                motor_2_speed = speed;
                break;
            case HiwonderMotors.M12:
                motor_1_speed = speed;
                motor_2_speed = speed;
                break;
        }
        send_motor_speeds();
    }

    /**
    *	Stop motor 1, 2 or both 
    */
    //% weight=94 blockId=startbit_stopMotor
    //% block="Stop %motor"
    //% block.loc.de="%motor stoppen"
    //% subcategory=Servo/Motor
    //% group=Motor
    export function startbit_stopMotor(motor: HiwonderMotors) {

        switch (motor) {
            case HiwonderMotors.M1:
                motor_1_speed = 0;
                break;
            case HiwonderMotors.M2:
                motor_2_speed = 0;
                break;
            case HiwonderMotors.M12:
                motor_1_speed = 0;
                motor_2_speed = 0;
                break;
        }
        send_motor_speeds();
    }

    function send_motor_speeds(){
        let buf = pins.createBuffer(6);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x04;
        buf[3] = 0x32;//cmd type
        buf[4] = motor_1_speed;
        buf[5] = motor_2_speed;
        serial.writeBuffer(buf);   
    }

  const APDS9960_I2C_ADDR = 0x39;
  const APDS9960_ID_1 = 0xa8;
  const APDS9960_ID_2 = 0x9c;
  /* APDS-9960 register addresses */
  const APDS9960_ENABLE = 0x80;
  const APDS9960_ATIME = 0x81;
  const APDS9960_WTIME = 0x83;
  const APDS9960_AILTL = 0x84;
  const APDS9960_AILTH = 0x85;
  const APDS9960_AIHTL = 0x86;
  const APDS9960_AIHTH = 0x87;
  const APDS9960_PERS = 0x8c;
  const APDS9960_CONFIG1 = 0x8d;
  const APDS9960_PPULSE = 0x8e;
  const APDS9960_CONTROL = 0x8f;
  const APDS9960_CONFIG2 = 0x90;
  const APDS9960_ID = 0x92;
  const APDS9960_STATUS = 0x93;
  const APDS9960_CDATAL = 0x94;
  const APDS9960_CDATAH = 0x95;
  const APDS9960_RDATAL = 0x96;
  const APDS9960_RDATAH = 0x97;
  const APDS9960_GDATAL = 0x98;
  const APDS9960_GDATAH = 0x99;
  const APDS9960_BDATAL = 0x9a;
  const APDS9960_BDATAH = 0x9b;
  const APDS9960_POFFSET_UR = 0x9d;
  const APDS9960_POFFSET_DL = 0x9e;
  const APDS9960_CONFIG3 = 0x9f;
  const APDS9960_GCONF4 = 0xab;
  const APDS9960_AICLEAR = 0xe7;

  /* LED Drive values */
  const LED_DRIVE_100MA = 0;

  /* ALS Gain (AGAIN) values */
  const AGAIN_4X = 1;

  /* Default values */
  const DEFAULT_ATIME = 219; // 103ms
  const DEFAULT_WTIME = 246; // 27ms
  const DEFAULT_PROX_PPULSE = 0x87; // 16us, 8 pulses
  const DEFAULT_POFFSET_UR = 0; // 0 offset
  const DEFAULT_POFFSET_DL = 0; // 0 offset
  const DEFAULT_CONFIG1 = 0x60; // No 12x wait (WTIME) factor
  const DEFAULT_AILT = 0xffff; // Force interrupt for calibration
  const DEFAULT_AIHT = 0;
  const DEFAULT_PERS = 0x11; // 2 consecutive prox or ALS for int.
  const DEFAULT_CONFIG2 = 0x01; // No saturation interrupts or LED boost
  const DEFAULT_CONFIG3 = 0; // Enable all photodiodes, no SAI
  const DEFAULT_LDRIVE = LED_DRIVE_100MA;
  const DEFAULT_AGAIN = AGAIN_4X;

  const OFF = 0;
  const POWER = 0;
  const AMBIENT_LIGHT = 1;
  const ALL = 7;

  const red_wb = 2130;
  const green_wb = 3500;
  const blue_wb = 4620;

  function i2cwrite(reg: number, value: number) {
    let buf = pins.createBuffer(2);
    buf[0] = reg;
    buf[1] = value;
    pins.i2cWriteBuffer(APDS9960_I2C_ADDR, buf);
  }

  function i2cread(reg: number): number {
    pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
    let val = pins.i2cReadNumber(APDS9960_I2C_ADDR, NumberFormat.UInt8BE);
    return val;
  }

  function InitColor(): boolean {
    let id = i2cread(APDS9960_ID);
    //  serial.writeLine("id:")
    //  serial.writeNumber(id);
    // if (!(id == APDS9960_ID_1 || id == APDS9960_ID_2)) {
    //     return false;
    // }
    //  serial.writeLine("set mode:")
    setMode(ALL, OFF);
    i2cwrite(APDS9960_ATIME, DEFAULT_ATIME);
    i2cwrite(APDS9960_WTIME, DEFAULT_WTIME);
    i2cwrite(APDS9960_PPULSE, DEFAULT_PROX_PPULSE);
    i2cwrite(APDS9960_POFFSET_UR, DEFAULT_POFFSET_UR);
    i2cwrite(APDS9960_POFFSET_DL, DEFAULT_POFFSET_DL);
    i2cwrite(APDS9960_CONFIG1, DEFAULT_CONFIG1);
    setLEDDrive(DEFAULT_LDRIVE);
    setAmbientLightGain(DEFAULT_AGAIN);
    setLightIntLowThreshold(DEFAULT_AILT);
    setLightIntHighThreshold(DEFAULT_AIHT);
    i2cwrite(APDS9960_PERS, DEFAULT_PERS);
    i2cwrite(APDS9960_CONFIG2, DEFAULT_CONFIG2);
    i2cwrite(APDS9960_CONFIG3, DEFAULT_CONFIG3);
    return true;
  }

  function setLEDDrive(drive: number) {
    let val = i2cread(APDS9960_CONTROL);
    /* Set bits in register to given value */
    drive &= 0b00000011;
    drive = drive << 6;
    val &= 0b00111111;
    val |= drive;
    i2cwrite(APDS9960_CONTROL, val);
  }

  function setLightIntLowThreshold(threshold: number) {
    let val_low = threshold & 0x00ff;
    let val_high = (threshold & 0xff00) >> 8;
    i2cwrite(APDS9960_AILTL, val_low);
    i2cwrite(APDS9960_AILTH, val_high);
  }

  function setLightIntHighThreshold(threshold: number) {
    let val_low = threshold & 0x00ff;
    let val_high = (threshold & 0xff00) >> 8;
    i2cwrite(APDS9960_AIHTL, val_low);
    i2cwrite(APDS9960_AIHTH, val_high);
  }

  function rgb2hue(r: number, g: number, b: number): number {
    let max = Math.max(r, Math.max(g, b));
    let min = Math.min(r, Math.min(g, b));
    let c = max - min;
    let hue = 0;
    let segment = 0;
    if (c == 0) return 0;
    if (r > g && r > b) {
      segment = (60.0 * (g - b)) / c;
      if (segment < 0) hue = segment + 360;
    } else if (g > b && g > r) {
      segment = (60.0 * (b - r)) / c;
      hue = segment + 120;
    } else if (b > g && b > r) {
      segment = (60.0 * (r - g)) / c;
      hue = segment + 240;
    }
    return hue;
  }

  function setMode(mode: number, enable: number) {
    let reg_val = getMode();
    /* Change bit(s) in ENABLE register */
    enable = enable & 0x01;
    if (mode >= 0 && mode <= 6) {
      if (enable > 0) {
        reg_val |= 1 << mode;
      } else {
        //reg_val &= ~(1 << mode);
        reg_val &= 0xff - (1 << mode);
      }
    } else if (mode == ALL) {
      if (enable > 0) {
        reg_val = 0x7f;
      } else {
        reg_val = 0x00;
      }
    }
    i2cwrite(APDS9960_ENABLE, reg_val);
  }

  function getMode(): number {
    let enable_value = i2cread(APDS9960_ENABLE);
    return enable_value;
  }

  function setAmbientLightGain(drive: number) {
    let val = i2cread(APDS9960_CONTROL);
    /* Set bits in register to given value */
    drive &= 0b00000011;
    val &= 0b11111100;
    val |= drive;
    i2cwrite(APDS9960_CONTROL, val);
  }

  function getAmbientLightGain(): number {
    let val = i2cread(APDS9960_CONTROL);
    val &= 0b00000011;
    return val;
  }

  function enablePower() {
    setMode(POWER, 1);
  }

  function setAmbientLightIntEnable(enable: number) {
    let val = i2cread(APDS9960_ENABLE);
    /* Set bits in register to given value */
    enable &= 0b00000001;
    enable = enable << 4;
    val &= 0b11101111;
    val |= enable;
    i2cwrite(APDS9960_ENABLE, val);
  }

  function readAmbientLight(): number {
    let val = i2cread(APDS9960_CDATAL);
    let val_byte = i2cread(APDS9960_CDATAH);
    val = val + val_byte * 256;
    return val;
  }

  let echoPin: DigitalPin;
  let trigPin: DigitalPin;
  //% weight=17
  //% blockId=ultrasonic_init
  //% block="initialize ultrasonic |%pin"
  //% block.loc.de="initialisiere Ultraschall|%pin"
  //% subcategory="Sensoren"
  //% group="Ultraschall"
 
  export function ultrasonic_init(port: startbit_ultrasonicPort) {
    switch (port) {
      case startbit_ultrasonicPort.P2_P1:
        echoPin = DigitalPin.P2;
        trigPin = DigitalPin.P1;
        break;
      case startbit_ultrasonicPort.P14_P13:
        echoPin = DigitalPin.P14;
        trigPin = DigitalPin.P13;
        break;
    }
  }

  let distanceBak = 0;
  /**
   * Get the distance of ultrasonic detection to the obstacle
   */
  //% weight=16
  //% blockId=startbit_ultrasonic
  //% block="get ultrasonic |distancse (cm)"
  //% block.loc.de="Ultraschall|Distanz (cm)"
  //% subcategory="Sensoren"
  //% group="Ultraschall"
  export function startbit_ultrasonic(): number {
    pins.setPull(echoPin, PinPullMode.PullNone);
    pins.setPull(trigPin, PinPullMode.PullNone);

    pins.digitalWritePin(trigPin, 0);
    control.waitMicros(2);
    pins.digitalWritePin(trigPin, 1);
    control.waitMicros(10);
    pins.digitalWritePin(trigPin, 0);
    control.waitMicros(5);
    let d = pins.pulseIn(echoPin, PulseValue.High, 25000);
    let distance = d;
    // filter timeout spikes
    if (distance == 0 && distanceBak != 0) {
      distance = distanceBak;
    }
    distanceBak = d;

    return Math.round((distance * 10) / 6 / 58 / 1.6);
  }

  // TODO: This will NOT clip values! should we add clipping ?!
  function mapValue(
    x: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number
  ): number {
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }

  function II2Cread(reg: number): Buffer {
    let val = pins.i2cReadBuffer(reg, 1);
    return val;
  }

  function WireWriteByte(addr: number, val: number): boolean {
    let buf = pins.createBuffer(1);
    buf[0] = val;
    let rvalue = pins.i2cWriteBuffer(addr, buf);
    if (rvalue != 0) {
      return false;
    }
    return true;
  }

  function WireWriteDataArray(addr: number, reg: number, val: number): boolean {
    let buf = pins.createBuffer(3);
    buf[0] = reg;
    buf[1] = val & 0xff;
    buf[2] = (val >> 8) & 0xff;
    let rvalue = pins.i2cWriteBuffer(addr, buf);
    if (rvalue != 0) {
      return false;
    }
    return true;
  }

  function WireReadDataArray(addr: number, reg: number, len: number): number {
    if (!WireWriteByte(addr, reg)) {
      return -1;
    }

    let buf = II2Cread(addr);
    if (buf.length != 1) {
      return 0;
    }
    return buf[0];
  }

  export enum startbit_LineFollowerSensors {
    //% block="S1"
    S1 = 1,
    //% block="S2"
    S2,
    //% block="S3"
    S3,
    //% block="S4"
    S4,
  }
 /**
   * old from origin
   */
  export enum startbit_LineColor {
    //% block="Black"
    //% block.loc.de="Schwarz"
    Black,
    //% block="White"
    //% block.loc.de="Weiss"
    White,
  }

  export enum startbit_trittmattePort {
    P2 = 0x01,
    P14 = 0x02,
    P16 = 0x03, 
    P1 = 0x04,
    P13 = 0x05,
  }

  let debounce_time = 150; // debounce for pin input events in [ms]
  /**
   * Binds code to be executed to onPulsed event with value high
   */
  //% weight=11
  //% block="Push-button pressed|on %port"
  //% block.loc.de="Taster gedrückt|auf|%port"
  //% subcategory="Sensoren"
  //% group="Taster"
  export function trittmatte_pressed(
    port: startbit_trittmattePort,
    handler: () => void
  ): void {
    let pin: DigitalPin;
    switch (port) {
      case startbit_trittmattePort.P2:
        pin = DigitalPin.P2;
        break;
    case startbit_trittmattePort.P1:
        pin = DigitalPin.P1;
        break;
      case startbit_trittmattePort.P14:
        pin = DigitalPin.P14;
        break;
      case startbit_trittmattePort.P13:
        pin = DigitalPin.P13;
        break;
      case startbit_trittmattePort.P16:
        pin = DigitalPin.P16;
        break;
    }
    pins.setEvents(pin, PinEventType.Pulse);
    pins.setPull(pin, PinPullMode.PullUp);
    let debounce_wrapper = function() {
      if (pins.pulseDuration() > 1000 * debounce_time) {
        handler();
      }
    };
    pins.onPulsed(pin, PulseValue.High, debounce_wrapper);
  }

  /**
   * Binds code to be executed to onPulsed event with value low
   */
  //% weight=12
  //% block="Push-button released|on %port"
  //% block.loc.de="Taster losgelassen|auf|%port"
  //% subcategory="Sensoren"
  //% group="Taster"
  export function trittmatte_released(
    port: startbit_trittmattePort,
    handler: () => void
  ): void {
    let pin: DigitalPin;
    switch (port) {
      case startbit_trittmattePort.P2:
        pin = DigitalPin.P2;
        break;
      case startbit_trittmattePort.P1:
        pin = DigitalPin.P1;
        break;
      case startbit_trittmattePort.P14:
        pin = DigitalPin.P14;
        break;
       case startbit_trittmattePort.P13:
        pin = DigitalPin.P13;
        break;
      case startbit_trittmattePort.P16:
        pin = DigitalPin.P16;
        break;
    }
    pins.setEvents(pin, PinEventType.Pulse);
    pins.setPull(pin, PinPullMode.PullUp);
    let debounce_wrapper = function() {
      if (pins.pulseDuration() > 1000 * debounce_time) {
        handler();
      }
    };
    pins.onPulsed(pin, PulseValue.Low, debounce_wrapper);
  }

  /**
   * Binds code to be executed to onPulsed event with value high on event handler.
   * The initial state will always be set to zero and the variable has local scope only!
   */
  //% weight=13
  //% block="Push-button on/off|on %port |state "
  //% block.loc.de="Taster ein/aus|auf %port |Status"
  //% subcategory="Sensoren"
  //% group="Taster"
  //% draggableParameters
  //% jsdoc.loc.de="Bindet auszuführenden Code bei einem PulsEvent mit Wert 'hoch' an Event Handler. Der Anfangszustand wird immer auf Null sein. Die Zustandsvariabel hat nur lokalen Scope!"
  export function trittmatte_einschalten(
    port: startbit_trittmattePort,
    handler: (Schalter_ein: boolean) => void
  ): void {
    let pin: DigitalPin;
    switch (port) {
      case startbit_trittmattePort.P2:
        pin = DigitalPin.P2;
        break;
      case startbit_trittmattePort.P1:
        pin = DigitalPin.P1;
        break;
      case startbit_trittmattePort.P14:
        pin = DigitalPin.P14;
        break;
      case startbit_trittmattePort.P13:
        pin = DigitalPin.P13;
        break;
      case startbit_trittmattePort.P16:
        pin = DigitalPin.P16;
        break;
    }
    pins.setEvents(pin, PinEventType.Pulse);
    pins.setPull(pin, PinPullMode.PullUp);
    let state = false;
    let debounce_wrapper = function() {
      if (pins.pulseDuration() > 1000 * debounce_time) {
        state = !state;
        handler(state);
      }
    };
    pins.onPulsed(pin, PulseValue.High, debounce_wrapper);
  }

// MP3 Player stuff

//  export class SongList {
//    TrackIndex: number;
//    list: Array<number>;

//    constructor() {
//      this.TrackIndex = 0;
//      this.list = [0];
//    }

//    //% weight=99
//    //% block="setze $this auf $list "
//    //% this.defl=Songliste
//    //% this.shadow=variables_get
//    //% subcategory=Soundbox
//    public createSongListArray(list: number[]) {
//      this.list = list;
//      this.TrackIndex = 0;
//    }

//    //% weight=98
//    //% block="Play next track in list $this"
//    //% block.loc.de="nächste Songnummer in Liste $this"
//    //% this.defl=Songliste
//    //% this.shadow=variables_get
//    //% subcategory=Soundbox
//    public playNextTrack() {
//      if (this.TrackIndex < this.list.length) {
//        this.TrackIndex += 1;
//      } else {
//        this.TrackIndex = 0;
//      }
//    }
//    //
//    //% weight=97
//    //% block="Play previous track in list $this"
//    //% block.loc.de="vorherige Songnummer in Liste $this"
//    //% this.defl=Songliste
//    //% this.shadow=variables_get
//    //% subcategory=Soundbox
//    public playPreviousTrack() {
//      if (this.TrackIndex <= 0) {
//        this.TrackIndex == 0;
//      } else {
//        this.TrackIndex--;
//      }
//    }

//    //% weight=95
//    //% block="current song number in list %this"
//    //% block.loc.de="Aktuelle Songnummer in liste %this"
//    //% this.defl=Songliste
//    //% this.shadow=variables_get
//    //% subcategory=Soundbox
//    public currentTrack(): number {
//      return this.list[this.TrackIndex];
//    }

//    //% weight=96
//    //% block="Back to first song in list %this"
//    //% block.loc.de="zurück zur ersten Songnummer in Liste %this"
//    //% this.defl=Songliste
//    //% this.shadow=variables_get
//    //% subcategory=Soundbox
//    public gotoFirstTrack() {
//      this.TrackIndex = 0;
//    }
//  }

  /**
   * Creates a song list and automtically set it to a variable
  */
//  //% weight=100
//  //% block="create song list"
//  //% block.loc.de="erstelle Songliste"
//  //% jsdoc.loc.de="erstellt eine neue Songliste und setzt sie auf eine Variable. Muss im Startblock ausgeführt werden bevor MP3 Box gebraucht werden kann."
//  //% blockSetVariable=Songliste
//  //% subcategory=Soundbox
//  export function createSongList(): SongList {
//    return new SongList();
//  }
   
}

