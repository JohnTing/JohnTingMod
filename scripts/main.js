
const health = require("health");
const changer = require("teamChanger");
const logicButton = require("logicButton");


if (!Vars.headless) { //Now this is what I call inefficient hell.
    let initialized = false;

    let change = new Table().top().left();

    Events.on(ClientLoadEvent, () => {
        changer.add(change);
        Vars.ui.hudGroup.addChild(change);

        Vars.renderer.minZoom = 0.5;
        Vars.renderer.maxZoom = 20;
        Vars.experimental = true;
        Vars.enableConsole = true;

        Vars.ui.logic.shown(() => {
            logicButton.addbutton();
        });
        

        Events.on(WorldLoadEvent, () => {
            if (!initialized) {
                let m = Vars.mobile;
                // let healthUI = Vars.ui.hudGroup.children.get(5).children.get(m ? 2 : 0).children.get(0).children.get(0).children.get(0);
                let healthUI = Vars.ui.hudGroup.children.get(5).children.get(m ? 2 : 0).children.get(0).children.get(0);
                healthUI.row();
                healthUI.add(health.health()).size(300, 20).color(Pal.health).pad(0).left().padLeft(0);
                healthUI.row();
                healthUI.add(health.shield()).size(300, 20).color(Pal.accent).pad(0).left().padLeft(0);
                initialized = true;


                if (!m) {
                    let minimapUI = Vars.ui.hudGroup.children.get(2);
                    /*
                    Vars.ui.hudGroup.children.get(2).children.get(0).children.get(0).setSize(Scl.scl(280));
                    Vars.ui.hudGroup.children.get(2).children.get(0).setSize(Scl.scl(280));
                    
                    Vars.ui.hudGroup.children.get(2).children.get(0).setPosition(20, 20);

                    Vars.ui.hudGroup.children.get(2).setSize(Scl.scl(280));
                    Vars.ui.hudGroup.children.get(2).top().right();*/

                    minimapUI.row();
                    minimapUI.label(()=> { return "(" + Math.round(Core.input.mouseWorldX()/8) + "," + Math.round(Core.input.mouseWorldY()/8) + ")"; });
                    // ;
                }
                


            }
        });
    });
}






