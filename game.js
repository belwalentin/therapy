document.onkeydown = key_down;
document.onkeyup = key_up;
var map_width = 320; //ширина сцены
var map_height = 180; //высота сцены
var map_top = 0; //координаты сцены по игровой системе координат (в итоге сцена будет выравняна по середине экрана)
var map_left = 0;
var pix = 3;
var pause = true;
var scenario = "awakening";
var current_volume = [];
var switching = "ward";
var current_map = "ward";
document.body.innerHTML = document.body.innerHTML + "<div style='position: absolute; z-index: 1;  image-rendering: pixelated; left: 50%; top: 50%; margin-top:" + map_height / (-2) * pix + "px; margin-left:" + map_width / (-2) * pix + "px;  height:" + map_height * pix + "px; width:" + map_width * pix + "px; opacity: 1; ' id='map' name='map'></div>";
document.body.innerHTML = document.body.innerHTML + "<div style='position: absolute;  z-index: 0;  left: 50%; top: 50%' id='audio' name='audio'></div>";
var map = document.getElementById('map');
map.innerHTML = map.innerHTML + "<img id='cutscene' name='cutscene' style='position: absolute; z-index: 10000; top:" + pix * 0 + "px;  left:" + pix * 0 + "px; width: " + map_width * pix + "px; top: " + map_top * pix + "px' src='cutscenes/load_00.png' >";
var noise;
var steps;
var music;
var audio = document.getElementById('audio');
audio.innerHTML = audio.innerHTML + "<audio  loop='loop'   id='steps'  name='steps' class='audio-example' src='music/steps.ogg'>";
steps = document.getElementById("steps");
steps.playbackRate = 0.9;
audio.innerHTML = audio.innerHTML + "<audio  loop='loop'   id='music'  name='music' class='audio-example' src='music/sond02.ogg'>";
music = document.getElementById('music');
var gap = true; //проверяет наличие пустых зон при смещении сцены
var dialogues = [];
dialogues[2] = ["protagonist", "Привет. Давай объясню что тут творится.", "protagonist", "Один идиот пытался создать ретро хоррор, но остановился на этой дэмке. Кэширования нет, так что иногда при движении предметы будут исчезать. Так же экран загрузки просран."];
dialogues[3] = ["protagonist", "Ммм ты симпотная.", "head_doctor", "Ты же в курсе что у нас одинаковое телосложение?"];
dialogues[4] = ["head_doctor", "Иди за мной. Нажимай на AWSD, стрелочки не работают."];
dialogues[5] = ["head_doctor", "Посмотри на эту красоту."];
dialogues[6] = ["head_doctor", "Дедушка Фрейд. Он бы одобрил эту хрень."];
dialogues[7] = ["head_doctor", "Ладно, падай на стол."];
dialogues[8] = ["protagonist", "Честно скажу, мне это не нравится.", "protagonist", "У тебя клевый кабинет, но этот цветок в углу... Ты что психопатка?", "head_doctor", "Т-с-с... Сейчас будет кат-сцена."];
dialogues[9] = ["protagonist", "Окей, это немного стремно..."];
var cutscenes = [];
cutscenes[0] = [undefined, 0];
cutscenes[2] = ["001", 30, "002", 30, "003", 30];
var cutscene;
cutscene = [0, 0, 0]; //номер кат сценыы      конкретная картинка    пошедшее время      
var dialog;
dialog = [2, 0, 0];
var keys_pressed = [];
keys_pressed[68] = 0;
keys_pressed[65] = 0;
keys_pressed[87] = 0;
keys_pressed[83] = 0;
var objects = [];
var current_obj;
var uses;
uses = [3, 69, 0]; //0 - нет  1 - потенц 2 -  анимация 3 - статика 4 - анимация сползания
var control = true;
var step = 3;
var step_facet = 0;
var protagonist;
var zindex = map_height;
function maps(cur_map) {
    if (cur_map == "dream") {
        music.src = "music/sond01.ogg";
        objects[0] = '{"X":50,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[1] = '{"X":150,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[2] = '{"X":250,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[3] = '{"X":350,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[4] = '{"X":450,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[5] = '{"X":450,"Y":100,"Z":0,"bottom":16,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"brick_wall","realWidth":100}';
        objects[6] = '{"X":350,"Y":100,"Z":0,"bottom":16,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"brick_wall","realWidth":100}';
        objects[7] = '{"X":250,"Y":100,"Z":0,"bottom":16,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"brick_wall","realWidth":100}';
        objects[8] = '{"X":150,"Y":100,"Z":0,"bottom":16,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"brick_wall","realWidth":100}';
        objects[9] = '{"X":50,"Y":100,"Z":0,"bottom":16,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"brick_wall","realWidth":100}';
        objects[10] = '{"X":550,"Y":100,"Z":0,"bottom":16,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"brick_wall","realWidth":100}';
        objects[11] = '{"X":550,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[12] = '{"X":100,"Y":101,"Z":75,"bottom":0,"max_frame":1,"min_frame":0,"current_frame":0,"delay":1,"current_delay":1,"select":0,"Height":19,"Width":0,"actions":[],"type":"static_objects","img":"boiler_room_lamp","realWidth":100}';
        objects[13] = '{"X":500,"Y":101,"Z":75,"bottom":0,"max_frame":1,"min_frame":0,"current_frame":1,"delay":1,"current_delay":1,"select":0,"Height":19,"Width":0,"actions":[],"type":"static_objects","img":"boiler_room_lamp","realWidth":100}';
        objects[14] = '{"X":300,"Y":101,"Z":75,"bottom":0,"max_frame":1,"min_frame":0,"current_frame":1,"delay":1,"current_delay":0,"select":0,"Height":19,"Width":0,"actions":[],"type":"static_objects","img":"boiler_room_lamp","realWidth":100}';
        objects[15] = '{"X":500,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":1,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[{"min":0,"max":0},{"min":0,"max":1}],"type":"shadows","img":"boiler_room_lamp","realWidth":200}';
        objects[16] = '{"X":300,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":1,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[{"min":0,"max":0},{"min":0,"max":1}],"type":"shadows","img":"boiler_room_lamp","realWidth":200}';
        objects[17] = '{"X":100,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":1,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[{"min":0,"max":0},{"min":0,"max":1}],"type":"shadows","img":"boiler_room_lamp","realWidth":200}';
        objects[18] = '{"X":550,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[19] = '{"X":450,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[20] = '{"X":350,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[21] = '{"X":50,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[22] = '{"X":250,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[23] = '{"X":150,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[24] = '{"X":550,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[25] = '{"X":450,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[26] = '{"X":350,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[27] = '{"X":250,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[28] = '{"X":150,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[29] = '{"X":50,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"metal floor","realWidth":100}';
        objects[30] = '{"X":500,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[],"type":"shadows","img":"boiler_room_darkness","realWidth":200}';
        objects[31] = '{"X":300,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[],"type":"shadows","img":"boiler_room_darkness","realWidth":200}';
        objects[32] = '{"X":100,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[],"type":"shadows","img":"boiler_room_darkness","realWidth":200}';
        objects[33] = '{"X":300,"Y":136,"Z":0,"bottom":16,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"blood_grinder","realWidth":100}';
        objects[34] = '{"X":460,"Y":130,"Z":-101,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"static_objects","img":"blood_puddles","realWidth":200}';
        objects[35] = '{"X":460,"Y":210,"Z":0,"bottom":57,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":63,"Width":158,"actions":[],"type":"static_objects","img":"mountain_corpses","realWidth":162}';
        objects[36] = '{"X":327,"Y":178,"Z":-19,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":19,"Width":0,"actions":[],"type":"static_objects","img":"blood_puddle","realWidth":38}';
        objects[37] = '{"X":325.5,"Y":190,"Z":0,"bottom":5,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":9,"Width":25,"actions":[],"type":"static_objects","img":"dead_worker","realWidth":25}';
        objects[38] = '{"X":215,"Y":180,"Z":0,"bottom":6,"max_frame":15,"min_frame":15,"current_frame":0,"delay":2,"current_delay":0,"select":0,"Height":34,"Width":10,"actions":[{"min":0,"max":0},{"min":5,"max":5},{"min":10,"max":10},{"min":15,"max":15},{"min":1,"max":4},{"min":6,"max":9},{"min":11,"max":14},{"min":16,"max":19},{"min":20,"max":23},{"min":24,"max":27}],"type":"mobile_objects","img":"protagonist","realWidth":34}';
        objects[39] = '{"X":284.5,"Y":190,"Z":0,"bottom":5,"max_frame":1,"min_frame":0,"current_frame":1,"delay":4,"current_delay":0,"select":0,"Height":16,"Width":19,"actions":[],"type":"static_objects","img":"mourner","noise":{"audio":"male_crying","rad":70},"realWidth":19}';
        objects[40] = '{"X":274,"Y":137,"Z":78,"bottom":0,"max_frame":3,"min_frame":0,"current_frame":3,"delay":10,"current_delay":5,"select":0,"Height":6,"Width":0,"actions":[],"type":"static_objects","img":"blood_lights","realWidth":6}';
        objects[41] = '{"X":323.5,"Y":120,"Z":50,"bottom":0,"max_frame":15,"min_frame":0,"current_frame":4,"delay":2,"current_delay":0,"select":0,"Height":23,"Width":0,"actions":[],"type":"static_objects","img":"blood_fan","realWidth":23}';
        objects[42] = '{"X":300,"Y":137,"Z":39,"bottom":0,"max_frame":3,"min_frame":0,"current_frame":1,"delay":1,"current_delay":1,"select":0,"Height":24,"Width":0,"actions":[],"type":"static_objects","img":"blood_blades","noise":{"audio":"blood_rinder","rad":150},"realWidth":24}';
    }
    if (cur_map == "ward") {
        music.src = "music/sond02.ogg";
        objects[0] = '{"X":200,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_windows","realWidth":200}';
        objects[1] = '{"X":50,"Y":100,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness_min","realWidth":100}';
        objects[2] = '{"X":50,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[3] = '{"X":50,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness_min","realWidth":100}';
        objects[4] = '{"X":100,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness","realWidth":200}';
        objects[5] = '{"X":490,"Y":600,"Z":0,"bottom":75,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":75,"Width":20,"actions":[],"type":"static_objects","img":"hospital_door_inside_bot","realWidth":20}';
        objects[6] = '{"X":550,"Y":100,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[7] = '{"X":650,"Y":100,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[8] = '{"X":750,"Y":100,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[9] = '{"X":850,"Y":100,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[10] = '{"X":50,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[11] = '{"X":55,"Y":150,"Z":0,"bottom":15,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":26,"Width":50,"actions":[],"type":"static_objects","img":"hospital_bed","realWidth":50}';
        objects[12] = '{"X":50,"Y":500,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[13] = '{"X":50,"Y":600,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[14] = '{"X":850,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[15] = '{"X":850,"Y":600,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[16] = '{"X":850,"Y":500,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[17] = '{"X":750,"Y":600,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[18] = '{"X":650,"Y":600,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[19] = '{"X":550,"Y":600,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[20] = '{"X":450,"Y":600,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[21] = '{"X":300,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness","realWidth":200}';
        objects[22] = '{"X":250,"Y":600,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[23] = '{"X":150,"Y":600,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[24] = '{"X":850,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[25] = '{"X":850,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[26] = '{"X":750,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[27] = '{"X":650,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[28] = '{"X":550,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[29] = '{"X":450,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[30] = '{"X":350,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[31] = '{"X":250,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[32] = '{"X":150,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[33] = '{"X":750,"Y":500,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[34] = '{"X":750,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[35] = '{"X":650,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[36] = '{"X":550,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[37] = '{"X":490,"Y":500,"Z":0,"bottom":100,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":20,"actions":[],"type":"static_objects","img":"hospital_door_inside_top","realWidth":20}';
        objects[38] = '{"X":750,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[39] = '{"X":650,"Y":500,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[40] = '{"X":650,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[41] = '{"X":550,"Y":500,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[42] = '{"X":490,"Y":400,"Z":0,"bottom":100,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":20,"actions":[],"type":"static_objects","img":"hospital_wall_inside","realWidth":20}';
        objects[43] = '{"X":100,"Y":600,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness","realWidth":200}';
        objects[44] = '{"X":250,"Y":500,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[45] = '{"X":550,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[46] = '{"X":450,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[47] = '{"X":350,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[48] = '{"X":55,"Y":185,"Z":0,"bottom":15,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":26,"Width":50,"actions":[],"type":"static_objects","img":"hospital_bed","realWidth":50}';
        objects[49] = '{"X":140,"Y":115,"Z":0,"bottom":15,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":26,"Width":50,"actions":[],"type":"static_objects","img":"hospital_bed","realWidth":50}';
        objects[50] = '{"X":150,"Y":500,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[51] = '{"X":140,"Y":150,"Z":0,"bottom":15,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":26,"Width":50,"actions":[],"type":"static_objects","img":"hospital_bed","realWidth":50}';
        objects[52] = '{"X":250,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[53] = '{"X":150,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[54] = '{"X":490,"Y":100,"Z":0,"bottom":100,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":20,"actions":[],"type":"static_objects","img":"hospital_wall_inside","realWidth":20}';
        objects[55] = '{"X":490,"Y":200,"Z":0,"bottom":100,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":20,"actions":[],"type":"static_objects","img":"hospital_wall_inside","realWidth":20}';
        objects[56] = '{"X":410,"Y":400,"Z":0,"bottom":100,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":20,"actions":[],"type":"static_objects","img":"hospital_wall_inside","realWidth":20}';
        objects[57] = '{"X":410,"Y":600,"Z":0,"bottom":100,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":20,"actions":[],"type":"static_objects","img":"hospital_wall_inside","realWidth":20}';
        objects[58] = '{"X":410,"Y":500,"Z":0,"bottom":100,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":20,"actions":[],"type":"static_objects","img":"hospital_wall_inside","realWidth":20}';
        objects[59] = '{"X":490,"Y":300,"Z":0,"bottom":100,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":20,"actions":[],"type":"static_objects","img":"hospital_wall_inside","realWidth":20}';
        objects[60] = '{"X":410,"Y":100,"Z":0,"bottom":100,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":20,"actions":[],"type":"static_objects","img":"hospital_wall_inside","realWidth":20}';
        objects[61] = '{"X":410,"Y":200,"Z":0,"bottom":100,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":20,"actions":[],"type":"static_objects","img":"hospital_door_inside_top","realWidth":20}';
        objects[62] = '{"X":410,"Y":300,"Z":0,"bottom":75,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":75,"Width":20,"actions":[],"type":"static_objects","img":"hospital_door_inside_bot","realWidth":20}';
        objects[63] = '{"X":350,"Y":100,"Z":0,"bottom":20,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"hospital_wall","realWidth":100}';
        objects[64] = '{"X":250,"Y":100,"Z":0,"bottom":20,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"hospital_wall","realWidth":100}';
        objects[65] = '{"X":50,"Y":100,"Z":0,"bottom":20,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"hospital_wall","realWidth":100}';
        objects[66] = '{"X":150,"Y":100,"Z":0,"bottom":20,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"hospital_wall","realWidth":100}';
        objects[67] = '{"X":55,"Y":115,"Z":0,"bottom":15,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":26,"Width":50,"actions":[],"type":"static_objects","img":"hospital_bed","realWidth":50}';
        objects[68] = '{"X":140,"Y":185,"Z":0,"bottom":15,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":26,"Width":50,"actions":[],"type":"static_objects","img":"hospital_bed","realWidth":50}';
        objects[69] = '{"X":230,"Y":115,"Z":0,"bottom":15,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":26,"Width":50,"actions":[],"type":"static_objects","img":"hospital_bed","realWidth":50}';
        objects[70] = '{"X":230,"Y":150,"Z":0,"bottom":15,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":26,"Width":50,"actions":[],"type":"static_objects","img":"hospital_bed","realWidth":50}';
        objects[71] = '{"X":230,"Y":185,"Z":0,"bottom":15,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":26,"Width":50,"actions":[],"type":"static_objects","img":"hospital_bed","realWidth":50}';
        objects[72] = '{"X":200,"Y":101,"Z":24,"bottom":0,"max_frame":2,"min_frame":0,"current_frame":0,"delay":1,"current_delay":1,"select":0,"Height":46,"Width":0,"actions":[],"type":"static_objects","img":"hospital_window","noise":{"audio":"rain","rad":200},"realWidth":36}';
        objects[73] = '{"X":140,"Y":101,"Z":24,"bottom":0,"max_frame":2,"min_frame":0,"current_frame":0,"delay":1,"current_delay":0,"select":0,"Height":46,"Width":0,"actions":[],"type":"static_objects","img":"hospital_window","noise":{"audio":"rain","rad":200},"realWidth":36}';
        objects[74] = '{"X":260,"Y":101,"Z":24,"bottom":0,"max_frame":2,"min_frame":0,"current_frame":0,"delay":1,"current_delay":0,"select":0,"Height":46,"Width":0,"actions":[],"type":"static_objects","img":"hospital_window","noise":{"audio":"rain","rad":200},"realWidth":36}';
        objects[75] = '{"X":300,"Y":600,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness","realWidth":200}';
        objects[76] = '{"X":350,"Y":100,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness_min","realWidth":100}';
        objects[77] = '{"X":350,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness_min","realWidth":100}';
        objects[78] = '{"X":450,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[79] = '{"X":450,"Y":500,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[80] = '{"X":350,"Y":600,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[81] = '{"X":350,"Y":500,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[82] = '{"X":350,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[83] = '{"X":250,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[84] = '{"X":230,"Y":121,"Z":0,"bottom":6,"max_frame":15,"min_frame":15,"current_frame":0,"delay":2,"current_delay":0,"select":0,"Height":34,"Width":10,"actions":[{"min":0,"max":0},{"min":5,"max":5},{"min":10,"max":10},{"min":15,"max":15},{"min":1,"max":4},{"min":6,"max":9},{"min":11,"max":14},{"min":16,"max":19},{"min":20,"max":23},{"min":24,"max":27}],"type":"mobile_objects","img":"protagonist","realWidth":34}';
        objects[85] = '{"X":395,"Y":125,"Z":0,"bottom":6,"max_frame":0,"min_frame":0,"current_frame":0,"delay":2,"current_delay":0,"select":0,"Height":33,"Width":10,"actions":[{"min":0,"max":0},{"min":5,"max":5},{"min":10,"max":10},{"min":15,"max":15},{"min":1,"max":4},{"min":6,"max":9},{"min":11,"max":14},{"min":16,"max":19}],"type":"mobile_objects","img":"head_doctor","realWidth":14}';
        objects[86] = '{"X":150,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[87] = '{"X":50,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[88] = '{"X":350,"Y":330,"Z":0,"bottom":20,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"hospital_wall","realWidth":100}';
        objects[89] = '{"X":250,"Y":330,"Z":0,"bottom":20,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"hospital_wall","realWidth":100}';
        objects[90] = '{"X":50,"Y":330,"Z":0,"bottom":20,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"hospital_wall","realWidth":100}';
        objects[91] = '{"X":150,"Y":330,"Z":0,"bottom":20,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"hospital_wall","realWidth":100}';
        objects[92] = '{"X":600,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness","realWidth":200}';
        objects[93] = '{"X":800,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness","realWidth":200}';
        objects[94] = '{"X":800,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness","realWidth":200}';
        objects[95] = '{"X":800,"Y":600,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness","realWidth":200}';
        objects[96] = '{"X":600,"Y":600,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness","realWidth":200}';
        objects[97] = '{"X":600,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":200,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness","realWidth":200}';
        objects[98] = '{"X":450,"Y":100,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness_min","realWidth":100}';
        objects[99] = '{"X":450,"Y":200,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness_min","realWidth":100}';
        objects[100] = '{"X":450,"Y":300,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness_min","realWidth":100}';
        objects[101] = '{"X":450,"Y":600,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness_min","realWidth":100}';
        objects[102] = '{"X":450,"Y":400,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness_min","realWidth":100}';
        objects[103] = '{"X":450,"Y":500,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"shadows","img":"hospital_ward_darkness_min","realWidth":100}';
        objects[104] = '{"X":450,"Y":100,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"background","img":"hospital_floor","realWidth":100}';
        objects[105] = '{"X":550,"Y":370,"Z":0,"bottom":20,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"hospital_wall","realWidth":100}';
        objects[106] = '{"X":850,"Y":370,"Z":0,"bottom":20,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"hospital_wall","realWidth":100}';
        objects[107] = '{"X":650,"Y":370,"Z":0,"bottom":20,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"hospital_wall","realWidth":100}';
        objects[108] = '{"X":750,"Y":370,"Z":0,"bottom":20,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":100,"actions":[],"type":"static_objects","img":"hospital_wall","realWidth":100}';
        objects[109] = '{"X":622.5,"Y":372,"Z":17,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":50,"Width":0,"actions":[],"type":"static_objects","img":"blood_wall","realWidth":75}';
        objects[110] = '{"X":230,"Y":530,"Z":0,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":100,"Width":0,"actions":[],"type":"static_objects","img":"blood_puddles","realWidth":200}';
        objects[111] = '{"X":731,"Y":371,"Z":23,"bottom":0,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":60,"Width":0,"actions":[],"type":"static_objects","img":"wall_photo","realWidth":200}';
        objects[112] = '{"X":540.5,"Y":390,"Z":0,"bottom":7,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":59,"Width":17,"actions":[],"type":"static_objects","img":"house_flower","realWidth":25}';
        objects[113] = '{"X":770,"Y":430,"Z":0,"bottom":10,"max_frame":0,"min_frame":0,"current_frame":0,"delay":0,"current_delay":0,"select":0,"Height":23,"Width":52,"actions":[],"type":"static_objects","img":"operation_table","realWidth":52}';
    }
    music.play();
}
map.innerHTML = map.innerHTML + "<div style='outline: " + 250 * pix + "px solid black; position: absolute; z-index:9000; left:0px; top: 0px; height: " + map_height * pix + "px; width:" + map_width * pix + "px; line-height:" + 12 * pix + "px;  font-size: " + 8 * pix + "px; text-shadow: " + pix + "px " + pix + "px 0px black, 0px " + pix + "px 0px black," + pix + "px 0px 0px black' id='bord_map' name='bord_map'></div>";
map.innerHTML = map.innerHTML + "<div style='position: absolute; z-index: 0; left:" + pix * 0 + "px; top:" + pix * 120 + "px; font-size: " + 8 * pix + "px; text-shadow: " + pix + "px " + pix + "px 0px black, 0px " + pix + "px 0px black," + pix + "px 0px 0px black' id='dialog'  name='dialog'><img id='portrait' name='portrait' style='margin-right: " + pix * 10 + "px; margin-left: " + pix * 7 + "px; width: " + 33 * pix + "px' align='left' src='portraits/protagonist.png' ><p id='dialogtext' name='dialogtext' style='width: " + pix * 312 + "px'></p></div>";
map.innerHTML = map.innerHTML + "<div align='right' style='background-image: url(menu.png);  position: absolute; z-index: 9000; left:0px; top: " + 0 * pix + "px; width:" + map_width * pix + "px; height:" + map_height * pix + "px;  line-height:" + 12 * pix + "px; font-size: " + 8 * pix + "px; text-shadow: " + pix + "px " + pix + "px 0px black, 0px " + pix + "px 0px black," + pix + "px 0px 0px black' id='menu' name='menu'><div style='position: absolute; text-align: left; width:" + 65 * pix + "px; top: " + pix * 0.5 + "px; left: " + pix * 255 + "px; margin-right:" + 5 * pix + "px'><br><br>ПРОДОЛЖИТЬ<br><br>СОХРАНИТЬ<br><br>ЗАГРУЗИТЬ<br><br>НАСТРОЙКИ<br><br>СОЗДАТЕЛИ</div></div>";
map.innerHTML = map.innerHTML + "<div id='using' name='using' style='position: absolute; top:" + pix * 7 + "px;  left:" + pix * 10 + "px; width: " + pix * 100 + "px; z-index:0;  font-size: " + 8 * pix + "px; text-shadow: " + pix + "px " + pix + "px 0px black, 0px " + pix + "px 0px black," + pix + "px 0px 0px black'></div>";
function download(cur_map) {
    cutscenes[0][1] = 0;
    current_obj = document.getElementById("cutscene");
    current_obj.style.src = "cutscene/load_00.png";
    current_obj.style.zIndex = 10000;
    current_obj.onload = function () {
        map.style.opacity = "1";
    };
    //alert('подгрузил шестеренку');
    for (var obj in objects) {
        current_obj = document.getElementById("" + obj + "");
        if (current_obj)
            current_obj.parentNode.removeChild(current_obj);
        if (objects[obj].noise) {
            current_obj = document.getElementById("noise_" + objects[obj].noise.audio + "");
            if (current_obj)
                current_obj.parentNode.removeChild(current_obj);
        }
    }
    current_volume = [];
    objects = [];
    maps(cur_map);
    for (var obj_1 = 0; obj_1 < objects.length; obj_1++) {
        objects[obj_1] = JSON.parse(objects[obj_1]);
        if (objects[obj_1].img == "protagonist")
            protagonist = obj_1;
        if (objects[obj_1].img == "space")
            alert("НАЙДЕТ ПУСТОЙ ОБЪЕКТ ТВОЯ СИСТЕМА НЕ РАБОТАЕТ ");
    }
    map_left = (objects[protagonist].X - map_width / 2);
    map_top = (objects[protagonist].Y - objects[protagonist].bottom * 2) - objects[protagonist].bottom - map_height / 2;
    if (uses[0] > 1)
        using(uses[1]);
    cutscene[0] = 1;
    current_map = switching;
}
window.onblur = function () {
    current_obj = document.getElementById("menu");
    pause = true;
    current_obj.style.zIndex = 9000;
    current_obj = document.getElementById("dialog");
    current_obj.style.zIndex = 0;
    current_obj = document.getElementById("using");
    current_obj.style.zIndex = 0;
    music.pause();
};
function plot(obj) {
    if (scenario == "awakening") {
        if (dialog[0] == 0)
            scenario = "acquaintance";
    }
    if (objects[obj].img == "head_doctor") {
        if (scenario == "acquaintance") {
            if (goto_obj(obj, objects[protagonist].X, objects[protagonist].Y, 27)) {
                dialog[0] = 3;
                scenario = "acquaintance02";
            }
        }
        if (scenario == "acquaintance02") {
            if (dialog[0] == 0 && uses[0] <= 1) {
                dialog[0] = 4;
                scenario = "walk";
            }
        }
        if (scenario == "walk") {
            if (dialog[0] == 0 && ((Math.abs(objects[protagonist].X - objects[obj].X) <= 100 && Math.abs(objects[protagonist].Y - objects[obj].Y) <= 65) || (Math.pow(objects[obj].X - 720, 2) + Math.pow(objects[obj].Y - 385, 2) >= Math.pow(objects[protagonist].X - 720, 2) + Math.pow(objects[protagonist].Y - 385, 2)))) {
                if (goto_obj(obj, 720, 385, 1)) {
                    dialog[0] = 5;
                    scenario = "walk02";
                }
            }
            else
                stop_move(obj);
        }
        if (scenario == "walk02") {
            if (dialog[0] == 0 && Math.abs(objects[protagonist].Y - objects[obj].Y) <= 10) {
                dialog[0] = 6;
                scenario = "walk03";
            }
        }
        if (scenario == "walk03") {
            if (dialog[0] == 0 && goto_obj(obj, 755, 420, 1)) {
                dialog[0] = 7;
                scenario = "walk04";
            }
        }
        if (scenario == "walk04") {
            if (dialog[0] == 0 && objects[uses[1]].img == "operation_table" && uses[0] == 3) {
                dialog[0] = 8;
                scenario = "walk05";
            }
        }
        if (scenario == "walk05") {
            if (dialog[0] == 0) {
                cutscene[0] = 2;
                scenario = "dream";
            }
        }
    }
    if (scenario == "dream") {
        if (cutscene[0] == 0) {
            uses[0] = 0;
            control = true;
            switching = "dream";
            scenario = "dream02";
        }
    }
    if (scenario == "dream02") {
        dialog[0] = 9;
        scenario = "dream03";
    }
    if (scenario == "dream03") {
        scenario = "dream04";
    }
}
function animation(obj) {
    if (obj.max_frame - obj.min_frame > 0) {
        if (obj.current_delay == obj.delay) {
            if (obj.current_frame + obj.min_frame == obj.max_frame) {
                obj.current_frame = 0;
            }
            else {
                obj.current_frame++;
            }
            obj.current_delay = 0;
        }
        else {
            obj.current_delay++;
        }
    }
    else {
        obj.current_frame = 0;
    }
}
function key_pressed(keycode, num) {
    if (pause == false) {
        if (objects[num].img == "protagonist" && (dialog[0] == 0 || (dialog[0] != 0 && uses[0] == 5)) && control == true) {
            if (keycode == 68)
                objects[num].X = objects[num].X + step * move(objects[num], "RIGHT");
            if (keycode == 65)
                objects[num].X = objects[num].X - step * move(objects[num], "LEFT");
            if (keycode == 87)
                objects[num].Y = objects[num].Y - step * move(objects[num], "UP");
            if (keycode == 83)
                objects[num].Y = objects[num].Y + step * move(objects[num], "DOWN");
            if (keys_pressed[87] == 1 || keys_pressed[83] == 1)
                step_facet = map_width;
            if (keys_pressed[68] == 1 || keys_pressed[65] == 1)
                step_facet = map_height;
            for (var gor = 0; gor < step; gor++) {
                for (var ver = 0; ver < step_facet; ver++) {
                    for (var obj_num = 0; obj_num < objects.length; obj_num++) {
                        if (keys_pressed[65] == 1 && objects[obj_num].X + objects[obj_num].realWidth / 2 >= map_left - gor - 2 && objects[obj_num].X - objects[obj_num].realWidth / 2 <= map_left - gor - 2 && objects[obj_num].Y >= map_top + ver && objects[obj_num].Y - objects[obj_num].Height <= map_top + ver) {
                            gap = true;
                            break;
                        }
                        else if (keys_pressed[68] == 1 && objects[obj_num].X + objects[obj_num].realWidth / 2 >= map_left + map_width + gor + 2 && objects[obj_num].X - objects[obj_num].realWidth / 2 <= map_left + map_width + gor + 2 && objects[obj_num].Y >= map_top + ver && objects[obj_num].Y - objects[obj_num].Height <= map_top + ver) {
                            gap = true;
                            break;
                        }
                        else if (keys_pressed[87] == 1 && objects[obj_num].X + objects[obj_num].realWidth / 2 >= map_left + ver && objects[obj_num].X - objects[obj_num].realWidth / 2 <= map_left + ver && objects[obj_num].Y >= map_top - gor - 2 && objects[obj_num].Y - objects[obj_num].Height <= map_top - gor - 2) {
                            gap = true;
                            break;
                        }
                        else if (keys_pressed[83] == 1 && objects[obj_num].X + objects[obj_num].realWidth / 2 >= map_left + ver && objects[obj_num].X - objects[obj_num].realWidth / 2 <= map_left + ver && objects[obj_num].Y >= map_top + map_height + gor + 2 && objects[obj_num].Y - objects[obj_num].Height <= map_top + map_height + gor + 2) {
                            gap = true;
                            break;
                        }
                        else if (obj_num == objects.length - 1) {
                            gap = false;
                            break;
                        }
                    }
                    if (gap == false) {
                        break;
                    }
                }
                if (gap == false)
                    break;
                else {
                    if (keys_pressed[68] == 1 && map_left <= objects[protagonist].X - map_width / 2)
                        map_left++;
                    if (keys_pressed[65] == 1 && map_left >= objects[protagonist].X - map_width / 2)
                        map_left--;
                    if (keys_pressed[87] == 1 && map_top >= objects[protagonist].Y - (objects[protagonist].bottom * 2) - map_height / 2)
                        map_top--;
                    if (keys_pressed[83] == 1 && map_top <= objects[protagonist].Y - (objects[protagonist].bottom * 2) - map_height / 2)
                        map_top++;
                }
            }
        }
        else if (objects[num].img != "protagonist") {
            if (keycode == 68)
                objects[num].X = objects[num].X + step * move(objects[num], "RIGHT");
            if (keycode == 65)
                objects[num].X = objects[num].X - step * move(objects[num], "LEFT");
            if (keycode == 87)
                objects[num].Y = objects[num].Y - step * move(objects[num], "UP");
            if (keycode == 83)
                objects[num].Y = objects[num].Y + step * move(objects[num], "DOWN");
        }
        if ((objects[num].img != "protagonist") || (objects[num].img == "protagonist" && (dialog[0] == 0 || (dialog[0] != 0 && uses[0] == 5)) && control == true)) {
            if (objects[num].max_frame == objects[num].min_frame) {
                objects[num].current_delay = objects[num].delay;
                objects[num].current_frame = 0;
            }
            if (keycode == 83) {
                objects[num].max_frame = objects[num].actions[7].max;
                objects[num].min_frame = objects[num].actions[7].min;
            }
            if (keycode == 87) {
                objects[num].max_frame = objects[num].actions[6].max;
                objects[num].min_frame = objects[num].actions[6].min;
            }
            if (keycode == 65) {
                objects[num].max_frame = objects[num].actions[5].max;
                objects[num].min_frame = objects[num].actions[5].min;
            }
            if (keycode == 68) {
                objects[num].max_frame = objects[num].actions[4].max;
                objects[num].min_frame = objects[num].actions[4].min;
            }
        }
    }
}
setInterval(function () {
    if (switching != "none") {
        download(switching);
        switching = "none";
    }
    for (var keycode in keys_pressed) {
        if (keys_pressed[keycode] == 1) {
            key_pressed(keycode, protagonist);
        }
        else if (keys_pressed[68] + keys_pressed[65] + keys_pressed[87] + keys_pressed[83] == 0 && pause == false && (uses[0] == 5 || uses[0] <= 1)) {
            stop_move(protagonist);
        }
    }
    if (uses[0] <= 1) {
        uses[0] = 0;
        uses[1] = 0;
    }
    for (var current_noise in current_volume) {
        noise = document.getElementById("noise_" + current_noise);
        if (current_volume[current_noise] <= 1)
            noise.volume = Math.round(current_volume[current_noise] * 10) / 10;
        else
            noise.volume = 1;
        current_volume[current_noise] = 0;
    }
    if (dialog[0] == 0) {
        current_obj = document.getElementById("dialogtext");
        current_obj.innerHTML = "";
    }
    for (var obj = 0; obj < objects.length; obj++) {
        current_obj = document.getElementById("using");
        if (uses[0] <= 1) {
            if ((objects[obj].img == "hospital_bed" || objects[obj].img == "operation_table") && Math.abs(objects[obj].X - objects[protagonist].X) <= 7 && objects[protagonist].Y > objects[obj].Y && objects[protagonist].Y - objects[obj].Y <= objects[protagonist].bottom) {
                uses[0] = 1;
                uses[1] = obj;
            }
        }
        plot(obj);
        if (objects[obj].noise) {
            noise = document.getElementById("noise_" + objects[obj].noise.audio);
            if (!noise) {
                audio.innerHTML = audio.innerHTML + "<audio autoplay='autoplay'  id='noise_" + objects[obj].noise.audio + "' name='noise_" + objects[obj].noise.audio + "' loop='loop'   class='audio-example' src='music/" + objects[obj].noise.audio + ".ogg'>";
                noise = document.getElementById("noise_" + objects[obj].noise.audio);
                noise.volume = 0;
                current_volume[objects[obj].noise.audio] = 0;
            }
            else {
                if (objects[obj].noise.rad > Math.sqrt(Math.pow((objects[protagonist].X - objects[obj].X), 2) + Math.pow(((objects[protagonist].Y - objects[protagonist].Height / 2) - (objects[obj].Y - objects[obj].Height / 2)), 2))) {
                    if (pause == false && cutscene[0] == 0) {
                        current_volume[objects[obj].noise.audio] = current_volume[objects[obj].noise.audio] + 1 - (Math.sqrt(Math.pow((objects[protagonist].X - objects[obj].X), 2) + Math.pow(((objects[protagonist].Y - objects[protagonist].Height / 2) - (objects[obj].Y - objects[obj].Height / 2)), 2))) / objects[obj].noise.rad;
                    }
                }
            }
        }
        current_obj = document.getElementById("" + obj + "");
        if (((objects[obj].X + objects[obj].realWidth / 2) < map_left - step * 5) || ((objects[obj].X - objects[obj].realWidth / 2) > map_left + map_width + step * 5) || ((objects[obj].Y - objects[obj].Height - objects[obj].Z) > map_top + map_height + step * 5) || ((objects[obj].Y - objects[obj].Z) < map_top - step * 5)) {
            if (current_obj) {
                current_obj.parentNode.removeChild(current_obj);
            }
        }
        else {
            if (current_obj) {
                if ((objects[obj].current_delay == 0 && (objects[obj].max_frame - objects[obj].min_frame > 0)) || (objects[obj].max_frame - objects[obj].min_frame == 0 && objects[obj].type == "mobile_objects")) {
                    current_obj.src = "" + objects[obj].type + "/" + objects[obj].img + "" + Math.floor((objects[obj].current_frame + objects[obj].min_frame) / 10) + "" + (objects[obj].current_frame + objects[obj].min_frame) % 10 + ".png";
                    objects[obj].realWidth = current_obj.naturalWidth;
                    objects[obj].Height = current_obj.naturalHeight;
                }
                current_obj.style = "position: absolute;  box-sizing: border-box; left:" + (objects[obj].X - objects[obj].realWidth / 2 - map_left) * pix + "px; top:" + (objects[obj].Y - objects[obj].Height - objects[obj].Z - map_top) * pix + "px; height: " + objects[obj].Height * pix + "px; width:" + objects[obj].realWidth * pix + "px";
                if (objects[obj].Y > zindex)
                    zindex = objects[obj].Y;
                if (objects[obj].type == "background")
                    current_obj.style.zIndex = objects[obj].Y;
                if (objects[obj].type == "static_objects" || objects[obj].type == "mobile_objects")
                    current_obj.style.zIndex = zindex + objects[obj].Y;
                if (objects[obj].type == "shadows")
                    current_obj.style.zIndex = zindex * 2 + objects[obj].Y;
                if (objects[obj].img == "hospital_wall") {
                    if (objects[obj].Y > objects[protagonist].Y) {
                        current_obj.style.opacity = "0";
                        if (objects[protagonist].Y > objects[obj].Y - objects[obj].Height)
                            current_obj.style.opacity = "0.7";
                    }
                    else
                        current_obj.style.opacity = "1";
                }
            }
            else {
                map.innerHTML = map.innerHTML + "<img style='opacity: 0'   id='" + obj + "' name='" + obj + "' src='" + objects[obj].type + "/" + objects[obj].img + "" + Math.floor((objects[obj].current_frame + objects[obj].min_frame) / 10) + "" + (objects[obj].current_frame + objects[obj].min_frame) % 10 + ".png' >";
                if (cutscene[0] == 1)
                    cutscenes[0][0] = obj;
            }
        }
        if (obj == objects.length - 1 && cutscene[0] == 1) {
            current_obj = document.getElementById("" + cutscenes[0][0] + "");
            current_obj.onload = function () {
                current_obj = document.getElementById("" + cutscenes[0][0] + "");
                current_obj.onload = undefined;
                cutscenes[0][0] = undefined;
                cutscene[0] = 0;
                console.log('все подгрузил');
            };
        }
        if (pause == false && cutscene[0] == 0) {
            if (objects[obj].type != "mobile_objects")
                animation(objects[obj]);
            else if (objects[obj].img != "protagonist") {
                animation(objects[obj]);
            }
            else if (objects[obj].img == "protagonist" && dialog[0] == 0) {
                steps.volume = 1;
                animation(objects[obj]);
            }
            if (objects[obj].img == "protagonist" && dialog[0] != 0 && uses[0] > 1)
                animation(objects[obj]);
            if (uses[0] <= 1)
                using(uses[1]);
            else if (uses[1] == obj)
                using(uses[1]);
        }
        else
            steps.volume = 0;
        if (objects[obj].img == "protagonist") {
            if (dialog[0] != 0)
                steps.volume = 0;
            else if (uses[0] > 1)
                steps.volume = 0;
        }
    }
    current_obj = document.getElementById("cutscene");
    if (cutscene[0] == 1) {
        current_obj.src = "cutscenes/load_" + Math.floor(cutscenes[0][1] / 10) + "" + cutscenes[0][1] % 10 + ".png";
        console.log(' НА ЗАГРУЗКЕ СУЧАРЫ ' + current_obj.src);
        current_obj.style.zIndex = 10000;
        if (cutscenes[0][1] == 5)
            cutscenes[0][1] = 0;
        else
            cutscenes[0][1]++;
    }
    else if (cutscene[0] == 0) {
        current_obj.style.zIndex = 0;
    }
    else if (pause == false) {
        if (cutscenes[cutscene[0]][cutscene[1] + 1] == cutscene[2]) {
            if (cutscenes[cutscene[0]].length == cutscene[1] + 2) {
                cutscene = [0, 0, 0];
            }
            else {
                cutscene[1] = cutscene[1] + 2;
                cutscene[2] = 0;
            }
        }
        current_obj.src = "cutscenes/" + cutscenes[cutscene[0]][cutscene[1]] + ".png";
        current_obj.onload = function () {
            current_obj = document.getElementById("cutscene");
            current_obj.style.zIndex = 8000;
            current_obj = document.getElementById("cutscene");
            current_obj.onload = undefined;
        };
        cutscene[2]++;
    }
    if (dialog[0] == 0) {
        current_obj = document.getElementById("dialog");
        current_obj.style.zIndex = 0;
        current_obj = document.getElementById("dialogtext");
        current_obj.innerHTML = "";
    }
    else if (pause == false && cutscene[0] == 0) {
        current_obj = document.getElementById("using");
        current_obj.innerHTML = "";
        if (dialog[0] != 0 && dialog[2] == 0) {
            if (uses[0] == 5 || uses[0] <= 1)
                stop_move(protagonist);
            current_obj = document.getElementById("portrait");
            current_obj.src = "portraits/" + dialogues[dialog[0]][dialog[1]] + ".png";
            current_obj.onload = function () {
                current_obj = document.getElementById("dialog");
                current_obj.style.zIndex = 7000;
            };
        }
        if (dialog[2] < dialogues[dialog[0]][dialog[1] + 1].length) {
            current_obj = document.getElementById("dialogtext");
            current_obj.innerHTML = current_obj.innerHTML + dialogues[dialog[0]][dialog[1] + 1][dialog[2]];
            dialog[2]++;
        }
    }
}, 50);
function goto_obj(a, X, Y, dist) {
    if (((objects[a].X > X + dist || objects[a].X < X - dist) && objects[a].select != 65 && objects[a].select != 68) || ((objects[a].select == 65 && move(objects[a], "LEFT") < 1) || ((objects[a].select == 68 && move(objects[a], "RIGHT") < 1)))) {
        if (objects[a].X < X) {
            if (move(objects[a], "RIGHT") == 1) {
                objects[a].select = 0;
                key_pressed(68, a);
            }
            else if (objects[a].Y > Y) {
                if (objects[a].select != 83 && move(objects[a], "UP") == 1) {
                    objects[a].select = 87;
                    key_pressed(87, a);
                }
                else if (move(objects[a], "DOWN") == 1) {
                    objects[a].select = 83;
                    key_pressed(83, a);
                }
            }
            else if (objects[a].Y <= Y) {
                if (objects[a].select != 87 && move(objects[a], "DOWN") == 1) {
                    objects[a].select = 83;
                    key_pressed(83, a);
                }
                else if (move(objects[a], "UP") == 1) {
                    objects[a].select = 87;
                    key_pressed(87, a);
                }
            }
        }
        else if (objects[a].X > X) {
            if (move(objects[a], "LEFT") == 1) {
                objects[a].select = 0;
                key_pressed(65, a);
            }
            else if (objects[a].Y > Y) {
                if (objects[a].select != 83 && move(objects[a], "UP") == 1) {
                    objects[a].select = 87;
                    key_pressed(87, a);
                }
                else if (move(objects[a], "DOWN") == 1) {
                    objects[a].select = 83;
                    key_pressed(83, a);
                }
            }
            else if (objects[a].Y <= Y) {
                if (objects[a].select != 87 && move(objects[a], "DOWN") == 1) {
                    objects[a].select = 83;
                    key_pressed(83, a);
                }
                else if (move(objects[a], "UP") == 1) {
                    objects[a].select = 87;
                    key_pressed(87, a);
                }
            }
        }
        return false;
    }
    else if (((objects[a].Y > Y + dist || objects[a].Y < Y - dist) && objects[a].select != 83 && objects[a].select != 87) || ((objects[a].select == 87 && move(objects[a], "UP") < 1) || ((objects[a].select == 83 && move(objects[a], "DOWN") < 1)))) {
        if (objects[a].Y > Y) {
            if (move(objects[a], "UP") == 1) {
                objects[a].select = 0;
                key_pressed(87, a);
            }
            else if (objects[a].X > X) {
                if (objects[a].select != 68 && move(objects[a], "LEFT") == 1) {
                    objects[a].select = 65;
                    key_pressed(65, a);
                }
                else if (move(objects[a], "RIGHT") == 1) {
                    objects[a].select = 68;
                    key_pressed(68, a);
                }
            }
            else if (objects[a].X <= X) {
                if (objects[a].select != 65 && move(objects[a], "RIGHT") == 1) {
                    objects[a].select = 68;
                    key_pressed(68, a);
                }
                else if (move(objects[a], "LEFT") == 1) {
                    objects[a].select = 65;
                    key_pressed(65, a);
                }
            }
        }
        else if (objects[a].Y < Y) {
            if (move(objects[a], "DOWN") == 1) {
                objects[a].select = 0;
                key_pressed(83, a);
            }
            else if (objects[a].X > X) {
                if (objects[a].select != 68 && move(objects[a], "LEFT") == 1) {
                    objects[a].select = 65;
                    key_pressed(65, a);
                }
                else if (move(objects[a], "RIGHT") == 1) {
                    objects[a].select = 68;
                    key_pressed(68, a);
                }
            }
            else if (objects[a].X <= X) {
                if (objects[a].select != 65 && move(objects[a], "RIGHT") == 1) {
                    objects[a].select = 68;
                    key_pressed(68, a);
                }
                else if (move(objects[a], "LEFT") == 1) {
                    objects[a].select = 65;
                    key_pressed(65, a);
                }
            }
        }
        return false;
    }
    else {
        stop_move(a);
        return true;
    }
}
function using(obj_num) {
    current_obj = document.getElementById("using");
    if (uses[0] == 0)
        current_obj.innerHTML = "";
    else if (uses[0] == 1) {
        if (objects[obj_num].img == "hospital_bed" || objects[obj_num].img == "operation_table")
            current_obj.innerHTML = "E - Прилечь.";
    }
    else if (uses[0] == 2) {
        control = false;
        if (objects[protagonist].current_frame + objects[protagonist].min_frame == objects[protagonist].max_frame && objects[protagonist].current_delay == objects[protagonist].delay) {
            objects[protagonist].min_frame = objects[protagonist].max_frame;
            objects[protagonist].current_frame = 0;
            uses[0] = 3;
        }
        if (objects[obj_num].img == "hospital_bed" || objects[obj_num].img == "operation_table") {
            objects[protagonist].min_frame = objects[protagonist].actions[8].min;
            objects[protagonist].max_frame = objects[protagonist].actions[8].max;
        }
    }
    else if (uses[0] == 3) {
        control = false;
        if (objects[obj_num].img == "hospital_bed" || objects[obj_num].img == "operation_table") {
            current_obj.innerHTML = "E - Встать.";
            objects[protagonist].current_frame = 0;
            objects[protagonist].min_frame = objects[protagonist].actions[8].max;
            objects[protagonist].max_frame = objects[protagonist].actions[8].max;
        }
    }
    else if (uses[0] == 4) {
        control = false;
        if (objects[obj_num].img == "hospital_bed" || objects[obj_num].img == "operation_table") {
            objects[protagonist].min_frame = objects[protagonist].actions[9].min;
            objects[protagonist].max_frame = objects[protagonist].actions[9].max;
        }
        if (objects[protagonist].current_frame + objects[protagonist].min_frame == objects[protagonist].max_frame && objects[protagonist].current_delay == objects[protagonist].delay) {
            control = true;
            uses[0] = 5;
        }
    }
    else if (uses[0] == 5) {
        objects[protagonist].min_frame = objects[protagonist].max_frame;
        key_pressed(83, protagonist);
        stop_move(protagonist);
        objects[protagonist].Y = objects[protagonist].Y - step;
        uses[0] = 1;
        objects[protagonist].current_frame = 0;
    }
}
function key_down(e) {
    var evtobj = window.event ? event : e;
    if (evtobj.keyCode == 77) {
        current_obj = document.getElementById("menu");
        if (pause == true) {
            pause = false;
            current_obj.style.zIndex = 0;
            current_obj = document.getElementById("using");
            current_obj.style.zIndex = 7000;
            if (dialog[0] != 0) {
                current_obj = document.getElementById("dialog");
                current_obj.style.zIndex = 7000;
            }
            music.play();
        }
        else {
            pause = true;
            current_obj.style.zIndex = 9000;
            current_obj = document.getElementById("dialog");
            current_obj.style.zIndex = 0;
            current_obj = document.getElementById("using");
            current_obj.style.zIndex = 0;
            music.pause();
        }
    }
    if (cutscene[0] == 0) {
        if (evtobj.keyCode == 32 && pause == false) {
            if (dialog[2] == dialogues[dialog[0]][dialog[1] + 1].length) {
                if (dialogues[dialog[0]][dialog[1] + 2]) {
                    dialog[2] = 0;
                    dialog[1] = dialog[1] + 2;
                    current_obj = document.getElementById("dialogtext");
                    current_obj.innerHTML = "";
                }
                else {
                    dialog = [0, 0, 0];
                }
            }
            else {
                current_obj = document.getElementById("dialogtext");
                current_obj.innerHTML = dialogues[dialog[0]][dialog[1] + 1];
                dialog[2] = dialogues[dialog[0]][dialog[1] + 1].length;
            }
        }
        else if (evtobj.keyCode == 69 && pause == false && dialog[0] == 0) {
            if (uses[0] == 1) {
                objects[protagonist].current_frame = 0;
                objects[protagonist].current_delay = 0;
                uses[0] = 2;
            }
            if (uses[0] == 3) {
                objects[protagonist].current_delay = 0;
                objects[protagonist].current_frame = 0;
                uses[0] = 4;
            }
        }
        else if ((evtobj.keyCode == 68 || evtobj.keyCode == 65 || evtobj.keyCode == 87 || evtobj.keyCode == 83)) {
            if (keys_pressed[evtobj.keyCode] != 1) {
                keys_pressed[68] = keys_pressed[68] * 2;
                keys_pressed[65] = keys_pressed[65] * 2;
                keys_pressed[87] = keys_pressed[87] * 2;
                keys_pressed[83] = keys_pressed[83] * 2;
                keys_pressed[evtobj.keyCode] = 1;
                if (uses[0] <= 1)
                    objects[protagonist].current_delay = objects[protagonist].delay;
                if (keys_pressed[68] + keys_pressed[65] + keys_pressed[87] + keys_pressed[83] == 1) {
                    steps = document.getElementById("steps");
                    steps.currentTime = 1;
                    steps.play();
                }
            }
        }
    }
}
function stop_move(obj) {
    if (objects[obj].max_frame != objects[obj].min_frame) {
        objects[obj].current_delay = objects[obj].delay;
        objects[obj].current_frame = 0;
        objects[obj].max_frame = Math.floor(objects[obj].max_frame / 5) * 5;
        objects[obj].min_frame = Math.floor(objects[obj].min_frame / 5) * 5;
    }
}
function key_up(e) {
    var evtobj = window.event ? event : e;
    if (evtobj.keyCode == 68 || evtobj.keyCode == 65 || evtobj.keyCode == 87 || evtobj.keyCode == 83) {
        if (keys_pressed[68] > keys_pressed[evtobj.keyCode])
            keys_pressed[68] = keys_pressed[68] / 2;
        if (keys_pressed[65] > keys_pressed[evtobj.keyCode])
            keys_pressed[65] = keys_pressed[65] / 2;
        if (keys_pressed[87] > keys_pressed[evtobj.keyCode])
            keys_pressed[87] = keys_pressed[87] / 2;
        if (keys_pressed[83] > keys_pressed[evtobj.keyCode])
            keys_pressed[83] = keys_pressed[83] / 2;
        keys_pressed[evtobj.keyCode] = 0;
        if (keys_pressed[68] + keys_pressed[65] + keys_pressed[87] + keys_pressed[83] == 0) {
            steps.pause();
        }
    }
}
function move(obj_mov, direct) {
    current_obj = step;
    for (var obj = 0; obj < objects.length; obj++) {
        if (objects[obj].Width != 0 && obj_mov != objects[obj] && (objects[obj].type == "static_objects" || objects[obj].type == "mobile_objects")) {
            if (Math.abs(Math.abs((obj_mov.X - obj_mov.Width / 2) - (objects[obj].X + objects[obj].Width / 2)) - Math.abs((obj_mov.X + obj_mov.Width / 2) - (objects[obj].X - objects[obj].Width / 2))) < (objects[obj].Width + obj_mov.Width)) {
                if (direct == "DOWN" && obj_mov.Y - obj_mov.bottom < objects[obj].Y - objects[obj].bottom && obj_mov.Y + step >= objects[obj].Y - objects[obj].bottom && (objects[obj].Y - objects[obj].bottom - obj_mov.Y) < current_obj)
                    current_obj = objects[obj].Y - objects[obj].bottom - obj_mov.Y;
                if (direct == "UP" && obj_mov.Y - obj_mov.bottom > objects[obj].Y - objects[obj].bottom && obj_mov.Y - obj_mov.bottom - step <= objects[obj].Y && (obj_mov.Y - obj_mov.bottom - objects[obj].Y) < current_obj)
                    current_obj = obj_mov.Y - obj_mov.bottom - objects[obj].Y;
            }
            if (Math.abs(Math.abs((obj_mov.Y) - (objects[obj].Y - objects[obj].bottom)) - Math.abs((objects[obj].Y) - (obj_mov.Y - obj_mov.bottom))) < (objects[obj].bottom + obj_mov.bottom)) {
                if (direct == "LEFT" && obj_mov.X > objects[obj].X && (obj_mov.X - obj_mov.Width / 2) - step < (objects[obj].X + objects[obj].Width / 2) && ((obj_mov.X - obj_mov.Width / 2) - (objects[obj].X + objects[obj].Width / 2)) < current_obj)
                    current_obj = ((obj_mov.X - obj_mov.Width / 2) - (objects[obj].X + objects[obj].Width / 2));
                if (direct == "RIGHT" && (obj_mov.X) < (objects[obj].X) && (obj_mov.X + obj_mov.Width / 2 + step) > (objects[obj].X - objects[obj].Width / 2) && ((objects[obj].X - objects[obj].Width / 2) - (obj_mov.X + obj_mov.Width / 2)) < current_obj)
                    current_obj = ((objects[obj].X - objects[obj].Width / 2) - (obj_mov.X + obj_mov.Width / 2));
            }
        }
    }
    if (current_obj == step && obj_mov.img == "protagonist") {
        if (direct == "UP" && (obj_mov.Y - obj_mov.bottom - step) <= map_top)
            current_obj = ((obj_mov.Y - obj_mov.bottom) - map_top);
        if (direct == "DOWN" && (obj_mov.Y + step > map_top + map_height))
            current_obj = map_top + map_height - obj_mov.Y;
        if (direct == "LEFT" && obj_mov.X - obj_mov.Width / 2 - step <= map_left)
            current_obj = (obj_mov.X - obj_mov.Width / 2) - map_left;
        if (direct == "RIGHT" && obj_mov.X + obj_mov.Width / 2 + step >= map_left + map_width)
            current_obj = (map_left + map_width) - (obj_mov.X + obj_mov.Width / 2);
    }
    return current_obj / step;
}
