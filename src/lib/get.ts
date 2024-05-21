import * as statusCodes from "./list";

export const statusText = (statusCode: number): string => {
    const key = "HTTP" + statusCode;

    if (Object.keys(statusCode).includes(key))
        return statusCodes[key as keyof typeof statusCodes];

    return "Unknown Status";
};