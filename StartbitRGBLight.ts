/**
 * StartbitRGBLight package
 */

enum StartbitRGBColors {
    //% block=red
    //% block.loc.de=Rot
    Red = 1,
    //% block=orange
    //% block.loc.de=Orange
    Orange = 2,
    //% block=yellow
    //% block.loc.de=Gelb
    Yellow = 3,
    //% block=green
    //% block.loc.de=Grün
    Green = 4,
    //% block=blue
    //% block.loc.de=Blau
    Blue = 5,
    //% block=indigo
    //% block.loc.de=Indigo
    Indigo = 6,
    //% block=violet
    //% block.loc.de=Violett
    Violet = 7,
    //% block=purple
    //% block.loc.de=Lila
    Purple = 8,
    //% block=white
    //% block.loc.de=Weiss
    White = 9,
}

enum StartbitLights {
    //% block="Light 1"
    //% block.loc.de="LED 1"
    Light1 = 0x00,
    //% block="Light 2"
    //% block.loc.de="LED 2"
    Light2 = 0x01,
    //% block="Light 3"
    //% block.loc.de="LED 3"
    Light3 = 0x02,
    //% block="Light 4"
    //% block.loc.de="LED 4"
    Light4 = 0x03,
    //% block="Light 5"
    //% block.loc.de="LED 5"
    Light5 = 0x04,
    //% block="Light 6"
    //% block.loc.de="LED 6"
    Light6 = 0x05,
    //% block="All"
    //% block.loc.de="Alle"
    All = 0x06,
}

/**
 * Different modes for RGB or RGB+W RGBLight QbitRGBColors
 */
enum StartbitRGBPixelMode {
    //% block="RGB (GRB format)"
    RGB = 0,
    //% block="RGB+W"
    RGBW = 1,
    //% block="RGB (RGB format)"
    RGB_RGB = 2,
}

/**
 * QbitRGBLight Functions
 */
namespace StartbitRGBLight {
    //% shim=sendBufferAsm
    //% parts="QbitRGBLight"
    function sendBuffer(buf: Buffer, pin: DigitalPin) { }

    /**
     * A LHQbitRGBLight class
     */
    export class LHstartbitRGBLight {
        buf: Buffer;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: StartbitRGBPixelMode;

        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
        }

        setBeltPixelColor(pixeloffset: number, rgb: StartbitRGBColors): void {
            if (pixeloffset == 15) {
                for (let i = 0; i < this._length; i++) {
                    this.setPixelRGB(i, rgb);
                }
            } else {
                this.setPixelRGB(pixeloffset * 3, rgb);
                this.setPixelRGB(pixeloffset * 3 + 1, rgb);
                this.setPixelRGB(pixeloffset * 3 + 2, rgb);
            }
        }

        setPixelColor(pixeloffset: number, rgb: StartbitRGBColors): void {
            if (pixeloffset == this._length) {
                for (let i = 0; i < this._length; i++) {
                    this.setPixelRGB(i, rgb);
                }
            } else {
                this.setPixelRGB(pixeloffset, rgb);
            }
        }

        private setPixelRGB(pixeloffset: number, rgb: StartbitRGBColors): void {
            if (pixeloffset < 0 || pixeloffset >= this._length) return;
            let tureRgb = 0;
            switch (rgb) {
                case StartbitRGBColors.Red:
                    tureRgb = 0xff0000;
                    break;

                case StartbitRGBColors.Orange:
                    tureRgb = 0xffa500;
                    break;

                case StartbitRGBColors.Yellow:
                    tureRgb = 0xffff00;
                    break;

                case StartbitRGBColors.Green:
                    tureRgb = 0x00ff00;
                    break;

                case StartbitRGBColors.Blue:
                    tureRgb = 0x0000ff;
                    break;

                case StartbitRGBColors.Indigo:
                    tureRgb = 0x4b0082;
                    break;

                case StartbitRGBColors.Violet:
                    tureRgb = 0x8a2be2;
                    break;

                case StartbitRGBColors.Purple:
                    tureRgb = 0xff00ff;
                    break;

                case StartbitRGBColors.White:
                    tureRgb = 0xffffff;
                    break;
            }

            let stride = this._mode === StartbitRGBPixelMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride;

            let red = unpackR(tureRgb);
            let green = unpackG(tureRgb);
            let blue = unpackB(tureRgb);

            let br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(pixeloffset, red, green, blue);
        }

        private setBufferRGB(
            offset: number,
            red: number,
            green: number,
            blue: number
        ): void {
            if (this._mode === StartbitRGBPixelMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        show() {
            sendBuffer(this.buf, this.pin);
        }

        clear(): void {
            const stride = this._mode === StartbitRGBPixelMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
            this.show();
        }
    }
    export function create(
        pin: DigitalPin,
        numleds: number,
        mode: StartbitRGBPixelMode
    ): LHstartbitRGBLight {
        let light = new LHstartbitRGBLight();
        let stride = mode === StartbitRGBPixelMode.RGBW ? 4 : 3;
        light.buf = pins.createBuffer(numleds * stride);
        light.start = 0;
        light._length = numleds;
        light._mode = mode;
        light.setBrightness(255);
        light.setPin(pin);
        return light;
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
}
