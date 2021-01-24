{
    // Javascript
    // old: var
    var age = 5;
    age = 1;

    // let es6
    let name = 'hello';
    name = 'hi';

    // const

    let name1: string = 'hello';

    // undefined
    let age1: number | undefined;
    age1 = undefined;
    age1 = 1;
    function find(): number | undefined {
        return undefined;
    }

    // null
    let person: string | null;

    // unknown (가능한 안쓰길 권장)
    // javascript 와의 호환을 위해 존재(javascript 라이브러리를 사용하는데 리턴 타입을 알수 없는 경우)
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hello');
        // return; 이 생략되어 있는 것임
    }

    // naver (리턴하지 않겠다는 의미 - 예외를 던지거나 무한루프)
    function throwError(message: string): never {
        // message -> server(log)
        throw new Error(message);

        // naver 리턴의 의미는 예외를 던지거나 무한루프
        // while (true) {}
    }

    // object (원시타입이 아닌 모든 타입) - 쓰지 않는 것이 좋다
    let obj: object;
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({ name: 'ellie' });
    acceptSomeObject({ animal: 'dog' });
    acceptSomeObject([1, 2, 3]);
}
