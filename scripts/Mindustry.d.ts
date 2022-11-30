/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.0.1157 on 2022-11-30 00:58:06.

class Application extends Disposable {
    type: ApplicationType;
    version: number;
    headless: boolean;
    listeners: Seq<ApplicationListener>;
    desktop: boolean;
    nativeHeap: number;
    javaHeap: number;
    clipboardText: string;
    mobile: boolean;
    ios: boolean;
    web: boolean;
    android: boolean;
}

class ApplicationCore extends ApplicationListener {
}

class ApplicationListener {
}

class Core {
}

class Events {
}

class Files {
    cachePath: string;
    localStorageAvailable: boolean;
    externalStorageAvailable: boolean;
    localStoragePath: string;
    externalStoragePath: string;
}

class Graphics extends Disposable {
    hidden: boolean;
    width: number;
    height: number;
    ppcY: number;
    gl30: GL30;
    density: number;
    ppiY: number;
    gl20: GL20;
    safeInsets: number[];
    portrait: boolean;
    backBufferWidth: number;
    framesPerSecond: number;
    deltaTime: number;
    ppiX: number;
    ppcX: number;
    gl30Available: boolean;
    bufferFormat: BufferFormat;
    fullscreen: boolean;
    glversion: GLVersion;
    backBufferHeight: number;
    continuousRendering: boolean;
    frameId: number;
    aspect: number;
}

class Input {
    keyboard: KeyboardDevice;
    devices: Seq<InputDevice>;
    inputMultiplexer: InputMultiplexer;
    orientation: Vec3;
    touched: boolean;
    pressure: number;
    accelerometer: Vec3;
    gyroscope: Vec3;
    nativeOrientation: Orientation;
    inputProcessors: Seq<InputProcessor>;
    touches: number;
    rotation: number;
    currentEventTime: number;
}

class KeyBinds {
    sections: Section[];
    keybinds: KeyBind[];
}

class Settings {
    dataDirectory: Fi;
    appName: string;
    modified: boolean;
    backupFolder: Fi;
    backupSettingsFile: Fi;
    settingsFile: Fi;
    errorHandler: Cons<Throwable>;
    json: Json;
    autosave: boolean;
}

class AssetDescriptor<T> {
    fileName: string;
    type: Class<T>;
    params: AssetLoaderParameters<any>;
    file: Fi;
    loaded: Cons<T>;
    errored: Cons<Throwable>;
}

class AssetErrorListener {
}

class AssetLoaderParameters<T> {
    loadedCallback: LoadedCallback;
}

class LoadedCallback {
}

class AssetLoadingTask extends Callable<void> {
    asset: any;
}

class AssetManager extends Disposable {
    fileHandleResolver: FileHandleResolver;
    queuedAssets: number;
    currentLoading: AssetDescriptor<any>;
    loadedAssets: number;
    assetNames: Seq<string>;
    finished: boolean;
    progress: number;
    diagnostics: string;
    errorListener: AssetErrorListener;
}

class RefCountedContainer {
}

class Loadable {
    name: string;
    dependencies: Seq<AssetDescriptor<any>>;
}

class AssetLoader<T, P> {
}

class AsynchronousAssetLoader<T, P> extends AssetLoader<T, P> {
}

class CubemapLoader extends AsynchronousAssetLoader<Cubemap, CubemapParameter> {
}

class CubemapLoaderInfo {
}

class CubemapParameter extends AssetLoaderParameters<Cubemap> {
    format: Format;
    cubemap: Cubemap;
    cubemapData: CubemapData;
    minFilter: TextureFilter;
    magFilter: TextureFilter;
    wrapU: TextureWrap;
    wrapV: TextureWrap;
}

class CustomLoader extends AsynchronousAssetLoader<any, any> {
    loaded: Runnable;
}

class FileHandleResolver {
}

class FontLoader extends AsynchronousAssetLoader<Font, FontParameter> {
}

class FontParameter extends AssetLoaderParameters<Font> {
    flip: boolean;
    genMipMaps: boolean;
    minFilter: TextureFilter;
    magFilter: TextureFilter;
    fontData: FontData;
    atlasName: string;
}

class I18NBundleLoader extends AsynchronousAssetLoader<I18NBundle, I18NBundleParameter> {
}

class I18NBundleParameter extends AssetLoaderParameters<I18NBundle> {
    locale: Locale;
    encoding: string;
}

class MusicLoader extends AsynchronousAssetLoader<Music, MusicParameter> {
}

class MusicParameter extends AssetLoaderParameters<Music> {
    music: Music;
}

class PixmapLoader extends AsynchronousAssetLoader<Pixmap, PixmapParameter> {
}

class PixmapParameter extends AssetLoaderParameters<Pixmap> {
}

class ShaderProgramLoader extends AsynchronousAssetLoader<Shader, ShaderProgramParameter> {
}

class ShaderProgramParameter extends AssetLoaderParameters<Shader> {
    vertexFile: string;
    fragmentFile: string;
    logOnCompileFailure: boolean;
    prependVertexCode: string;
    prependFragmentCode: string;
}

class SoundLoader extends AsynchronousAssetLoader<Sound, SoundParameter> {
}

class SoundParameter extends AssetLoaderParameters<Sound> {
    sound: Sound;
}

class SynchronousAssetLoader<T, P> extends AssetLoader<T, P> {
}

class TextureAtlasLoader extends SynchronousAssetLoader<TextureAtlas, TextureAtlasParameter> {
}

class TextureAtlasParameter extends AssetLoaderParameters<TextureAtlas> {
    flip: boolean;
}

class TextureLoader extends AsynchronousAssetLoader<Texture, TextureParameter> {
}

class TextureLoaderInfo {
}

class TextureParameter extends AssetLoaderParameters<Texture> {
    genMipMaps: boolean;
    texture: Texture;
    textureData: TextureData;
    minFilter: TextureFilter;
    magFilter: TextureFilter;
    wrapU: TextureWrap;
    wrapV: TextureWrap;
}

class Boolc {
}

class Boolf<T> {
}

class Boolf2<A, B> {
}

class Boolf3<P1, P2, P3> {
}

class Boolp {
}

class Cons<T> {
}

class Cons2<T, N> {
}

class Cons3<P1, P2, P3> {
}

class Cons4<P1, P2, P3, P4> {
}

class ConsT<T, E> {
}

class FloatFloatf {
}

class Floatc {
}

class Floatc2 {
}

class Floatc4 {
}

class Floatf<T> {
}

class Floatp {
}

class Func<P, R> {
}

class Func2<P1, P2, R> {
}

class Func3<P1, P2, P3, R> {
}

class IntIntf {
}

class Intc {
}

class Intc2 {
}

class Intc4 {
}

class Intf<T> {
}

class Intp {
}

class Longf<T> {
}

class Prov<T> {
}

class Action extends Poolable {
    actor: Element;
    target: Element;
    pool: Pool<Action>;
}

class Element {
    color: Color;
    originX: number;
    originY: number;
    scaleX: number;
    scaleY: number;
    rotation: number;
    name: string;
    fillParent: boolean;
    translation: Vec2;
    visible: boolean;
    userObject: any;
    touchable: boolean;
    parent: Group;
    visibility: Boolp;
    touchablility: Prov<Touchable>;
    cullable: boolean;
    listeners: Seq<EventListener>;
    captureListeners: Seq<EventListener>;
    actions: Seq<Action>;
    x: number;
    y: number;
    width: number;
    height: number;
    minWidth: number;
    maxWidth: number;
    scene: Scene;
    top: number;
    zindex: number;
    maxHeight: number;
    prefWidth: number;
    minHeight: number;
    prefHeight: number;
    right: number;
    layoutEnabled: boolean;
    size: number;
    scale: number;
    origin: number;
}

class Group extends Element, Cullable {
    children: SnapshotSeq<Element>;
    transform: boolean;
    cullingArea: Rect;
}

class Scene extends InputProcessor {
    root: Group;
    marginLeft: number;
    marginRight: number;
    marginTop: number;
    marginBottom: number;
    viewport: Viewport;
    keyboardFocus: Element;
    scrollFocus: Element;
    actionsRequestRendering: boolean;
    width: number;
    height: number;
    camera: Camera;
    dialog: Dialog;
    elements: Seq<Element>;
}

class TouchFocus extends Poolable {
}

class Actions {
}

class AddAction extends Action {
    action: Action;
}

class AddListenerAction extends Action {
    listener: EventListener;
    capture: boolean;
}

class AfterAction extends DelegateAction {
}

class AlphaAction extends TemporalAction {
    color: Color;
    alpha: number;
}

class ColorAction extends TemporalAction {
    color: Color;
    endColor: Color;
}

class DelayAction extends DelegateAction {
    duration: number;
    time: number;
}

class DelegateAction extends Action {
    action: Action;
}

class FloatAction extends TemporalAction {
    start: number;
    end: number;
    value: number;
}

class IntAction extends TemporalAction {
    start: number;
    end: number;
    value: number;
}

class LayoutAction extends Action {
    enabled: boolean;
    layoutEnabled: boolean;
}

class MoveByAction extends RelativeTemporalAction {
    amountX: number;
    amountY: number;
}

class MoveToAction extends TemporalAction {
    alignment: number;
    x: number;
    y: number;
}

class OriginAction extends Action {
}

class ParallelAction extends Action {
    actions: Seq<Action>;
}

class RelativeTemporalAction extends TemporalAction {
}

class RemoveAction extends Action {
    action: Action;
}

class RemoveActorAction extends Action {
}

class RemoveListenerAction extends Action {
    listener: EventListener;
    capture: boolean;
}

class RepeatAction extends DelegateAction {
    count: number;
}

class RotateByAction extends RelativeTemporalAction {
    amount: number;
}

class RotateToAction extends TemporalAction {
    useShortestDirection: boolean;
    rotation: number;
}

class RunnableAction extends Action {
    runnable: Runnable;
}

class ScaleByAction extends RelativeTemporalAction {
    amountX: number;
    amountY: number;
    amount: number;
}

class ScaleToAction extends TemporalAction {
    x: number;
    y: number;
    scale: number;
}

class SequenceAction extends ParallelAction {
}

class SizeByAction extends RelativeTemporalAction {
    amountWidth: number;
    amountHeight: number;
}

class SizeToAction extends TemporalAction {
    width: number;
    height: number;
}

class TemporalAction extends Action {
    duration: number;
    time: number;
    interpolation: Interp;
    reverse: boolean;
}

class TimeScaleAction extends DelegateAction {
    scale: number;
}

class TouchableAction extends Action {
    touchable: Touchable;
}

class TranslateByAction extends RelativeTemporalAction {
    amountX: number;
    amountY: number;
}

class VisibleAction extends Action {
    visible: boolean;
}

class ChangeListener extends EventListener {
}

class ChangeEvent extends SceneEvent {
}

class ClickListener extends InputListener {
    tapSquareSize: number;
    touchDownX: number;
    touchDownY: number;
    pressedPointer: number;
    pressedButton: KeyCode;
    button: KeyCode;
    pressed: boolean;
    over: boolean;
    tapCount: number;
    visualPressed: boolean;
    tapCountInterval: number;
}

class DragListener extends InputListener {
    tapSquareSize: number;
    touchDownX: number;
    touchDownY: number;
    stageTouchDownX: number;
    stageTouchDownY: number;
    button: number;
    dragging: boolean;
    deltaX: number;
    deltaY: number;
}

class DragScrollListener extends DragListener {
}

class ElementGestureListener extends EventListener {
    touchDownTarget: Element;
    gestureDetector: GestureDetector;
}

class EventListener {
}

class FocusListener extends EventListener {
}

class FocusEvent extends SceneEvent {
    focused: boolean;
    type: FocusListener_FocusEvent_Type;
    relatedActor: Element;
}

class HandCursorListener extends ClickListener {
    enabled: Boolp;
    checkEnabled: boolean;
}

class IbeamCursorListener extends ClickListener {
}

class InputEvent extends SceneEvent {
    type: InputEventType;
    stageX: number;
    stageY: number;
    pointer: number;
    scrollAmountX: number;
    scrollAmountY: number;
    keyCode: KeyCode;
    character: string;
    relatedActor: Element;
    touchFocusCancel: boolean;
}

class InputListener extends EventListener {
}

class ResizeListener extends EventListener {
}

class SceneEvent extends Poolable {
    targetActor: Element;
    listenerActor: Element;
    capture: boolean;
    bubbles: boolean;
    handled: boolean;
    stopped: boolean;
    cancelled: boolean;
}

class SceneResizeEvent extends SceneEvent {
}

class VisibilityEvent extends SceneEvent {
    hide: boolean;
}

class VisibilityListener extends EventListener {
}

class BaseDrawable extends Drawable {
    name: string;
}

class Drawable {
    bottomHeight: number;
    leftWidth: number;
    topHeight: number;
    rightWidth: number;
    minWidth: number;
    minHeight: number;
}

class NinePatchDrawable extends BaseDrawable, TransformDrawable {
    patch: NinePatch;
}

class ScaledNinePatchDrawable extends NinePatchDrawable {
}

class Style {
}

class TextureRegionDrawable extends BaseDrawable, TransformDrawable {
    region: TextureRegion;
}

class TiledDrawable extends TextureRegionDrawable {
    color: Color;
}

class TransformDrawable extends Drawable {
}

class Button extends Table, Disableable {
    buttonGroup: ButtonGroup<any>;
    style: ButtonStyle;
    clickListener: ClickListener;
    pressed: boolean;
    over: boolean;
    checked: boolean;
    programmaticChangeEvents: boolean;
}

class ButtonStyle extends Style {
    up: Drawable;
    down: Drawable;
    over: Drawable;
    checked: Drawable;
    checkedOver: Drawable;
    disabled: Drawable;
    pressedOffsetX: number;
    pressedOffsetY: number;
    unpressedOffsetX: number;
    unpressedOffsetY: number;
    checkedOffsetX: number;
    checkedOffsetY: number;
}

