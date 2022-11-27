
let initialized = false;


function apply() {
    Events.on(WorldLoadEvent, () => {

        if (!initialized) {
            initialized = true;

            // Vars.ui.hudGroup.find(boolf(e=>{return e instanceof CoreItemsDisplay})))
            let m = Vars.mobile;
            // Vars.ui.logic.find(boolf(e=>{return e.name == 'overlaymarker'})
            // Vars.ui.logic.children.get(5)
            let healthUI = Vars.ui.hudGroup.find(boolf(e => { return e.name == 'overlaymarker' })).children.get(0).children.get(0)
            if (healthUI) {
                healthUI.row();
                healthUI.add(healthBar()).size(300, 20).color(Pal.health).pad(0).left().padLeft(0);
                healthUI.row();
                healthUI.add(shieldBar()).size(300, 20).color(Pal.accent).pad(0).left().padLeft(0);
            }
        }


    });
}


function healthBar() {

    let b = new Bar();
    b.set(() => {
        return Core.bundle.format("stat.health") + ": " + (Vars.player.unit() ? + Math.round(Vars.player.unit().health) + " / " + Vars.player.unit().maxHealth : "0 / 0");
    }, () => {
        return Vars.player.unit() ? Vars.player.unit().health / Vars.player.unit().maxHealth : 0.0;
    }, Color.gray);
    return b;

}

function shieldBar() {

    let b = new Bar();
    b.set(() => {
        return "Shield: " + (Vars.player.unit() ? Math.round(Vars.player.unit().shield) + " (" + Vars.player.unit().armor + ")" : "0 (0)");
    }, () => {
        return Vars.player.unit() ? Vars.player.unit().shield / Vars.player.unit().maxHealth : 0.0;
    }, Color.gray);
    return b;
}




module.exports = {
    apply: apply,
}
