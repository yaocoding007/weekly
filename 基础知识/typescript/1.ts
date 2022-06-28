const passcode = 'Hello TS';

class Bar {
    private _foo: string;

    static staticFoo: string = 'staticFoo';

    static get staticBar(): string {
        return Bar.staticFoo
    }

    get foo(): string {
        return this._foo
    }

    set foo(newFoo: string) {
        if(passcode && passcode === 'Hello TS') {
            this._foo = newFoo
        }else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Bar();
employee.foo = 'Hello TS';

Bar.staticBar