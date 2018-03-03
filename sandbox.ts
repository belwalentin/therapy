

document.onkeydown = key_down;
document.onkeyup = key_up;

document.body.innerHTML = "<div style='position: absolute; z-index: 1; left: 0px; top: 0px; ' id='map' name='map'></div>";

document.body.innerHTML = document.body.innerHTML + '<div style="position: absolute; z-index: -10; left: 0px; top: 0px; width: 900px; background-color: green" id="objects_select" name="objects_select"></div>';

let current_obj: any;

current_obj = document.getElementById('objects_select');
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "background" name = "hospital_floor" onclick= "select_source(this.id, this.name)" src="background/hospital_floor00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "background" name = "grass" onclick= "select_source(this.id, this.name)" src="background/grass00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "background" name = "metal floor" onclick= "select_source(this.id, this.name)" src="background/metal floor00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "mobile_objects" name = "head_doctor" onclick= "select_source(this.id, this.name)" src="mobile_objects/head_doctor00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "mobile_objects" name = "protagonist" onclick= "select_source(this.id, this.name)" src="mobile_objects/protagonist00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "shadows" name = "hospital_ward_darkness" onclick= "select_source(this.id, this.name)" src="shadows/hospital_ward_darkness00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "shadows" name = "hospital_ward_darkness_min" onclick= "select_source(this.id, this.name)" src="shadows/hospital_ward_darkness_min00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "shadows" name = "hospital_ward_windows" onclick= "select_source(this.id, this.name)" src="shadows/hospital_ward_windows00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "shadows" name = "boiler_room_darkness" onclick= "select_source(this.id, this.name)" src="shadows/boiler_room_darkness00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "shadows" name = "boiler_room_lamp" onclick= "select_source(this.id, this.name)" src="shadows/boiler_room_lamp00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "blood_wall" onclick= "select_source(this.id, this.name)" src="static_objects/blood_wall00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "hospital_bed" onclick= "select_source(this.id, this.name)" src="static_objects/hospital_bed00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "hospital_wall" onclick= "select_source(this.id, this.name)" src="static_objects/hospital_wall00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "hospital_window" onclick= "select_source(this.id, this.name)" src="static_objects/hospital_window00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "blood_grinder" onclick= "select_source(this.id, this.name)" src="static_objects/blood_grinder00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "blood_fan" onclick= "select_source(this.id, this.name)" src="static_objects/blood_fan00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "blood_blades" onclick= "select_source(this.id, this.name)" src="static_objects/blood_blades00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "blood_lights" onclick= "select_source(this.id, this.name)" src="static_objects/blood_lights00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "blood_puddle" onclick= "select_source(this.id, this.name)" src="static_objects/blood_puddle00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "dead_worker" onclick= "select_source(this.id, this.name)" src="static_objects/dead_worker00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "brick_wall" onclick= "select_source(this.id, this.name)" src="static_objects/brick_wall00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "blood_puddles" onclick= "select_source(this.id, this.name)" src="static_objects/blood_puddles00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "mountain_corpses" onclick= "select_source(this.id, this.name)" src="static_objects/mountain_corpses00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "boiler_room_lamp" onclick= "select_source(this.id, this.name)" src="static_objects/boiler_room_lamp00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "mourner" onclick= "select_source(this.id, this.name)" src="static_objects/mourner00.png">';


current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "hospital_wall_inside" onclick= "select_source(this.id, this.name)" src="static_objects/hospital_wall_inside00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "hospital_door_inside_top" onclick= "select_source(this.id, this.name)" src="static_objects/hospital_door_inside_top00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "hospital_door_inside_bot" onclick= "select_source(this.id, this.name)" src="static_objects/hospital_door_inside_bot00.png">';


