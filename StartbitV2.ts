/*
 Informatiktheater package
*/
//% weight=10  color=#2896ff
namespace Informatiktheater {
  export enum startbit_Colors {
    //% block="Red"
    //% block.loc.de="Rot"
    Red = 0x01,
    //% block="Green"
    //% block.log.de="Grün"
    Green = 0x02,
    //% block="Blue"
    //% block.loc.de="Blau"
    Blue = 0x03,
    //% block="Black"
    //% block.loc.de="Schwarz"
    Black = 0x04,
    //% block="White"
    //% block.loc.de="Weiss"
    White = 0x05,
    //% block="Empty"
    //% block.loc.de="Leer"
    None = 0x06,
  }

  export enum startbit_lineFollower {
    //% blockId="S1_OUT_S2_OUT"
    //% block="Sensor1 and sensor2 beyond black line"
    //% block.loc.de="Sensor1 und Sensor2 sind ausserhalb der schwarzen Linie"
    S1_OUT_S2_OUT = 0x00,
    //% blockId="S1_OUT_S2_IN
    //% block="Sensor2 on black line but not sensor1"
    //% block.loc.de="Sensor2 auf schwarzer Linie aber Sensor1 nicht"
    S1_OUT_S2_IN = 0x01,
    //% blockId="S1_IN_S2_OUT"
    //% block="Sensor1 on black line but not sensor2"
    //% block.loc.de="Sensor1 auf schwarzer Linie aber Sensor2 nicht"
    S1_IN_S2_OUT = 0x02,
    //% blockId="S1_IN_S2_IN"
    //% block="Sensor1 and sensor2 on black line"
    //% block.loc.de="Sensor1 und Sensor2 auf schwarzer Linie"
    S1_IN_S2_IN = 0x03,
  }

  export enum startbit_Servos {
    Servo1 = 0x01,
    Servo2 = 0x02,
  }

  export enum startbit_ultrasonicPort {
    port1 = 0x01,
    port2 = 0x02,
  }

  let echoPin: DigitalPin;
  let trigPin: DigitalPin;
  //% weight=91
  //% blockId=ultrasonic_init
  //% block="initialize ultrasonic |%port"
  //% block.loc.de="initialisiere Ultraschall|%port"
  export function ultrasonic_init(port: startbit_ultrasonicPort) {
    switch (port) {
      case startbit_ultrasonicPort.port1:
        echoPin = DigitalPin.P2;
        trigPin = DigitalPin.P1;
        break;
      case startbit_ultrasonicPort.port2:
        echoPin = DigitalPin.P14;
        trigPin = DigitalPin.P13;
        break;
    }
  }

  export enum startbit_lineFollowPort {
    port1 = 0x01,
  }

  let lineFollowPin1: AnalogPin;
  let lineFollowPin2: AnalogPin;
  //% weight=92
  //% blockId=lineFollowSensor_init
  //% block="initialize line follower sensor|%port"
  //% block.loc.de="initialisiere Linienfolger-Sensor|%port"
  export function lineFollowSensor_init(port: startbit_lineFollowPort) {
    switch (port) {
      case startbit_lineFollowPort.port1:
        lineFollowPin1 = AnalogPin.P1;
        lineFollowPin2 = AnalogPin.P2;
        break;
    }
  }

  export enum startbit_PinIOStatus {
    //% block="Off"
    //% block.loc.de="Aus"
    Low = 0x00,
    //% block="On"
    //% block.loc.de="Ein"
    Hight = 0x01,
  }

  export enum startbit_LineFollowerSensor {
    //% block="Sensor 1"
    LFSensor_1 = 0x00,
    //% block="Sensor 2"
    LFSensor_2 = 0x01,
  }

  export enum startbit_busServoPort {
    //% block="Port 6"
    port6 = 0x06,
  }

  export enum startbit_knobPort {
    port1 = 0x01,
  }

