// draw
function apply() {
    Events.run(Trigger.draw, () => {
        Draw.draw(Layer.overlayUI, draw);
    });
}

function draw() {

    let input = Vars.control.input;
    let player = Vars.player;
    let ui = Vars.ui;
    //draw selected block
    if (input.block == null && !Core.scene.hasMouse()) {
        let vec = Core.input.mouseWorld(input.getMouseX(), input.getMouseY());
        let build = Vars.world.buildWorld(vec.x, vec.y);

        // if(build != null && build.team == player.team()){
        if (build != null && build.team != player.team()) {
            build.drawSelect();
            if (!build.enabled && build.block.drawDisabled) {
                build.drawDisabled();
            }
        }
    }


    if (!player.dead() && ui.hudfrag.shown) {

        // if player is tower, show attack range
        if (player.unit() instanceof BlockUnitc) {
            let blockUnitc = player.unit();
            let build = blockUnitc.tile();
            if (build != null) {
                build.drawSelect();
                if (!build.enabled && build.block.drawDisabled) {
                    build.drawDisabled();
                }
            }
        }
        if (player.unit() instanceof Unitc) {
            // if player is unit, show attack range
            let unit = player.unit();
            let unittype = unit.type;

            if (player.shooting && unittype != null && unittype.weapons != null) {
                Draw.color(player.team().color);
                Draw.alpha(0.5);
                for (let i = 0; i < unittype.weapons.size; i++) {
                    let weapon = unittype.weapons.get(i);

                    // Vars.player.unit().type.weapons.get(0).bullet.range()

                    Lines.dashCircle(player.x, player.y, weapon.bullet.range);

                }
            }
            Draw.reset();
        }
        let hover = ui.hudfrag.blockfrag.hover();

        if (!hover || !(hover instanceof Unit)) {
            let hover2 = hoveredUnit(Core.input.mouseWorld().x, Core.input.mouseWorld().y);
            if(hover2) {
                hover = hover2;
            }
        }

        // draw hover unit attack range
        if (hover instanceof Unit) {
            let unit = hover;
            let unittype = unit.type;
            if (unittype != null && unittype.weapons != null) {
                Draw.color(unit.team.color);
                Draw.alpha(0.5);
                for (let i = 0; i < unittype.weapons.size; i++) {
                    let weapon = unittype.weapons.get(i);
                    Lines.dashCircle(unit.x, unit.y, weapon.bullet.range);
                }
            }
        }

        if (hover instanceof Unit) {
            let unit = hover;

            if (unit.controller instanceof LogicAI && unit.controller.controller instanceof Building) {
                let build = unit.controller.controller;

                if (build.isValid()) {

                    Drawf.square(build.x, build.y, build.block.size * Vars.tilesize / 2 + 2);

                    if (!unit.within(build, unit.hitSize * 2)) {
                        Drawf.arrow(unit.x, unit.y, build.x, build.y, unit.hitSize * 2, 4);

                        // draw line to logic block 
                        Lines.stroke(3, Pal.gray);
                        Lines.dashLine(unit.x, unit.y, build.x, build.y, Math.round(unit.dst(build) / 8));

                        Lines.stroke(1, Pal.placing);
                        Lines.dashLine(unit.x, unit.y, build.x, build.y, Math.round(unit.dst(build) / 8));
                    }
                }

            }

        }

    }

}


function hoveredUnit(x, y) {
    let unit = null;
    //check for a unit
    unit = Units.closestOverlap(Vars.player.team(), x, y, 5, u => !u.isLocal());
    //check for a enemy unit
    if (unit == null) {
        unit = closestEnemyOverlap(Vars.player.team(), x, y, 5, u => !u.isLocal());
    }
    return unit;
}


/** Returns the closest enemy. Filter by predicate.
 * Unlike the closest() function, this only guarantees that unit hitboxes overlap the range. */

function closestEnemyOverlap(team, x, y, range, predicate) {
    let result = null;
    let cdist = 0;

    Units.nearbyEnemies(team, x - range, y - range, range * 2, range * 2, e => {
        if (!predicate(e)) return;

        let dist = e.dst2(x, y);
        if (result == null || dist < cdist) {
            result = e;
            cdist = dist;
        }
    });

    return result;
}




module.exports = {
    apply: apply,

}


