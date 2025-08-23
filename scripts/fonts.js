Hooks.once(ready, (installFonts) => {

    const womansscript = {
        family: "womansscript",
        weight: 100,
        //style: "regular",
        src: ".\fonts\womensscript.ttf",
        preview: "Womans Script",
    }
    const thaylenScript = {
        family: "Thaylen-Script",
        weight: 100,
        //style: "",
        src: ".\fonts\Thaylen-Script.ttf",
        preview: "Thaylen Script"
    }

    new FontConfig(womansscript)
    new FontConfig(thaylenScript)
})