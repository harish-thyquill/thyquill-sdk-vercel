import axios from "axios";
import toast from "react-hot-toast";

export const convertJSONToGETParams = (obj: Record<string, string | number | boolean>) => {
    const keys = Object.keys(obj);
    const result: string[] = [];
    for (const key of keys) {
        let value = obj[key];
        if (!value || typeof value === 'undefined') {
            continue;
        }
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        result.push(`${key}=${value}`);
    }
    if (result.length > 0) {
        return result.join('&');
    }
    return '';
}

export const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied');
};

export const triggerApi = async ({
    URL,
    METHOD,
    DATA,
    CONTENT_TYPE,
}: {
    URL: string,
    METHOD: string,
    DATA?: any,
    CONTENT_TYPE?: boolean,
}) => {

    interface Params<T = unknown> {
        method: string;
        url: string;
        data?: T;
        withCredentials: boolean;
        headers?: { [key: string]: string | boolean };
        cache?: string; // Add cache option
    }

    try {
        const apiParams: Params = {
            url: URL,
            method: METHOD,
            withCredentials: true,
            headers: {},
            cache: 'no-store'
        };

        if (METHOD === 'GET') {
            apiParams.cache = 'no-store'
        }

        if (METHOD === 'POST' || METHOD === 'PUT' || (METHOD === 'DELETE' && DATA !== '')) {
            apiParams.headers!['Content-Type'] = 'application/json';
            apiParams.data = DATA;
        }

        if (CONTENT_TYPE) {
            apiParams.headers!['Content-Type'] = CONTENT_TYPE;
        }

        if (typeof (CONTENT_TYPE) === 'boolean') {
            apiParams.headers!['Content-Type'] = CONTENT_TYPE;
            // apiParams.headers!['processData'] = CONTENT_TYPE;
        }

        const response = await axios(apiParams);

        return response?.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        if (err.response && err.response.data) {
            if (err.response.status === 403) {
                throw new Error(err.response.data.error || 'Access denied');
            } else {
                throw new Error(err.response.data.message);
            }
        } else {
            throw new Error(err);
        }
    }
};