  let knobPin: AnalogPin;
  //% weight=99
  //% blockId=knobSensor_init
  //% block="initialize rotating knob|%port"
  //% block.loc.de="initialisiere Drehknopf|%port"
  export function knobSensor_init(port: startbit_knobPort) {
    switch (port) {
      case startbit_knobPort.port1:
        knobPin = AnalogPin.P1;
        break;
    }
  }

  export enum startbit_iic {
    port3 = 0x03,
    port4 = 0x04,
    port6 = 0x06,
  }

  //% weight=93
  //% blockId=lineFollow_iic_init
  //% block="initialize line follower iic|%port"
  //% block.loc.de="initialisiere Linienfolger iic|%port"
  export function lineFollow_iic_init(port: startbit_iic) {
    switch (port) {
      case startbit_iic.port3:
        break;
      case startbit_iic.port4:
        break;
      case startbit_iic.port6:
        break;
    }
  }

  export enum startbit_servorange {
    //% block="180"
    range1 = 180,
    //% block="270"
    range2 = 270,
  }

  /**
   * Informatiktheater initialization, please execute at boot time
   */
  //% weight=100
  //% blockId=startbit_Init
  //% block="initialize Informatiktheater"
  //% block.loc.de="initialisiere Informatiktheater"
  //% jsdoc.loc.de="Informatiktheater Initialisation, bitte beim Start ausführen."
  export function startbit_Init() {
    startbit_initRGBLight();
    serial.redirect(SerialPin.P12, SerialPin.P8, BaudRate.BaudRate115200);

    basic.forever(() => {
      getHandleCmd();
      if (0 < currentVoltage && currentVoltage < 6800) {
        music.playTone(988, music.beat(BeatFraction.Whole));
      }
    });
    basic.pause(2000);
  }

  let handleCmd: string = "";
  let currentVoltage: number = 0;
  let lhRGBLight: StartbitRGBLight.LHstartbitRGBLight;
  let lhRGBLightBelt: StartbitRGBLight.LHstartbitRGBLight;

  let P14_ad = 0;

  let MESSAGE_MAC = 0xff;
  let MESSAGE_ANGLE = 0x100;

  let servo1Angle: number = 0xfff;
  let servo2Angle: number = 0xfff;

  let actiongroup_finished = true;

  let Digitaltube: startbit_TM1640LEDs;
  let TM1640_CMD1 = 0x40;
  let TM1640_CMD2 = 0xc0;
  let TM1640_CMD3 = 0x80;
  let _SEGMENTS = [
    0x3f, 0x06, 0x5b, 0x4f, 0x66, 0x6d, 0x7d, 0x07, 0x7f, 0x6f, 0x77, 0x7c,
    0x39, 0x5e, 0x79, 0x71,
  ];

