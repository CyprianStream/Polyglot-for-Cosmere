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
            console.log("POLYGLOT Grabbing user languages for character:" + actor.name)
            //console.log(actor.name)
            for (let lang of actor.system.expertises) {
                //console.log(lang)
                //console.log(lang.label)
                //console.log(this.languages[lang.label].label)
                if (this.languages[lang.label].label === lang.label){
                    //console.log("Adding language " + lang.label)
                    known_languages.add(lang.label)
                    literate_languages.add(lang.label)
                };
            }
            console.log(known_languages)
            //console.log(literate_languages)
            return [known_languages, literate_languages];
        }
    }
    game.polyglot.api.registerModule("cosmere-polyglot", CosmereLanguageProvider);
})