import * as request from '../api/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (serviceId) => {
    const query = new URLSearchParams({
        where: `serviceId="${serviceId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (serviceId, text) => {
    const newComment = await request.post(baseUrl, {
        serviceId,
        text,
    });

    return newComment;
};
