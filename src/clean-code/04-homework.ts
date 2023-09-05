(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        // first solution
        // return fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela';

        // fernando solution
        const nameOfRedFruits: string[] = ['manzana', 'cereza', 'ciruela'];
        return nameOfRedFruits.includes(fruit)
    }  
            
    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    type FruitColor = 'red'|'yellow'|'purple';
    function getFruitsByColor(color: string): string[] {
        // fernando solution
        const fruitByColor:any = {
            red:    ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
        };
        if (!Object.keys(fruitByColor).includes(color)) {
            throw Error (`The color must be: ${Object.keys(fruitByColor)}`)
        } 

        return fruitByColor[color];

        // first solution
        // if ( color === 'red' )    return  ['manzana', 'fresa'];
        // if ( color === 'yellow' ) return  ['piña', 'banana'];
        // if ( color === 'purple' ) return  ['moras', 'uvas']
        // throw Error('the color musb be: red, yellow, purple');
        
        // second solution
        // switch (color) {
        //     case 'red':
        //         return ['manzana', 'fresa'];

        //     case 'yellow':
        //         return ['piña', 'banana'];

        //     case 'purple':
        //         return ['moras', 'uvas'];
        //     default:
        //         throw Error('the color musb be: red, yellow, purple');
        // }
        
        //thrid solution hash
        // const FRUIT_OPTIONS: any = {
        //     red:    ['manzana', 'fresa'],
        //     yellow: ['piña', 'banana'],
        //     purple: ['moras', 'uvas']
        // };
        // const ERROR = Error('the color musb be: red, yellow, purple');
        // return FRUIT_OPTIONS[color] || ERROR
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        if ( !isFirstStepWorking  )  return 'First step broken';
        if ( !isSecondStepWorking )  return 'Second step broken';
        if ( !isThirdStepWorking  )  return 'Third step broken';
        if ( !isFourthStepWorking )  return 'Four step broken';

        return 'Working Properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();

