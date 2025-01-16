import { convertJSONToGETParams, triggerApi } from "../helpers";

export const getAllCategories = async (domain: string) => {
    const query = convertJSONToGETParams({
        domain
    })
    const URL = process.env.API_URL + '/api/landing/domain?' + query;
    return await triggerApi({
        URL,
        METHOD: 'GET',
    });
}

export const getPostsByCategoryById = async (categoryId: string) => {
    const query = convertJSONToGETParams({
        categoryId,
    })
    const URL = process.env.API_URL + '/api/landing/domain/posts?' + query;
    return await triggerApi({
        URL,
        METHOD: 'GET',
    });
}

// export const verifySDKAccessToken = async (TOKEN: string, browser_url: any) => {
//     const query = convertJSONToGETParams({
//         browser_url
//     })
//     const URL = process.env.API_URL + '/api/landing/verify-token/' + TOKEN + '?' + query;
//     return await triggerApi({
//         URL,
//         METHOD: 'GET',
//     });
// }

export const verifyDomain = async (domain: string) => {
    const query = convertJSONToGETParams({
        domain,
    })
    const URL = process.env.API_URL + '/api/landing/domain/verify-domain?' + query;
    return await triggerApi({
        URL,
        METHOD: 'GET',
    });
}

export const getAllPosts = async (domain: any, title?: string) => {
    const query = convertJSONToGETParams({
        domain,
        title: title || ''
    })
    const URL = process.env.API_URL + '/api/landing/domain/posts/search?' + query;
    return await triggerApi({
        URL,
        METHOD: 'GET',
    });
}

export const getPostByUrl = async (url: string) => {
    const URL = `${process.env.API_URL}/api/posts/blog/${url}`;
    return await triggerApi({
        URL,
        METHOD: 'GET',
    });
}

export const addPostCountByUrl = async (url: string) => {
    const URL = `${process.env.API_URL}/api/posts/blog/${url}`;
    return await triggerApi({
        URL,
        METHOD: 'PUT',
    });
}