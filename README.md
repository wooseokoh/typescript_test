# Typescript 공부

Typescript로 작석된 코드는 tsc를 통해 Javascript로 변환 후 실행됩니다.


### Javascript
```
function add(p1, p2) {
  return p1 + p2;
}
console.log(add('1', '2')); // 12
```

### Typescript
```
function add(p1: number, p2: number): number {
  return p1 + p2;
}
console.log(add('1', '2')); // compile error
```

## 정적타입 지정

변수를 정의하면서 타입을 함꼐 지정하면 해당 타입의 데이터만 대입 가능하며 다른값을 대입하면 컴파일시 에러가 발생합니다.

## Type 추론

assign하는 값을 통해 타입을 유추하여 결정하는것이 타입추론입니다.
변수의 선언과 값의 대입을 다른 코드 라인에서 진행하면 해당 변수는 any 타입의 변수가 됩니다.
