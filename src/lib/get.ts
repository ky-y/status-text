import * as statusCodes from "./list";

export const statusText = (statusCode: number): string => {
    const key = "HTTP" + String(statusCode);

    if (Object.keys(statusCodes).includes(key))
        return statusCodes[key as keyof typeof statusCodes];

    return "Unknown Status";
};