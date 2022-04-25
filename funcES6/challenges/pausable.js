const firstPausableFunc = function * () {
    const one = yield 1;
    const two = yield 2;
    return "Finished!";
};

const gen = firstPausableFunc();

console.log(gen.next());

console.log(gen.next());

console.log(gen.next());
