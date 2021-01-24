{
    /**
     * Type Aliases
     */
    type Text = string;
    const name: Text = 'ahn';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'ahn',
        age: 12,
    };

    /**
     * String Literal Types
     */
    type Name = 'name';
    let ahnName: Name;
    ahnName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';

    type Boal = true;
    const boal: Boal = true;
}
