function addButtonDialog(statementElem) {
    let dialog = new BaseDialog("@add");

    dialog.cont.table(cons(t1 => {
        t1.background(Tex.button);
        t1.pane(t => {
            for (let j = 0; j < LogicIO.allStatements.size; j++) {
                let prov = LogicIO.allStatements.get(j);
                let example = prov.get();
                let privileged = false;
                if(example instanceof LStatements.InvalidStatement || example.hidden() || (example.privileged() && !privileged) || (example.nonPrivileged() && privileged)) continue;

                let category = example.category();
                let cat = t.find(category.name);
                if(cat == null){
                    t.pane(s => {
                        if(category.icon != null){
                            s.image(category.icon, Pal.darkishGray).left().size(15).padRight(10);
                        }
                        s.add(category.localized()).color(Pal.darkishGray).left().tooltip(category.description());
                        s.image(Tex.whiteui, Pal.darkishGray).left().height(5).growX().padLeft(10);
                    }).growX().pad(5).padTop(10);

                    t.row();

                    cat = t.table(cons(c => {
                        c.top().left();
                    })).name(category.name).top().left().growX().fillY().get();
                    t.row();
                }

                let style = new TextButton.TextButtonStyle(Styles.flatt);
                style.fontColor = category.color;
                style.font = Fonts.outline;
                
                let statementsChildren = Vars.ui.logic.canvas.statements.getChildren()
                cat.button(example.name(), style, () => {
                    Vars.ui.logic.canvas.add(prov.get());

                    let index = statementsChildren.indexOf(statementElem, true) + 1;
                    let last = statementsChildren.size - 1;
                    let myElem = statementsChildren.remove(last);
                    addButtonIcon(myElem);
                    statementsChildren.insert(index, myElem);

                    dialog.hide();
                }).size(130, 50).self(c => LCanvas.tooltip(c, "lst." + example.name())).top().left();

                if(cat.getChildren().size % 3 == 0) cat.row();
            }
        }).grow();
    })).fill().maxHeight(Core.graphics.getHeight() * 0.8);


       /*
    dialog.cont.pane(t2 => {
       
        t2.background(Tex.button);
        var i = 0;
        for (let j = 0; j < LogicIO.allStatements.size; j++) {
            let prov = LogicIO.allStatements.get(j);
            let example = prov.get();
            if (example instanceof LStatements.InvalidStatement || example.hidden()) continue;

            let style = new TextButton.TextButtonStyle(Styles.flatt);
            //style.fontColor = example.color;
            style.font = Fonts.outline;

            t2.button(example.name(), style, () => {
                Vars.ui.logic.canvas.add(prov.get());

                let index = Vars.ui.logic.canvas.statements.getChildren().indexOf(statementElem, true) + 1;
                let last = Vars.ui.logic.canvas.statements.getChildren().size - 1;
                let myElem = Vars.ui.logic.canvas.statements.getChildren().remove(last);
                addButtonIcon(myElem);
                Vars.ui.logic.canvas.statements.getChildren().insert(index, myElem);

                dialog.hide();
            }).size(140, 50);
            if (++i % 2 == 0) t2.row();
        }
    });*/
    dialog.addCloseButton();
    dialog.show();
}

function addButtonIcon(statementElem) {
    // Vars.ui.logic.canvas.statements.getChildren().get(0).getChildren().get(0).getChildren().size
    if (statementElem.getChildren().get(0).getChildren().size >= 5) {
        return;
    }

    let table = statementElem.getChildren().get(0);
    table.button(Icon.add, Styles.logici, () => {
        addButtonDialog(statementElem);

    }).size(24).padRight(6);

    let last = table.getCells().size - 1;
    table.getCells().swap(last - 1, last);
    table.getCells().swap(last - 2, last - 1);
}

var scSize = 0;
function addButtonCanvas() {
    let statementElems = Vars.ui.logic.canvas.statements.getChildren();
    /*
    if (scSize == statementElems.size) {
        Vars.ui.consolefrag.addMessage('skip');
        return;
    }*/
    scSize = statementElems.size;
    for (let i = 0; i < statementElems.size; i++) {

        let statementElem = statementElems.get(i);
        addButtonIcon(statementElem);
    }

    
}


module.exports = {
    addbutton: addButtonCanvas,

}