current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "operation_table" onclick= "select_source(this.id, this.name)" src="static_objects/operation_table00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "wall_photo" onclick= "select_source(this.id, this.name)" src="static_objects/wall_photo00.png">';
current_obj.innerHTML = current_obj.innerHTML + '<img style="cursor: pointer; width: 50px; height: 30px" id = "static_objects" name = "house_flower" onclick= "select_source(this.id, this.name)" src="static_objects/house_flower00.png">';



let map = document.getElementById('map');
map.innerHTML = map.innerHTML + "<div  id='text' name='text' ><div>";

let create_img:string = "hospital_floor";
let create_type:string = "background";
let zindex: number = 0;                                                //максимальный z-index
let keys_pressed: number[] = [];
let objects: any[] = [];
let pix:number = 3;
let step:number = 10;
let selected_object: number = 0;                              //последний выделенный объект



download();



class Obj {       
    type: string;       //тип объекта
    img: string;        //фото объекта
    X: number=0;        //ось Х
    Y: number=0;        //ось У
    Z: number=0;        //ось Z
    bottom: number=0;       //основание
    max_frame: number=0;    //максимальный кадр
     min_frame: number=0;     //минимальный кадр
    current_frame: number = 0;    //текущий кадр
    delay: number=0;      //задержка в кадрах
    current_delay: number = 0;    //текущая задержка
    select: number = 0;     //выделение объекта
    realWidth: number;      //ширина по фото
     Height: number = 0;     //высота по фото
    Width: number=0;      //ширина физическая (отдельно указывается и учитывается вместо ширины фото при столкновении объектов)
    actions: any[]=[];      //список доступных действий
    noise:any;



