
interface Bird {

    eat(): void;
    walk(): void;
    
}

interface FlyingBird {
    
    fly(): number;

}

interface RunningBird {
    
    run(): void;

}

interface SwimmergBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird { 

    public fly() {
        return 200
    };
    public walk() { };
    public eat() { };

}

class Humminbird implements Bird, FlyingBird {

    public fly() {
        return 200
    };
    public walk() { };
    public eat() { };

}

class Ostrich implements Bird, RunningBird {

    public eat() { };
    public run() { };
    public walk() { };


}

class Penguin implements Bird, SwimmergBird {

    public eat() { };
    public swim() { };
    public walk() { };

}