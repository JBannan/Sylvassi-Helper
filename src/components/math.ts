export function rotateClockwise(degrees: number) {
    const rotated = degrees + 45;
    if (rotated > 360) {
        return rotated - 360;
    }
    else {
        return rotated;
    }
}

export function rotateCounterClockwise(degrees: number) {
    const rotated = degrees - 45;
    if (rotated < 0) {
        return 360 + rotated;
    }
    else {
        return rotated;
    }
}

function degreesToRadians(degrees: number): number {
    return degrees * (Math.PI/180.0);
}

function roundToPrecision(value: number, precision: number) {
    return parseFloat(value.toFixed(precision));
}

export function pointOnCircle(angle: number, radius: number) {
    const x = radius * Math.cos(degreesToRadians(angle));
    const y = radius * Math.sin(degreesToRadians(angle));
    return [roundToPrecision(x, 2), roundToPrecision(y, 2)];
}