class ButtonGroup<T> {
    buttons: Seq<T>;
    checkedIndex: number;
    allChecked: Seq<T>;
    checked: T;
    minCheckCount: number;
    maxCheckCount: number;
    uncheckLast: boolean;
}

class CheckBox extends TextButton {
    style: CheckBoxStyle;
    image: Image;
    imageCell: Cell<any>;
}

class CheckBoxStyle extends TextButtonStyle {
    checkboxOn: Drawable;
    checkboxOff: Drawable;
    checkboxOver: Drawable;
    checkboxOnDisabled: Drawable;
    checkboxOffDisabled: Drawable;
    checkboxOnOver: Drawable;
}

class ColorImage extends Image {
}

class Dialog extends Table {
    dragging: boolean;
    style: DialogStyle;
    cont: Table;
    buttons: Table;
    title: Label;
    titleTable: Table;
    resizable: boolean;
    shown: boolean;
    modal: boolean;
    movable: boolean;
    centered: boolean;
    resizeBorder: number;
    keepWithinStage: boolean;
}

class DialogStyle extends Style {
    background: Drawable;
    titleFont: Font;
    titleFontColor: Color;
    stageBackground: Drawable;
}

class Image extends Element {
    imageX: number;
    imageY: number;
    imageWidth: number;
    imageHeight: number;
    drawable: Drawable;
    region: TextureRegion;
}

class ImageButton extends Button {
    style: ImageButtonStyle;
    image: Image;
    imageCell: Cell<any>;
}

class ImageButtonStyle extends ButtonStyle {
    imageUp: Drawable;
    imageDown: Drawable;
    imageOver: Drawable;
    imageChecked: Drawable;
    imageCheckedOver: Drawable;
    imageDisabled: Drawable;
    imageUpColor: Color;
    imageCheckedColor: Color;
    imageDownColor: Color;
    imageOverColor: Color;
    imageDisabledColor: Color;
}

class Label extends Element {
    text: StringBuilder;
    style: LabelStyle;
    labelAlign: number;
    lineAlign: number;
    fontScaleX: number;
    fontScaleY: number;
    glyphLayout: GlyphLayout;
    fontCache: FontCache;
}

class LabelStyle extends Style {
    font: Font;
    fontColor: Color;
    background: Drawable;
}

class ProgressBar extends Element, Disableable {
    vertical: boolean;
    style: ProgressBarStyle;
    stepSize: number;
    value: number;
    percent: number;
    minValue: number;
    maxValue: number;
    visualPercent: number;
    visualValue: number;
    animateDuration: number;
    animateInterpolation: Interp;
    visualInterpolation: Interp;
    round: boolean;
}

class ProgressBarStyle extends Style {
    background: Drawable;
    disabledBackground: Drawable;
    knob: Drawable;
    disabledKnob: Drawable;
    knobBefore: Drawable;
    knobAfter: Drawable;
    disabledKnobBefore: Drawable;
    disabledKnobAfter: Drawable;
}

class ScrollPane extends WidgetGroup {
    scrollX: number;
    scrollY: number;
    maxX: number;
    maxY: number;
    velocityX: number;
    velocityY: number;
    style: ScrollPaneStyle;
    widget: Element;
    forceScrollX: boolean;
    forceScrollY: boolean;
    variableSizeKnobs: boolean;
    scrollingDisabledY: boolean;
    scrollingDisabledX: boolean;
    visualScrollPercentY: number;
    visualScrollPercentX: number;
    scrollPercentY: number;
    scrollPercentX: number;
    bottomEdge: boolean;
    flinging: boolean;
    scrollBarHeight: number;
    scrollBarWidth: number;
    scrollHeight: number;
    rightEdge: boolean;
    leftEdge: boolean;
    visualScrollY: number;
    topEdge: boolean;
    scrollWidth: number;
    visualScrollX: number;
    panning: boolean;
    dragging: boolean;
    cancelTouchFocus: boolean;
    flickScroll: boolean;
    flingTime: number;
    fadeScrollBars: boolean;
    smoothScrolling: boolean;
    clamp: boolean;
    scrollbarsOnTop: boolean;
    clip: boolean;
    flickScrollTapSquareSize: number;
    scrollXForce: number;
    scrollYForce: number;
}

class ScrollPaneStyle extends Style {
    background: Drawable;
    corner: Drawable;
    hScroll: Drawable;
    hScrollKnob: Drawable;
    vScroll: Drawable;
    vScrollKnob: Drawable;
}

class Slider extends ProgressBar {
    style: SliderStyle;
    dragging: boolean;
    visualInterpolationInverse: Interp;
}

class SliderStyle extends ProgressBarStyle {
    knobOver: Drawable;
    knobDown: Drawable;
}

class TextArea extends TextField {
    cursorLine: number;
    firstLineShowing: number;
    linesShowing: number;
    lines: number;
    cursorX: number;
    cursorY: number;
    prefRows: number;
}

class TextAreaListener extends TextFieldClickListener {
}

class TextButton extends Button {
    style: TextButtonStyle;
    label: Label;
    text: CharSequence;
    labelCell: Cell<Label>;
}

class TextButtonStyle extends ButtonStyle {
    font: Font;
    fontColor: Color;
    downFontColor: Color;
    overFontColor: Color;
    checkedFontColor: Color;
    checkedOverFontColor: Color;
    disabledFontColor: Color;
}

class TextField extends Element, Disableable {
    imeData: any;
    text: string;
    selectionStart: number;
    style: TextFieldStyle;
    validator: TextFieldValidator;
    filter: TextFieldFilter;
    passwordMode: boolean;
    programmaticChangeEvents: boolean;
    messageText: string;
    maxLength: number;
    valid: boolean;
    cursorPosition: number;
    defaultInputListener: InputListener;
    selection: string;
    focusTraversal: boolean;
    onlyFontChars: boolean;
    passwordCharacter: string;
    blinkTime: number;
    textFieldListener: TextFieldListener;
    alignment: number;
}

class KeyRepeatTask extends Task {
}

class TextFieldClickListener extends ClickListener {
}

class TextFieldFilter {
}

class TextFieldListener {
}

class TextFieldStyle extends Style {
    font: Font;
    fontColor: Color;
    focusedFontColor: Color;
    disabledFontColor: Color;
    background: Drawable;
    focusedBackground: Drawable;
    disabledBackground: Drawable;
    invalidBackground: Drawable;
    cursor: Drawable;
    selection: Drawable;
    messageFont: Font;
    messageFontColor: Color;
}

class TextFieldValidator {
}

class Tooltip extends InputListener {
    manager: Tooltips;
    container: Table;
    allowMobile: boolean;
    instant: boolean;
    always: boolean;
}

class Tooltips {
    textProvider: Func<string, Tooltip>;
    initialTime: number;
    subsequentTime: number;
    resetTime: number;
    enabled: boolean;
    animations: boolean;
    maxWidth: number;
    offsetX: number;
    offsetY: number;
    edgeDistance: number;
}

class Touchpad extends Element {
    touched: boolean;
    resetOnTouchUp: boolean;
    style: TouchpadStyle;
    knobX: number;
    knobPercentY: number;
    knobY: number;
    knobPercentX: number;
    deadzone: number;
}

class TouchpadStyle {
    background: Drawable;
    knob: Drawable;
}

class TreeElement extends WidgetGroup {
    rootNodes: Seq<TreeElementNode>;
    selection: Selection<TreeElementNode>;
    style: TreeStyle;
    indentSpacing: number;
    overNode: TreeElementNode;
    clickListener: ClickListener;
    nodes: Seq<TreeElementNode>;
    yspacing: number;
    overObject: any;
    padding: number;
}

class TreeElementNode {
    children: Seq<TreeElementNode>;
    parent: TreeElementNode;
    selectable: boolean;
    expanded: boolean;
    icon: Drawable;
    height: number;
    object: any;
    level: number;
    tree: TreeElement;
}

class TreeStyle {
    plus: Drawable;
    minus: Drawable;
    over: Drawable;
    selection: Drawable;
    background: Drawable;
}

class Cell<T> extends Poolable {
    endRow: boolean;
    table: Table;
    element: Element;
    layout: Table;
}

class Collapser extends WidgetGroup {
    collapsed: boolean;
    table: Table;
    duration: number;
}

class CollapseAction extends Action {
}

class Scl {
}

class Stack extends WidgetGroup {
}

class Table extends WidgetGroup {
    cells: Seq<Cell<any>>;
    marginTop: number;
    marginLeft: number;
    marginRight: number;
    align: number;
    background: Drawable;
    columns: number;
    rows: number;
    clip: boolean;
    marginBottom: number;
    round: boolean;
}

class DrawRect {
}

class WidgetGroup extends Group {
}

class Cullable {
}

class Disableable {
    disabled: boolean;
}

class Elem {
}

class Selection<T> extends Disableable, Iterable<T> {
    multiple: boolean;
    required: boolean;
    lastSelected: T;
    toggle: boolean;
    _empty: boolean;
    programmaticChangeEvents: boolean;
    all: Seq<T>;
    actor: Element;
}

class ClientLauncher extends ApplicationCore, Platform {
}

class ContentLoader {
    contentMap: Seq<Content>[];
    lastAdded: Content;
    temporaryMapper: MappableContent[][];
    currentMod: LoadedMod;
}

class Control extends ApplicationListener, Loadable {
    saves: Saves;
    sound: SoundControl;
    input: InputHandler;
    highScore: boolean;
}

class FileTree extends FileHandleResolver {
}

class GameState {
    wave: number;
    wavetime: number;
    tick: number;
    updateId: number;
    gameOver: boolean;
    won: boolean;
    serverPaused: boolean;
    serverTps: number;
    map: MindustryMap;
    rules: Rules;
    stats: GameStats;
    envAttrs: Attributes;
    teams: Teams;
    enemies: number;
    playtestingMap: MindustryMap;
    state: GameState_State;
    editor: boolean;
    playing: boolean;
    game: boolean;
    sector: Sector;
    campaign: boolean;
    menu: boolean;
    paused: boolean;
}

class Logic extends ApplicationListener {
    waitingWave: boolean;
}

class NetClient extends ApplicationListener {
    ping: number;
    connecting: boolean;
}

class NetServer extends ApplicationListener {
    admins: Administration;
    clientCommands: CommandHandler;
    assigner: TeamAssigner;
    chatFormatter: ChatFormatter;
    invalidHandler: InvalidCommandHandler;
    waitingForPlayers: boolean;
}

class VoteSession {
}

class ChatFormatter {
}

class InvalidCommandHandler {
}

class TeamAssigner {
}

class Platform {
    uuid: string;
    net: NetProvider;
    scriptContext: Context;
}

class FileWriter {
}

class Renderer extends ApplicationListener {
    blocks: BlockRenderer;
    fog: FogRenderer;
    minimap: MinimapRenderer;
    overlays: OverlayRenderer;
    lights: LightRenderer;
    pixelator: Pixelator;
    planets: PlanetRenderer;
    bloom: Bloom;
    backgroundBuffer: FrameBuffer;
    effectBuffer: FrameBuffer;
    animateShields: boolean;
    drawWeather: boolean;
    drawStatus: boolean;
    enableEffects: boolean;
    drawDisplays: boolean;
    weatherAlpha: number;
    minZoom: number;
    maxZoom: number;
    envRenderers: Seq<EnvRenderer>;
    customBackgrounds: ObjectMap<string, Runnable>;
    bubbles: TextureRegion[];
    splashes: TextureRegion[];
    fluidFrames: TextureRegion[][];
    scale: number;
    cutscene: boolean;
    displayScale: number;
}

class EnvRenderer {
    env: number;
    renderer: Runnable;
}

class UI extends ApplicationListener, Loadable {
    menufrag: MenuFragment;
    hudfrag: HudFragment;
    chatfrag: ChatFragment;
    consolefrag: ConsoleFragment;
    minimapfrag: MinimapFragment;
    listfrag: PlayerListFragment;
    loadfrag: LoadingFragment;
    hints: HintsFragment;
    menuGroup: WidgetGroup;
    hudGroup: WidgetGroup;
    about: AboutDialog;
    restart: GameOverDialog;
    custom: CustomGameDialog;
    maps: MapsDialog;
    load: LoadDialog;
    discord: DiscordDialog;
    join: JoinDialog;
    host: HostDialog;
    paused: PausedDialog;
    settings: SettingsMenuDialog;
    controls: KeybindDialog;
    editor: MapEditorDialog;
    language: LanguageDialog;
    bans: BansDialog;
    admins: AdminsDialog;
    traces: TraceDialog;
    database: DatabaseDialog;
    content: ContentInfoDialog;
    planet: PlanetDialog;
    research: ResearchDialog;
    schematics: SchematicsDialog;
    mods: ModsDialog;
    picker: ColorPicker;
    logic: LogicDialog;
    fullText: FullTextDialog;
    drillCursor: Cursor;
    unloadCursor: Cursor;
    targetCursor: Cursor;
}

class Version {
}

class World {
    context: World_Context;
    tiles: Tiles;
    tileChanges: number;
    generating: boolean;
    invalidMap: boolean;
}

class World_Context extends WorldContext {
}

class FilterContext extends World_Context {
}

class EventType {
}

class AdminRequestEvent {
    player: Player;
    other: Player;
    action: AdminAction;
}

class BlockBuildBeginEvent {
    tile: Tile;
    team: Team;
    unit: Unit;
    breaking: boolean;
}

class BlockBuildEndEvent {
    tile: Tile;
    team: Team;
    unit: Unit;
    breaking: boolean;
    config: any;
}

class BlockDestroyEvent {
    tile: Tile;
}

class BlockInfoEvent {
}

class BuildDamageEvent {
    build: Building;
    source: Bullet;
}

class BuildSelectEvent {
    tile: Tile;
    team: Team;
    builder: Unit;
    breaking: boolean;
}

