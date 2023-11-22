
function isSetAndNotEmpty(
    input: string | null | undefined
): input is string {
    return input !== undefined && input !== null && input !== "";
}

export function classNames(classes: Record<string, boolean>): string {

    return Object.entries(classes)
        .filter(([, value]) => value)
        .map(([key]) => key)
        .filter(isSetAndNotEmpty)
        .join(" ");
}

