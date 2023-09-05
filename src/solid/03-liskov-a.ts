import { Tesla, Audi, Toyota, Honda, Vehicle, Volvo, Ford } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: Vehicle[] ) => {

        cars.forEach(car => {
            console.log( car.constructor.name, car.getNumberofSeats() )
        })
        
        // for (const car of cars) {
         
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberofSeats() );
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberofSeats() );
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberofSeats() );
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberofSeats() );
        //         continue;
        //     }
        //     if (car instanceof Volvo) {
        //         console.log('Volvo', car.getNumberofSeats() );
        //     }
        //     if (car instanceof Ford) {
        //         console.log('Ford', car.getNumberofSeats() );
        //     }

        // }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(2),
        new Ford(5),
    ];


    printCarSeats( cars );

})();