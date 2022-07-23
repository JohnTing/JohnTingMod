
const health = require("health");
// const changer = require("teamChanger");
const logicButton = require("logicButton");
const mydraw = require("mydraw");

if (!Vars.headless) { //Now this is what I call inefficient hell.
    let initialized = false;

    let change = new Table().bottom().left();
    Events.on(ClientLoadEvent, () => {
        //changer.add(change);
        Vars.ui.hudGroup.addChild(change);

        Vars.renderer.minZoom = 0.5;
        Vars.renderer.maxZoom = 20;
        Vars.experimental = true;

        /*
        Vars.ui.logic.canvas.shown(() => {
            logicButton.addbutton();
        });
*/
/*
        Vars.ui.logic.canvas.changed(() => {
            logicButton.addbutton();
        });
        Vars.ui.logic.canvas.hovered(() => {
            logicButton.addbutton();
        });
        Vars.ui.logic.canvas.exited(() => {
            logicButton.addbutton();
        });
        Vars.ui.logic.canvas.released(() => {
            logicButton.addbutton();
        });
*/
        Vars.ui.logic.shown(() => {
            Vars.ui.consolefrag.addMessage('fuck1');
            logicButton.addbutton();

            Vars.ui.logic.children.get(1).children.get(3).released(() => {
                Vars.ui.consolefrag.addMessage('fuck7');
                logicButton.addbutton();
            });
        });
        /*
        Vars.ui.logic.changed(() => {
            Vars.ui.consolefrag.addMessage('fuck2');
            logicButton.addbutton();
        });*/
        /*
        Vars.ui.logic.hovered(() => {
            Vars.ui.consolefrag.addMessage('fuck3');
            logicButton.addbutton();
        });*/
        /*
        Vars.ui.logic.exited(() => {
            Vars.ui.consolefrag.addMessage('fuck4');
            logicButton.addbutton();
        });*/
        
        Vars.ui.logic.released(() => {
            Vars.ui.consolefrag.addMessage('fuck5');
            logicButton.addbutton();
        });
        /*
        Vars.ui.logic.released(() => {
            Vars.ui.consolefrag.addMessage('fuck6');
            logicButton.addbutton();
        });*/

        /*
        Vars.ui.logic.canvas.update(() => {
            Vars.ui.consolefrag.addMessage('fuck');
            logicButton.addbutton();
        });*/
        


        Events.on(WorldLoadEvent, () => {
            if (!initialized) {
                // Vars.ui.hudGroup.find(boolf(e=>{return e instanceof CoreItemsDisplay})))
                let m = Vars.mobile;
                // Vars.ui.logic.find(boolf(e=>{return e.name == 'overlaymarker'})
                // Vars.ui.logic.children.get(5)
                let healthUI = Vars.ui.hudGroup.find(boolf(e=>{return e.name == 'overlaymarker'})).children.get(0).children.get(0)
                healthUI.row();
                healthUI.add(health.health()).size(300, 20).color(Pal.health).pad(0).left().padLeft(0);
                healthUI.row();
                healthUI.add(health.shield()).size(300, 20).color(Pal.accent).pad(0).left().padLeft(0);

                /*
                let minimapUI = Vars.ui.hudGroup.find(boolf(e=>{return e.name == 'minimap/position'}))
                minimapUI.row();
                minimapUI.label(() => { return "(" + Math.round(Core.input.mouseWorldX() / 8) + "," + Math.round(Core.input.mouseWorldY() / 8) + ")"; })
                .visible(() => Core.settings.getBool("position") || Core.settings.getBool("mouseposition"))
                .touchable(Touchable.disabled)
                .style(Styles.outlineLabel);
                */

                /*
                
                // Vars.ui.hudGroup.children.get(5).children.get(0).children.get(0).children.get(0)
                //let healthUI = Vars.ui.hudGroup.children.get(5).children.get(m ? 2 : 0).children.get(0).children.get(0);

                let healthUI = Vars.ui.hudGroup.find(boolf(e=>{return e.name == 'overlaymarker'})).children.get(0).children.get(0)
                healthUI.row();
                healthUI.add(health.health()).size(300, 20).color(Pal.health).pad(0).left().padLeft(0);
                healthUI.row();
                healthUI.add(health.shield()).size(300, 20).color(Pal.accent).pad(0).left().padLeft(0);

                if (!m) {
                    let minimapUI = Vars.ui.hudGroup.children.get(m ? 4 : 2);
                    minimapUI.row();
                    minimapUI.label(() => { return "(" + Math.round(Core.input.mouseWorldX() / 8) + "," + Math.round(Core.input.mouseWorldY() / 8) + ")"; });
                }*/




                
                // Vars.ui.hudfrag.blockf
                //ag.topTable
                // Vars.ui.hudGroup.children.get(9).children.get(0).children.get(0)
                /*
                for (let i = 0; i < Vars.content.blocks().size; i++) {
                    let block = Vars.content.blocks().get(i);
                    block.bars.add("health", e => new Bar(
                        () => { return Core.bundle.format("stat.health") + ": " + Math.round(e.health) + "/" + e.maxHealth; },
                        () => { return Pal.health; },
                        () => { return e.healthf(); }
                    ));
                }*/

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





