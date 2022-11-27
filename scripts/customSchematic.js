
const schemNumber = 20;
const modename = "johntingmod";

var viewAirRange = false;
var viewGroundRange = false;
var ignoreNoAmmo = false;
var viewprogress = true;
var orescan = false;
var showpips = true;
var stealUnit = false;
var playerAI = false;

function apply() {
    Events.on(EventType.ClientLoadEvent, cons(e => {

        
        rebuildShematicTable();
    }));
}

function rebuildShematicTable() {
    const tableName = "schematictable";
    if(Vars.ui.hudGroup.find(tableName) != null) {
        Vars.ui.hudGroup.find(tableName).remove();
    }

    const custominfo =  createCustominfo();
    let togglestyle = Styles.clearNoneTogglei;
    let style = Styles.clearTogglei;
    
    Vars.ui.schematics = extend(SchematicsDialog, {
        showInfo(schem) {
            custominfo.showSchem(schem);
        }
    });

    var rangeicon = Core.atlas.find(modename + "-rangeair");
    var rangeicon2 = Core.atlas.find(modename + "-rangeground");
    var rangeammoicon = Core.atlas.find(modename + "-rangeammo");
    var progressicon = Core.atlas.find(modename + "-unitprogress");
    var oreicon = Core.atlas.find(modename + "-orescan");
    var votekick = Core.atlas.find(modename + "-votekick");
    var pipbuttonicon = Core.atlas.find(modename + "-pipicon");

    Vars.ui.hudGroup.fill(cons(t => {
        t.name = tableName;
        let style = Styles.clearTogglei;
        const width = 46 * 3 / 5;
        for (let h = 0; h < schemNumber; h++) {
            const i = h;
            if (h > 1 && h % 5 == 0) {
                t.row();
            }
            let icon = getIcon(i + "-schem");
            let imgbutton = t.button(icon, style, run(() => {
                useSchematic(Core.settings.getString(i + "-schem"), i + "-schem");
            }));

            imgbutton.update(b => {
                b.setDisabled(!Core.settings.getString(i + "-schem"))
                b.setChecked(false);
            })
                .width(width).height(width).name("imgbuttonores")
                .tooltip(Core.settings.getString(i + "-schem", "_"));

            imgbutton.get().getImage().setScaling(Scaling.stretch);
            imgbutton.get().getImage().setSize(width * 0.8, width * 0.8);
            imgbutton.get().resizeImage(width * 0.8);
        }
        t.top().right().marginTop(300);
    }));
}


function createCustominfo() {

    var custominfo = extend(BaseDialog, "", {
        showSchem(schem) {
            this.setFillParent(true);
            if (this.buttons.getCells().isEmpty()) {
                this.addCloseButton();
            }
            this.cont.clear();
            this.title.setText("[[" + Core.bundle.get("schematic") + "] " + schem.name());

            this.cont.add(Core.bundle.format("schematic.info", schem.width, schem.height, schem.tiles.size)).color(Color.lightGray);
            this.cont.row();
            // this.cont.table(cons(tags => buildTags(schem, tags))).fillX().left().row();
            // this.cont.row();
            this.cont.add(new SchematicsDialog.SchematicImage(schem)).maxSize(800);
            this.cont.row();

            var arr = schem.requirements();
            this.cont.table(cons(r => {
                var i = 0;
                arr.each((item, amount) => {
                    // r.image(item.icon(Cicon.small)).left();
                    r.label(() => {
                        var core = Vars.player.core();
                        if (core == null || Vars.state.rules.infiniteResources || core.items.has(item, amount)) return "[lightgray]" + amount + "";
                        return (core.items.has(item, amount) ? "[lightgray]" : "[scarlet]") + Math.min(core.items.get(item), amount) + "[lightgray]/" + amount;
                    }).padLeft(2).left().padRight(4);

                    if (++i % 4 == 0) {
                        r.row();
                    }
                });
            }));
            this.cont.row();
            var consump = schem.powerConsumption() * 60;
            var prod = schem.powerProduction() * 60;
            if (!Mathf.zero(consump) || !Mathf.zero(prod)) {
                this.cont.table(cons(t => {

                    if (!Mathf.zero(prod)) {
                        t.image(Icon.powerSmall).color(Pal.powerLight).padRight(3);
                        t.add("+" + Strings.autoFixed(prod, 2)).color(Pal.powerLight).left();

                        if (!Mathf.zero(consump)) {
                            t.add().width(15);
                        }
                    }

                    if (!Mathf.zero(consump)) {
                        t.image(Icon.powerSmall).color(Pal.remove).padRight(3);
                        t.add("-" + Strings.autoFixed(consump, 2)).color(Pal.remove).left();
                    }
                }));
            }

            this.cont.row();
            this.cont.table(
                cons((tbl) => {
                    for (let i = 0; i < schemNumber; i++) {
                        const g = i;


                        if (g > 1 && g % 5 == 0) {
                            tbl.row();
                        }

                        let icon = getIcon(g + "-schem");

                        tbl.button(icon, Styles.clearTogglei, run(() => {
                            log(g + " setting")
                            Core.settings.put(g + "-schem", new java.lang.String(schem.name()));
                            rebuildShematicTable();
                        })).update(b => b.setChecked(Core.settings.getString(g + "-schem") == schem.name())).width(46).height(46).name("test" + 1).tooltip("set to slot " + g);
                    }
                })
            );
            this.show();
        }
    });

    return custominfo;
}


function useSchematic(name, id) {
    if (!name) { return; }
    print("searching for schem:" + name);
    var found = null;
    Vars.schematics.all().each((s) => {
        if (s.name() == name) {
            print("found schem");
            found = s;
        }
    });
    if (found) {
        Vars.control.input.useSchematic(found);
    } else if (id) {
        Core.settings.put(id, "");
    }
}

function getIcon(id) {
    log("id = " + id);
    let name = Core.settings.getString(id);

    if (name) {

        let mychar = name.slice(-1);
        // let icon=Icon.icons.get(name.slice(-1), Icon.paste);
        let icon = Fonts.getGlyph(Fonts.def, mychar);
        log("name = " + name);
        log("icon = " + icon);
        return icon;
    }
    return Icon.paste;
}

module.exports = {
    apply: apply,
}
