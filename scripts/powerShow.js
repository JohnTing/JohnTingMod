
importPackage(Packages.arc.input);
importPackage(Packages.arc.util.pooling);

var powerbal = 0;
var stored = 0;
var battery = 0.01;
function powerBalance() {
    return powerbal;
}
function getBatLevel() {
    return stored / battery;
}


function eachIndexed(team, flag, cons) {
    let iter = Vars.indexer.getAllied(team, flag).iterator();
    while (iter.hasNext()) {
        cons.get(iter.next());
    }
}
Events.run(Trigger.update, () => {



    var gridSeq = new Seq();

    battery = 0.01;
    stored = 0;
    powerbal = 0;
    let tilecons = (c) => {
        if (!c.build || !c.build.power) { return; }
        let graph = c.build.power.graph;
        if (!gridSeq.contains(graph)) {
            gridSeq.add(graph);
            stored += graph.getBatteryStored();
            battery += graph.getTotalBatteryCapacity();
            powerbal += graph.getPowerBalance();
        }
    };
    iterateOver(Vars.indexer.getFlagged(Vars.player.team(), BlockFlag.generator).iterator(), tilecons);
    iterateOver(Vars.indexer.getFlagged(Vars.player.team(), BlockFlag.reactor).iterator(), tilecons);

});