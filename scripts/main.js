
Events.on(ClientLoadEvent, main);


function main() {
    Vars.renderer.minZoom = 0.5;
    Vars.renderer.maxZoom = 20;
    Vars.experimental = true;
    Vars.enableConsole = true;

    // LStatements.GetLinkStatement.output = "block1";

    function addButtonDialog(statementElem) {
        var dialog = new BaseDialog("@add");

        dialog.cont.pane(t2 => {
            t2.background(Tex.button);
            var i = 0;
            for (let j = 0; j < LogicIO.allStatements.size; j++) {
                let prov = LogicIO.allStatements.get(j);
                let example = prov.get();
                if (example instanceof LStatements.InvalidStatement || example.hidden()) continue;

                let style = new TextButton.TextButtonStyle(Styles.cleart);
                style.fontColor = example.color();
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
        });
        dialog.addCloseButton();
        dialog.show();
    }

    function addButtonIcon(statementElem) {
        // Vars.ui.logic.canvas.statements.getChildren().get(0).getChildren().get(0).getChildren().size
        if(statementElem.getChildren().get(0).getChildren().size >= 4) {
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

    function addButtonCanvas() {
        let statementElems = Vars.ui.logic.canvas.statements.getChildren();
        for (let i = 0; i < statementElems.size; i++) {

            let statementElem = statementElems.get(i);
            addButtonIcon(statementElem);

        }
    }

    Vars.ui.logic.shown(() => {
        addButtonCanvas();
    });
};
