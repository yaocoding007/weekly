
function Vue(options = {}) {
    this.$options = options;
    var data = this._data = options.data;
    observe(data);
    for(let key in data) {
        Object.defineProperty(this, key, {
            enumerable: true,
            get() {
                return this._data[key];
            },
            set(newVal) {
                this._data[key] = newVal;
            }
        })
    }
}

function observe(data) {
    if(typeof data !== 'object') {
        return;
    }
    new Observe(data);
}

function Observe(data) {
    for(let key in data) {
        let val = data[key];
        // 递归去做响应式
        observe(data);
        Object.defineProperty(data, key, {
            enumerable: true,
            get() {
                return val;
            },
            set(newVal) {
                if(val === newVal) return;
                val = newVal;
                // 每次修改需要重新去绑定响应式
                observe(data);
            }
        })
    }
}

function Compile(el, vm) {
    vm.$el = document.querySelector(el);
    let fragment = document.createDocumentFragment();
    while(child = vm.$el.firstChild) {
        fragment.appendChild(child);
    }
    vm.$el.appendChild(fragment);
}

function replace(fragment) {
    Array.from(fragment.childNodes)
        .forEach(function(node) {
            let text = node.textContent;
            let reg = /\{\{(.*)\{\{/;
            if(node.nodeType === 3 && reg.test(text)) {
                console.log(RegExp.$1);
            }
            if(node.childNodes) {
                replace(node);
            }
        })
}

function Dep() {
    this.subs= [];
}

Dep.prototype.addSub = function(sub) {
    this.subs.push(sub);
}

Dep.prototype.notify = function() {
    this.subs.forEach(function(sub) {
        sub.update();
    })
}

function Watcher(fn) {
    this.fn = fn;
}