    constructor(folder: string, image:string) {
        this.type=folder;     
        this.img=image;

        if(folder=="background"){ 		//ФОНОВЫЕ
          this.min_frame=0;
          this.max_frame=0;
        }
        if(folder=="mobile_objects"){		//ПОДВИЖНЫЕ
              if(image=="protagonist"){		//ГЛАВ ГЕРОЙ
        this.delay=2;
       this.actions[0]={min: 0, max: 0};
       this.actions[1]={min: 5, max: 5};
       this.actions[2]={min: 10, max: 10};
       this.actions[3]={min: 15, max: 15};
       this.actions[4]={min: 1, max: 4};
       this.actions[5]={min: 6, max: 9};
       this.actions[6]={min: 11, max: 14};
       this.actions[7]={min: 16, max: 19};
       this.actions[8]={min: 20, max: 23};
       this.actions[9]={min: 24, max: 27};
          this.min_frame=15;
          this.max_frame=15;
          this.bottom=6;
          this.Width = 10;
      }
                 if(image=="head_doctor"){    //ГЛАВ ВРАЧ
        this.delay=2;
       this.actions[0]={min: 0, max: 0};
       this.actions[1]={min: 5, max: 5};
       this.actions[2]={min: 10, max: 10};
       this.actions[3]={min: 15, max: 15};
       this.actions[4]={min: 1, max: 4};
       this.actions[5]={min: 6, max: 9};
       this.actions[6]={min: 11, max: 14};
       this.actions[7]={min: 16, max: 19};
          this.min_frame=0;
          this.max_frame=0;
          this.bottom=6;
          this.Width = 10;
      }
        }  
       if(folder=="static_objects"){		//СТАТИЧНЫЕ
          this.min_frame=0;
          this.max_frame=0;
          if(image=="hospital_bed"){		//КРОВАТЬ
            this.bottom=15;
            this.Width = 50;  
          }
         if(image=="operation_table"){    //ОПЕРАЦИОННЫЙ СТОЛ
            this.bottom=10;
            this.Width = 52;  
          }
          if(image=="house_flower"){    //ЦВЕТОЧОК
            this.bottom=7;
            this.Width = 17;  
          }                    
           if(image=="boiler_room_lamp"){    //ЛАМПА
          this.delay=1;
          this.min_frame=0;
          this.max_frame=1;
          }
           if(image=="hospital_window"){		//ОКНО
            this.noise={audio:"rain", rad:200};
           this.delay=1;
          this.min_frame=0;
          this.max_frame=2;
          }
                  if(image=="hospital_wall"){    //СТЕНА
            this.bottom=20;
            this.Width = 100; 
          }
             if(image=="hospital_door_inside_top"){    //ДВЕРЬ В РАЗРЕЗЕ СВЕРХУ
            this.bottom=100;
            this.Width = 20; 
          }
           if(image=="hospital_door_inside_bot"){   //ДВЕРЬ В РАЗРЕЗЕ снизу
            this.bottom=75;
            this.Width = 20; 
          }
             if(image=="hospital_wall_inside"){     //СТЕНА В РАЗРЕЗЕ
            this.bottom=100;
            this.Width = 20; 
          }
  
             if(image=="blood_grinder"){    //СТЕНА
            this.bottom=16;
            this.Width = 100; 
          }
               if(image=="brick_wall"){    //СТЕНА
            this.bottom=16;
            this.Width = 100; 
          }
             if(image=="blood_blades"){    //ЛЕЗВИЯ СМЕРТИ
                       this.noise={audio:"blood_rinder", rad:150};
           this.delay=1;
          this.min_frame=0;
          this.max_frame=3;
          }
          if(image=="blood_fan"){    //ЛЕЗВИЯ СМЕРТИ
           this.delay=2;
          this.min_frame=0;
          this.max_frame=15;
          }
            if(image=="blood_lights"){    //ЛУЖА КРОВИ
           this.delay=10;
          this.min_frame=0;
          this.max_frame=3;
          }
            if(image=="dead_worker"){    //ТРУП РАБОТЯГИ
          this.bottom=5;
          this.Width = 25;
          }

          if(image=="mourner"){    //ПЛАКАЛЬЩИК
          this.noise={audio:"male_crying", rad:70};
          this.delay=4;
          this.min_frame=0;
          this.max_frame=1;
          this.bottom=5;
          this.Width = 19;
          }

          if(image=="mountain_corpses"){    //ГОРА ТРУПАКОВ
          this.bottom=57;
          this.Width = 158;
          }
        }
         if(folder=="shadows"){			//ТЕНЕВЫЕ
          this.min_frame=0;
          this.max_frame=0;
           if(image=="boiler_room_lamp"){    //ГОРА ТРУПАКОВ
                   this.delay=1;
       this.actions[0]={min: 0, max: 0};
       this.actions[1]={min: 0, max: 1};
          }
        }
}
}



function download(){                                    //загрузка объектов

for(let obj:number=0; obj>=0; obj++){
	if(localStorage["num_" + obj]!=undefined){
  if(localStorage["num_" + obj]!="space"){
			objects[objects.length]=JSON.parse(localStorage["num_" + obj]);
	map.innerHTML = map.innerHTML + "<img onclick='select(" + (objects.length-1) + ")'  src='" + objects[(objects.length-1)].type + "/" + objects[(objects.length-1)].img + "" + Math.floor(objects[(objects.length-1)].current_frame/10) + "" + objects[(objects.length-1)].current_frame%10 + ".png'  id='"+ (objects.length-1) +"' name='"+ (objects.length-1) +"' style='position: absolute; z-index: " + objects[(objects.length-1)].Y + "; box-sizing: border-box; image-rendering: pixelated;  left: " + pix*objects[(objects.length-1)].X + "px; top: " + pix*objects[(objects.length-1)].Y + "px'>";
	map.innerHTML = map.innerHTML + "<img  onclick='select(" + (objects.length-1) + ")' src='select.png'  id='sel."+ (objects.length-1) +"' name='sel."+ (objects.length-1) +"' style='border: " + pix +"px solid green; position: absolute; z-index: " + objects[(objects.length-1)].Y + "; box-sizing: border-box; image-rendering: pixelated;  left: " + pix*objects[(objects.length-1)].X + "px; top: " + pix*objects[(objects.length-1)].Y + "px'>";
	map.innerHTML = map.innerHTML + "<div   id='text."+ (objects.length-1) +"' name='text."+ (objects.length-1) +"' >[" + objects[(objects.length-1)].Y + " | " + objects[(objects.length-1)].X +"]</div> ";
	console.log('JSON.parse(localStorage["num_"' + obj + '])=' +objects[objects.length-1].img);

		}
}
	else break;
}
}

