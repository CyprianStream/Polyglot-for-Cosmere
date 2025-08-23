Hooks.once("polyglot.init", (LanguageProvider) => {
    class CosmereLanguageProvider extends LanguageProvider {
        languages = {
            alethi: {
                label: "Alethi",
                id: "alethi",
                font: "womensscript",
            },
            azish: {
                label: "Azish",
                id: "azish",
                font: ""
            },
            dawnchant: {
                label: "Dawnchant",
                id: "dawnchant",
                font: "Floki",
            },
            herdazian: {
                label: "Herdazian",
                id: "herdazian",
                font: "",
            },
            iriali: {
                label: "Iriali",
                id: "iriali",
                font: "",
            },
            kharbranthian: {
                label: "Kharbranthian",
                id: "kharbranthian",
                font: "womensscript",
            },
            listener: {
                label: "Listener",
                id: "listener",
                font: "",
            },
            natan:{
                label: "Natan",
                id: "natan",
                font: "",
            },
            shin: {
                label: "Shin",
                id: "shin",
                font: "",
            },
            thaylen: {
                label: "Thaylen",
                id: "thaylen",
                font: "Thaylen-Script",
            },
            unkalaki: {
                label: "Unkalaki",
                id: "unkalaki",
                font: "",
            },
            veden: {
                label: "Veden",
                id: "veden",
                font: "womensscript",
            }
        }

        

        getUserLanguages(actor) {
            let known_languages = new Set();
            let literate_languages = new Set();
            // announces name of actor that we are grabbing languages for
            console.log("POLYGLOT Grabbing user languages for character:" + actor.name)
            // iterates over expertises of each actor and checks if any expertise matches the id property of any languages listed in the object above
            for (let item of actor.system.expertises) {
                if (Object.hasOwn(this.languages, item.id)){
                    //adds matching languages to known and literate languages
                    //TODO add support for speaking a language but know reading the language
                    known_languages.add(item.id)
                    literate_languages.add(item.id)
                };
            };
            return [known_languages, literate_languages];
        }
    }
    game.polyglot.api.registerModule("cosmere-polyglot", CosmereLanguageProvider);
})