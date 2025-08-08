console.log("Hello world")

Hooks.once("polyglot.init", (LanguageProvider) => {
    class CosmereLanguageProvider extends LanguageProvider {
        languages = {
            Alethi: {
                label: "Alethi",
                font: "womensscript",
            },
            Azish: {
                label: "Azish",
                font: ""
            },
            Dawnchant: {
                label: "Dawnchant",
                font: "Floki",
            },
            Herdazian: {
                label: "Herdazian",
                font: "",
            },
            Iriali: {
                label: "Iriali",
                font: "",
            },
            Kharbranthian: {
                label: "Kharbranthian",
                font: "womensscript",
            },
            Listener: {
                label: "Listener",
                font: "",
            },
            Natan:{
                label: "Natan",
                font: "",
            },
            Shin: {
                label: "Shin",
                font: "",
            },
            Thaylen: {
                label: "Thaylen",
                font: "Thaylen-Script",
            },
            Unkalaki: {
                label: "Unkalaki",
                font: "",
            },
            Veden: {
                label: "Veden",
                font: "womensscript",
            }
        }

        getUserLanguages(actor) {
            let known_languages = new Set();
            let literate_languages = new Set();
            console.log("POLYGLOT Grabbing user languages...")
            for (let lang of actor.system.expertises) {
                console.log(lang)
                if (this.languages[lang.label.toString()].label === lang.label.toString()){
                    known_languages.add(lang.label)
                    literate_languages.add(lang.label)
                    console.log(lang.label)
                };
                return [known_languages, literate_languages];
            }
        }
    }
    game.polyglot.api.registerModule("cosmere-polyglot", CosmereLanguageProvider);
})