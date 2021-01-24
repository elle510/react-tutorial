{
    /**
     * Type Assertions
     */
    // 자바스크립트에서 무슨 타입이 리턴 되는지 확실히 아는 경우에만 사용
    function jsStrFunc() {
        return 'hello';
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // error 발생

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers()!; // !의 뜻은 반드시 number[] 를 리턴한다. undefined 는 될수 없어
    numbers.push(2);
    // numbers!.push(2);

    // querySelector는 Dom요소 또는 null을 리턴하는데
    // 반드시 Dom요소 리턴한다고 장담한다면 ! 사용
    const button = document.querySelector('class')!;
    // const button = document.querySelector('class');
    // if (button) {
    //     button.nodeValue;
    // }
}
