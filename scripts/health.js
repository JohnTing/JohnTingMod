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
        return "shield: " + (Vars.player.unit() ? Math.round(Vars.player.unit().shield) + " (" + Vars.player.unit().armor + ")" : "0 (0)");
        }, () => {
            return Vars.player.unit() ? Vars.player.unit().shield / Vars.player.unit().maxHealth : 0.0;
        }, Color.gray);
    return b;
}

module.exports = {
    health: healthBar,
    shield: shieldBar
}