setInterval(function () {

   for(var keycode in keys_pressed){
	key_pressed(keycode);
   }
    for (var obj in objects) {		
    	render(document.getElementById(obj), obj);
    
   }
   text();
}, 50);

  function animation(obj: any) {          //при обращении меняет кадр
      if(obj.max_frame-obj.min_frame>0){    
        if(obj.current_delay==obj.delay){ 
          if(obj.current_frame+obj.min_frame==obj.max_frame){
            obj.current_frame=0; 
          }
          else { 
            obj.current_frame++;    
          }
          obj.current_delay=0;    
        }
            else {
              obj.current_delay++;    
            }
         } 
   else {
    obj.current_frame = 0;
   }

    }

function key_down(e: any) {
	let evtobj = window.event ? event: e; 
        keys_pressed[evtobj.keyCode] = 1;
        if(evtobj.keyCode==46 || evtobj.keyCode==27)select(0);
        if(evtobj.keyCode==69)add_obj(evtobj.keyCode);
        	if(evtobj.keyCode==107)pix++;
	if(evtobj.keyCode==109)if(pix!=1)pix--;
        	if(evtobj.keyCode==38)  step=step*10;        	
        	if(evtobj.keyCode==40)if(step>1) step=step/10;      
        	if(evtobj.keyCode==67){
            save();    

          }
          if(evtobj.keyCode==84){
            current_obj=document.getElementById('objects_select');
            current_obj.style.zIndex=10000 ;
          }
}

function key_up(e: any) {

	let evtobj = window.event ? event: e;
        if (evtobj.keyCode == 84) {
        current_obj = document.getElementById('objects_select');
        current_obj.style.zIndex = -10;
    }
	    delete(keys_pressed[evtobj.keyCode]);
}

function key_pressed(keycode) {
	for(let obj:number=0; obj<objects.length; obj++){

		if(objects[obj].select==1 && objects[obj].img!="space"){

	if(keycode==82)objects[obj].Z=objects[obj].Z+step;
	if(keycode==70)objects[obj].Z=objects[obj].Z-step;

	if(keycode==68)objects[obj].X=objects[obj].X+step*move(obj, "RIGHT");
	if(keycode==65)objects[obj].X=objects[obj].X-step*move(obj, "LEFT");
	if(keycode==87)objects[obj].Y=objects[obj].Y-step*move(obj, "UP");
	if(keycode==83)objects[obj].Y=objects[obj].Y+step*move(obj, "DOWN");
}

	}
}

