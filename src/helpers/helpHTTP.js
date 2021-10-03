export const helpHttp = () => {
    const customFetch = (endpoint, options) => {
        const defaultHeader = {
            accept: "application/json"
        }
        const controller = new AbortController();
        options.signal = controller.signal;
        options.method = options.method || "GET"
        options.headers = options.headers ? {...defaultHeader, ...options.headers } : defaultHeader
        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;
        setTimeout(() => {
            controller.abort()
        }, 3000);

        console.log(options, endpoint)
        return fetch(endpoint, options)
            .then(res => res.ok ? res.json() : Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrio un error"
            }))
    }

    const get = (url, options = {}) => customFetch(url, options)
    const post = (url, options = {}) => {
        options.method = "POST"
        options.headers = { "Content-Type": "application/json;charset=utf-8" }
        return customFetch(url, options)

    }
    const put = (url, options = {}) => {
        options.method = "PUT"
        url += "/" + options.body.id
        options.headers = { "Content-Type": "application/json;charset=utf-8" }
        return customFetch(url, options)
    }
    const del = (url, options = {}) => {
        options.method = "DELETE"
        url += "/" + options.body.id
        return customFetch(url, options)
    }

    return {
        get,
        post,
        put,
        del
    }
}