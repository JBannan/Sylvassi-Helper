import { observer } from "mobx-react";
import { Fragment, useRef } from "react";
import { CypherOneVM } from "./CypherOneVM";
import { pointOnCircle } from "../math";
import { CypherValues } from "../CypherValues";

export const CypherOne = observer(() => {
  const vm = useRef(new CypherValues()).current;
  return (
    <Fragment>
      <svg width={800} height={800} className="svg-top">
        <g fill="gray" stroke="black" strokeWidth={3}>
          <path
            d={`
              M ${vm.CENTER[0] - vm.CORE * 5},${vm.CENTER[1]}
              a ${vm.CORE * 5},${vm.CORE * 5} 0 1,1 ${vm.DIAMETER * 6},0
              a ${vm.CORE * 5},${vm.CORE * 5} 0 1,1 -${vm.DIAMETER * 6},0
            `}
            onClick={(e) => {
              vm.handleClick(e, 6, vm.ringRotations[6]);
            }}
          />
          <path
            d={`
              M ${vm.CENTER[0] - vm.CORE * 4},${vm.CENTER[1]}
              a ${vm.CORE * 4},${vm.CORE * 4} 0 1,1 ${vm.DIAMETER * 5},0
              a ${vm.CORE * 4},${vm.CORE * 4} 0 1,1 -${vm.DIAMETER * 5},0
            `}
            onClick={(e) => {
              vm.handleClick(e, 5, vm.ringRotations[5]);
            }}
          />

          <path
            d={`
              M ${vm.CENTER[0] - vm.CORE * 3},${vm.CENTER[1]}
              a ${vm.CORE * 3},${vm.CORE * 3} 0 1,1 ${vm.DIAMETER * 4},0
              a ${vm.CORE * 3},${vm.CORE * 3} 0 1,1 -${vm.DIAMETER * 4},0
            `}
            onClick={(e) => {
              vm.handleClick(e, 4, vm.ringRotations[4]);
            }}
          />

          <path
            d={`
              M ${vm.CENTER[0] - vm.CORE * 2},${vm.CENTER[1]}
              a ${vm.CORE * 2},${vm.CORE * 2} 0 1,1 ${vm.DIAMETER * 3},0
              a ${vm.CORE * 2},${vm.CORE * 2} 0 1,1 -${vm.DIAMETER * 3},0
             `}
            onClick={(e) => {
              vm.handleClick(e, 3, vm.ringRotations[3]);
            }}
          />

          <path
            d={`
              M ${vm.CENTER[0] - vm.CORE},${vm.CENTER[1]}
              a ${vm.CORE},${vm.CORE} 0 1,1 ${vm.DIAMETER * 2},0
              a ${vm.CORE},${vm.CORE} 0 1,1 -${vm.DIAMETER * 2},0
            `}
            onClick={(e) => {
              vm.handleClick(e, 2, vm.ringRotations[2]);
            }}
          />

          <path
            d={`
              M ${vm.CENTER[0]},${vm.CENTER[1]}
              a ${vm.RADIUS},${vm.RADIUS} 0 1,1 ${vm.DIAMETER},0
              a ${vm.RADIUS},${vm.RADIUS} 0 1,1 -${vm.DIAMETER},0
            `}
            onClick={(e) => {
              vm.handleClick(e, 1, vm.ringRotations[1]);
            }}
          />
        </g>
        <g fill="none" stroke="cyan" strokeWidth={5}>
          <path
            d={`
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[6], vm.RADIUS * 5)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[6], vm.RADIUS * 5)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[6], vm.RADIUS * 6)[0] / 6
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[6], vm.RADIUS * 6)[1] / 6}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 10, vm.RADIUS * 5)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 10, vm.RADIUS * 5)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 10, vm.RADIUS * 6)[0] / 6
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 10, vm.RADIUS * 6)[1] / 6}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 10, vm.RADIUS * 5)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 10, vm.RADIUS * 5)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 10, vm.RADIUS * 6)[0] / 6
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 10, vm.RADIUS * 6)[1] / 6}

              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 150, vm.RADIUS * 5)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 150, vm.RADIUS * 5)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 150, vm.RADIUS * 6)[0] / 6
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 150, vm.RADIUS * 6)[1] / 6}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 150 + 10, vm.RADIUS * 5)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 150 + 10, vm.RADIUS * 5)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 150 + 10, vm.RADIUS * 6)[0] / 6
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 150 + 10, vm.RADIUS * 6)[1] / 6}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 150 - 10, vm.RADIUS * 5)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 150 - 10, vm.RADIUS * 5)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 150 - 10, vm.RADIUS * 6)[0] / 6
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[6] + 150 - 10, vm.RADIUS * 6)[1] / 6}

              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 150, vm.RADIUS * 5)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 150, vm.RADIUS * 5)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 150, vm.RADIUS * 6)[0] / 6
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 150, vm.RADIUS * 6)[1] / 6}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 150 + 10, vm.RADIUS * 5)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 150 + 10, vm.RADIUS * 5)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 150 + 10, vm.RADIUS * 6)[0] / 6
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 150 + 10, vm.RADIUS * 6)[1] / 6}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 150 - 10, vm.RADIUS * 5)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 150 - 10, vm.RADIUS * 5)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 150 - 10, vm.RADIUS * 6)[0] / 6
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[6] - 150 - 10, vm.RADIUS * 6)[1] / 6}
            `}
            onClick={(e) => {
              vm.handleClick(e, 6, vm.ringRotations[6]);
            }}
          />
          <path
            d={`
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[5], vm.RADIUS * 4)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[5], vm.RADIUS * 4)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[5], vm.RADIUS * 5)[0] / 5
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[5], vm.RADIUS * 5)[1] / 5}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 10, vm.RADIUS * 4)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 10, vm.RADIUS * 4)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 10, vm.RADIUS * 5)[0] / 5
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 10, vm.RADIUS * 5)[1] / 5}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 10, vm.RADIUS * 4)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 10, vm.RADIUS * 4)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 10, vm.RADIUS * 5)[0] / 5
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 10, vm.RADIUS * 5)[1] / 5}

              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 150, vm.RADIUS * 4)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 150, vm.RADIUS * 4)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 150, vm.RADIUS * 5)[0] / 5
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 150, vm.RADIUS * 5)[1] / 5}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 150 + 10, vm.RADIUS * 4)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 150 + 10, vm.RADIUS * 4)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 150 + 10, vm.RADIUS * 5)[0] / 5
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 150 + 10, vm.RADIUS * 5)[1] / 5}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 150 - 10, vm.RADIUS * 4)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 150 - 10, vm.RADIUS * 4)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 150 - 10, vm.RADIUS * 5)[0] / 5
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[5] + 150 - 10, vm.RADIUS * 5)[1] / 5}

              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 150, vm.RADIUS * 4)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 150, vm.RADIUS * 4)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 150, vm.RADIUS * 5)[0] / 5
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 150, vm.RADIUS * 5)[1] / 5}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 150 + 10, vm.RADIUS * 4)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 150 + 10, vm.RADIUS * 4)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 150 + 10, vm.RADIUS * 5)[0] / 5
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 150 + 10, vm.RADIUS * 5)[1] / 5}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 150 - 10, vm.RADIUS * 4)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 150 - 10, vm.RADIUS * 4)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 150 - 10, vm.RADIUS * 5)[0] / 5
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[5] - 150 - 10, vm.RADIUS * 5)[1] / 5}
            `}
            onClick={(e) => {
              vm.handleClick(e, 5, vm.ringRotations[5]);
            }}
          />

          <path
            d={`
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[4], vm.RADIUS * 3)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[4], vm.RADIUS * 3)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[4], vm.RADIUS * 4)[0] / 4
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[4], vm.RADIUS * 4)[1] / 4}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 10, vm.RADIUS * 3)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 10, vm.RADIUS * 3)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 10, vm.RADIUS * 4)[0] / 4
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 10, vm.RADIUS * 4)[1] / 4}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 10, vm.RADIUS * 3)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 10, vm.RADIUS * 3)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 10, vm.RADIUS * 4)[0] / 4
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 10, vm.RADIUS * 4)[1] / 4}

              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 150, vm.RADIUS * 3)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 150, vm.RADIUS * 3)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 150, vm.RADIUS * 4)[0] / 4
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 150, vm.RADIUS * 4)[1] / 4}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 150 + 10, vm.RADIUS * 3)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 150 + 10, vm.RADIUS * 3)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 150 + 10, vm.RADIUS * 4)[0] / 4
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 150 + 10, vm.RADIUS * 4)[1] / 4}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 150 - 10, vm.RADIUS * 3)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 150 - 10, vm.RADIUS * 3)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 150 - 10, vm.RADIUS * 4)[0] / 4
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[4] + 150 - 10, vm.RADIUS * 4)[1] / 4}

              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 150, vm.RADIUS * 3)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 150, vm.RADIUS * 3)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 150, vm.RADIUS * 4)[0] / 4
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 150, vm.RADIUS * 4)[1] / 4}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 150 + 10, vm.RADIUS * 3)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 150 + 10, vm.RADIUS * 3)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 150 + 10, vm.RADIUS * 4)[0] / 4
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 150 + 10, vm.RADIUS * 4)[1] / 4}
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 150 - 10, vm.RADIUS * 3)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 150 - 10, vm.RADIUS * 3)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 150 - 10, vm.RADIUS * 4)[0] / 4
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[4] - 150 - 10, vm.RADIUS * 4)[1] / 4}
            `}
            onClick={(e) => {
              vm.handleClick(e, 4, vm.ringRotations[4]);
            }}
          />

          <path
            d={`
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[3], vm.RADIUS * 2)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[3], vm.RADIUS * 2)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[3], vm.RADIUS * 3)[0] / 3
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[3], vm.RADIUS * 3)[1] / 3}
             `}
            onClick={(e) => {
              vm.handleClick(e, 3, vm.ringRotations[3]);
            }}
          />

          <path
            d={`
              M ${vm.CENTER[0] + vm.CORE + pointOnCircle(vm.overallRotation + vm.ringRotations[2], vm.RADIUS * 1)[0]},${vm.CENTER[1] + pointOnCircle(vm.overallRotation + vm.ringRotations[2], vm.RADIUS * 1)[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[2], vm.RADIUS * 2)[0] / 2
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[2], vm.RADIUS * 2)[1] / 2}
            `}
            onClick={(e) => {
              vm.handleClick(e, 2, vm.ringRotations[2]);
            }}
          />

          <path
            d={`
              M ${vm.CENTER[0] + vm.CORE},${vm.CENTER[1]} l ${
              pointOnCircle(vm.overallRotation + vm.ringRotations[1], vm.RADIUS * 1)[0]
            },${pointOnCircle(vm.overallRotation + vm.ringRotations[1], vm.RADIUS * 1)[1]}
            `}
            onClick={(e) => {
              vm.handleClick(e, 1, vm.ringRotations[1]);
            }}
          />
        </g>
      </svg>
      <button
        onClick={() => {
          vm.rotateCypherCCW();
        }}
      >
        Turn Cypher Counter Clockwise
      </button>
      <button
        onClick={() => {
          vm.resetCypher();
        }}
      >
        Reset Cypher
      </button>
      <button
        onClick={() => {
          vm.rotateCypherCW();
        }}
      >
        Turn Cypher Clockwise
      </button>
    </Fragment>
  );
});
