import News from "./WorldNews";

export function getAll(){
    return Promise.resolve(News);
}

export function getById(id) {
    const neews =  News.find(item => item.id === id);

    return Promise.resolve(neews);
}

export default {
    getAll,
    getById
}