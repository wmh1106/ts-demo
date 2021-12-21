class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // TS中设置getter方法的方式
    get name() {
        // console.log('get name()执行了！！');
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0) {
            this._age = value
        }
    }
}

const per = new Person('孙悟空', 18);
per.name = '猪八戒';
per.age = -33; // 小于0，没用
console.log(per);