function move(obj_number, direct: string){

	 	current_obj=step;
		for(let obj:number=0; obj<objects.length; obj++){		//ЦИКЛ ПРОЛЕТ ПО ВСЕМ ОБЪЕКТАМ
			if( objects[obj].Width!=0 && objects[obj_number].Width!=0 && obj_number!=obj && objects[obj].img!="space"){ 	//ЕСЛИ НЕ РАССМАТРИВАЕТСЯ ВЫБРАНЫЙ ОБЪЕКТ, НЕ РАССМ ПУСТОЙ И РАССМ ЯВЛЯЕТСЯ ОБЪЕКТОМ

				if(  Math.abs(Math.abs((objects[obj_number].X-objects[obj_number].Width/2) - (objects[obj].X+objects[obj].Width/2)  ) - Math.abs((objects[obj_number].X+objects[obj_number].Width/2) - (objects[obj].X-objects[obj].Width/2)))<(objects[obj].Width+objects[obj_number].Width)){
					if (direct =="DOWN"  && objects[obj_number].Y-objects[obj_number].bottom< objects[obj].Y-objects[obj].bottom  && objects[obj_number].Y+step>=objects[obj].Y-objects[obj].bottom && (objects[obj].Y-objects[obj].bottom-objects[obj_number].Y)<current_obj)current_obj=objects[obj].Y-objects[obj].bottom-objects[obj_number].Y;
					if (direct =="UP"  && objects[obj_number].Y-objects[obj_number].bottom>objects[obj].Y-objects[obj].bottom  && objects[obj_number].Y-objects[obj_number].bottom-step<=objects[obj].Y && (objects[obj_number].Y-objects[obj_number].bottom-objects[obj].Y)<current_obj)current_obj=objects[obj_number].Y-objects[obj_number].bottom-objects[obj].Y;

			

				}

				if(Math.abs(Math.abs((objects[obj_number].Y)-(objects[obj].Y-objects[obj].bottom)) - Math.abs((objects[obj].Y)-(objects[obj_number].Y-objects[obj_number].bottom))) <(objects[obj].bottom+objects[obj_number].bottom)){
					if (direct =="LEFT"  && objects[obj_number].X>objects[obj].X && (objects[obj_number].X-objects[obj_number].Width/2)-step<(objects[obj].X+objects[obj].Width/2) && ((objects[obj_number].X-objects[obj_number].Width/2)-(objects[obj].X+objects[obj].Width/2))<current_obj)current_obj = ((objects[obj_number].X-objects[obj_number].Width/2)-(objects[obj].X+objects[obj].Width/2));
					
					if (direct =="RIGHT"  && (objects[obj_number].X)<(objects[obj].X) && (objects[obj_number].X+objects[obj_number].Width/2+step)>(objects[obj].X-objects[obj].Width/2) && ((objects[obj].X-objects[obj].Width/2)-(objects[obj_number].X+objects[obj_number].Width/2))<current_obj)current_obj = ((objects[obj].X-objects[obj].Width/2)-(objects[obj_number].X+objects[obj_number].Width/2))
					
					

					
				}

			}

		

}

	if(current_obj==step){
		if(direct =="LEFT"   ){
			if(objects[obj_number].Width==0 && (objects[obj_number].X-(objects[obj_number].realWidth/2)-step)<0)current_obj=objects[obj_number].X-objects[obj_number].realWidth/2;
			if(objects[obj_number].Width!=0 && (objects[obj_number].X-(objects[obj_number].Width/2)-step)<0)current_obj=objects[obj_number].X-objects[obj_number].Width/2;
			
		}
		else if(direct =="UP"  ){
			if(objects[obj_number].bottom!=0 && objects[obj_number].Y-objects[obj_number].bottom-step<0)current_obj=objects[obj_number].Y-objects[obj_number].bottom;
			if(objects[obj_number].bottom==0 && objects[obj_number].Y-objects[obj_number].Height-step<0)current_obj=objects[obj_number].Y-objects[obj_number].Height;

		}
		}
	return current_obj/step;
	}


function save(){

	for(let i:number=0; i>=0; i++){
	if(localStorage["num_" + i]!=undefined)delete localStorage["num_" + i];
	else break;
	}
	for(let obj:number=0; obj<objects.length; obj++){
		if (objects[obj]!=undefined ){


	if(objects[obj].img=="space")localStorage.setItem("num_" + obj, "space");
        else {   
          console.log("objects[" + obj + "]='" + JSON.stringify(objects[obj]) + "';");  
          localStorage.setItem("num_" + obj, JSON.stringify(objects[obj]));
      }
	}
		}	
}

