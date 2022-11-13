
const health = require("health");
// const changer = require("teamChanger");
const logicButton = require("logicButton");
const rangedraw = require("rangedraw");
const customSchematic = require("customSchematic");

customSchematic.apply()


if (!Vars.headless) { //Now this is what I call inefficient hell.
    let initialized = false;



    let change = new Table().bottom().left();
    Events.on(ClientLoadEvent, () => {
        //changer.add(change);
        Vars.ui.hudGroup.addChild(change);

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

        Events.on(WorldLoadEvent, () => {
            if (!initialized) {
                

                // Vars.ui.hudGroup.find(boolf(e=>{return e instanceof CoreItemsDisplay})))
                let m = Vars.mobile;
                // Vars.ui.logic.find(boolf(e=>{return e.name == 'overlaymarker'})
                // Vars.ui.logic.children.get(5)
                let healthUI = Vars.ui.hudGroup.find(boolf(e=>{return e.name == 'overlaymarker'})).children.get(0).children.get(0)
                if(healthUI) {
                    healthUI.row();
                    healthUI.add(health.health()).size(300, 20).color(Pal.health).pad(0).left().padLeft(0);
                    healthUI.row();
                    healthUI.add(health.shield()).size(300, 20).color(Pal.accent).pad(0).left().padLeft(0);
                }
                initialized = true;
            }
        });
    });

    // Vars.control.input.frag

    // let hover = Vars.ui.hudfrag.blockfrag.hover()
    // Vars.control.input.frag.inv.showFor(hover);



    // draw
    Events.run(Trigger.draw, () => {
        rangedraw.draw();
    });
}






