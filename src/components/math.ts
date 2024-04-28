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