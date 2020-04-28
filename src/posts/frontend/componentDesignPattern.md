---
title: Stateful vs Stateless Component
path: frontend/stateful-stateless-component
date: 2020-04-27 00:00:00
tag: react, vue, component
---
## <div style="color: #fa4659">들어가기전</div>

> 최근 프론트 프레임워크를 사용하게 되면 보게되는것이 바로 **Component**이다. 

> **Component**란 'UI를 독립적으로 재사용 가능한 단위' 라고 하는데

> 처음 프레임워크(Vue, React, ...)를 사용하게되면

> 대부분 클래스 타입의 컴포넌트를 사용하게되는데 깊게 들어가다보면 Performance에 신경을 쓰게된다. 

> (왜냐 SPA쓴다면 역시나 랜더링 포퍼먼스에 신경쓰일수 밖에...) 

> 그러다 보면 stateful vs stateless에 도달하게 된다. 이번 기회에 두 컴포넌트 방식에 대해 정리하고자 한다.

> TMI : 사실 밑에 있는 vs는 같은 의미를 지닌다.

>> - `stateful vs stateless`
>> - `container vs presentation`
>> - `controller vs view`
>> - `data vs display`

## <div style="color: #fa4659"> 본론으로

>기본적으로 Component가 5가지를 가지고있다.

>> - render
>> - state
>> - props
>> - context
>> - lifecycle events

> ### **Stateful Component**

>> `render`,  `state`**,**  `lifecycle events`를 사용하게된다.

>> **state** 들고 있으며 Lifecycle event(create, mount, update 등)를 컨트롤 할 수 있다.

>> 보통은 Class타입으로 정의가 되어 자신의  **state**가 변경이 될 경우 re-render이 이루어진다.

>> 이 값이 child에게 props의 형태로 전달되기도 한다.

>> <div style="color: orange; font-weight: bold;"> 사용하는 경우

>>> 1. 페이지가 유저의 반응에 따라 다른 경우
>>>> (유저가 입력을 하여 상태가 변경되어 re-render이 필요한 경우 등)

>>> 2. 랜더링이 state의존적일 경우
>>>> (랜더링 전에 data fetch가 필요한 경우 등)

>>> 3. Lifecycle에 대한 훅 또는 트리거가 필요한 경우
>>>> (각 이벤트에 save, fetch, record, computed 등을 할 경우 등)

>> <div style="color: orange; font-weight: bold;">적용

>>> `vuejs` 의 경우 보편적으로 Single File Components와 Vue.component

>>> `react` 의 경우 React.component

> ### **Stateless Component**

>> `render`,  `props`**,**  `context` ****를 사용하게된다.

>> props를 받아 표시하게 된다. event에 대한 처리가 없음으로 포퍼먼스면에서 우수하다. 

>>> (Vue 혹은 React 버전이 올라갈 수록 stateless쪽이 stateful보다 랜더링 속도가 더욱 빨라지는 것 같다.)

>> <div style="color: orange; font-weight: bold;"> 사용하는 경우

>>> 1. 페이지가 유저의 반응에 따라 변경이 필요 없는 경우
>>>> (stateful의 반대로 입력에 따라 re-render이 필요 없는 경우)

>>> 2.  단순히 props를 표시하는 경우
>>>> presentation역할만 할 경우

>>> 3. state 혹은 내부 변수가 필요 없는 경우
>>>> 딱히 지속적으로 변수를 연산하고 상태를 봐야할 필요가 없는 경우

>> <div style="color: orange; font-weight: bold;"> 적용

>>> `vuejs`의 경우에는 여러가지 선언 방법이 있다.(Render functions, X-template 등)

>>>> [7 Ways to Define a Component Template in Vue.js](https://vuejsdevelopers.com/2017/03/24/vue-js-component-templates) <= 참고 사이트

>>> `react` 의 경우에는 FC(Functional Component) 

> ---
> 여담으로 react에서는 stateless를 나름 권장(?) 해왔었다.

> 그러나 v 16.8 기준으로 hook(useState, useEffect 등)이 등장하여 

> Stateless Component와 Functional Component 개념이 달라졌음)

## <div style="color: #fa4659">결론

> 랜더링이 state에 대한 의존이 있다면 stateful

> 랜더링이 state에 대한 의존이 없다면 stateless

> 이 정도의 개념만 잡고 사용하고있는 프레임워크에 대한 사용법과 철학을 공부하자
