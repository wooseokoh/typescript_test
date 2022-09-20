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

assign하는 값을 통해 타입을 유추하여 결정하는것이 타입추론입니다.<br/>
변수의 선언과 값의 대입을 다른 코드 라인에서 진행하면 해당 변수는 any 타입의 변수가 됩니다.<br/>

## 가변인자 지원 X

TypeScript는 가변인자를 지원하지 않는다.<br/>
오버로딩을 통해 가변인자와 같은 효과를 구현할수 있음<br/>

```
function add(firstParam: string, secondParam: string): string;
function add(firstParam: number, secondParam: number): number;

function add(firstParam: any, secondParam: any): any {
console.log(firstParam + secondParam);
}

add(1, 2);
add('1', '2');
```

## Typed Array와 Tuples

Array
타입의 명시적 지정과 초기화를 통한 타입지정이 가능.<br/>
지정하지 않을 시 any 타입의 변수로 지정.<br/>
배열에는 순서에 상관없이 지정된 타입들의 요소를 저장 가능.<br/>

Tuples
배열의 요소 수와 각 요소에 대한 타입을 지정.<br/>
push() 함수 사용시 튜플의 규칙은 무시됨.<br/>
저장되는 요소에 순서와 수에 제약을 두고자 할떄 사용.<br/>

## Union Type과 Type Guard

Union Type<br/>

타입 선언에 하나 이상의 타입을 지정하고 해당 타입 중에 하나일 수 있음을 나타냄. 파이프라인사용(|)<br/>
맴버 사용은 정의된 모든 타입의 공통적인 멤버들만 사용 가능.<br/>
ex)<br/>
print(A: B|C){<br/>
...<br/>
}<br/>

B 타입 C 타입<br/>
age name<br/>
eat() eat()<br/>
run() run()<br/>

위에 메소드에서 A타입은 eat(), run()만 사용가능<br/>

Type Guard<br/>

특정 영역 안에서 해당 변수의 타입을 한정시켜주는 기능.<br/>
Type Guard는 사용자가 정의하거나 number, string, boolean, Symbol의 경우 typeof 연산자 사용.<br/>
ex)

```
let collection : number[] | string;

if(typeof collection === 'string'){
  collection.split('');
}
```

## Interface

클래스는 implements 키워드를 통해 인터페이스를 구현.<br/>
인터페이스에서 정의한 프로퍼티나 메서드를 갖고 있는 클래스는 해당 인터페이스를 구현한 것으로 인정하며 duck typing이라고 함.
