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
    //% block="8x8"
    small_8x8,
    //% block="32x8"
    medium_32x8,
    //% block="64x8"
    large_64_8,
    //% block="16x16"
    medium_16x16,
}

/**
 * Available pins on ports (connectors)
 */
enum HiwonderPins {
    P1 = DigitalPin.P1,
    P2 = DigitalPin.P2,
    P13 = DigitalPin.P13,
    P14 = DigitalPin.P14,
    P16 = DigitalPin.P16,
}

enum PowerSource {
    //% block="intern"
    Intern,
    //% block="extern"
    Extern,
}
/**
 * Functions to operate NeoPixel strips.
 */
//% weight=5 color=#2896ff icon="\uf110"
//% block.loc.de="NeoPixel"
//% groups=['Setup', 'Features', 'Kontrolle']
namespace neopixel {
    let leds_total = 0;

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
    //% weight=90
    //% parts="neopixel"
    //% power_source.defl=PowerSource.Intern
    //% subcategory=Stripe
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
            case HiwonderPins.P1:
                p = DigitalPin.P1;
                break;
            case HiwonderPins.P2:
                p = DigitalPin.P2;
                break;
            case HiwonderPins.P13:
                p = DigitalPin.P13;
                break;
            case HiwonderPins.P14:
                p = DigitalPin.P14;
                break;
            case HiwonderPins.P16:
                p = DigitalPin.P16;
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
        //% jsdoc.loc.de="Setze alle Pixel auf die angegebene Farbe und rufe ``anzeigen`` auf."
        //% strip.defl=strip
        //% weight=98
        //% parts="neopixel"
        //% group="Kontrolle"
        //% subcategory=Stripe
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
        //% weight=97
        //% parts="neopixel"
        //% subcategory=Stripe
        //% group="Features"
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
        //% number.min=255
        //% weight=80
        //% rgb.shadow=neopixel_colors
        //% parts="neopixel"
        //% subcategory=Stripe
        //% group="Kontrolle"
        setPixelColorRange(number: number, pixeloffset: number, rgb: number): void {
            console.log("strip: show color : " + rgb);
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
            console.log("send buffer to pin " + this.pin + " with content: ");
            for (let i = 0; i <= 3 * 8 * 8; i++) {
                console.log(this.buf[i]);
            }
            ws2812b.sendBuffer(this.buf, this.pin);
            console.log("Estimated current for neopixels = " + this.power());
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
        //% group="Setup"
        length() {
            return this._length;
        }

        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * The highest possible brightness level depends on the number of individual LED's set at ``create``.
         * The brightness will be capped at this threshold.
         * @param brightness a measure of LED brightness in 0-128. eg: 100
         */
        //% blockId="neopixel_set_brightness" block="%strip|set brightness %brightness"
        //% block.loc.de="%strip|setze Helligkeit %brightness"
        //% jsdoc.loc.de="Setze die Helligkeit der NeoPixel (0-128). Die Änderung betrifft nur zukünftige Operationen! Die höchst möglichste Helligkeit hängt von der Anzahl LED's ab. Die Helligkeit wird bei diesem Schwellwert begrenzt."
        //% brightness.defl=255 brightness.min=0 brightness.max=128
        //% strip.defl=strip
        //% weight=99
        //% parts="neopixel"
        //% subcategory=Stripe
        //% group="Kontrolle"
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        /**
         * Apply brightness to current colors using a quadratic easing function.
         **/
        //% blockId="neopixel_each_brightness" block="%strip|ease brightness"
        //% block.loc.de="%strip|Anfang und Ende mit Verlauf abdunkeln"
        //% strip.defl=strip
        //% weight=58
        //% parts="neopixel"
        //% subcategory=Stripe
        //% group="Features"
        easeBrightness(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            const buf = this.buf;
            const end = this.start + this._length;
            const mid = Math.idiv(this._length, 2);
            for (let i = this.start; i < end; ++i) {
                const k = i - this.start;
                const ledoffset = i * stride;
                const br =
                    k > mid
                        ? Math.idiv(
                            255 * (this._length - 1 - k) * (this._length - 1 - k),
                            mid * mid
                        )
                        : Math.idiv(255 * k * k, mid * mid);
                const r = (buf[ledoffset + 0] * br) >> 8;
                buf[ledoffset + 0] = r;
                const g = (buf[ledoffset + 1] * br) >> 8;
                buf[ledoffset + 1] = g;
                const b = (buf[ledoffset + 2] * br) >> 8;
                buf[ledoffset + 2] = b;
                if (stride == 4) {
                    const w = (buf[ledoffset + 3] * br) >> 8;
                    buf[ledoffset + 3] = w;
                }
            }
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
        //% subcategory=Stripe
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
        //% subcategory=Stripe
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

        private setPixelRGB(pixeloffset: number, rgb: number): void {
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
        // The TP5400 voltage regulator on the Hiwonder board can deliver around 740mA. To have a little margin we choose a max current of 700mA. !!!exceptional double current!!!!
        return Math.idiv(700 * 2 * 255, leds_total * 60) & 0xff;
    }

    /**
     * creates a color from rgb numbers
     * @param r red channel
     * @param g green channel
     * @param b blue channel
     */
    //% weight=85
    //% blockId="neopixel_rgb" block="red %red|green %green|blue %blue"
    //% block.loc.de="rot %red|grün %green|blau %blue"
    //% jsdoc.loc.de="Erstellt eine RGB-Farbe"
    //% red.defl=255 red.min=0 red.max=255
    //% blue.defl=255 blue.min=0 blue.max=255
    //% green.defl=255 green.min=0 green.max=255
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * creates a color from hsv color picker
     * @param hue color
     */
    //% weight=85
    //% blockId="neopixel_hsv" block="hue %hue"
    //% block.loc.de="Farbe %hue"
    //% jsdoc.loc.de="Erstellt eine Farbe"
    //% hue.shadow="colorWheelHsvPicker"
    export function hsv_picker(hue: number): number {
        let mapped_hue = (hue * 360) / 255;
        return hsl(mapped_hue, 100, 50);
    }

    /**
     * Gets the RGB value of a known color
     */
    //% weight=85
    //% blockId="neopixel_colors" block="%color"
    //% block.loc.de="%color"
    //% jsdoc.loc.de="bekannte RGB-Farben"
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
    //% weight=100
    //% power_source.defl=PowerSource.Intern
    //% subcategory=Matrix
    //% parts="neopixel"
    //% blockSetVariable=matrix
    //% group="Setup"
    export function create_matrix(
        pin: HiwonderPins,
        size: matrixSizes,
        power_source: PowerSource
    ): Matrix {
        let matrix = new Matrix();
        let w, h;
        switch (size) {
            case matrixSizes.small_8x8:
                w = 8;
                h = 8;
                break;
            case matrixSizes.medium_32x8:
                w = 32;
                h = 8;
                break;
            case matrixSizes.large_64_8:
                w = 64;
                h = 8;
                break;
            case matrixSizes.medium_16x16:
                w = 16;
                h = 16;
                break;
        }
        matrix.strip = neopixel.create(pin, h * w, power_source);
        matrix.Width = w;
        matrix.Height = h;

        return matrix;
    }

    export class Matrix {
        strip: neopixel.Strip;
        Width: number;
        Height: number;

        //%blockId="Matrix_show" block="%matrix| anzeigen"
        //%weight=10
        //% subcategory=Matrix
        //% group="Kontrolle"
        show(): void {
            this.strip.show();
        }

        //%blockId="Matrix_Brighness" block="%matrix setze Helligkeit auf (0-128) %setpoint"
        //%weight=80
        //%setpoint.defl=32
        //%setpoint.min=0
        //%setpoint.max=128
        //% subcategory=Matrix
        //% group="Kontrolle"
        Brightness(setpoint: number): void {
            this.strip.setBrightness(setpoint);
        }

        /**
         * Clear all LED's
         * You have to call ``show`` afterwards
         */
        //%blockId="Matrix_clear" block="%matrix| ausschalten"
        //% jsdoc.loc.de="Schalte alle NeoPixel aus. Damit die Änderung sichtbar wird, muss anschließend ``anzeigen`` aufgerufen werden."
        //%weight=8
        //% subcategory=Matrix
        //% group="Kontrolle"
        clear(): void {
            this.strip.clear();
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
        //%weight=70
        //%colour.shadow=neopixel_colors
        //% subcategory=Matrix
        //% group="Kontrolle"
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
         * Scrolle Text über Matrix mit fixer 6x8 Pixel Schrift.
         * Der Bildschirminhalt wird gelöscht und ``anzeigen`` muss nicht aufgerufen werden
         */
        //% blockId="Matrix_scrollText" block="%matrix Text: %text|Geschwindigkeit (1 - 100): %speed|Farbe: %colour"
        //% weight=75
        //% subcategory=Matrix
        //% colour.shadow=neopixel_colors
        //% speed.min=1 speed.max=100 speed.defl=50
        //% group="Features"
        scrollText(text: string, speed: number, colour: number): void {
            this.strip.clear();
            for (let Xpos = this.Width; Xpos > -6 * text.length; Xpos--) {
                //for loop to scroll across the entire matrix
                for (let letter = 0; letter < text.length; letter++) {
                    //for loop to retrieve all the letters from te text
                    let bitmap = getLettermap(text.charAt(letter));
                    this.drawBitmapVcentered(bitmap, Xpos + 6 * letter, 6, 8, colour);
                }
                this.strip.show();
                basic.pause(1000 / speed);
                this.strip.clear();
            }
        }

        /**
         * Zeige Text auf Matrix mit fixer 6x8 Pixel Schrift. Der Text ist vertikal mittig-zentriert.
         * Es muss anschliessend ``anzeigen`` aufgerufen werden.
         */
        //% blockId="Matrix_text" block="%matrix Text: %text|Position: %x_offset|Farbe: %colour"
        //% weight=74
        //% subcategory=Matrix
        //% colour.shadow=neopixel_colors
        //% x_offset.defl=0 x_offset.min=0 x_offset.max=32
        //% group="Features"
        showText(text: string, x_offset: number, colour: number): void {
            for (let letter = 0; letter < text.length; letter++) {
                //for loop to retrieve all the letters from te text
                let bitmap = getLettermap(text.charAt(letter));
                this.drawBitmapVcentered(bitmap, x_offset + 6 * letter, 6, 8, colour);
            }
            this.strip.show();
        }

        /**
         * Zeichne Muster für Anzeige auf LED Matrix.
         * WICHTIG: Dieser Code läuft im Simulator, aber auf der Hardware werden nachfolgende Blöcke NICHT mehr ausgeführt.
         * TODO: Debug this
         * @param i string pattern to convert into an image object
         */
        //% blockId="Matrix_freedraw" block="zeichne Muster (NON WORKING)"
        //% imageLiteral=1
        //% imageLiteralColumns=8
        //% imageLiteralRows=8
        //% subcategory=Matrix
        //% group="Features"
        draw_pattern(i: string): number[] {
            // this is not pretty but basically, i is an Image
            let im = <Image>(<any>i);
            let arr: number[] = [];
            let rowValue = 0;
            for (let i = 0; i < im.height(); i++) {
                rowValue = 0;
                for (let j = im.width() - 1; j >= 0; j--) {
                    let bit: number = im.pixel(j, i) ? 1 : 0;
                    rowValue = rowValue | (bit << (im.width() - 1 - j));
                }
                arr.push(rowValue);
            }
            return arr;
        }

        /**
         * Zeige Bitmap auf Matrix. Der Text ist vertikal mittig-zentriert.
         * @param bitmap Array mit bitmap. Jeder Eintrag entspricht einer Reihe im angezeigten Character. Nullposition ist oben rechts.
         * @param x Horizontales Offset
         * @param width Breite des Characters
         * @param height Höhe des Characters
         * @param color Farbe in welcher der Character angezeigt werden soll
         */
        //% blockId="Matrix_drawBitmap" block="%matrix zeichne bitmap %bitmap bei x: %x|mit Breite %width|Höhe %height|Farbe %colour"
        //% weight=70
        //% subcategory=Matrix
        //% colour.shadow=neopixel_colors
        //% group="Features"
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
    }

    //Take in a string-character and return a bitmap to draw on the display
    function getLettermap(char: string): number[] {
        let letterMap: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
        let offset = char.charCodeAt(0) - 32; //Convert the ASCII-Character to it's code to generate the offset in the font-array
        if (offset >= 0) {
            for (let i = 0; i < 8; i++) {
                //Every character has 8 arguments in the array, so multiply the offset by 8, and then take ne next 8 arguments as the value for the correct bitmap.
                letterMap[i] = font8x3.getNumber(NumberFormat.UInt8BE, offset * 8 + i);
            }
        }
        return letterMap;
    }
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
