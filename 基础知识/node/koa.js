class Middleware {
    constructor() {
        this.middlewareList = [];
    }

    use(fn) {
        this.middlewareList.push(fn);
        return this;
    }

    compose() {
        const middlewareList = this.middlewareList;
        return dispatch(0);

        function dispatch(index) {
            const middleware = middlewareList[index];
            if(!middleware) {
                return;
            }
            try {
                const result = middleware({}, dispatch.bind(null, index+1));
                return Promise.resolve(result);
            }
            catch(err) {
                return Promise.reject(err);
            }
        }
    }
}

// const middleware = new Middleware();
// middleware.use(async (ctx, next) => {
//     console.log(1);
//     await next();
//     console.log(2);
// });
// middleware.use(async (ctx, next) => {
//     console.log(3);
//     await next();
//     console.log(4);
// });
// middleware.compose();
// 1 3 4 2


class Bar {

    constructor() {
        this.list = [];
    }

    use(fn) {
        this.list.push(fn)
    }

    run() {
        const list = this.list;

        function dispatch(index) {
            const middleware = list[index];
            if(!middleware) {
                return;
            }
            const result = middleware({}, dispatch.bind(null, index+1));
            return Promise.resolve(result);
        }

        return dispatch(0);
    }




}