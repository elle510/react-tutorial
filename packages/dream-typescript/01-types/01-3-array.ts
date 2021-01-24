{
    // Array
    const fruits: string[] = ['토마토', '바나나', '🍅', '🍌'];
    const scores: Array<number> = [1, 3, 4];

    // readonly 를 사용할 경우 Array<string> 형태로는 못쓴다.
    // 일관성을 위해 string[] 형태로 쓰자.
    function printArray(fruits: readonly string[]) {}

    // Tuple 사용 권장하지 않음 (아래와 같이 대체해서 쓰는 것이 좋다.)
    // Tuple -> interface, type alias, class
    let student: [string, number];
    student = ['name', 123];
    student[0]; // name
    student[1]; // 123

    // 이렇게 변수로 받을 수 있지만 그래도 사용하는 곳에서 정의해 줘야 하는 단점
    // tuple을 잘 사용한 예는 React Hooks의 useState() 임
    // ※(어떠한 값이 들어올지 알수 없으면서 동적으로 리턴하고 사용하는 쪽에서 이름을 정의해서 사용해야 하는 경우에 유용함)
    const [name, age] = student;
}
