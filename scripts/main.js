// Here's a lot of code from https://github.com/Xeloboyo/PvP-Notifs

// const changer = require("teamChanger");
const logicButton = require("logicButton");
const rangeDraw = require("rangeDraw");
const customSchematic = require("customSchematic");
const healthBar = require("healthBar");



if (!Vars.headless) {
    customSchematic.apply();
    rangeDraw.apply();
    healthBar.apply();

    Events.on(ClientLoadEvent, () => {
        
        Vars.renderer.minZoom = 0.5;
        Vars.renderer.maxZoom = 20;
        Vars.experimental = true;
        
        

        Vars.ui.logic.shown(() => {
            logicButton.addbutton();
            Vars.ui.logic.children.get(1).children.get(3).released(() => {
                logicButton.addbutton();
            });
        });

        Vars.ui.logic.released(() => {
            logicButton.addbutton();
        });

    });
}