function add_obj(key_code:number){			//добавление объектов

	for(let obj:number=0; obj<=objects.length; obj++){
              console.log('мы в дерьме');
              if(objects[obj]){
                  if(objects[obj].img=="space"){  //если объект был удален
                  objects[obj]=new Obj(create_type,create_img);
                  select(obj);  
                    break;  
                  }}
		else if (obj==objects.length){
		objects[obj]=new Obj(create_type,create_img);
		select(obj);
		break;
		}

	}
      

	select(selected_object);
	map.innerHTML = map.innerHTML + "<img onclick='select(" + selected_object + ")'  src='" + objects[selected_object].type + "/" + objects[selected_object].img + "" + Math.floor((objects[selected_object].current_frame+objects[selected_object].min_frame)/10) + "" + (objects[selected_object].current_frame+objects[selected_object].min_frame)%10 + ".png'  id='"+ selected_object +"' name='"+ selected_object +"' style='position: absolute; z-index: " + objects[selected_object].Y + "; box-sizing: border-box; image-rendering: pixelated;  left: " + pix*objects[selected_object].X + "px; top: " + pix*objects[selected_object].Y + "px'>";
       current_obj=document.getElementById("" + selected_object + "");	
	objects[selected_object].X=700+(current_obj.naturalWidth%2)*0.5;	 
	objects[selected_object].Y=500;   

	map.innerHTML = map.innerHTML + "<img  onclick='select(" + selected_object + ")' src='select.png'  id='sel."+ selected_object +"' name='sel."+ selected_object +"' style='border: " + pix +"px solid green; position: absolute; z-index: " + objects[selected_object].Y + "; box-sizing: border-box; image-rendering: pixelated;  left: " + pix*objects[selected_object].X + "px; top: " + pix*objects[selected_object].Y + "px'>";

	map.innerHTML = map.innerHTML + "<div   id='text."+ selected_object +"' name='text."+ selected_object +"' >" + selected_object + " [" + objects[selected_object].Y + " | " + objects[selected_object].X +"]</div> ";


}


function render(obj, obj_number){			
	if(objects[obj_number].img!="space"){
     	animation(objects[obj_number]);		//при необходимости меняет кадр
     	if(zindex<objects[obj_number].Y){
		zindex=objects[obj_number].Y;
     	     }
	current_obj=document.getElementById(obj_number);
	current_obj.src = "" + objects[obj_number].type + "/" + objects[obj_number].img + "" + Math.floor((objects[obj_number].current_frame+objects[obj_number].min_frame)/10) + "" + (objects[obj_number].current_frame+objects[obj_number].min_frame)%10 + ".png";

//	if(objects[obj_number].Width==0)objects[obj_number].Width=current_obj.naturalWidth;	
      	objects[obj_number].realWidth=current_obj.naturalWidth;	
    	objects[obj_number].Height=current_obj.naturalHeight;  

  
	
    	current_obj.style = "position: absolute;  box-sizing: border-box; image-rendering: pixelated; left:" + (objects[obj_number].X-objects[obj_number].realWidth/2)*pix + "px; top:" +  (objects[obj_number].Y-objects[obj_number].Height-objects[obj_number].Z)*pix + "px; height: " + objects[obj_number].Height*pix + "px; width:" + objects[obj_number].realWidth*pix + "px";

     

  	if(objects[obj_number].type=="background")current_obj.style.zIndex = objects[obj_number].Y;
   	if(objects[obj_number].type=="static_objects" || objects[obj_number].type=="mobile_objects")current_obj.style.zIndex = zindex + objects[obj_number].Y;
      	if(objects[obj_number].type=="shadows")current_obj.style.zIndex = zindex*2 + objects[obj_number].Y;  
//	 if(objects[obj_number].bottom==0)objects[obj_number].bottom = objects[obj_number].Height;

	current_obj=document.getElementById("sel." + obj_number);
 	current_obj.style = "cursor: pointer; border: " + pix +"px solid green; position: absolute;  box-sizing: border-box; image-rendering: pixelated; left:" + (objects[obj_number].X-objects[obj_number].Width/2)*pix + "px; top:" +  (objects[obj_number].Y-objects[obj_number].Height-objects[obj_number].Z)*pix + "px; height: " + objects[obj_number].Height*pix + "px; width:" + objects[obj_number].Width*pix + "px";
 	if(objects[obj_number].Width==0){
 		current_obj.style.left=(objects[obj_number].X-objects[obj_number].realWidth/2)*pix+"px"; 
 		current_obj.style.width=objects[obj_number].realWidth*pix+"px";
 	}
  	if(objects[obj_number].type=="background")current_obj.style.zIndex =  zindex*4 +  objects[obj_number].Y;
   	if(objects[obj_number].type=="static_objects" || objects[obj_number].type=="mobile_objects")current_obj.style.zIndex = zindex*5 + objects[obj_number].Y;
      	if(objects[obj_number].type=="shadows")current_obj.style.zIndex = zindex*3 + objects[obj_number].Y;  
 	if(objects[obj_number].select==0)current_obj.style.zIndex=current_obj.style.zIndex+zindex*6;
  	current_obj.style.opacity = objects[obj_number].select;

	current_obj=document.getElementById("text." + obj_number);
   	current_obj.style ="cursor: default; position: absolute; z-index: "+ zindex + objects[obj_number].Y +"; left:" + pix*objects[obj_number].X + "px; top:" + ((objects[obj_number].Y-objects[obj_number].Z)*pix+pix/2) +"px; width: "+ 80*pix + "px; line-height:" + 12*pix + "px;  font-size: " + 8*pix + "px; text-shadow: " + pix +"px " + pix +"px 0px #002002, 0px " + pix +"px 0px #002002," + pix +"px 0px 0px #002002";
  	current_obj.innerHTML= "" + obj_number + " [" + objects[obj_number].X + " | " + objects[obj_number].Y +" | " + objects[obj_number].Z +"]";
   	current_obj.style.opacity = objects[obj_number].select;
}


}


