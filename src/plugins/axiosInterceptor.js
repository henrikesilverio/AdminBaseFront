import Http from '../apis/http';

export function setupInterceptors({ dispatch }) {

    let requestsPending = 0;
    const req = {
        pending: () => {
            requestsPending++;
            dispatch("SHOW_LOADING");
        },
        done: () => {
            requestsPending--;
            if (requestsPending <= 0) {
                dispatch("HIDE_LOADING");
            }
        }
    };

    Http.interceptors.request.use(
        config => {
            req.pending();
            const token = localStorage.getItem('authtoken');

            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }

            return config;
        },
        error => {
            requestsPending--;
            req.done();
            return Promise.reject(error);
        }
    );

    Http.interceptors.response.use(
        ({ data }) => {
            req.done();
            return Promise.resolve(data);
        },
        error => {
            req.done();
            return Promise.reject(error);
        }
    );
}