class BuildTeamChangeEvent {
    previous: Team;
    build: Building;
}

class BuildingCommandEvent {
    player: Player;
    building: Building;
    position: Vec2;
}

class ClientCreateEvent {
}

class ClientLoadEvent {
}

class ClientPreConnectEvent {
    host: Host;
}

class ConfigEvent {
    tile: Building;
    player: Player;
    value: any;
}

class ConnectPacketEvent {
    connection: NetConnection;
    packet: ConnectPacket;
}

class ConnectionEvent {
    connection: NetConnection;
}

class ContentInitEvent {
}

class CoreChangeEvent {
    core: CoreBuild;
}

class CoreItemDeliverEvent {
}

class DepositEvent {
    tile: Building;
    player: Player;
    item: Item;
    amount: number;
}

class DisposeEvent {
}

class FileTreeInitEvent {
}

class GameOverEvent {
    winner: Team;
}

class HostEvent {
}

class LaunchItemEvent {
    stack: ItemStack;
}

class LineConfirmEvent {
}

class LoseEvent {
}

class MapMakeEvent {
}

class MapPublishEvent {
}

class MenuOptionChooseEvent {
    player: Player;
    menuId: number;
    option: number;
}

class MusicRegisterEvent {
}

class PayloadDropEvent {
    carrier: Unit;
    unit: Unit;
    build: Building;
}

class PickupEvent {
    carrier: Unit;
    unit: Unit;
    build: Building;
}

class PlayEvent {
}

class PlayerBanEvent {
    player: Player;
    uuid: string;
}

class PlayerChatEvent {
    player: Player;
    message: string;
}

class PlayerConnect {
    player: Player;
}

class PlayerConnectionConfirmed {
    player: Player;
}

class PlayerIpBanEvent {
    ip: string;
}

class PlayerIpUnbanEvent {
    ip: string;
}

class PlayerJoin {
    player: Player;
}

class PlayerLeave {
    player: Player;
}

class PlayerUnbanEvent {
    player: Player;
    uuid: string;
}

class ResearchEvent {
    content: UnlockableContent;
}

class ResetEvent {
}

class ResizeEvent {
}

class SaveLoadEvent {
    isMap: boolean;
}

class SaveWriteEvent {
}

class SchematicCreateEvent {
    schematic: Schematic;
}

class SectorCaptureEvent {
    sector: Sector;
}

class SectorInvasionEvent {
    sector: Sector;
}

class SectorLaunchEvent {
    sector: Sector;
}

class SectorLoseEvent {
    sector: Sector;
}

class ServerLoadEvent {
}

class StateChangeEvent {
    from: GameState_State;
    to: GameState_State;
}

class TapEvent {
    player: Player;
    tile: Tile;
}

class TileChangeEvent {
    tile: Tile;
}

class TilePreChangeEvent {
    tile: Tile;
}

class TurnEvent {
}

class TurretAmmoDeliverEvent {
}

class UnitChangeEvent {
    player: Player;
    unit: Unit;
}

class UnitControlEvent {
    player: Player;
    unit: Unit;
}

class UnitCreateEvent {
    unit: Unit;
    spawner: Building;
    spawnerUnit: Unit;
}

class UnitDestroyEvent {
    unit: Unit;
}

class UnitDrownEvent {
    unit: Unit;
}

class UnitSpawnEvent {
    unit: Unit;
}

class UnitUnloadEvent {
    unit: Unit;
}

class UnlockEvent {
    content: UnlockableContent;
}

class WaveEvent {
}

class WinEvent {
}

class WithdrawEvent {
    tile: Building;
    player: Player;
    item: Item;
    amount: number;
}

class WorldLoadEvent {
}

class FogControl extends CustomChunk {
}

class DynamicFogThread extends Thread {
    priority0: number;
    nativeName: string;
}

class FogData {
}

class FogEventStruct {
}

class StaticFogThread extends Thread {
    priority0: number;
    nativeName: string;
}

class GameStats {
    enemyUnitsDestroyed: number;
    wavesLasted: number;
    buildingsBuilt: number;
    buildingsDeconstructed: number;
    buildingsDestroyed: number;
    unitsCreated: number;
    placedBlockCount: ObjectIntMap<Block>;
    coreItemCount: ObjectIntMap<Item>;
}

class MapObjectives extends Iterable<MapObjective>, Eachable<MapObjective> {
    all: Seq<MapObjective>;
}

class BuildCountObjective extends MapObjective {
    block: Block;
    count: number;
}

class CommandModeObjective extends MapObjective {
}

class CoreItemObjective extends MapObjective {
    item: Item;
    amount: number;
}

class DestroyBlockObjective extends MapObjective {
    pos: Point2;
    team: Team;
    block: Block;
}

class DestroyBlocksObjective extends MapObjective {
    positions: Point2[];
    team: Team;
    block: Block;
}

class DestroyCoreObjective extends MapObjective {
}

class DestroyUnitsObjective extends MapObjective {
    count: number;
}

class FlagObjective extends MapObjective {
    flag: string;
    text: string;
}

class ItemObjective extends MapObjective {
    item: Item;
    amount: number;
}

class MapObjective {
    details: string;
    flagsAdded: string[];
    flagsRemoved: string[];
    markers: ObjectiveMarker[];
    completed: boolean;
}

class MinimapMarker extends ObjectiveMarker {
    pos: Point2;
    radius: number;
    stroke: number;
    color: Color;
}

class ObjectiveMarker {
}

class ProduceObjective extends MapObjective {
    content: UnlockableContent;
}

class ResearchObjective extends MapObjective {
    content: UnlockableContent;
}

class ShapeMarker extends ObjectiveMarker {
    pos: Vec2;
    radius: number;
    rotation: number;
    stroke: number;
    fill: boolean;
    outline: boolean;
    sides: number;
    color: Color;
}

class ShapeTextMarker extends ObjectiveMarker {
    text: string;
    pos: Vec2;
    fontSize: number;
    textHeight: number;
    flags: number;
    radius: number;
    rotation: number;
    sides: number;
    color: Color;
}

class TextMarker extends ObjectiveMarker {
    text: string;
    pos: Vec2;
    fontSize: number;
    flags: number;
}

class TimerObjective extends MapObjective {
    text: string;
    duration: number;
}

class UnitCountObjective extends MapObjective {
    unit: UnitType;
    count: number;
}

class Objectives {
}

class Objective {
}

class OnPlanet extends Objective {
    planet: Planet;
}

class OnSector extends Objective {
    preset: SectorPreset;
}

class Produce extends Objective {
    content: UnlockableContent;
}

class Research extends Objective {
    content: UnlockableContent;
}

class SectorComplete extends Objective {
    preset: SectorPreset;
}

class Rules {
    infiniteResources: boolean;
    teams: TeamRules;
    waveTimer: boolean;
    waves: boolean;
    pvp: boolean;
    waitEnemies: boolean;
    attackMode: boolean;
    editor: boolean;
    canGameOver: boolean;
    coreCapture: boolean;
    reactorExplosions: boolean;
    possessionAllowed: boolean;
    schematicsAllowed: boolean;
    damageExplosions: boolean;
    fire: boolean;
    unitAmmo: boolean;
    unitPayloadUpdate: boolean;
    unitCapVariable: boolean;
    showSpawns: boolean;
    solarMultiplier: number;
    unitBuildSpeedMultiplier: number;
    unitDamageMultiplier: number;
    logicUnitBuild: boolean;
    disableWorldProcessors: boolean;
    blockHealthMultiplier: number;
    blockDamageMultiplier: number;
    buildCostMultiplier: number;
    buildSpeedMultiplier: number;
    deconstructRefundMultiplier: number;
    enemyCoreBuildRadius: number;
    polygonCoreProtection: boolean;
    placeRangeCheck: boolean;
    cleanupDeadTeams: boolean;
    onlyDepositCore: boolean;
    coreDestroyClear: boolean;
    dropZoneRadius: number;
    waveSpacing: number;
    initialWaveSpacing: number;
    winWave: number;
    unitCap: number;
    dragMultiplier: number;
    env: number;
    attributes: Attributes;
    sector: Sector;
    spawns: Seq<SpawnGroup>;
    loadout: Seq<ItemStack>;
    weather: Seq<WeatherEntry>;
    bannedBlocks: ObjectSet<Block>;
    bannedUnits: ObjectSet<UnitType>;
    revealedBlocks: ObjectSet<Block>;
    researched: ObjectSet<string>;
    hiddenBuildItems: ObjectSet<Item>;
    objectives: MapObjectives;
    objectiveFlags: ObjectSet<string>;
    fog: boolean;
    staticFog: boolean;
    staticColor: Color;
    dynamicColor: Color;
    lighting: boolean;
    ambientLight: Color;
    defaultTeam: Team;
    waveTeam: Team;
    cloudColor: Color;
    modeName: string;
    mission: string;
    coreIncinerates: boolean;
    borderDarkness: boolean;
    limitMapArea: boolean;
    limitX: number;
    limitY: number;
    limitWidth: number;
    limitHeight: number;
    disableOutsideArea: boolean;
    tags: StringMap;
    customBackgroundCallback: string;
    backgroundTexture: string;
    backgroundSpeed: number;
    backgroundScl: number;
    backgroundOffsetX: number;
    backgroundOffsetY: number;
    planetBackground: PlanetParams;
}

class TeamRule {
    aiCoreSpawn: boolean;
    cheat: boolean;
    infiniteResources: boolean;
    infiniteAmmo: boolean;
    rtsAi: boolean;
    rtsMinSquad: number;
    rtsMaxSquad: number;
    rtsMinWeight: number;
    unitBuildSpeedMultiplier: number;
    unitDamageMultiplier: number;
    blockHealthMultiplier: number;
    blockDamageMultiplier: number;
    buildSpeedMultiplier: number;
}

class TeamRules extends JsonSerializable {
}

class Saves {
    current: SaveSlot;
    saving: boolean;
    totalPlaytime: number;
    nextSlotFile: Fi;
    saveSlots: Seq<SaveSlot>;
    lastSector: SaveSlot;
}

class SaveSlot {
    file: Fi;
    meta: SaveMeta;
    name: string;
    hidden: boolean;
    map: MindustryMap;
    timestamp: number;
    date: string;
    sector: Sector;
    mods: string[];
    playTime: string;
    autosave: boolean;
    wave: number;
    build: number;
}

class Schematic extends Publishable, Comparable<Schematic> {
    tiles: Seq<Stile>;
    labels: Seq<string>;
    tags: StringMap;
    width: number;
    height: number;
    file: Fi;
    mod: LoadedMod;
}

class Stile {
    block: Block;
    x: number;
    y: number;
    config: any;
    rotation: number;
}

class Schematics extends Loadable {
    loadouts: ObjectMap<CoreBlock, Seq<Schematic>>;
}

class SectorInfo {
    production: ObjectMap<Item, ExportStat>;
    rawProduction: ObjectMap<Item, ExportStat>;
    export: ObjectMap<Item, ExportStat>;
    items: ItemSeq;
    bestCoreType: Block;
    storageCapacity: number;
    hasCore: boolean;
    wasCaptured: boolean;
    origin: Sector;
    destination: Sector;
    resources: Seq<UnlockableContent>;
    waves: boolean;
    attack: boolean;
    hasSpawns: boolean;
    wave: number;
    winWave: number;
    wavesSurvived: number;
    waveSpacing: number;
    damage: number;
    wavesPassed: number;
    spawnPosition: number;
    secondsPassed: number;
    minutesCaptured: number;
    name: string;
    icon: string;
    contentIcon: UnlockableContent;
    waveVersion: number;
    shown: boolean;
    sumHealth: number;
    sumRps: number;
    sumDps: number;
    waveHealthBase: number;
    waveHealthSlope: number;
    waveDpsBase: number;
    waveDpsSlope: number;
    bossHealth: number;
    bossDps: number;
    curEnemyHealth: number;
    curEnemyDps: number;
    bossWave: number;
    realDestination: Sector;
}

class ExportStat {
    mean: number;
}

class SpawnGroup extends JsonSerializable, Cloneable {
    type: UnitType;
    end: number;
    begin: number;
    spacing: number;
    max: number;
    unitScaling: number;
    shields: number;
    shieldScaling: number;
    unitAmount: number;
    spawn: number;
    payloads: Seq<UnitType>;
    effect: StatusEffect;
    items: ItemStack;
}

class Team extends Comparable<Team> {
    id: number;
    color: Color;
    palette: Color[];
    palettei: number[];
    emoji: string;
    hasPalette: boolean;
    name: string;
    onlyAI: boolean;
    ai: boolean;
}

class Teams {
    active: Seq<TeamData>;
    present: Seq<TeamData>;
    bosses: Seq<Unit>;
}

class BlockPlan {
    x: number;
    y: number;
    rotation: number;
    block: number;
    config: any;
    removed: boolean;
}

class TeamData {
    team: Team;
    rtsAi: RtsAI;
    coreEnemies: Team[];
    plans: Queue<BlockPlan>;
    cores: Seq<CoreBuild>;
    lastCore: CoreBuild;
    buildingTree: QuadTree<Building>;
    turretTree: QuadTree<Building>;
    unitTree: QuadTree<Unit>;
    unitCap: number;
    unitCount: number;
    typeCounts: number[];
    buildingTypes: ObjectMap<Block, Seq<Building>>;
    units: Seq<Unit>;
    players: Seq<Player>;
    buildings: Seq<Building>;
    unitsByType: Seq<Unit>[];
}

class Universe {
    lastLoadout: Schematic;
    globalResources: ItemSeq;
    launchResources: ItemSeq;
}

class Waves {
}

class MindustryMap extends Comparable<MindustryMap>, Publishable {
    custom: boolean;
    tags: StringMap;
    file: Fi;
    version: number;
    workshop: boolean;
    width: number;
    height: number;
    texture: Texture;
    build: number;
    teams: IntSet;
    spawns: number;
    mod: LoadedMod;
    hightScore: number;
    highScore: number;
}

