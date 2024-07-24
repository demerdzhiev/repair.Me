import * as request from "./request";

const baseUrl = 'http://localhost:3030/jsonstore/services'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    const services = Object.values(result)

    return services;
};

export const getOne = async (serviceId) => {
    const result = await request.get(`${baseUrl}/${serviceId}`, );

    return result;
};

export const getLatest = async () => {
    const result = await request.get(baseUrl);
    
    return result.reverse().slice(0, 3);
}

export const create = async (serviceData) => {
    const result = await request.post(baseUrl, serviceData);

    return result;
};

export const edit = async (serviceId, serviceDataData) => {
    const result = await request.put(`${baseUrl}/${serviceId}`, serviceDataData);

    return result;
};

export const remove = async (serviceId) => request.remove(`${baseUrl}/${serviceId}`);
