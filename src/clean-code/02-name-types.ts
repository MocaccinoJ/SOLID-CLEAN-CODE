(() => {

    const celsiusTemperature = [33.6, 12.34];

    const ipServer = '123.123.123.123';

    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const mailsUsers = users.map( user => user.email );

    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    const realTimeInit = new Date().getTime();
    //....
    // 3 doritos después
    //...
    const realTimeEnd = new Date().getTime() - realTimeInit;


    function getBooks() {
        throw new Error('Function not implemented.');
    };

    function getBooksFromUrl( url: string) {
        throw new Error('Function not implemented.');
    };
    
    function getSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    };

    function printJob() {
        throw new Error('Function not implemented.');
    };

})();