class MapException extends RuntimeException {
    map: MindustryMap;
}

class MapPreviewLoader extends TextureLoader {
}

class Maps {
    shuffleMode: ShuffleMode;
    mapProvider: MapProvider;
}

class SectorDamage {
}

class Bar extends Element {
}

class BorderImage extends Image {
    thickness: number;
    pad: number;
    borderColor: Color;
}

class CoreItemsDisplay extends Table {
}

class Displayable {
}

class Fonts {
}

class GridImage extends Element {
}

class IntFormat {
}

class ItemDisplay extends Table {
    item: Item;
    amount: number;
}

class ItemImage extends Stack {
}

class ItemsDisplay extends Table {
}

class Links {
}

class LiquidDisplay extends Table {
    liquid: Liquid;
    amount: number;
    perSecond: boolean;
}

class Menus {
}

class Minimap extends Table {
}

class MobileButton extends ImageButton {
}

class MultiReqImage extends Stack {
}

class ReqImage extends Stack {
}

class Styles {
}

class WarningBar extends Element {
    barWidth: number;
    spacing: number;
    skew: number;
}

class AboutDialog extends BaseDialog {
}

class AdminsDialog extends BaseDialog {
}

class BansDialog extends BaseDialog {
}

class BaseDialog extends Dialog {
}

class ColorPicker extends BaseDialog {
}

class ContentInfoDialog extends BaseDialog {
}

class CustomGameDialog extends BaseDialog {
}

class CustomRulesDialog extends BaseDialog {
}

class DatabaseDialog extends BaseDialog {
}

class DiscordDialog extends Dialog {
}

class FileChooser extends BaseDialog {
}

class FullTextDialog extends BaseDialog {
}

class GameOverDialog extends BaseDialog {
}

class HostDialog extends BaseDialog {
}

class JoinDialog extends BaseDialog {
}

class KeybindDialog extends Dialog {
}

class LanguageDialog extends BaseDialog {
    locale: Locale;
}

class LaunchLoadoutDialog extends BaseDialog {
    max: boolean;
}

class LoadDialog extends BaseDialog {
}

class LoadoutDialog extends BaseDialog {
}

class MapPlayDialog extends BaseDialog {
    playListener: Runnable;
}

class MapsDialog extends BaseDialog {
}

class ModsDialog extends BaseDialog {
}

class PaletteDialog extends Dialog {
}

class PausedDialog extends BaseDialog {
}

class PlanetDialog extends BaseDialog, PlanetclassRenderer {
    buffer: FrameBuffer;
    loadouts: LaunchLoadoutDialog;
    planets: PlanetRenderer;
    state: PlanetParams;
    zoom: number;
    selected: Sector;
    hovered: Sector;
    launchSector: Sector;
    mode: Mode;
    launching: boolean;
    listener: Cons<Sector>;
    newPresets: Seq<Sector>;
    presetShow: number;
    showed: boolean;
    sectorsShown: boolean;
    searchText: string;
    sectorTop: Table;
    notifs: Table;
    expandTable: Table;
    hoverLabel: Label;
}

class ResearchDialog extends BaseDialog {
    nodeSize: number;
    nodes: ObjectSet<TechTreeNode>;
    root: TechTreeNode;
    lastNode: TechNode;
    bounds: Rect;
    itemDisplay: ItemsDisplay;
    view: View;
    items: ItemSeq;
    prefRoot: TechNode;
}

class SaveDialog extends LoadDialog {
}

class SchematicsDialog extends BaseDialog {
}

class SettingsMenuDialog extends BaseDialog {
    graphics: SettingsTable;
    game: SettingsTable;
    sound: SettingsTable;
    main: SettingsTable;
    categories: Seq<SettingsCategory>;
}

class TraceDialog extends BaseDialog {
}

class BlockConfigFragment {
    selected: Building;
    shown: boolean;
}

class BlockInventoryFragment {
}

class ChatFragment extends Table {
}

class ConsoleFragment extends Table {
}

class FadeInFragment {
}

class HintsFragment {
    hints: Seq<Hint>;
}

class HudFragment {
    blockfrag: PlacementFragment;
    shown: boolean;
    hudText: string;
}

class LoadingFragment {
    button: Runnable;
    text: string;
    progress: number;
}

class MenuFragment {
}

class MinimapFragment {
    elem: Element;
}

class PlacementFragment {
    currentCategory: Category;
}

class PlayerListFragment {
    content: Table;
}

class BranchTreeLayout extends TreeLayout {
    rootLocation: TreeLocation;
    alignment: TreeAlignment;
    gapBetweenLevels: number;
    gapBetweenNodes: number;
    bounds: Rect;
    levelCount: number;
}

class RadialTreeLayout extends TreeLayout {
    startRadius: number;
    delta: number;
}

class RowTreeLayout extends TreeLayout {
}

class TreeLayout {
}

class Seq<T> extends Iterable<T>, Eachable<T> {
    items: T[];
    size: number;
    ordered: boolean;
    empty: boolean;
}

class Disposable {
    disposed: boolean;
}

class GL30 extends GL20 {
}

class GL20 {
}

class BufferFormat {
    r: number;
    g: number;
    b: number;
    a: number;
    depth: number;
    stencil: number;
    samples: number;
    coverageSampling: boolean;
}

class GLVersion {
    vendorString: string;
    rendererString: string;
    type: GlType;
    majorVersion: number;
    minorVersion: number;
    releaseVersion: number;
    debugVersionString: string;
}

class KeyboardDevice extends InputDevice, InputProcessor {
}

class InputDevice {
}

class InputMultiplexer extends InputProcessor {
    processors: SnapshotSeq<InputProcessor>;
}

class Vec3 extends Vector<Vec3> {
    x: number;
    y: number;
    z: number;
    length: number;
    length2: number;
    toRandomDirection: Rand;
}

class InputProcessor {
}

class Section {
    name: string;
    binds: ObjectMap<DeviceType, OrderedMap<KeyBind, Axis>>;
    device: InputDevice;
}

class KeyBind {
}

class Fi {
    directory: boolean;
}

class Throwable extends Serializable {
    cause: Throwable;
    stackTrace: StackTraceElement[];
    message: string;
    suppressed: Throwable[];
    localizedMessage: string;
}

class Json {
    writer: BaseJsonWriter;
    ignoreUnknownFields: boolean;
    typeName: string;
    usePrototypes: boolean;
    outputType: OutputType;
    quoteLongValues: boolean;
    ignoreDeprecated: boolean;
    readDeprecated: boolean;
    enumNames: boolean;
    // defaultSerializer: Serializer<any>;
}

class Class<T> extends Serializable, GenericDeclaration, Type, AnnotatedElement, OfField<Class<any>>, Constable {
}

class Cubemap extends GLTexture {
    cubemapData: CubemapData;
    filter: TextureFilter;
    wrap: TextureWrap;
}

class CubemapData {
    width: number;
    height: number;
    prepared: boolean;
}

class Runnable {
}

class FontData {
    glyphs: Glyph[][];
    imagePaths: string[];
    fontFile: Fi;
    flipped: boolean;
    padTop: number;
    padRight: number;
    padBottom: number;
    padLeft: number;
    lineHeight: number;
    capHeight: number;
    ascent: number;
    descent: number;
    down: number;
    blankLineScale: number;
    scaleX: number;
    scaleY: number;
    markupEnabled: boolean;
    cursorX: number;
    missingGlyph: Glyph;
    spaceXadvance: number;
    xHeight: number;
    breakChars: string[];
    xChars: string[];
    capChars: string[];
    firstGlyph: Glyph;
    scale: number;
}

class Locale extends Cloneable, Serializable {
}

class Music extends AudioSource {
    looping: boolean;
    volume: number;
    playing: boolean;
    position: number;
    filter: AudioFilter;
}

class Sound extends AudioSource {
    bus: AudioBus;
    filter: AudioFilter;
}

class Texture extends GLTexture {
    textureData: TextureData;
    filter: TextureFilter;
    wrap: TextureWrap;
}

class TextureData {
    format: Format;
    width: number;
    height: number;
    prepared: boolean;
    custom: boolean;
    pixmap: Pixmap;
}

class Pool<T> {
    max: number;
    peak: number;
    free: number;
}

class Poolable {
}

class Color {
    r: number;
    g: number;
    b: number;
    a: number;
}

class Vec2 extends Vector<Vec2>, Position {
    naN: boolean;
    infinite: boolean;
    length: number;
    angleRad: number;
    length2: number;
    angle: number;
    toRandomDirection: Rand;
}

class SnapshotSeq<T> extends Seq<T> {
}

class Rect extends Shape2D {
    x: number;
    y: number;
    width: number;
    height: number;
    aspectRatio: number;
    size: number;
    center: Vec2;
    position: Vec2;
}

class Viewport {
    camera: Camera;
    worldWidth: number;
    worldHeight: number;
    screenX: number;
    screenY: number;
    screenWidth: number;
    screenHeight: number;
    bottomGutterHeight: number;
    rightGutterWidth: number;
    topGutterHeight: number;
    rightGutterX: number;
    topGutterY: number;
    leftGutterWidth: number;
}

class Camera {
    position: Vec2;
    mat: Mat;
    inv: Mat;
    width: number;
    height: number;
}

class Interp {
}

class GestureDetector extends InputProcessor {
    listener: GestureListener;
    panning: boolean;
    longPressed: boolean;
    tapCountInterval: number;
    longPressSeconds: number;
    maxFlingDelay: number;
    tapSquareSize: number;
}

class NinePatch {
    color: Color;
    texture: Texture;
    leftWidth: number;
    rightWidth: number;
    middleWidth: number;
    middleHeight: number;
    topHeight: number;
    bottomHeight: number;
    padLeft: number;
    padRight: number;
    padTop: number;
    padBottom: number;
    totalHeight: number;
    totalWidth: number;
}

class TextureRegion {
    texture: Texture;
    u: number;
    v: number;
    u2: number;
    v2: number;
    width: number;
    height: number;
    x: number;
    y: number;
    flipY: boolean;
    flipX: boolean;
}

class CharSequence {
}

class Font extends Disposable {
    data: FontData;
    cache: FontCache;
    regions: Seq<TextureRegion>;
    flipped: boolean;
    region: TextureRegion;
    color: Color;
    scaleX: number;
    ascent: number;
    descent: number;
    scaleY: number;
    spaceXadvance: number;
    lineHeight: number;
    xheight: number;
    capHeight: number;
    ownsTexture: boolean;
    useIntegerPositions: boolean;
    fixedWidthGlyphs: CharSequence;
}

class StringBuilder extends AbstractStringBuilder, Serializable, Comparable<StringBuilder>, CharSequence {
}

class GlyphLayout extends Poolable {
    runs: Seq<GlyphRun>;
    ignoreMarkup: boolean;
    width: number;
    height: number;
}

class FontCache {
    font: Font;
    layouts: Seq<GlyphLayout>;
    color: Color;
    x: number;
    y: number;
    vertices: number[];
    alphas: number;
    useIntegerPositions: boolean;
    colors: number;
}

class Task extends Runnable {
    executeTimeMillis: number;
    scheduled: boolean;
}

class NetProvider {
    connections: Iterable<NetConnection>;
}

class Context {
    factory: ContextFactory;
    sealed: boolean;
    errorReporter: ErrorReporter;
    locale: Locale;
    generatingDebug: boolean;
    generatingDebugChanged: boolean;
    generatingSource: boolean;
    optimizationLevel: number;
    maximumInterpreterStackDepth: number;
    wrapFactory: WrapFactory;
    debugger: Debugger;
    applicationClassLoader: ClassLoader;
    generateObserverCount: boolean;
    implementationVersion: string;
    languageVersion: number;
    strictMode: boolean;
    debuggerContextData: any;
    instructionObserverThreshold: number;
    classShutter: ClassShutter;
}

class Content extends Comparable<Content> {
    id: number;
    minfo: ModContentInfo;
    contentType: ContentType;
}

class MappableContent extends Content {
    name: string;
}

class LoadedMod extends Publishable, Disposable {
    file: Fi;
    root: Fi;
    main: Mod;
    name: string;
    meta: ModMeta;
    dependencies: Seq<LoadedMod>;
    missingDependencies: Seq<string>;
    scripts: Seq<Fi>;
    erroredContent: ObjectSet<Content>;
    state: ModState;
    iconTexture: Texture;
    loader: ClassLoader;
    supported: boolean;
    outdated: boolean;
    repo: string;
    minMajor: number;
    java: boolean;
}

class SoundControl {
    finTime: number;
    foutTime: number;
    musicInterval: number;
    musicChance: number;
    musicWaveChance: number;
    ambientMusic: Seq<Music>;
    darkMusic: Seq<Music>;
    bossMusic: Seq<Music>;
}

class InputHandler extends InputProcessor, GestureListener {
    logicCutscene: boolean;
    logicCamPan: Vec2;
    logicCamSpeed: number;
    logicCutsceneZoom: number;
    inputLocks: Seq<Boolp>;
    controlInterval: Interval;
    block: Block;
    overrideLineRotation: boolean;
    rotation: number;
    droppingItem: boolean;
    uiGroup: Group;
    isBuilding: boolean;
    buildWasAutoPaused: boolean;
    wasShooting: boolean;
    controlledType: UnitType;
    recentRespawnTimer: number;
    lastSchematic: Schematic;
    detector: GestureDetector;
    line: PlaceLine;
    resultplan: BuildPlan;
    bplan: BuildPlan;
    linePlans: Seq<BuildPlan>;
    selectPlans: Seq<BuildPlan>;
    selectedUnits: Seq<Unit>;
    commandBuild: Building;
    commandMode: boolean;
    commandRect: boolean;
    tappedOne: boolean;
    commandRectX: number;
    commandRectY: number;
    inv: BlockInventoryFragment;
    config: BlockConfigFragment;
    usingSchematic: boolean;
    breaking: boolean;
    mouseX: number;
    mouseY: number;
    placing: boolean;
}

