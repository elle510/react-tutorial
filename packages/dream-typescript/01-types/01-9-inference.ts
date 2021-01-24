{
    /**
     * Type Inference (타입추론) - 권장하지 않음
     */
    // 타입을 지정하지 않아도 값이 명확하면 자동으로 타입이 추론된다.
    let text = 'hello';
    // text = 1;
    function print(message = 'hello') {
        console.log(message);
    }
    print('hello');

    function add(x: number, y: number) {
        return x + y;
    }
    const result = add(1, 2);
}
