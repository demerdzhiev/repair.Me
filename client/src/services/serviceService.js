import * as request from "./requestService";

const baseUrl = 'http://localhost:3030/data/services'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    const services = Object.values(result)

    return services;
};

export const getAllByOwner = async (ownerId) => {
    const query = `where=_ownerId%3D%22${encodeURIComponent(ownerId)}%22`;
    const result = await request.get(`${baseUrl}?${query}`);
    const servicesByOwnerId = Object.values(result);
    return servicesByOwnerId;
  };

export const getOne = async (serviceId) => {
    const result = await request.get(`${baseUrl}/${serviceId}`, );

    return result;
};

export const getLatest = async () => {
    // const query = new URLSearchParams({
    //     sortBy: '_createdOn desc',
    //     pageSize: 3,
    // });
    // const result = await request.get(`${baseUrl}?${query.toString()}`);
    // const latestServices = Object.values(result)

    const query = 'sortBy=_createdOn%20desc&pageSize=3';
    const result = await request.get(`${baseUrl}?${query}`);
    const latestServices = Object.values(result);

    return latestServices;
};

export const create = async (serviceData) => {
    const result = await request.post(baseUrl, serviceData);

    return result;
};

export const edit = async (serviceId, serviceDataData) => {
    const result = await request.put(`${baseUrl}/${serviceId}`, serviceDataData);

    return result;
};

export const remove = async (serviceId) => request.remove(`${baseUrl}/${serviceId}`);