class Attributes extends JsonSerializable {
}

class Sector {
    rect: SectorRect;
    plane: Plane;
    planet: Planet;
    tile: Ptile;
    id: number;
    save: SaveSlot;
    preset: SectorPreset;
    info: SectorInfo;
    threat: number;
    generateEnemyBase: boolean;
    size: number;
    captured: boolean;
    beingPlayed: boolean;
    attacked: boolean;
    productionScale: number;
    light: number;
    name: string;
}

class Administration {
    bannedIPs: Seq<string>;
    whitelist: Seq<string>;
    chatFilters: Seq<ChatFilter>;
    actionFilters: Seq<ActionFilter>;
    subnetBans: Seq<string>;
    kickedIPs: ObjectMap<string, number>;
    strict: boolean;
    whitelistEnabled: boolean;
    playerLimit: number;
    banned: Seq<PlayerInfo>;
    admins: Seq<PlayerInfo>;
    whitelisted: Seq<PlayerInfo>;
}

class CommandHandler {
    prefix: string;
    commandList: Seq<Command>;
}

class BlockRenderer {
    floor: FloorRenderer;
    cracks: TextureRegion[][];
}

class FogRenderer {
    staticTexture: Texture;
    dynamicTexture: Texture;
}

class MinimapRenderer {
    pixmap: Pixmap;
    texture: Texture;
    region: TextureRegion;
    zoom: number;
}

class OverlayRenderer {
}

class LightRenderer {
}

class Pixelator extends Disposable {
}

class PlanetRenderer extends Disposable {
    cam: Camera3D;
    batch: VertexBatch3D;
    projector: PlaneBatch3D;
    mat: Mat3D;
    buffer: FrameBuffer;
    bloom: Bloom;
    atmosphere: Mesh;
    skybox: CubemapMesh;
    plane: Sector;
}

class Bloom {
    blurPasses: number;
    blending: boolean;
    threshold: number;
    bloomIntesity: number;
    originalIntesity: number;
}

class FrameBuffer extends GLFrameBuffer<Texture> {
    textureAttachments: Seq<Texture>;
    texture: Texture;
}

class ObjectMap<K, V> extends Iterable<ObjectMap_Entry<K, V>> {
    size: number;
    empty: boolean;
}

class MapEditorDialog extends Dialog, Disposable {
    view: MapView;
    generateDialog: MapGenerateDialog;
}

class LogicDialog extends BaseDialog {
    canvas: LCanvas;
}

class Cursor extends Disposable {
}

class Tiles extends Iterable<Tile> {
    width: number;
    height: number;
}

class WorldContext {
    map: boolean;
    sector: Sector;
    generating: boolean;
}

class Player extends Drawc, Entityc, Playerc, Posc, Syncc, Timerc {
    admin: boolean;
    boosting: boolean;
    color: Color;
    mouseX: number;
    mouseY: number;
    name: string;
    shooting: boolean;
    typing: boolean;
}

class Tile extends Position, QuadTreeObject, Displayable {
    data: number;
    build: Building;
    editorTile: boolean;
    flammability: number;
    center: boolean;
    teamID: number;
    darkened: boolean;
    block: Block;
    floor: Floor;
    overlay: Block;
    floorNet: Block;
    overlayID: number;
    overlayNet: Block;
    floorUnder: Floor;
    team: Team;
    overlayQuiet: Block;
    net: Block;
}

class Unit extends Boundedc, Builderc, Drawc, Entityc, Flyingc, Healthc, Hitboxc, Itemsc, Minerc, Physicsc, Posc, Rotc, Shieldc, Statusc, Syncc, Teamc, Unitc, Velc, Weaponsc {
    abilities: Ability[];
    ammo: number;
    elevation: number;
    flag: number;
    health: number;
    isShooting: boolean;
    mineTile: Tile;
    mounts: WeaponMount[];
    plans: Queue<BuildPlan>;
    rotation: number;
    shield: number;
    spawnedByCore: boolean;
    stack: ItemStack;
    team: Team;
    type: UnitType;
    updateBuilding: boolean;
    vel: Vec2;
}

class Building extends Buildingc, Entityc, Healthc, Posc, Teamc, Timerc {
    health: number;
    items: ItemModule;
    liquids: LiquidModule;
    power: PowerModule;
    team: Team;
}

class Bullet extends Poolable, Bulletc, Damagec, Drawc, Entityc, Hitboxc, Ownerc, Posc, Shielderc, Teamc, Timedc, Timerc, Velc {
    collided: IntSeq;
    damage: number;
    data: any;
    fdata: number;
    lifetime: number;
    owner: Entityc;
    team: Team;
    time: number;
    type: BulletType;
    vel: Vec2;
}

class Host {
    name: string;
    address: string;
    mapname: string;
    description: string;
    wave: number;
    players: number;
    playerLimit: number;
    version: number;
    versionType: string;
    mode: Gamemode;
    modeName: string;
    ping: number;
    port: number;
}

class NetConnection {
    address: string;
    uuid: string;
    usid: string;
    mobile: boolean;
    modclient: boolean;
    player: Player;
    kicked: boolean;
    syncTime: number;
    connectTime: number;
    lastReceivedClientSnapshot: number;
    snapshotsSent: number;
    lastReceivedClientTime: number;
    rejectedRequests: Seq<BuildPlan>;
    hasConnected: boolean;
    hasBegunConnecting: boolean;
    hasDisconnected: boolean;
    viewWidth: number;
    viewHeight: number;
    viewX: number;
    viewY: number;
    connected: boolean;
}

class ConnectPacket extends Packet {
    version: number;
    versionType: string;
    mods: Seq<string>;
    name: string;
    locale: string;
    uuid: string;
    usid: string;
    mobile: boolean;
    color: number;
}

class CoreBuild extends Building {
    storageCapacity: number;
    noEffect: boolean;
    lastDamage: Team;
    iframes: number;
    thrusterTime: number;
}

class Item extends UnlockableContent, Senseable {
    color: Color;
    explosiveness: number;
    flammability: number;
    radioactivity: number;
    charge: number;
    hardness: number;
    cost: number;
    healthScaling: number;
    lowPriority: boolean;
    frames: number;
    transitionFrames: number;
    frameTime: number;
    buildable: boolean;
}

class ItemStack extends Comparable<ItemStack> {
    item: Item;
    amount: number;
}

class UnlockableContent extends MappableContent {
    stats: Stats;
    localizedName: string;
    description: string;
    details: string;
    alwaysUnlocked: boolean;
    inlineDescription: boolean;
    hideDetails: boolean;
    generateIcons: boolean;
    iconId: number;
    uiIcon: TextureRegion;
    fullIcon: TextureRegion;
    techNode: TechNode;
    hidden: boolean;
}

class CustomChunk {
}

class ClassLoader {
}

class UncaughtExceptionHandler {
}

class ThreadGroup extends UncaughtExceptionHandler {
    parent: ThreadGroup;
    name: string;
    maxPriority: number;
    /**
     * @deprecated since 16, for removal
     */
    destroyed: boolean;
    /**
     * @deprecated since 16, for removal
     */
    daemon: boolean;
}

class StackTraceElement extends Serializable {
    classLoaderName: string;
    moduleName: string;
    moduleVersion: string;
    methodName: string;
    fileName: string;
    lineNumber: number;
    nativeMethod: boolean;
    className: string;
}

class Thread extends Runnable {
    name: string;
    priority: number;
    daemon: boolean;
    interrupted: boolean;
    contextClassLoader: ClassLoader;
    uncaughtExceptionHandler: UncaughtExceptionHandler;
    threadGroup: ThreadGroup;
    stackTrace: StackTraceElement[];
    alive: boolean;
    id: number;
    state: State;
}

class ObjectIntMap<K> extends Iterable<IntMap_Entry<K>> {
    size: number;
    empty: boolean;
}

class Block extends UnlockableContent, Senseable {
    hasItems: boolean;
    hasLiquids: boolean;
    hasPower: boolean;
    outputsLiquid: boolean;
    consumesPower: boolean;
    outputsPower: boolean;
    conductivePower: boolean;
    outputsPayload: boolean;
    acceptsPayload: boolean;
    acceptsItems: boolean;
    separateItemCapacity: boolean;
    itemCapacity: number;
    liquidCapacity: number;
    liquidPressure: number;
    outputFacing: boolean;
    noSideBlend: boolean;
    displayFlow: boolean;
    inEditor: boolean;
    lastConfig: any;
    saveConfig: boolean;
    copyConfig: boolean;
    clearOnDoubleTap: boolean;
    update: boolean;
    destructible: boolean;
    unloadable: boolean;
    isDuct: boolean;
    allowResupply: boolean;
    solid: boolean;
    solidifes: boolean;
    teamPassable: boolean;
    underBullets: boolean;
    rotate: boolean;
    rotateDraw: boolean;
    invertFlip: boolean;
    variants: number;
    drawArrow: boolean;
    drawTeamOverlay: boolean;
    saveData: boolean;
    breakable: boolean;
    rebuildable: boolean;
    privileged: boolean;
    requiresWater: boolean;
    placeableLiquid: boolean;
    placeablePlayer: boolean;
    placeableOn: boolean;
    insulated: boolean;
    squareSprite: boolean;
    absorbLasers: boolean;
    enableDrawStatus: boolean;
    drawDisabled: boolean;
    autoResetEnabled: boolean;
    noUpdateDisabled: boolean;
    updateInUnits: boolean;
    alwaysUpdateInUnits: boolean;
    useColor: boolean;
    itemDrop: Item;
    playerUnmineable: boolean;
    attributes: Attributes;
    scaledHealth: number;
    health: number;
    armor: number;
    baseExplosiveness: number;
    destroyBullet: BulletType;
    drawCracks: boolean;
    createRubble: boolean;
    floating: boolean;
    size: number;
    offset: number;
    sizeOffset: number;
    clipSize: number;
    placeOverlapRange: number;
    crushDamageMultiplier: number;
    timers: number;
    cacheLayer: CacheLayer;
    fillsTile: boolean;
    forceDark: boolean;
    alwaysReplace: boolean;
    replaceable: boolean;
    group: BlockGroup;
    flags: EnumSet<BlockFlag>;
    priority: number;
    unitCapModifier: number;
    configurable: boolean;
    commandable: boolean;
    allowConfigInventory: boolean;
    logicConfigurable: boolean;
    consumesTap: boolean;
    drawLiquidLight: boolean;
    envRequired: number;
    envEnabled: number;
    envDisabled: number;
    sync: boolean;
    conveyorPlacement: boolean;
    allowDiagonal: boolean;
    swapDiagonalPlacement: boolean;
    schematicPriority: number;
    mapColor: Color;
    hasColor: boolean;
    targetable: boolean;
    attacks: boolean;
    suppressable: boolean;
    canOverdrive: boolean;
    outlineColor: Color;
    outlineIcon: boolean;
    outlineRadius: number;
    outlinedIcon: number;
    hasShadow: boolean;
    customShadow: boolean;
    placePitchChange: boolean;
    breakPitchChange: boolean;
    placeSound: Sound;
    breakSound: Sound;
    destroySound: Sound;
    albedo: number;
    lightColor: Color;
    emitLight: boolean;
    lightRadius: number;
    fogRadius: number;
    loopSound: Sound;
    loopSoundVolume: number;
    ambientSound: Sound;
    ambientSoundVolume: number;
    requirements: ItemStack[];
    category: Category;
    buildCost: number;
    buildVisibility: BuildVisibility;
    buildCostMultiplier: number;
    deconstructThreshold: number;
    instantDeconstruct: boolean;
    breakEffect: Effect;
    destroyEffect: Effect;
    researchCostMultiplier: number;
    researchCostMultipliers: ObjectFloatMap<Item>;
    researchCost: ItemStack[];
    instantTransfer: boolean;
    quickRotate: boolean;
    subclass: Class<any>;
    selectScroll: number;
    buildType: Prov<Building>;
    configurations: ObjectMap<Class<any>, Cons2<any, any>>;
    itemFilter: boolean[];
    liquidFilter: boolean[];
    consumers: Consume[];
    optionalConsumers: Consume[];
    nonOptionalConsumers: Consume[];
    updateConsumers: Consume[];
    hasConsumers: boolean;
    consPower: ConsumePower;
    generatedIcons: TextureRegion[];
    regionRotated1: number;
    regionRotated2: number;
    region: TextureRegion;
    editorIcon: TextureRegion;
    customShadowRegion: TextureRegion;
    teamRegion: TextureRegion;
    teamRegions: TextureRegion[];
    variantRegions: TextureRegion[];
    variantShadowRegions: TextureRegion[];
    static: boolean;
    accessible: boolean;
    multiblock: boolean;
    edges: Point2[];
    insideEdges: Point2[];
    floor: boolean;
    overlay: boolean;
    placeable: boolean;
    air: boolean;
    visible: boolean;
}

class Point2 {
    x: number;
    y: number;
}