function text(){
	current_obj = document.getElementById("text");
	current_obj.style = "position: absolute; left:" + pix*5 + "px; top:" + pix/2 +"px; width: "+ 350*pix + "px; line-height:" + 12*pix + "px;  font-size: " + 8*pix + "px; text-shadow: " + pix +"px " + pix +"px 0px black, 0px " + pix +"px 0px black," + pix +"px 0px 0px black";
	current_obj.innerHTML="<p style='position: absolute;  z-index: "+ zindex*10 +"'>Шаг:  " + step + "px  " + create_img + "</p>";
//	current_obj.innerHTML = current_obj.innerHTML + "<p style='position: absolute; left:0px; top:" + pix*150 + "px;  z-index: "+ zindex*10 +"'>Мясо, матюки...</p>";
}

function select_source(type, img){
  create_img=img;
  create_type=type;
//alert(create_img + "   "+ create_type);
}

function select(obj_number){			//операции с выделенным кадром

if(keys_pressed[17]!=1){			//если НЕ зажат ctrl					
	for(let obj:number=0; obj<objects.length; obj++){
		if(keys_pressed[46]==1 && objects[obj].select==1){		//если нажат DEL удаляет
			objects[obj].img="space";	
			current_obj = document.getElementById("" + obj + "");	
			current_obj.parentNode.removeChild(current_obj);
			current_obj = document.getElementById("sel." + obj + "");	
			current_obj.parentNode.removeChild(current_obj);
			current_obj = document.getElementById("text." + obj + "");	
			current_obj.parentNode.removeChild(current_obj);
	}

		objects[obj].select=0;	



	}
}
  console.log('айоу зашел в селект' + objects[obj_number]);

if(keys_pressed[27]==1)objects[obj_number].select=0;	//если нажат ESC снять выделение
else if(keys_pressed[46]!=1) { 

 	if(keys_pressed[17]==1 && objects[obj_number].select==1)objects[obj_number].select=0;
 	else  	objects[obj_number].select=1;
 	selected_object=obj_number;
}

}


