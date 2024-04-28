import { observable, action, makeAutoObservable } from "mobx";
import { rotateCounterClockwise, rotateClockwise } from "./math";

export class CypherValues {
  readonly TOTAL_AREA = [700, 700];
  readonly CENTER = [this.TOTAL_AREA[0] / 2.2, this.TOTAL_AREA[1] / 2];
  readonly DIAMETER = 90;
  readonly RADIUS = this.DIAMETER / 2;
  readonly CORE = this.DIAMETER / 2;
  readonly CIRCLE_OFFSET = this.CENTER[0] - this.CORE;
  readonly LINE_OFFSET = this.CENTER[1] + this.CORE;

  overallRotation = 0;

  constructor() {
    makeAutoObservable(this);
  }

  handleClick(
    event: React.MouseEvent<SVGPathElement, MouseEvent>,
    ring: number,
    rotation: number
  ) {
    if (event.shiftKey) {
      console.log(`${ring} shift clicked`);
      this.callSetter(rotateCounterClockwise(rotation), ring);
    } else {
      console.log(`${ring} clicked`);
      console.log(this.ringRotations[6]);
      this.callSetter(rotateClockwise(rotation), ring);
      console.log(this.ringRotations[6]);
    }
  }

  // Degrees rings are rotated
  ringRotations = {
    6: 0, // Outer Ring
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0, // Center Ring
  };

  callSetter(newAngle: number, ring: number) {
    switch (ring) {
      case 1:
        this.setRotation1(newAngle);
        break;
      case 2:
        this.setRotation2(newAngle);
        break;
      case 3:
        this.setRotation3(newAngle);
        break;
      case 4:
        this.setRotation4(newAngle);
        break;
      case 5:
        this.setRotation5(newAngle);
        break;
      case 6:
        this.setRotation6(newAngle);
        break;
    }
  }

  setRotation6(angle: number) {
    this.ringRotations[6] = angle;
  }
  setRotation5(angle: number) {
    this.ringRotations[5] = angle;
  }
  setRotation4(angle: number) {
    this.ringRotations[4] = angle;
  }
  setRotation3(angle: number) {
    this.ringRotations[3] = angle;
  }
  setRotation2(angle: number) {
    this.ringRotations[2] = angle;
  }
  setRotation1(angle: number) {
    this.ringRotations[1] = angle;
  }

  rotateCypherCW() {
    this.overallRotation = rotateClockwise(this.overallRotation);
  }

  rotateCypherCCW() {
    this.overallRotation = rotateCounterClockwise(this.overallRotation);
  }

  resetCypher() {
    this.ringRotations[1] = 0;
    this.ringRotations[2] = 0;
    this.ringRotations[3] = 0;
    this.ringRotations[4] = 0;
    this.ringRotations[5] = 0;
    this.ringRotations[6] = 0;
  }
}