class UnitType extends UnlockableContent {
    envRequired: number;
    envEnabled: number;
    envDisabled: number;
    speed: number;
    boostMultiplier: number;
    rotateSpeed: number;
    baseRotateSpeed: number;
    drag: number;
    accel: number;
    hitSize: number;
    stepShake: number;
    rippleScale: number;
    riseSpeed: number;
    fallSpeed: number;
    missileAccelTime: number;
    health: number;
    armor: number;
    range: number;
    maxRange: number;
    mineRange: number;
    buildRange: number;
    crashDamageMultiplier: number;
    dpsEstimate: number;
    clipSize: number;
    drownTimeMultiplier: number;
    strafePenalty: number;
    researchCostMultiplier: number;
    groundLayer: number;
    payloadCapacity: number;
    buildSpeed: number;
    aimDst: number;
    buildBeamOffset: number;
    targetPriority: number;
    shadowElevation: number;
    shadowElevationScl: number;
    engineOffset: number;
    engineSize: number;
    engineLayer: number;
    itemOffsetY: number;
    lightRadius: number;
    lightOpacity: number;
    fogRadius: number;
    waveTrailX: number;
    waveTrailY: number;
    trailScl: number;
    isEnemy: boolean;
    flying: boolean;
    targetAir: boolean;
    targetGround: boolean;
    faceTarget: boolean;
    circleTarget: boolean;
    canBoost: boolean;
    logicControllable: boolean;
    playerControllable: boolean;
    allowedInPayloads: boolean;
    hittable: boolean;
    killable: boolean;
    targetable: boolean;
    vulnerableWithPayloads: boolean;
    pickupUnits: boolean;
    physics: boolean;
    canDrown: boolean;
    useUnitCap: boolean;
    coreUnitDock: boolean;
    createWreck: boolean;
    createScorch: boolean;
    lowAltitude: boolean;
    rotateToBuilding: boolean;
    allowLegStep: boolean;
    legPhysicsLayer: boolean;
    hovering: boolean;
    omniMovement: boolean;
    rotateMoveFirst: boolean;
    healFlash: boolean;
    canHeal: boolean;
    singleTarget: boolean;
    forceMultiTarget: boolean;
    canAttack: boolean;
    internal: boolean;
    naval: boolean;
    alwaysCreateOutline: boolean;
    squareShape: boolean;
    drawBuildBeam: boolean;
    drawCell: boolean;
    drawItems: boolean;
    drawShields: boolean;
    drawBody: boolean;
    aiController: Prov<UnitController>;
    controller: Func<Unit, UnitController>;
    _constructor: Prov<Unit>;
    abilities: Seq<Ability>;
    weapons: Seq<Weapon>;
    immunities: ObjectSet<StatusEffect>;
    healColor: Color;
    lightColor: Color;
    deathSound: Sound;
    fallEffect: Effect;
    fallEngineEffect: Effect;
    deathExplosionEffect: Effect;
    treadEffect: Effect;
    parts: Seq<DrawPart>;
    engines: Seq<UnitEngine>;
    useEngineElevation: boolean;
    engineColor: Color;
    engineColorInner: Color;
    trailLength: number;
    trailColor: Color;
    pathCost: PathCost;
    sample: Unit;
    targetFlags: BlockFlag[];
    commands: UnitCommand[];
    defaultCommand: UnitCommand;
    outlineColor: Color;
    outlineRadius: number;
    outlines: boolean;
    itemCapacity: number;
    ammoCapacity: number;
    ammoType: AmmoType;
    mineTier: number;
    mineSpeed: number;
    mineWalls: boolean;
    mineFloor: boolean;
    mineHardnessScaling: boolean;
    mineSound: Sound;
    mineSoundVolume: number;
    mineItems: Seq<Item>;
    legCount: number;
    legGroupSize: number;
    legLength: number;
    legSpeed: number;
    legForwardScl: number;
    legBaseOffset: number;
    legMoveSpace: number;
    legExtension: number;
    legPairOffset: number;
    legLengthScl: number;
    legStraightLength: number;
    legMaxLength: number;
    legMinLength: number;
    legSplashDamage: number;
    legSplashRange: number;
    baseLegStraightness: number;
    legStraightness: number;
    lockLegBase: boolean;
    legContinuousMove: boolean;
    flipBackLegs: boolean;
    flipLegSide: boolean;
    mechLandShake: number;
    mechSideSway: number;
    mechFrontSway: number;
    mechStride: number;
    mechStepParticles: boolean;
    mechLegColor: Color;
    treadRects: Rect[];
    treadFrames: number;
    treadPullOffset: number;
    segments: number;
    segmentMag: number;
    segmentScl: number;
    segmentPhase: number;
    segmentRotSpeed: number;
    segmentMaxRot: number;
    crawlSlowdown: number;
    crushDamage: number;
    crawlSlowdownFrac: number;
    lifetime: number;
    homingDelay: number;
    baseRegion: TextureRegion;
    legRegion: TextureRegion;
    region: TextureRegion;
    previewRegion: TextureRegion;
    shadowRegion: TextureRegion;
    cellRegion: TextureRegion;
    itemCircleRegion: TextureRegion;
    softShadowRegion: TextureRegion;
    jointRegion: TextureRegion;
    footRegion: TextureRegion;
    legBaseRegion: TextureRegion;
    baseJointRegion: TextureRegion;
    outlineRegion: TextureRegion;
    treadRegion: TextureRegion;
    wreckRegions: TextureRegion[];
    segmentRegions: TextureRegion[];
    segmentOutlineRegions: TextureRegion[];
    treadRegions: TextureRegion[][];
    buildTime: number;
    totalRequirements: ItemStack[];
    firstRequirements: ItemStack[];
    banned: boolean;
    enginesMirror: UnitEngine[];
}

class Planet extends UnlockableContent {
    mesh: GenericMesh;
    cloudMesh: GenericMesh;
    position: Vec3;
    grid: PlanetGrid;
    generator: PlanetGenerator;
    sectors: Seq<Sector>;
    orbitSpacing: number;
    radius: number;
    camRadius: number;
    minZoom: number;
    drawOrbit: boolean;
    atmosphereRadIn: number;
    atmosphereRadOut: number;
    clipRadius: number;
    orbitRadius: number;
    totalRadius: number;
    orbitTime: number;
    rotateTime: number;
    orbitOffset: number;
    sectorApproxRadius: number;
    tidalLock: boolean;
    accessible: boolean;
    defaultEnv: number;
    updateLighting: boolean;
    lightSrcFrom: number;
    lightSrcTo: number;
    lightDstFrom: number;
    lightDstTo: number;
    startSector: number;
    sectorSeed: number;
    launchCapacityMultiplier: number;
    bloom: boolean;
    visible: boolean;
    landCloudColor: Color;
    lightColor: Color;
    atmosphereColor: Color;
    hasAtmosphere: boolean;
    allowLaunchSchematics: boolean;
    allowLaunchLoadout: boolean;
    allowWaveSimulation: boolean;
    allowSectorInvasion: boolean;
    clearSectorOnLose: boolean;
    enemyCoreSpawnReplace: boolean;
    prebuildBase: boolean;
    allowWaves: boolean;
    defaultCore: Block;
    ruleSetter: Cons<Rules>;
    parent: Planet;
    solarSystem: Planet;
    children: Seq<Planet>;
    techTree: TechNode;
    launchCandidates: Seq<Planet>;
    hiddenItems: Seq<Item>;
    unlockedOnLand: Seq<UnlockableContent>;
    meshLoader: Prov<GenericMesh>;
    cloudMeshLoader: Prov<GenericMesh>;
    rotation: number;
    orbitAngle: number;
    lastSector: Sector;
    landable: boolean;
    lightNormal: Vec3;
}

class SectorPreset extends UnlockableContent {
    generator: FileMapGenerator;
    planet: Planet;
    sector: Sector;
    captureWave: number;
    rules: Cons<Rules>;
    difficulty: number;
    startWaveTimeMultiplier: number;
    addStartingItems: boolean;
    showSectorLandInfo: boolean;
    attackAfterWaves: boolean;
}

class WeatherEntry {
    weather: Weather;
    minFrequency: number;
    maxFrequency: number;
    minDuration: number;
    maxDuration: number;
    cooldown: number;
    intensity: number;
    always: boolean;
}

class ObjectSet<T> extends Iterable<T>, Eachable<T> {
    size: number;
    empty: boolean;
}

class StringMap extends ObjectMap<string, string> {
}

class PlanetParams {
    camPos: Vec3;
    otherCamPos: Vec3;
    otherCamAlpha: number;
    camUp: Vec3;
    camDir: Vec3;
    solarSystem: Planet;
    planet: Planet;
    zoom: number;
    uiAlpha: number;
    drawUi: boolean;
    drawSkybox: boolean;
}

class JsonSerializable {
}

class SaveMeta {
    version: number;
    build: number;
    timestamp: number;
    timePlayed: number;
    map: MindustryMap;
    wave: number;
    rules: Rules;
    tags: StringMap;
    mods: string[];
}

class Publishable {
    steamID: string;
}

class CoreBlock extends StorageBlock {
    thruster1: TextureRegion;
    thruster2: TextureRegion;
    thrusterLength: number;
    isFirstTier: boolean;
    incinerateNonBuildable: boolean;
    unitType: UnitType;
    captureInvicibility: number;
}

class ItemSeq extends Iterable<ItemStack>, JsonSerializable {
    total: number;
}

class StatusEffect extends UnlockableContent {
    damageMultiplier: number;
    healthMultiplier: number;
    speedMultiplier: number;
    reloadMultiplier: number;
    buildSpeedMultiplier: number;
    dragMultiplier: number;
    transitionDamage: number;
    disarm: boolean;
    damage: number;
    effectChance: number;
    parentizeEffect: boolean;
    permanent: boolean;
    reactive: boolean;
    show: boolean;
    color: Color;
    effect: Effect;
    affinities: ObjectSet<StatusEffect>;
    opposites: ObjectSet<StatusEffect>;
    outline: boolean;
}

class Cloneable {
}

class RtsAI {
}

class Queue<T> extends Iterable<T>, Eachable<T> {
    size: number;
    values: T[];
    empty: boolean;
}

class QuadTree<T> {
    bounds: Rect;
    objects: Seq<T>;
    botLeft: QuadTree<T>;
    botRight: QuadTree<T>;
    topLeft: QuadTree<T>;
    topRight: QuadTree<T>;
    leaf: boolean;
    totalObjects: number;
}

class IntSet {
    size: number;
    empty: boolean;
}

class RuntimeException extends Exception {
}

class MapProvider {
}

class Liquid extends UnlockableContent, Senseable {
    gas: boolean;
    color: Color;
    gasColor: Color;
    barColor: Color;
    lightColor: Color;
    flammability: number;
    temperature: number;
    heatCapacity: number;
    viscosity: number;
    explosiveness: number;
    coolant: boolean;
    moveThroughBlocks: boolean;
    incinerable: boolean;
    effect: StatusEffect;
    particleEffect: Effect;
    particleSpacing: number;
    boilPoint: number;
    capPuddles: boolean;
    vaporEffect: Effect;
    animationFrame: number;
}

class PlanetclassRenderer {
}

class TechTreeNode extends TreeNode<TechTreeNode> {
    children: TechTreeNode[];
    parent: TechTreeNode;
    node: TechNode;
    visible: boolean;
    selectable: boolean;
}

class TechNode {
    depth: number;
    icon: Drawable;
    name: string;
    requiresUnlock: boolean;
    parent: TechNode;
    researchCostMultipliers: ObjectFloatMap<Item>;
    content: UnlockableContent;
    requirements: ItemStack[];
    finishedRequirements: ItemStack[];
    objectives: Seq<Objective>;
    children: Seq<TechNode>;
    upRequirements: ItemStack[];
}

class View extends Group {
    panX: number;
    panY: number;
    lastZoom: number;
    moved: boolean;
    hoverNode: ImageButton;
    infoTable: Table;
}

class SettingsTable extends Table {
    settings: Seq<Setting>;
}

class SettingsCategory {
    name: string;
    icon: Drawable;
    builder: Cons<SettingsTable>;
    table: SettingsTable;
}

class Hint {
}

class Rand extends Random {
    seed0: number;
    seed1: number;
}

class OrderedMap<K, V> extends ObjectMap<K, V> {
}

class Axis extends KeybindValue {
    min: KeyCode;
    max: KeyCode;
    key: KeyCode;
}

class Serializable {
}

class BaseJsonWriter extends Closeable {
}

class GenericDeclaration extends AnnotatedElement {
    typeParameters: TypeVariable<any>[];
}

class Type {
    typeName: string;
}

class AnnotatedElement {
    annotations: Annotation[];
    declaredAnnotations: Annotation[];
}

class Constable {
}

class Callable<V> {
}

class GLTexture extends Disposable {
    glTarget: number;
    width: number;
    height: number;
    minFilter: TextureFilter;
    magFilter: TextureFilter;
    depth: number;
    textureObjectHandle: number;
    uwrap: TextureWrap;
    vwrap: TextureWrap;
}

class Glyph {
    id: number;
    srcX: number;
    srcY: number;
    width: number;
    height: number;
    u: number;
    v: number;
    u2: number;
    v2: number;
    xoffset: number;
    yoffset: number;
    xadvance: number;
    kerning: any[];
    fixedWidth: boolean;
    page: number;
}

class I18NBundle {
    parent: I18NBundle;
    locale: Locale;
    properties: ObjectMap<string, string>;
    keys: Iterable<string>;
}

class AudioFilter {
}

class AudioSource extends Disposable {
}

class Pixmap extends Disposable {
    width: number;
    height: number;
    pixels: ByteBuffer;
    glformat: number;
    gltype: number;
    glinternalFormat: number;
}

class Shader extends Disposable {
    uniforms: string[];
    attributes: string[];
    vertexShaderSource: string;
    fragmentShaderSource: string;
    log: string;
    compiled: boolean;
}

class AudioBus extends AudioSource {
    id: number;
    volume: number;
    filter: AudioFilter;
}

class TextureAtlas extends Disposable {
    textures: ObjectSet<Texture>;
    regions: Seq<AtlasRegion>;
    pixmaps: ObjectMap<Texture, Pixmap>;
    regionMap: ObjectMap<string, AtlasRegion>;
    drawableScale: number;
    errorRegion: string;
}

class Position {
    x: number;
    y: number;
}

class Shape2D {
}

class Mat {
    val: number[];
    rotationRad: number;
    rotation: number;
    values: number[];
    toRotation: number;
    toScaling: Vec2;
    toRotationRad: number;
    toTranslation: Vec2;
}

class GestureListener {
}

