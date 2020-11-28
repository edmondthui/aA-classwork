import DOMNodeCollection from "./dom_node_collection.js";

// let collection = new DomNodeCollection([]);

window.$l = function(selector) {
    let arr = [];
    let collection;
    if (selector instanceof Function) {
        let functionArr = [];
        functionArr.push(selector);
        window.addEventListener('DOMContentLoaded', function() {
            while(functionArr.length) {
                functionArr.shift()();
            }
        })

    }
    if (selector instanceof HTMLElement) {
        collection = new DOMNodeCollection([selector]);
    }
    if (typeof selector === "string"){
        let nodelist = document.querySelectorAll(selector);
        arr = [...nodelist];
        collection = new DOMNodeCollection(arr);
    }
    return collection;
}

function fullyLoaded() {
    console.log("fully loaded");
}

window.$l(fullyLoaded);

// window.foo = function() {
//     sideEffect();
//     return true;
// }
// window.bar = function() {
//     sideEffect();
// }