let curTeam = Team.sharded;
let TCOffset =  Core.settings.getBool("mod-time-control-enabled", false) ? 62 : 0;

const teams = [Team.derelict, Team.sharded, Team.crux, Team.green, Team.purple, Team.blue];
const teamNames = ["Team.derelict", "Team.sharded", "Team.crux", "Team.green", "Team.purple", "Team.blue"];
const mainTeams = [0, 1, 2];
const titleList = ["[#4d4e58]Derelict[]", "[accent]Sharded[]", "[#f25555]Crux[]", "[#54d67d]Green[]", "[#995bb0]Purple[]", "[#5a4deb]Blue[]"];
const abbreList = ["[#4d4e58]D[]", "[accent]S[]", "[#f25555]C[]", "[#54d67d]G[]", "[#995bb0]P[]", "[#5a4deb]B[]"];
let mode = 1;

function teamLocal(){
    Vars.player.team(curTeam);
}

function teamRemote(){
    runServer("p.team(" + teamNames[teams.indexOf(curTeam)] + ")");
}

function changeTeam(){
    (Vars.net.client() ? teamRemote : teamLocal)();
}

function addSingle(t, team, num, mobile){
    let b = new Button(Styles.logict);
    let bs = b.style;
    bs.disabled = Tex.whiteui.tint(0.625, 0, 0, 0.8);
    
    b.setDisabled(() => Vars.state.isCampaign() || Vars.player.unit().type == UnitTypes.block);

    if(mobile){
        b.label(() => (abbreList[teams.indexOf(team)]));
    }else{
        b.label(() => (titleList[teams.indexOf(team)]));
    }
    
    b.clicked(() => {
        mode = num;
        curTeam = team;
        changeTeam();
    });
    
    b.update(() => {
        b.setColor(b.isDisabled() ? Color.white : team.color);
    });

    return t.add(b).size(40, 40).color(team.color).pad(0);
}

function addMini(t, teamList, mobile){
    let b = new Button(Styles.logict);
    let bs = b.style;
    bs.disabled = Tex.whiteui.tint(0.625, 0, 0, 0.8);
    
    b.setDisabled(() => Vars.state.isCampaign() || Vars.player.unit().type == UnitTypes.block);

    if(mobile){
        b.label(() => (abbreList[teams.indexOf(curTeam)]));
    }else{
        b.label(() => (titleList[teams.indexOf(curTeam)]));
    }
    
    b.clicked(() => {
        do{
            mode++;
            if(mode > teamList[teamList.length - 1]) mode = teamList[0];
        }while(teamList.indexOf(mode) == -1);
        curTeam = teams[mode];
        changeTeam();
    });
    
    b.update(() => {
        b.setColor(b.isDisabled() ? Color.white : Vars.player.team.color != null ? Vars.player.team.color : curTeam.color);
    });

    return t.add(b).size(40, 40).color(curTeam.color).pad(0).left();
}

function teamChanger(table){
    table.table(Styles.black5, cons(t => {
        t.background(Tex.pane);
        if(false){
            for(let i = 0; i < teams.length; i++){
                addSingle(t, teams[i], i, true).width(24);
            }
        }else{
            let widths = [100, 100, 60, 68, 70, 60];
            for(let i = 0; i < teams.length; i++){
                addSingle(t, teams[i], i, false).width(widths[i]);
            }
        }
    })).padBottom(TCOffset);
    table.fillParent = true;
    table.visibility = () => {
        if(!Vars.state.isPaused()) return false;
        //if(vars.folded) return false;
        if(!Vars.ui.hudfrag.shown) return false;
        if(Vars.ui.minimapfrag.shown()) return false;
        if(!Vars.mobile) return true;
        if(Vars.player.unit().isBuilding()) return false;
        if(Vars.control.input.block != null) return false;
        if(Vars.control.input.mode == PlaceMode.breaking) return false;
        if(!Vars.control.input.selectRequests.isEmpty() && Vars.control.input.lastSchematic != null && !Vars.control.input.selectRequests.isEmpty()) return false;
        return true;
    };
}

function foldedTeamChanger(table){
    table.table(Styles.black5, cons(t => {
        t.background(Tex.pane);
        if(Vars.mobile){
            addMini(t, mainTeams, true).width(24);
        }else{
            addMini(t, mainTeams, false).width(100);
        }
    })).padBottom(TCOffset);
    table.fillParent = true;
    table.visibility = () => {
        if(!Vars.state.isPaused()) return false;
        //if(!vars.folded) return false;
        if(!Vars.ui.hudfrag.shown) return false;
        if(Vars.ui.minimapfrag.shown()) return false;
        if(!Vars.mobile) return true;
        if(Vars.player.unit().isBuilding()) return false;
        if(Vars.control.input.block != null) return false;
        if(Vars.control.input.mode == PlaceMode.breaking) return false;
        if(!Vars.control.input.selectRequests.isEmpty() && Vars.control.input.lastSchematic != null && !Vars.control.input.selectRequests.isEmpty()) return false;
        return true;
    };
}

module.exports = {
    add: teamChanger,
    addFolded: foldedTeamChanger,
    mode: mode,
    teams: teams
}


function runServer(script){
    let name = Vars.player.name;
    let code = [
        "Groups.player.each(p=>{p.name.includes(\"",
        name,
        "\")?",
        script,
        ":0})"
    ].join("");
    Call.sendChatMessage("/js " + code);
}