class AbstractStringBuilder extends Appendable, CharSequence {
}

class GlyphRun extends Poolable {
    color: Color;
    glyphs: Seq<Glyph>;
    xAdvances: FloatSeq;
    x: number;
    y: number;
    width: number;
}

class Iterable<T> {
}

class ContextFactory {
    sealed: boolean;
    applicationClassLoader: ClassLoader;
}

class ErrorReporter {
}

class WrapFactory {
    javaPrimitiveWrap: boolean;
}

class Debugger {
}

class ClassShutter {
}

class ModContentInfo {
    mod: LoadedMod;
    sourceFile: Fi;
    error: string;
    baseError: Throwable;
}

class Mod {
    config: Fi;
}

class ModMeta {
    name: string;
    minGameVersion: string;
    displayName: string;
    author: string;
    description: string;
    subtitle: string;
    version: string;
    main: string;
    repo: string;
    dependencies: Seq<string>;
    hidden: boolean;
    java: boolean;
    keepOutlines: boolean;
    minMajor: number;
}

class Interval {
    times: number[];
}

class PlaceLine {
    x: number;
    y: number;
    rotation: number;
    last: boolean;
}

class BuildPlan extends Position, QuadTreeObject {
    rotation: number;
    block: Block;
    breaking: boolean;
    config: any;
    originalX: number;
    originalY: number;
    originalWidth: number;
    originalHeight: number;
    progress: number;
    initialized: boolean;
    worldContext: boolean;
    stuck: boolean;
    cachedValid: boolean;
    animScale: number;
}

class SectorRect {
    center: Vec3;
    top: Vec3;
    right: Vec3;
    result: Vec3;
    radius: number;
    rotation: number;
}

class Plane {
    normal: Vec3;
    d: number;
}

class Ptile {
    id: number;
    edgeCount: number;
    tiles: Ptile[];
    corners: Corner[];
    edges: Edge[];
    v: Vec3;
}

class ChatFilter {
}

class ActionFilter {
}

class PlayerInfo {
    id: string;
    lastName: string;
    lastIP: string;
    ips: Seq<string>;
    names: Seq<string>;
    adminUsid: string;
    timesKicked: number;
    timesJoined: number;
    banned: boolean;
    admin: boolean;
    lastKicked: number;
}

class Command {
    text: string;
    paramText: string;
    description: string;
    params: CommandParam[];
}

class FloorRenderer {
}

class Camera3D {
    fov: number;
    near: number;
    far: number;
    perspective: boolean;
    width: number;
    height: number;
    position: Vec3;
    direction: Vec3;
    up: Vec3;
    combined: Mat3D;
    projection: Mat3D;
    view: Mat3D;
    invProjectionView: Mat3D;
    frustum: Frustum;
    mouseRay: Ray;
}

class VertexBatch3D {
    maxVertices: number;
    numVertices: number;
    shader: Shader;
}

class PlaneBatch3D extends Batch {
    sortAscending: boolean;
    blending: Blending;
    shader: Shader;
    color: Color;
    mixColor: Color;
    scaling: number;
    transform: Mat;
    packedMixColor: number;
    packedColor: number;
    projection: Mat;
    sort: boolean;
}

class Mat3D {
    val: number[];
    scaleX: number;
    scaleYSquared: number;
    scaleXSquared: number;
    scaleZSquared: number;
    scaleZ: number;
    scaleY: number;
    values: number[];
}

class Mesh extends Disposable {
    vertexSize: number;
    attributes: VertexAttribute[];
    vertices: VertexData;
    indices: IndexData;
    numIndices: number;
    indicesBuffer: ShortBuffer;
    numVertices: number;
    maxVertices: number;
    maxIndices: number;
    verticesBuffer: FloatBuffer;
    autoBind: boolean;
}

class CubemapMesh extends Disposable {
    cubemap: Cubemap;
}

class MapView extends Element, GestureListener {
    tool: EditorTool;
    grid: boolean;
}

class MapGenerateDialog extends BaseDialog {
}

class LCanvas extends Table {
    statements: DragLayout;
    pane: ScrollPane;
    jumps: Group;
}

class Drawc extends Entityc, Posc {
}

class Entityc {
    null: boolean;
    local: boolean;
    added: boolean;
    remote: boolean;
}

class Playerc extends UnitController, Drawc, Entityc, Posc, Syncc, Timerc {
    builder: boolean;
    info: PlayerInfo;
}

class Posc extends Position, Entityc {
}

class Syncc extends Entityc {
}

class Timerc extends Entityc {
}

class Floor extends Block {
    edge: string;
    speedMultiplier: number;
    dragMultiplier: number;
    damageTaken: number;
    drownTime: number;
    walkEffect: Effect;
    walkSound: Sound;
    walkSoundVolume: number;
    walkSoundPitchMin: number;
    walkSoundPitchMax: number;
    drownUpdateEffect: Effect;
    status: StatusEffect;
    statusDuration: number;
    liquidDrop: Liquid;
    liquidMultiplier: number;
    isLiquid: boolean;
    overlayAlpha: number;
    supportsOverlay: boolean;
    shallow: boolean;
    blendGroup: Block;
    oreDefault: boolean;
    oreScale: number;
    oreThreshold: number;
    wall: Block;
    decoration: Block;
    canShadow: boolean;
    needsSurface: boolean;
    allowCorePlacement: boolean;
    wallOre: boolean;
    blendId: number;
    deep: boolean;
}

class QuadTreeObject {
}

class Ability extends Cloneable {
    display: boolean;
    data: number;
}

class WeaponMount {
    weapon: Weapon;
    reload: number;
    rotation: number;
    recoil: number;
    targetRotation: number;
    heat: number;
    warmup: number;
    charging: boolean;
    charge: number;
    smoothReload: number;
    aimX: number;
    aimY: number;
    shoot: boolean;
    rotate: boolean;
    side: boolean;
    totalShots: number;
    bullet: Bullet;
    sound: SoundLoop;
    target: Teamc;
    retarget: number;
}

class Boundedc extends Entityc, Flyingc, Healthc, Hitboxc, Posc, Velc {
}

class Builderc extends Entityc, Flyingc, Healthc, Hitboxc, Posc, Rotc, Statusc, Teamc, Velc {
    building: boolean;
}

class Flyingc extends Entityc, Healthc, Hitboxc, Posc, Velc {
    flying: boolean;
    grounded: boolean;
}

class Healthc extends Entityc, Posc {
    valid: boolean;
}

class Hitboxc extends QuadTreeObject, Sized, Entityc, Posc {
}

class Itemsc extends Entityc, Posc {
}

class Minerc extends Drawc, Entityc, Itemsc, Posc, Rotc, Teamc {
}

class Physicsc extends Entityc, Flyingc, Healthc, Hitboxc, Posc, Velc {
}

class Rotc extends Entityc {
}

class Shieldc extends Entityc, Healthc, Posc {
}

class Statusc extends Entityc, Flyingc, Healthc, Hitboxc, Posc, Velc {
    boss: boolean;
}

class Teamc extends Entityc, Posc {
}

class Unitc extends Boundedc, Builderc, Drawc, Entityc, Flyingc, Healthc, Hitboxc, Itemsc, Minerc, Physicsc, Posc, Rotc, Shieldc, Statusc, Syncc, Teamc, Velc, Weaponsc, Ranged, Senseable, Displayable {
    controllerName: string;
    enemy: boolean;
    commandable: boolean;
    player: Player;
    ai: boolean;
}

class Velc extends Entityc, Posc {
}

class Weaponsc extends Entityc, Flyingc, Healthc, Hitboxc, Posc, Rotc, Statusc, Teamc, Velc {
    shooting: boolean;
    rotate: boolean;
}

class ItemModule extends BlockModule {
}

class LiquidModule extends BlockModule {
}

class PowerModule extends BlockModule {
    status: number;
    init: boolean;
    graph: PowerGraph;
    links: IntSeq;
}

class Payload extends Position {
}

class PayloadSeq {
    empty: boolean;
}

class Buildingc extends QuadTreeObject, Sized, Entityc, Healthc, Posc, Teamc, Timerc, Controllable, Senseable, Displayable {
    payload: Payload;
    displayName: string;
    displayIcon: TextureRegion;
    cursor: Cursor;
    displayEfficiency: number;
    healSuppressed: boolean;
    commandPosition: Vec2;
    insulated: boolean;
    powerProduction: number;
    payloads: PayloadSeq;
}

class IntSeq {
    items: number[];
    size: number;
    ordered: boolean;
    empty: boolean;
}

class BulletType extends Content, Cloneable {
    lifetime: number;
    speed: number;
    damage: number;
    hitSize: number;
    drawSize: number;
    drag: number;
    pierce: boolean;
    pierceBuilding: boolean;
    pierceCap: number;
    removeAfterPierce: boolean;
    laserAbsorb: boolean;
    optimalLifeFract: number;
    layer: number;
    hitEffect: Effect;
    despawnEffect: Effect;
    shootEffect: Effect;
    chargeEffect: Effect;
    smokeEffect: Effect;
    hitSound: Sound;
    despawnSound: Sound;
    hitSoundPitch: number;
    hitSoundVolume: number;
    inaccuracy: number;
    ammoMultiplier: number;
    reloadMultiplier: number;
    buildingDamageMultiplier: number;
    recoil: number;
    killShooter: boolean;
    instantDisappear: boolean;
    splashDamage: number;
    scaledSplashDamage: boolean;
    knockback: number;
    impact: boolean;
    status: StatusEffect;
    statusDuration: number;
    collidesTiles: boolean;
    collidesTeam: boolean;
    collidesAir: boolean;
    collidesGround: boolean;
    collides: boolean;
    collideFloor: boolean;
    collideTerrain: boolean;
    keepVelocity: boolean;
    scaleLife: boolean;
    hittable: boolean;
    reflectable: boolean;
    absorbable: boolean;
    backMove: boolean;
    maxRange: number;
    rangeOverride: number;
    rangeChange: number;
    range: number;
    healPercent: number;
    healAmount: number;
    makeFire: boolean;
    despawnHit: boolean;
    fragOnHit: boolean;
    pierceArmor: boolean;
    setDefaults: boolean;
    hitShake: number;
    despawnShake: number;
    fragBullet: BulletType;
    fragRandomSpread: number;
    fragSpread: number;
    fragAngle: number;
    fragBullets: number;
    fragVelocityMin: number;
    fragVelocityMax: number;
    fragLifeMin: number;
    fragLifeMax: number;
    intervalBullet: BulletType;
    bulletInterval: number;
    intervalBullets: number;
    intervalRandomSpread: number;
    intervalSpread: number;
    intervalAngle: number;
    hitColor: Color;
    healColor: Color;
    healEffect: Effect;
    spawnBullets: Seq<BulletType>;
    spawnUnit: UnitType;
    despawnUnit: UnitType;
    despawnUnitCount: number;
    despawnUnitRadius: number;
    trailColor: Color;
    trailChance: number;
    trailInterval: number;
    trailEffect: Effect;
    trailParam: number;
    trailRotation: boolean;
    trailInterp: Interp;
    trailLength: number;
    trailWidth: number;
    trailSinMag: number;
    trailSinScl: number;
    splashDamageRadius: number;
    incendAmount: number;
    incendSpread: number;
    incendChance: number;
    homingPower: number;
    homingRange: number;
    homingDelay: number;
    suppressionRange: number;
    suppressionDuration: number;
    suppressionEffectChance: number;
    lightningColor: Color;
    lightning: number;
    lightningLength: number;
    lightningLengthRand: number;
    lightningDamage: number;
    lightningCone: number;
    lightningAngle: number;
    lightningType: BulletType;
    weaveScale: number;
    weaveMag: number;
    weaveRandom: boolean;
    puddles: number;
    puddleRange: number;
    puddleAmount: number;
    puddleLiquid: Liquid;
    displayAmmoMultiplier: boolean;
    lightRadius: number;
    lightOpacity: number;
    lightColor: Color;
}

class Bulletc extends Damagec, Drawc, Entityc, Hitboxc, Ownerc, Posc, Shielderc, Teamc, Timedc, Timerc, Velc {
}

class Damagec extends Entityc {
}

class Ownerc extends Entityc {
}

class Shielderc extends Damagec, Entityc, Posc, Teamc {
}

class Timedc extends Scaled, Entityc {
}

class Packet {
    priority: number;
}

class Stats {
    useCategories: boolean;
    intialized: boolean;
    timePeriod: number;
}

class Senseable {
}

class CacheLayer {
    id: number;
}

class EnumSet<T> {
    array: T[];
    size: number;
}

class Effect {
    id: number;
    renderer: Cons<EffectContainer>;
    lifetime: number;
    clip: number;
    startDelay: number;
    baseRotation: number;
    followParent: boolean;
    rotWithParent: boolean;
    layer: number;
    layerDuration: number;
}

class ObjectFloatMap<K> extends Iterable<FloatMap_Entry<K>> {
    size: number;
    empty: boolean;
}

class Consume {
    optional: boolean;
    booster: boolean;
    update: boolean;
}

class ConsumePower extends Consume {
    usage: number;
    capacity: number;
    buffered: boolean;
}

class Eachable<T> {
}

class UnitController {
    validController: boolean;
}

