

class DOMNodeCollection {

    constructor(array) {
        this.array = array;
    }

    html(string) {
        if (typeof string === "string") {
            this.array.forEach( e => {
                e.innerHTML = string;
            })
        } else {
            return this.array[0].innerHTML;
        }
    }

    empty() {
        this.html("");
    }

    append(arg) {
        if (arg instanceof DOMNodeCollection) {
            for (let i = 0 ; i < this.array.length ; i++) {
                this.array[i].innerHTML = this.array[i].innerHTML + arg.array[i].outerHTML;
            }
        }
        if (arg instanceof HTMLElement) {
            for (let i = 0 ; i < this.array.length ; i++) {
                this.array[i].innerHTML = this.array[i].innerHTML + arg.outerHTML;
            }
        }
        if (typeof arg === "string") {
            for (let i = 0 ; i < this.array.length ; i++) {
                this.array[i].innerHTML = this.array[i].innerHTML + arg;
            }
        }
        return;
    }

    attr(attribute) {
        return this.array[0].getAttribute(attribute);
    }

    addClass(className) {
        this.array.forEach( e => {
            e.setAttribute('class', className);
        })
    }

    removeClass() {
        this.array.forEach( e => {
            e.removeAttribute('class');
        })
    }

    children() {
        let children = [];
        this.array.forEach( e=> {
            children.push(...e.children);
        })

        return new DOMNodeCollection(children)

    }

    parent() {
        let parent = [];
        this.array.forEach( e=> {
            if(!parent.includes(e.parentElement)) {
                parent.push(e.parentElement);
            }
        })

        return new DOMNodeCollection(parent);
    }

    find(argument) {
        let query = document.querySelectorAll(argument);
        let arr = [];
        query.forEach(e=> {
            if (this.array.includes(e.parentNode)) {
                arr.push(e);
            }
        })
        return new DOMNodeCollection(arr);
    }

    remove() {
        this.array.forEach( e => {
            e.parentNode.removeChild(e);
        })
    }

    on(type, callback) {
        this.callback = callback;
        this.array[0].addEventListener(type, callback);
    }

    off(type) {
        this.array[0].removeEventListener(type, this.callback);
    }

    extend(...args) {
        Object.assign(args[0], ...args.slice(1));
    }

    ajax() {
        
    }
}


module.exports = DOMNodeCollection;