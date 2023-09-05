(() => {

    // Single Responsibility Principle (SRP) - not apply
    // "To prioritize composition over inheritance"

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate: Date;
        gender   : Gender;
        name     : string;
    }

    class Person {
        
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor ( { name, gender, birthdate }: PersonProps  ) {
            this.birthdate = birthdate;
            this.gender    = gender;
            this.name      = name;
        }
    };

    interface UserProps {
        email    : string;
        role     : string;
    }

    class User  {

        public email     : string;
        public lastAccess: Date;
        public role      : string;
        
        constructor(
            {
                email,
                role
            }: UserProps
        ) {
            this.email = email;
            this.role = role; 
            this.lastAccess = new Date();
        }
        
        checkCredentials() {
            return true;
        }

    }

    interface SettingsProps {
        lastOpenFolder   : string,
        workingDirectory : string,
    };

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder  : string; 
        constructor(
            { 
                workingDirectory,
                lastOpenFolder,
            }: SettingsProps
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    };

    interface UserSettingsProps {
        birthdate        : Date,
        email            : string,
        gender           : Gender,
        lastOpenFolder   : string,
        name             : string,
        role             : string,
        workingDirectory : string,
    };

    class UserSettings {
        public person  : Person;
        public settings: Settings;
        public user    : User;

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory,

        }: UserSettingsProps) { 
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }

    }

    const userSettings = new UserSettings(
        {
            workingDirectory: '/usr/home',
            lastOpenFolder: 'home',
            email: 'fernando@google.com',
            role: 'Admin',
            name: 'Fernando',
            gender:'M',
            birthdate: new Date('1985-10-21')
        }
    );

    

    console.log({ userSettings });


})();