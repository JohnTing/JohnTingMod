
const health = require("health");
const changer = require("teamChanger");
const logicButton = require("logicButton");
const mydraw = require("mydraw");

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

                if (!m) {
                    let minimapUI = Vars.ui.hudGroup.children.get(m ? 4 : 2);
                    minimapUI.row();
                    minimapUI.label(() => { return "(" + Math.round(Core.input.mouseWorldX() / 8) + "," + Math.round(Core.input.mouseWorldY() / 8) + ")"; });
                    // ;
                }




                
                // Vars.ui.hudfrag.blockf
                //ag.topTable
                // Vars.ui.hudGroup.children.get(9).children.get(0).children.get(0)

                for (let i = 0; i < Vars.content.blocks().size; i++) {
                    let block = Vars.content.blocks().get(i);
                    // block.bars.remove("health");
                    /*
                    block.bars.add("health", entity => new Bar(
                        () => (Core.bundle.format("stat.health") + ": " + 
                        UI.formatBar(entity.health() * state.rules.blockHealthMultiplier) + "/" + 
                        UI.formatBar(entity.maxHealth() * state.rules.blockHealthMultiplier)),
                    () => Pal.health,
                    () => 0.5));*/
                    block.bars.add("health", e => new Bar(
                        () => { return Core.bundle.format("stat.health") + ": " + Math.round(e.health) + "/" + e.maxHealth; },
                        () => { return Pal.health; },
                        () => { return e.healthf(); }
                    ));
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
        mydraw.draw();
    });
}





