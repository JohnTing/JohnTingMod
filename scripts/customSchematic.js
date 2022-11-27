
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

        const custominfo =  createCustominfo();

        // Vars.ui.schematics.info
        /*
        Vars.ui.schematics.released(() => {
            logicButton.addbutton();
        });*/
        
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
            let togglestyle = Styles.clearNoneTogglei;
            let style = Styles.clearTogglei;
            t.button(new TextureRegionDrawable(rangeicon), togglestyle, run(() => {
                //viewAirRange = !viewAirRange;
            })).update(b => b.setChecked(viewAirRange)).width(46).height(46).name("airrange").tooltip("view air turret range");

            t.button(new TextureRegionDrawable(rangeicon2), togglestyle, run(() => {
                //viewGroundRange = !viewGroundRange;
            })).update(b => b.setChecked(viewGroundRange)).width(46).height(46).name("groundrange").tooltip("view ground turret range");

            t.button(new TextureRegionDrawable(rangeammoicon), togglestyle, run(() => {
                //ignoreNoAmmo = !ignoreNoAmmo;
            })).update(b => b.setChecked(ignoreNoAmmo)).width(46).height(46).name("ammorange").tooltip("ignore turrets without ammo");

            t.row();
            t.button(Icon.units, style, run(() => {
                //onChat("Xelo", "units")
            })).width(46).height(46).name("units").tooltip("count enemy units");

            t.button(new TextureRegionDrawable(progressicon), togglestyle, run(() => {
                //viewprogress = !viewprogress;
            })).update(b => b.setChecked(viewprogress)).width(46).height(46).name("progress").tooltip("show progress bar on unit factories");

            t.button(Icon.units, togglestyle, run(() => {
                //stealUnit = !stealUnit;
            })).update(b => b.setChecked(stealUnit)).width(46).height(46).name("stealunit").tooltip("control nearby unit as soon as it exits factory");

            t.row();
            t.button(new TextureRegionDrawable(oreicon), togglestyle, run(() => {
                //orescan = !orescan;
            })).update(b => b.setChecked(orescan)).width(46).height(46).name("ores").tooltip("show covered ores");
            t.button(Icon.eyeSmall, togglestyle, run(() => {
                //Vars.enableLight = !Vars.enableLight;
            })).update(b => b.setChecked(orescan)).width(46).height(46).name("light").tooltip("toggle lighting");
            t.button(new TextureRegionDrawable(pipbuttonicon), togglestyle, run(() => {
                //showpips = !showpips;
            })).update(b => b.setChecked(showpips)).width(46).height(46).name("light").tooltip("show pips");
            t.row();
            t.button(Icon.refresh, style, run(() => {
                //Call.sendChatMessage("/sync");
            })).width(46).height(46).name("ores").tooltip("sync");
            t.button(new TextureRegionDrawable(votekick), style, run(() => {
                //Call.sendChatMessage("/vote y");
            })).width(46).height(46).name("ores").tooltip("vote y");

            t.button(Icon.terminal, togglestyle, run(() => {
                /*
                if (playerAI) {
                    playerAI = null;
                } else {
                    playerAI = new BuilderAI();
                    playerAI.unit(Vars.player.unit());
 
                }
                if (Vars.mobile) {
                    if (playerAI) {
                        Vars.control.input = new DesktopInput();
                    } else {
                        Vars.control.input = new MobileInput();
                    }
                }*/

            })).update(b => b.setChecked(!!playerAI)).width(46).height(46).name("ores").tooltip("become gamma Ai");

            t.top().right().marginTop(180);
            //Icon.units
        }));


        Vars.ui.hudGroup.fill(cons(t => {
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

                imgbutton.update(b => b.setDisabled(!Core.settings.getString(i + "-schem")))
                    .width(width).height(width).name("imgbuttonores")
                    .tooltip(Core.settings.getString(i + "-schem", "_"));

                imgbutton.get().getImage().setScaling(Scaling.stretch);
                imgbutton.get().getImage().setSize(width * 0.8, width * 0.8);
                imgbutton.get().resizeImage(width * 0.8);
            }
            t.top().right().marginTop(364);
        }));

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





function buildTags(schem, t){
    buildTags(schem, t, true);
}

function buildTags(schem, t, name){
    const tagh = 42;

    t.clearChildren();
    t.left();

    //sort by order in the main target array. the complexity of this is probably awful
    schem.labels.sort(floatf(s => tags.indexOf(s)));

    if(name) t.add("@schematic.tags").padRight(4);
    t.pane(s => {
        s.left();
        s.defaults().pad(3).height(tagh);
        for(let i = 0;i < schem.labels.length;i++){
            tag = schem.labels.get(i);
            s.table(Tex.button, i => {
                i.add(tag).padRight(4).height(tagh).labelAlign(Align.center);
                i.button(Icon.cancelSmall, Styles.emptyi, () => {
                    removeTag(schem, tag);
                    buildTags(schem, t, name);
                }).size(tagh).padRight(-9).padLeft(-9);
            });
        }

    }).fillX().left().height(tagh).scrollY(false);

    t.button(Icon.addSmall, () => {
        var dialog = new BaseDialog("@schematic.addtag");
        dialog.addCloseButton();
        dialog.cont.pane(p => dialog.resized(true, () => {
            p.clearChildren();

            let sum = 0;
            let current = new Table().left();
            for(var tag of tags){
                if(schem.labels.contains(tag)) continue;

                var next = Elem.newButton(tag, () => {
                    addTag(schem, tag);
                    buildTags(schem, t, name);
                    dialog.hide();
                });
                next.getLabel().setWrap(false);

                next.pack();
                let w = next.getPrefWidth() + Scl.scl(6);

                if(w + sum >= Core.graphics.getWidth() * (Core.graphics.isPortrait() ? 1 : 0.8)){
                    p.add(current).row();
                    current = new Table();
                    current.left();
                    current.add(next).height(tagh).pad(2);
                    sum = 0;
                }else{
                    current.add(next).height(tagh).pad(2);
                }

                sum += w;
            }

            if(sum > 0){
                p.add(current).row();
            }

            var handleTag = res => {
                dialog.hide();
                addTag(schem, res);
                buildTags(schem, t, name);
            };

            p.row();

            p.table(v => {
                v.left().defaults().fillX().height(tagh).pad(2);
                v.button("@schematic.texttag", Icon.add, () => showNewTag(handleTag)).wrapLabel(false).get().getLabelCell().padLeft(4);
                v.button("@schematic.icontag", Icon.add, () => showNewIconTag(handleTag)).wrapLabel(false).get().getLabelCell().padLeft(4);
            });
        }));
        dialog.show();
    }).size(tagh).tooltip("@schematic.addtag");
}




module.exports = {
    apply: apply,
}
