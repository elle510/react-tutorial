{
    /**
     * Enum
     */
    // JavaScript
    const MAX_NUM = 0;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
    const dayOfToday = DAYS_ENUM.MONDAY;

    // Enum 사용 권장하지 않음(타입을 정확하게 보장하지 않음)
    // TypeScript
    // enum 으로 사용할 타입들은 거의 대부분 type으로 가능하다.
    // enum 말고 type을 사용하여 타입을 정확하게 보장하자.
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    enum Days {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }

    // 값을 할당 할 수 있음
    // 값을 할당 할 경우는 해당 타입으로만 변수에 할당이 되는 거 같음.
    // enum Days {
    //     Monday = 'mon',
    //     Tuesday = 'tue',
    //     Wednesday = 'wed',
    //     Thursday = 'thu',
    //     Friday = 'fri',
    //     Saturday = 'sat',
    //     Sunday = 'sun',
    // }

    console.log(Days.Monday); // print 0 (값을 지정하지 않으면 0 부터 순차적으로 값이 할당됨)
    let day: Days = Days.Saturday;
    day = Days.Tuesday;
    day = 10; // Days 값에 벗어난 값도 할당이 가능함(타입을 보장하지 않음)
    // day = 'sun' // 문자열로 할당한 Days 타입으로 할 경우 할당 안됨
    console.log(day);
}
