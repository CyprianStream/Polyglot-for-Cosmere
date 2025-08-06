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

        async getLanguages() {
		const langs = {};
		if (this.replaceLanguages) {
			CONFIG.FICTIONAL.spoken = {};
		}
		const languagesSetting = game.settings.get("polyglot", "Languages");
		for (let lang in CONFIG.FICTIONAL.spoken) {
			langs[lang] = {
				label: CONFIG.FICTIONAL.spoken[lang],
				font: languagesSetting[lang]?.font || this.languages[lang]?.font || this.defaultFont,
				rng: languagesSetting[lang]?.rng ?? "default",
			};
		}
		this.languages = langs;
	}

        getUserLanguages(actor) {
            let known_languages = new Set();
            let literate_languages = new Set();
            for (let lang of actor.system.expertises) {
                languageKey = Object.values(this.languages).find(item => typeof item.label === "lang" && lang.includes(item.label))
                if (languageKey){
                    known_languages.add(languageKey)
                    literate_languages.add(languageKey)
                };
                return [known_languages, literate_languages];
            }
        }
    }
    game.polyglot.api.registerModule("cosmere-polyglot", CosmereLanguageProvider);
})