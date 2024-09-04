# 实现 async/await

> 实现过程主要是借助了 generator 函数和 promise 的 resolve 和 reject

## 回顾 generator 函数

定义： 使用`function*` 进行定义
调用： 使用`yield` 关键字
获得结果： 使用`next()` 函数
传参： 使用`next(value)` 函数

```js
    fucntion* test() {
        yield 1;
        yield 2;
        yield 3;
        return 4;
    }
    const testGenerator = test();
    console.log(testGenerator.next()); // {value: 1, done: false}
    console.log(testGenerator.next()); // {value: 2, done: false}
    console.log(testGenerator.next()); // {value: 3, done: false}
    console.log(testGenerator.next()); // {value: 4, done: true}
    console.log(testGenerator.next()); // {value: undefined, done: true}
```

## 封装 async/ await

```js
function generatorToAsync(generatorFunc) {
  return function () {
    const gen = generatorFunc.apply(this, arguments);
    return new Promise((resolve, reject) => {
      // 实现一个step函数
      function step(key, arg) {
        let res;
        try {
          res = gen[key](arg);
        } catch (error) {
          return reject(error);
        }
        const { value, done } = res;
        if (done) {
          return resolve(value);
        } else {
          return Promise.resolve(value).then(
            (val) => step("next", val),
            (err) => step("throw", err)
          );
        }
      }
      step("next");
    });
  };
}
```