class Weapon extends Cloneable {
    name: string;
    bullet: BulletType;
    ejectEffect: Effect;
    useAmmo: boolean;
    mirror: boolean;
    flipSprite: boolean;
    alternate: boolean;
    rotate: boolean;
    baseRotation: number;
    top: boolean;
    continuous: boolean;
    alwaysContinuous: boolean;
    controllable: boolean;
    autoTarget: boolean;
    predictTarget: boolean;
    targetInterval: number;
    targetSwitchInterval: number;
    rotateSpeed: number;
    reload: number;
    inaccuracy: number;
    shake: number;
    recoil: number;
    recoilTime: number;
    recoilPow: number;
    cooldownTime: number;
    shootX: number;
    shootY: number;
    x: number;
    y: number;
    xRand: number;
    shoot: ShootPattern;
    shadow: number;
    velocityRnd: number;
    shootCone: number;
    rotationLimit: number;
    minWarmup: number;
    shootWarmupSpeed: number;
    smoothReloadSpeed: number;
    soundPitchMin: number;
    soundPitchMax: number;
    ignoreRotation: boolean;
    noAttack: boolean;
    minShootVelocity: number;
    parentizeEffects: boolean;
    otherSide: number;
    layerOffset: number;
    shootSound: Sound;
    chargeSound: Sound;
    noAmmoSound: Sound;
    region: TextureRegion;
    heatRegion: TextureRegion;
    cellRegion: TextureRegion;
    outlineRegion: TextureRegion;
    heatColor: Color;
    shootStatus: StatusEffect;
    mountType: Func<Weapon, WeaponMount>;
    shootStatusDuration: number;
    shootOnDeath: boolean;
    parts: Seq<DrawPart>;
}

class DrawPart {
    turretShading: boolean;
    under: boolean;
    weaponIndex: number;
}

class UnitEngine extends Cloneable {
    x: number;
    y: number;
    radius: number;
    rotation: number;
}

class PathCost {
}

class UnitCommand {
    id: number;
    name: string;
    icon: string;
    controller: Func<Unit, AIController>;
}

class AmmoType {
}

class GenericMesh {
}

class PlanetGrid {
    size: number;
    tiles: Ptile[];
    corners: Corner[];
    edges: Edge[];
}

class PlanetGenerator extends BasicGenerator, HexMesher {
    baseSeed: number;
    seed: number;
    sizeScl: number;
}

class FileMapGenerator extends WorldGenerator {
    map: MindustryMap;
    preset: SectorPreset;
}

class Weather extends UnlockableContent {
    duration: number;
    opacityMultiplier: number;
    attrs: Attributes;
    sound: Sound;
    soundVol: number;
    soundVolMin: number;
    soundVolOscMag: number;
    soundVolOscScl: number;
    type: Prov<WeatherState>;
    status: StatusEffect;
    statusDuration: number;
    statusAir: boolean;
    statusGround: boolean;
    active: boolean;
}

class Comparable<T> {
}

class StorageBlock extends Block {
    coreMerge: boolean;
}

class Exception extends Throwable {
}

class Setting {
    name: string;
    title: string;
    description: string;
}

class Random extends RandomGenerator, Serializable {
    seed: number;
}

class Vector<T> {
    zero: boolean;
    unit: boolean;
}

class KeybindValue {
}

class Closeable extends AutoCloseable {
}

class TypeVariable<D> extends Type, AnnotatedElement {
    name: string;
    bounds: Type[];
    genericDeclaration: D;
    annotatedBounds: AnnotatedType[];
}

class Annotation {
}

class OfField<F> extends TypeDescriptor {
    array: boolean;
    primitive: boolean;
}

class ByteBuffer extends Buffer, Comparable<ByteBuffer> {
}

class AtlasRegion extends TextureRegion {
    pixmapRegion: PixmapRegion;
    name: string;
    offsetX: number;
    offsetY: number;
    packedWidth: number;
    packedHeight: number;
    originalWidth: number;
    originalHeight: number;
    rotate: boolean;
    splits: number[];
    pads: number[];
    rotatedPackedHeight: number;
    rotatedPackedWidth: number;
}

class Appendable {
}

class FloatSeq {
    items: number[];
    size: number;
    ordered: boolean;
    empty: boolean;
}

class Corner {
    id: number;
    tiles: Ptile[];
    corners: Corner[];
    edges: Edge[];
    v: Vec3;
}

class Edge {
    id: number;
    tiles: Ptile[];
    corners: Corner[];
}

class CommandParam {
    name: string;
    optional: boolean;
    variadic: boolean;
}

class Frustum {
    planes: Plane[];
    planePoints: Vec3[];
}

class Ray {
    origin: Vec3;
    direction: Vec3;
}

class Blending {
    src: number;
    dst: number;
    srcAlpha: number;
    dstAlpha: number;
}

class Batch extends Disposable {
}

class VertexAttribute {
    components: number;
    normalized: boolean;
    type: number;
    alias: string;
    size: number;
}

class VertexData extends Disposable {
}

class IndexData extends Disposable {
}

class ShortBuffer extends Buffer, Comparable<ShortBuffer> {
}

class FloatBuffer extends Buffer, Comparable<FloatBuffer> {
}

class GLFrameBuffer<T> extends Disposable {
    textureAttachments: Seq<T>;
    framebufferHandle: number;
    width: number;
    height: number;
    texture: T;
    depthBufferHandle: number;
    stencilBufferHandle: number;
    bound: boolean;
}

class ObjectMap_Entry<K, V> {
    key: K;
    value: V;
}

class DragLayout extends WidgetGroup {
}

class SoundLoop {
}

class Sized extends Position {
}

class Ranged extends Posc, Teamc {
}

class BlockModule {
}

class PowerGraph {
    producers: Seq<Building>;
    consumers: Seq<Building>;
    batteries: Seq<Building>;
    all: Seq<Building>;
    powerBalance: number;
    lastPowerProduced: number;
    lastPowerNeeded: number;
    lastPowerStored: number;
    lastScaledPowerIn: number;
    lastScaledPowerOut: number;
    lastCapacity: number;
    id: number;
    batteryStored: number;
    powerProduced: number;
    totalBatteryCapacity: number;
    batteryCapacity: number;
    powerNeeded: number;
    satisfaction: number;
}

class Controllable {
}

class Scaled {
}

class IntMap_Entry<K> {
    key: K;
    value: number;
}

class EffectContainer extends Scaled {
    x: number;
    y: number;
    time: number;
    lifetime: number;
    rotation: number;
    color: Color;
    id: number;
    data: any;
}

class ShootPattern extends Cloneable {
    shots: number;
    firstShotDelay: number;
    shotDelay: number;
}

class AIController extends UnitController {
    closestSpawner: Tile;
}

class BasicGenerator extends WorldGenerator {
    defaultLoadout: Schematic;
}

class HexMesher {
}

class WorldGenerator {
}

class WeatherState extends Poolable, Drawc, Entityc, Posc, Syncc, WeatherStatec {
    effectTimer: number;
    intensity: number;
    life: number;
    opacity: number;
    weather: Weather;
    windVector: Vec2;
}

class TreeNode<T> {
    width: number;
    height: number;
    x: number;
    y: number;
    children: T[];
    parent: T;
    mode: number;
    prelim: number;
    change: number;
    shift: number;
    number: number;
    leaves: number;
    thread: TreeNode<any>;
    ancestor: TreeNode<any>;
    leaf: boolean;
}

class RandomGenerator {
    deprecated: boolean;
}

class AutoCloseable {
}

class AnnotatedType extends AnnotatedElement {
    type: Type;
    annotatedOwnerType: AnnotatedType;
}

class TypeDescriptor {
}

class Buffer {
    direct: boolean;
    readOnly: boolean;
}

class PixmapRegion {
    pixmap: Pixmap;
    x: number;
    y: number;
    width: number;
    height: number;
}

class FloatMap_Entry<K> {
    key: K;
    value: number;
}

class WeatherStatec extends Drawc, Entityc, Posc, Syncc {
}

type FocusListener_FocusEvent_Type = "keyboard" | "scroll";

type InputEventType = "touchDown" | "touchUp" | "touchDragged" | "mouseMoved" | "enter" | "exit" | "scrolled" | "keyDown" | "keyUp" | "keyTyped";

type Touchable = "enabled" | "disabled" | "childrenOnly";

type GameState_State = "paused" | "playing" | "menu";

type Trigger = "shock" | "phaseDeflectHit" | "impactPower" | "thoriumReactorOverheat" | "fireExtinguish" | "acceleratorUse" | "newGame" | "tutorialComplete" | "flameAmmo" | "turretCool" | "enablePixelation" | "exclusionDeath" | "suicideBomb" | "openWiki" | "teamCoreDamage" | "socketConfigChanged" | "update" | "unitCommandChange" | "draw" | "drawOver" | "preDraw" | "postDraw" | "uiDrawBegin" | "uiDrawEnd" | "universeDrawBegin" | "universeDraw" | "universeDrawEnd";

type Gamemode = "survival" | "sandbox" | "attack" | "pvp" | "editor";

type ApplicationType = "android" | "desktop" | "headless" | "web" | "iOS";

type Orientation = "landscape" | "portrait";

type Format = "alpha" | "intensity" | "luminanceAlpha" | "rgb565" | "rgba4444" | "rgb888" | "rgba8888";

type TextureFilter = "nearest" | "linear" | "mipMap" | "mipMapNearestNearest" | "mipMapLinearNearest" | "mipMapNearestLinear" | "mipMapLinearLinear";

type TextureWrap = "mirroredRepeat" | "clampToEdge" | "repeat";

type KeyCode = "controllerA" | "controllerB" | "controllerX" | "controllerY" | "controllerGuide" | "controllerLBumper" | "controllerRBumper" | "controllerBack" | "controllerStart" | "controllerLStick" | "controllerRStick" | "controllerdPadUp" | "controllerdPadDown" | "controllerdPadLeft" | "controllerdPadRight" | "controllerLTrigger" | "controllerRTrigger" | "controllerLStickYAxis" | "controllerLStickXAxis" | "controllerRStickYAxis" | "controllerRStickXAxis" | "mouseLeft" | "mouseRight" | "mouseMiddle" | "mouseBack" | "mouseForward" | "scroll" | "anyKey" | "num0" | "num1" | "num2" | "num3" | "num4" | "num5" | "num6" | "num7" | "num8" | "num9" | "a" | "altLeft" | "altRight" | "apostrophe" | "at" | "b" | "back" | "backslash" | "c" | "call" | "camera" | "clear" | "comma" | "d" | "del" | "backspace" | "forwardDel" | "dpadCenter" | "dpadDown" | "dpadLeft" | "dpadRight" | "dpadUp" | "center" | "down" | "left" | "right" | "up" | "e" | "endcall" | "enter" | "envelope" | "equals" | "explorer" | "f" | "focus" | "g" | "backtick" | "h" | "headsetHook" | "home" | "i" | "j" | "k" | "l" | "leftBracket" | "m" | "mediaFastForward" | "mediaNext" | "mediaPlayPause" | "mediaPrevious" | "mediaRewind" | "mediaStop" | "menu" | "minus" | "mute" | "n" | "notification" | "num" | "o" | "p" | "period" | "plus" | "pound" | "power" | "q" | "r" | "rightBracket" | "s" | "search" | "semicolon" | "shiftLeft" | "shiftRight" | "slash" | "softLeft" | "softRight" | "space" | "star" | "sym" | "t" | "tab" | "u" | "unknown" | "v" | "volumeDown" | "volumeUp" | "w" | "x" | "y" | "z" | "metaAltLeftOn" | "metaAltOn" | "metaAltRightOn" | "metaShiftLeftOn" | "metaShiftOn" | "metaShiftRightOn" | "metaSymOn" | "controlLeft" | "controlRight" | "escape" | "end" | "insert" | "pageUp" | "pageDown" | "pictSymbols" | "switchCharset" | "buttonCircle" | "buttonA" | "buttonB" | "buttonC" | "buttonX" | "buttonY" | "buttonZ" | "buttonL1" | "buttonR1" | "buttonL2" | "buttonR2" | "buttonThumbL" | "buttonThumbR" | "buttonStart" | "buttonSelect" | "buttonMode" | "numpad0" | "numpad1" | "numpad2" | "numpad3" | "numpad4" | "numpad5" | "numpad6" | "numpad7" | "numpad8" | "numpad9" | "colon" | "f1" | "f2" | "f3" | "f4" | "f5" | "f6" | "f7" | "f8" | "f9" | "f10" | "f11" | "f12" | "unset" | "application" | "asterisk" | "capsLock" | "pause" | "printScreen" | "scrollLock";

type AdminAction = "kick" | "ban" | "trace" | "wave";

type State = "NEW" | "RUNNABLE" | "BLOCKED" | "WAITING" | "TIMED_WAITING" | "TERMINATED";

type ShuffleMode = "none" | "all" | "custom" | "builtin";

type Mode = "look" | "select" | "planetLaunch";

type Category = "turret" | "production" | "distribution" | "liquid" | "power" | "defense" | "crafting" | "units" | "effect" | "logic";

type TreeLocation = "top" | "left" | "bottom" | "right";

type TreeAlignment = "center" | "towardsRoot" | "awayFromRoot";

type GlType = "OpenGL" | "GLES" | "WebGL" | "NONE";

type DeviceType = "keyboard" | "controller";

type OutputType = "json" | "javascript" | "minimal";

type ContentType = "item" | "block" | "mech_UNUSED" | "bullet" | "liquid" | "status" | "unit" | "weather" | "effect_UNUSED" | "sector" | "loadout_UNUSED" | "typeid_UNUSED" | "error" | "planet" | "ammo_UNUSED" | "team";

type ModState = "enabled" | "contentErrors" | "missingDependencies" | "unsupported" | "disabled";

type BlockGroup = "none" | "walls" | "projectors" | "turrets" | "transportation" | "power" | "liquids" | "drills" | "units" | "logic" | "payloads";

type BlockFlag = "core" | "storage" | "generator" | "turret" | "factory" | "repair" | "battery" | "reactor" | "extinguisher" | "launchPad" | "unitCargoUnloadPoint" | "unitAssembler" | "hasFogRadius";

type BuildVisibility = "hidden" | "shown" | "debugOnly" | "editorOnly" | "sandboxOnly" | "campaignOnly" | "lightingOnly" | "berylliumOnly" | "ammoOnly" | "fogOnly";

type EditorTool = "zoom" | "pick" | "line" | "pencil" | "eraser" | "fill" | "spray";
