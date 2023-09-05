(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';

   
    class HtmlElement {

        constructor(
            public id  : string,
            public type: HtmlType
        ) { }
    }

    class InputAttributes {
        constructor(
            public placeholder: string,
            public value      : string,
        ) { }
    }

    class InputEvents {
        constructor( ) { }

        getValue() {};
        isActive() {};
        removeValue() {};
        setFocus() {};
    }


    //? Idea para la nueva clase InputElement

    class InputElement {
        
        public htmlElement     : HtmlElement;
        public inputAtributtes : InputAttributes;
        public inputEvents     : InputEvents;

        constructor(value: string, placeholder: string, id: string) { 
            this.htmlElement     = new HtmlElement(id, 'input');
            this.inputAtributtes = new InputAttributes(placeholder, value);
            this.inputEvents     = new InputEvents();
        }
    }

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');


    console.log({ nameField });

})()