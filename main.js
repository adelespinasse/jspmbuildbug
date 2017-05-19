import mod from 'm/mod.js';

console.log('main.js loaded');

// This works either way.
console.log('calling (mod.default || mod)()');
(mod.default || mod)();

// This only works when bundled.
console.log('Calling mod.default()');
mod.default();

// This only works when not bundled.
console.log('Calling mod()');
mod();