  function getHandleCmd() {
    let charStr: string = serial.readString();
    handleCmd = handleCmd.concat(charStr);
    let cnt: number = countChar(handleCmd, "$");
    if (cnt == 0) return;
    let index = findIndexof(handleCmd, "$", 0);
    if (index != -1) {
      let cmd: string = handleCmd.substr(0, index);
      if (cmd.charAt(0).compare("A") == 0) {
        if (cmd.length == 7) {
          let arg1Int: number = strToNumber(cmd.substr(1, 2));
          let arg2Int: number = strToNumber(cmd.substr(3, 2));
          let arg3Int: number = strToNumber(cmd.substr(5, 2));

          P14_ad = arg1Int;

          if (arg3Int != -1) {
            currentVoltage = arg3Int * 78.63;
            currentVoltage = Math.round(currentVoltage);
          }
        } else if (cmd.length == 5) {
          actiongroup_finished = true;
        } else {
        }
      }
      if (cmd.charAt(0).compare("C") == 0 && cmd.length == 11) {
        if (lhRGBLightBelt != null) {
          for (let i = 0; i < 10; i++) {
            let color = converOneChar(cmd.charAt(i + 1));
            if (color != -1) lhRGBLightBelt.setPixelColor(i, color);
          }
          lhRGBLightBelt.show();
        }
      }
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
          servo1Angle = mapValue(arg2Int, 0, 1000, 0, 240);
          servo1Angle -= 120;
          control.raiseEvent(MESSAGE_ANGLE, 1);
        } else if (arg1Int == 2) {
          servo2Angle = mapValue(arg2Int, 0, 1000, 0, 240);
          servo2Angle -= 120;
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

  function decStrToNumber(str: string): number {
    let num: number = 0;
    for (let i = 0; i < str.length; i++) {
      let tmp: number = converOneChar(str.charAt(i));
      if (tmp == -1) return -1;
      if (i > 0) num *= 10;
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
    S1,
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
  //% block="set servo motor %index| angle (°) %angle| duration (ms) %duration|range (°) %range"
  //% block.loc.de="setze Servomotor %index| auf Winkel (°) %angle|für Dauer (ms) %duration|Bereich (°) %range"
  //% angle.min=0 angle.max=270
  //% index.defl=1
  //% duration.shadow=timePicker
  //% inlineInputMode=inline
  //% subcategory=Servo/Motor
  export function setPwmServo(
    index: ServoIndex = 1,
    angle: number,
    duration: number = 300,
    range: startbit_servorange
  ) {
    let position = mapValue(angle, 0, range, 500, 2500);

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

  //% weight=96
  //% blockId=startbit_setMotorSpeed
  //% block="set velocity for |motor 1 %speed1|and motor 2 %speed2"
  //% block.loc.de="setze Geschwindigkeit für |Motor 1 %speed1|und Motor 2 %speed2"
  //% speed1.min=-100 speed1.max=100
  //% speed2.min=-100 speed2.max=100
  //% subcategory=Servo/Motor
  export function startbit_setMotorSpeed(speed1: number, speed2: number) {
    if (speed1 > 100 || speed1 < -100 || speed2 > 100 || speed2 < -100) {
      return;
    }
    speed1 = speed1 * -1;
    speed2 = speed2 * -1;
    let buf = pins.createBuffer(6);
    buf[0] = 0x55;
    buf[1] = 0x55;
    buf[2] = 0x04;
    buf[3] = 0x32; //cmd type
    buf[4] = speed1;
    buf[5] = speed2;
    serial.writeBuffer(buf);
  }

  /**
   * TM1640 LED display
   */
  export class startbit_TM1640LEDs {
    buf: Buffer;
    clk: DigitalPin;
    dio: DigitalPin;
    _ON: number;
    brightness: number;
    count: number; // number of LEDs

    /**
     * initial TM1640
     */
    init(): void {
      pins.digitalWritePin(this.clk, 0);
      pins.digitalWritePin(this.dio, 0);
      this._ON = 8;
      this.buf = pins.createBuffer(this.count);
      this.clear();
    }

    /**
     * Start
     */
    _start() {
      pins.digitalWritePin(this.dio, 0);
      pins.digitalWritePin(this.clk, 0);
    }

    /**
     * Stop
     */
    _stop() {
      pins.digitalWritePin(this.dio, 0);
      pins.digitalWritePin(this.clk, 1);
      pins.digitalWritePin(this.dio, 1);
    }

    /**
     * send command1
     */
    _write_data_cmd() {
      this._start();
      this._write_byte(TM1640_CMD1);
      this._stop();
    }

    /**
     * send command3
     */
    _write_dsp_ctrl() {
      this._start();
      this._write_byte(TM1640_CMD3 | this._ON | this.brightness);
      this._stop();
    }

    /**
     * send a byte to 2-wire interface
     */
    _write_byte(b: number) {
      for (let i = 0; i < 8; i++) {
        pins.digitalWritePin(this.clk, 0);
        pins.digitalWritePin(this.dio, (b >> i) & 1);
        pins.digitalWritePin(this.clk, 1);
      }
      pins.digitalWritePin(this.clk, 1);
      pins.digitalWritePin(this.clk, 0);
    }

    intensity(val: number = 7) {
      if (val < 1) {
        this.off();
        return;
      }
      if (val > 8) val = 8;
      this._ON = 8;
      this.brightness = val - 1;
      this._write_data_cmd();
      this._write_dsp_ctrl();
    }

    /**
     * set data to TM1640, with given bit
     */
    _dat(bit: number, dat: number) {
      this._write_data_cmd();
      this._start();
      this._write_byte(TM1640_CMD2 | bit % this.count);
      this._write_byte(dat);
      this._stop();
      this._write_dsp_ctrl();
    }

    showbit(num: number = 5, bit: number = 0) {
      this.buf[bit % this.count] = _SEGMENTS[num % 16];
      this._dat(bit, _SEGMENTS[num % 16]);
    }

    showNumber(num: number) {
      if (num < 0) {
        this._dat(0, 0x40); // '-'
        num = -num;
      } else this.showbit(Math.idiv(num, 1000) % 10);
      this.showbit(num % 10, 3);
      this.showbit(Math.idiv(num, 10) % 10, 2);
      this.showbit(Math.idiv(num, 100) % 10, 1);
    }

    showHex(num: number) {
      if (num < 0) {
        this._dat(0, 0x40); // '-'
        num = -num;
      } else this.showbit((num >> 12) % 16);
      this.showbit(num % 16, 3);
      this.showbit((num >> 4) % 16, 2);
      this.showbit((num >> 8) % 16, 1);
    }

    showDP(bit: number = 1, show: boolean = true) {
      bit = bit % this.count;
      if (show) this._dat(bit, this.buf[bit] | 0x80);
      else this._dat(bit, this.buf[bit] & 0x7f);
    }

    clear() {
      for (let i = 0; i < this.count; i++) {
        this._dat(i, 0);
        this.buf[i] = 0;
      }
    }

    on() {
      this._ON = 8;
      this._write_data_cmd();
      this._write_dsp_ctrl();
    }

    off() {
      this._ON = 0;
      this._write_data_cmd();
      this._write_dsp_ctrl();
    }
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

  //% weight=96
  //% blockId=startbit_readLineFollowerStatus
  //% block="Line follower status $status"
  //% block.loc.de="Linienfolger $status ?"
  //% subcategory=Sensor
  export function startbit_readLineFollowerStatus(
    status: startbit_lineFollower
  ): boolean {
    let s1 = 0;
    let s2 = 0;

    s1 = pins.analogReadPin(lineFollowPin1);
    s2 = pins.analogReadPin(lineFollowPin2);
    s1 = (s1 * 255) / 1023;
    s2 = (s2 * 255) / 1023;
    if (s1 < 200) s1 = 0;
    else s1 = 1;
    if (s2 < 200) s2 = 0;
    else s2 = 1;

    let s = ((1 & s1) << 1) | s2;
    if (s == status) {
      return true;
    } else {
      return false;
    }
  }

  //% weight=89
  //% blockId=startbit_lineSensorValue blockGap=50
  //% block="get line follower sensor|%sensor|ad value"
  //% block.loc.de="Linienfolger |%sensor|ad Wert"
  //% subcategory=Sensor
  export function startbit_lineSensorValue(
    sensor: startbit_LineFollowerSensor
  ): number {
    let s1 = 0;
    let s2 = 0;

    s1 = pins.analogReadPin(lineFollowPin1);
    s2 = pins.analogReadPin(lineFollowPin2);
    s1 = (s1 * 255) / 1023;
    s2 = (s2 * 255) / 1023;

    if (sensor == startbit_LineFollowerSensor.LFSensor_1) {
      return 255 - s1;
    } else {
      return 255 - s2;
    }
  }

  let distanceBak = 0;
  /**
   * Get the distance of ultrasonic detection to the obstacle
   */
  //% weight=90
  //% blockId=startbit_ultrasonic
  //% block="get ultrasonic |distancse (cm)"
  //% block.loc.de="Ultraschall|Distanz (cm)"
  //% subcategory=Sensor
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

  /**
   * Get the ad value of the knob moudule
   */
  //% weight=92
  //% blockId=startbit_getKnobValue
  //% block="get rotating knob|value (0~255)"
  //% block.loc.de="Drehknopf|Wert (0~255)"
  //% subcategory=Sensor
  export function startbit_getKnobValue(): number {
    let adValue = pins.analogReadPin(knobPin);
    adValue = (adValue * 255) / 1023;
    return adValue;
  }

  /**
   * Initialize RGB
   */
  function startbit_initRGBLight() {
    if (!lhRGBLight) {
      lhRGBLight = StartbitRGBLight.create(
        DigitalPin.P15,
        6,
        StartbitRGBPixelMode.RGB
      );
    }
    startbit_clearLight();
  }

  /**
   * Set the brightness of the strip. This flag only applies to future operation.
   * @param brightness a measure of LED brightness in 0-255. eg: 255
   */
  //% blockId="startbit_setBrightness"
  //% block="set brightness value to %brightness"
  //% block.loc.de="setze Helligkeit auf Wert %brightness"
  //% brightness.min=0 brightness.max=255 brightness.defl=255
  //% jsdoc.loc.de="Setze die Hellighkeit des LED Streifens. Dies gilt nur zukünftige Operationen."
  //% brightness.loc.de="LED Helligkeit zwischen 0 bis 255"
  //% weight=100
  //% subcategory=LED
  export function startbit_setBrightness(brightness: number): void {
    lhRGBLight.setBrightness(brightness);
  }

  //% weight=99 blockId=startbit_setPixelRGBArgs
  //% block="set|%lightoffset|color to %rgb"
  //% block.loc.de="setze Farbe von|%lightoffset|auf %rgb"
  //% subcategory=LED
  export function startbit_setPixelRGBArgs(
    lightoffset: StartbitLights,
    rgb: StartbitRGBColors
  ) {
    lhRGBLight.setPixelColor(lightoffset, rgb);
  }

  /**
   * Display the colored lights, and set the color of the colored lights to match the use.
   * After setting the color of the colored lights, the color of the lights must be displayed.
   */
  //% weight=97 blockId=startbit_showLight
  //% block="Light on"
  //% block.loc.de="Licht an"
  //% jsdoc.loc.de="Zeige die gefärbten Lichter. Muss ausgeführt werden nachdem eine Lichtfarbe gesetzt wurde!"
  //% subcategory=LED
  export function startbit_showLight() {
    lhRGBLight.show();
  }

  /**
   * Clear the color of the colored lights and turn off the lights.
   */
  //% weight=96 blockGap=50 blockId=startbit_clearLight
  //% block="Light off"
  //% block.loc.de="Licht aus"
  //% jsdoc.loc.de="Setze Farbe zurück und schalte LED aus"
  //% subcategory=LED
  export function startbit_clearLight() {
    lhRGBLight.clear();
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
    S1,
    //% block="S2"
    S2,
    //% block="S3"
    S3,
    //% block="S4"
    S4,
  }

  export enum startbit_LineColor {
    //% block="Black"
    //% block.loc.de="Schwarz"
    Black,
    //% block="White"
    //% block.loc.de="Weiss"
    White,
  }

  const LINE_FOLLOWER_I2C_ADDR = 0x78;

  //% weight=95 blockId=startbit_line_followers blockGap=50
  //% block="Line follower %lineFollowerSensor in %LineColor ?"
  //% block.loc.de="Linienfolger %lineFollowerSensor auf %LineColor ?"
  //% inlineInputMode=inline
  //% subcategory=Sensor
  export function startbit_line_followers(
    lineFollowerSensor: startbit_LineFollowerSensors,
    LineColor: startbit_LineColor
  ): boolean {
    pins.i2cWriteNumber(LINE_FOLLOWER_I2C_ADDR, 1, NumberFormat.UInt8BE);
    let data = pins.i2cReadNumber(LINE_FOLLOWER_I2C_ADDR, NumberFormat.UInt8BE);
    let status = false;
    switch (lineFollowerSensor) {
      case startbit_LineFollowerSensors.S1:
        if (data & 0x01) {
          if (LineColor == startbit_LineColor.Black) {
            status = true;
          }
        } else {
          if (LineColor == startbit_LineColor.White) {
            status = true;
          }
        }
        break;

      case startbit_LineFollowerSensors.S2:
        if (data & 0x02) {
          if (LineColor == startbit_LineColor.Black) {
            status = true;
          }
        } else {
          if (LineColor == startbit_LineColor.White) {
            status = true;
          }
        }
        break;

      case startbit_LineFollowerSensors.S3:
        if (data & 0x04) {
          if (LineColor == startbit_LineColor.Black) {
            status = true;
          }
        } else {
          if (LineColor == startbit_LineColor.White) {
            status = true;
          }
        }
        break;

      case startbit_LineFollowerSensors.S4:
        if (data & 0x08) {
          if (LineColor == startbit_LineColor.Black) {
            status = true;
          }
        } else {
          if (LineColor == startbit_LineColor.White) {
            status = true;
          }
        }
        break;
    }
    return status;
  }

  // //% block="Trittmatte gedrückt"
  // //
  // export function trittmattePressed(handler: () => void) {
  //   handler();
  // }

  // MP3 Player stuff

  export class SongList {
    TrackIndex: number;
    list: Array<number>;

    constructor() {
      this.TrackIndex = 0;
      this.list = [0];
    }

    //% weight=99
    //% block="setze $this auf $list "
    //% this.defl=Songliste
    //% this.shadow=variables_get
    //% subcategory=MP3-Box
    public createSongListArray(list: number[]) {
      this.list = list;
      this.TrackIndex = 0;
    }

    //% weight=98
    //% block="Play next track in list $this"
    //% block.loc.de="nächste Songnummer in Liste $this"
    //% this.defl=Songliste
    //% this.shadow=variables_get
    //% subcategory=MP3-Box
    public playNextTrack() {
      if (this.TrackIndex < this.list.length) {
        this.TrackIndex += 1;
      } else {
        this.TrackIndex = 0;
      }
    }
    //
    //% weight=97
    //% block="Play previous track in list $this"
    //% block.loc.de="vorherige Songnummer in Liste $this"
    //% this.defl=Songliste
    //% this.shadow=variables_get
    //% subcategory=MP3-Box
    public playPreviousTrack() {
      if (this.TrackIndex <= 0) {
        this.TrackIndex == 0;
      } else {
        this.TrackIndex--;
      }
    }

    //% weight=95
    //% block="current song number in list %this"
    //% block.loc.de="Aktuelle Songnummer in liste %this"
    //% this.defl=Songliste
    //% this.shadow=variables_get
    //% subcategory=MP3-Box
    public currentTrack(): number {
      return this.list[this.TrackIndex];
    }

    //% weight=96
    //% block="Back to first song in list %this"
    //% block.loc.de="zurück zur ersten Songnummer in Liste %this"
    //% this.defl=Songliste
    //% this.shadow=variables_get
    //% subcategory=MP3-Box
    public gotoFirstTrack() {
      this.TrackIndex = 0;
    }
  }

  /**
   * Creates a song list and automtically set it to a variable
   */
  //% weight=100
  //% block="create song list"
  //% block.loc.de="erstelle Songliste"
  //% jsdoc.loc.de="erstellt eine neue Songliste und setzt sie auf eine Variable. Muss im Startblock ausgeführt werden bevor MP3 Box gebraucht werden kann."
  //% blockSetVariable=Songliste
  //% subcategory=MP3-Box
  export function createSongList(): SongList {
    return new SongList();
  }
}
