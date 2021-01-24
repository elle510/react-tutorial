{
    /**
     * Intersection Types: &
     */
    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        empolyeeId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker) {
        console.log(person.name, person.empolyeeId, person.work());
    }

    // 함수 호출시 Student 타입과 Worker타입을 합쳐서 전달
    internWork({
        name: 'ahn',
        score: 1,
        empolyeeId: 123,
        work: () => {},
    });
}
