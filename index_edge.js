/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Living_room3',
            type:'image',
            rect:['0px','0px','800px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Living_room3.png",'0px','0px']
         },
         {
            id:'Touchdown',
            display:'none',
            type:'group',
            rect:['182','-373','426','746','auto','auto'],
            c:[
            {
               id:'game-field',
               type:'image',
               rect:['0px','0px','426px','746px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"game-field.png",'0px','0px']
            },
            {
               id:'catch_-_ball',
               type:'image',
               rect:['368px','477px','34px','24px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"catch%20-%20ball.png",'0px','0px'],
               transform:[[],['17deg']]
            },
            {
               id:'catch_-_player',
               type:'image',
               rect:['31px','423px','259px','379px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"catch%20-%20player.png",'0px','0px'],
               transform:[[],[],[],['0.5','0.5']]
            }]
         },
         {
            id:'Snap',
            type:'group',
            rect:['29','-199','812','998','auto','auto'],
            c:[
            {
               id:'field3',
               type:'image',
               rect:['-427px','-833px','1586px','2773px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"field3.png",'0px','0px'],
               transform:[[],[],[],['0.3','0.3']]
            },
            {
               id:'catch_-_ball2',
               type:'image',
               rect:['308px','517px','34px','24px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"catch%20-%20ball2.png",'0px','0px'],
               transform:[[],['16deg']]
            },
            {
               id:'snap2',
               type:'image',
               rect:['-1006px','-225px','2803px','1280px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"snap2.png",'0px','0px'],
               transform:[[],['6deg'],[],['0.3','0.3']]
            }]
         },
         {
            id:'Throw',
            display:'none',
            type:'group',
            rect:['131','-234','537','939','auto','auto'],
            c:[
            {
               id:'field4',
               type:'image',
               rect:['0px','0px','537px','939px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"field4.png",'0px','0px']
            },
            {
               id:'throw',
               type:'image',
               rect:['334px','346px','89px','213px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"throw.png",'0px','0px']
            },
            {
               id:'ball_2',
               type:'image',
               rect:['323px','351px','22px','23px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"ball%202.png",'0px','0px']
            }]
         },
         {
            id:'halftime',
            display:'none',
            type:'image',
            rect:['182px','83px','426px','265px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"halftime.png",'0px','0px']
         },
         {
            id:'Living_room-back',
            type:'image',
            rect:['-14px','-10px','815px','612px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Living_room-back.png",'0px','0px']
         },
         {
            id:'Living_room22',
            type:'image',
            rect:['0px','0px','800px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Living_room22.png",'0px','0px']
         },
         {
            id:'Text',
            type:'text',
            rect:['-51','68','auto','auto','auto','auto'],
            text:"",
            font:['Arial, Helvetica, sans-serif',[24,""],"rgba(0,0,0,1)","normal","none",""]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_field4}": [
            ["style", "top", '-0.02px'],
            ["style", "height", '939.44219970703px'],
            ["style", "left", '0px'],
            ["style", "width", '537.29795773493px']
         ],
         "${_snap2}": [
            ["style", "top", '-188.12px'],
            ["transform", "scaleY", '0.3'],
            ["transform", "rotateZ", '2deg'],
            ["transform", "scaleX", '0.3'],
            ["style", "height", '1217.1515304967px'],
            ["style", "left", '-927.21px'],
            ["style", "width", '2666.6666666667px']
         ],
         "${_Throw}": [
            ["style", "display", 'none']
         ],
         "${_field3}": [
            ["style", "top", '-887.38px'],
            ["transform", "scaleY", '0.36'],
            ["transform", "scaleX", '0.36'],
            ["style", "display", 'block'],
            ["style", "left", '-428.43px']
         ],
         "${_Touchdown}": [
            ["style", "display", 'none']
         ],
         "${_throw}": [
            ["style", "top", '345.75px'],
            ["style", "height", '212.60997313055px'],
            ["style", "left", '333.5px'],
            ["style", "width", '88.764556884766px']
         ],
         "${_ball_2}": [
            ["style", "top", '352.97px'],
            ["transform", "rotateZ", '-6deg'],
            ["style", "height", '20.725818988752px'],
            ["style", "left", '327px'],
            ["style", "width", '20.147060167143px']
         ],
         "${_Living_room22}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Living_room-back}": [
            ["style", "top", '-9.97px'],
            ["style", "height", '611.99487304688px'],
            ["style", "left", '-14.3px'],
            ["style", "width", '815.3154288764px']
         ],
         "${_catch_-_ball2}": [
            ["style", "top", '517.13px'],
            ["transform", "rotateZ", '16deg'],
            ["style", "height", '23.596330623235px'],
            ["style", "left", '307.52px'],
            ["style", "width", '34.233333587646px']
         ],
         "${_halftime}": [
            ["style", "top", '82.75px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '264.54885511407px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '181.95px'],
            ["style", "width", '425.95001220703px']
         ],
         "${_Snap}": [
            ["style", "display", 'block']
         ],
         "${_Living_room3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '800px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_catch_-_ball}": [
            ["style", "top", '482.99px'],
            ["transform", "rotateZ", '17deg'],
            ["style", "height", '23.593089485962px'],
            ["style", "opacity", '1'],
            ["style", "left", '376.07px'],
            ["style", "width", '34.2366462055px']
         ],
         "${_game-field}": [
            ["style", "top", '0px'],
            ["style", "height", '746.12890625px'],
            ["style", "left", '0.01px'],
            ["style", "width", '425.95544463509px']
         ],
         "${_catch_-_player}": [
            ["style", "top", '422.7px'],
            ["transform", "scaleX", '0.5'],
            ["transform", "scaleY", '0.5'],
            ["transform", "rotateZ", '11deg'],
            ["style", "height", '379.0823059082px'],
            ["style", "opacity", '1'],
            ["style", "left", '30.51px'],
            ["style", "width", '259.40230217603px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6250,
         autoPlay: true,
         timeline: [
            { id: "eid79", tween: [ "style", "${_field3}", "display", 'none', { fromValue: 'block'}], position: 1099, duration: 0 },
            { id: "eid92", tween: [ "style", "${_ball_2}", "top", '298.43px', { fromValue: '352.97px'}], position: 4000, duration: 828 },
            { id: "eid47", tween: [ "style", "${_game-field}", "width", '568.58013916016px', { fromValue: '425.95544463509px'}], position: 2000, duration: 1460 },
            { id: "eid46", tween: [ "style", "${_game-field}", "left", '-53.42px', { fromValue: '0.01px'}], position: 2000, duration: 1460 },
            { id: "eid21", tween: [ "transform", "${_catch_-_player}", "scaleX", '1.06248', { fromValue: '0.5'}], position: 2000, duration: 1460 },
            { id: "eid98", tween: [ "transform", "${_ball_2}", "rotateZ", '-31deg', { fromValue: '-6deg'}], position: 4000, duration: 828 },
            { id: "eid45", tween: [ "style", "${_game-field}", "height", '995.95513513436px', { fromValue: '746.12890625px'}], position: 2000, duration: 1460 },
            { id: "eid18", tween: [ "style", "${_catch_-_ball}", "top", '485.98px', { fromValue: '482.99px'}], position: 2000, duration: 1460 },
            { id: "eid17", tween: [ "style", "${_catch_-_ball}", "left", '181.05px', { fromValue: '376.07px'}], position: 2000, duration: 1460 },
            { id: "eid48", tween: [ "style", "${_game-field}", "top", '-110.62px', { fromValue: '0px'}], position: 2000, duration: 1460 },
            { id: "eid94", tween: [ "style", "${_ball_2}", "height", '44.383335113525px', { fromValue: '20.725818988752px'}], position: 4000, duration: 828 },
            { id: "eid24", tween: [ "style", "${_catch_-_player}", "top", '501.59px', { fromValue: '422.7px'}], position: 2000, duration: 1460 },
            { id: "eid105", tween: [ "transform", "${_halftime}", "scaleX", '1.24', { fromValue: '1'}], position: 5000, duration: 433 },
            { id: "eid107", tween: [ "transform", "${_halftime}", "scaleX", '1.02', { fromValue: '1.24'}], position: 5433, duration: 381 },
            { id: "eid109", tween: [ "transform", "${_halftime}", "scaleX", '1.32', { fromValue: '1.02'}], position: 5814, duration: 436 },
            { id: "eid74", tween: [ "style", "${_field3}", "top", '-832.99px', { fromValue: '-887.38px'}], position: 0, duration: 1000 },
            { id: "eid68", tween: [ "transform", "${_field3}", "scaleX", '0.3', { fromValue: '0.36'}], position: 0, duration: 1000 },
            { id: "eid58", tween: [ "style", "${_snap2}", "height", '631.77780151367px', { fromValue: '1217.1515304967px'}], position: 0, duration: 1000 },
            { id: "eid64", tween: [ "style", "${_snap2}", "width", '1384.1606285268px', { fromValue: '2666.6666666667px'}], position: 0, duration: 1000 },
            { id: "eid4", tween: [ "style", "${_catch_-_player}", "height", '379.0823059082px', { fromValue: '379.0823059082px'}], position: 3460, duration: 0 },
            { id: "eid100", tween: [ "style", "${_Throw}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid99", tween: [ "style", "${_Throw}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid66", tween: [ "transform", "${_snap2}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 0, duration: 1000 },
            { id: "eid96", tween: [ "style", "${_ball_2}", "width", '43.14594233441px', { fromValue: '20.147060167143px'}], position: 4000, duration: 828 },
            { id: "eid104", tween: [ "style", "${_halftime}", "height", '264.54885511407px', { fromValue: '264.54885511407px'}], position: 5000, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_catch_-_player}", "scaleY", '1.06248', { fromValue: '0.5'}], position: 2000, duration: 1460 },
            { id: "eid60", tween: [ "style", "${_snap2}", "top", '143.17px', { fromValue: '-188.12px'}], position: 0, duration: 1000 },
            { id: "eid102", tween: [ "style", "${_halftime}", "top", '82.75px', { fromValue: '82.75px'}], position: 5000, duration: 0 },
            { id: "eid3", tween: [ "style", "${_catch_-_player}", "width", '259.40230217603px', { fromValue: '259.40230217603px'}], position: 3460, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Touchdown}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid81", tween: [ "style", "${_Touchdown}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid90", tween: [ "style", "${_ball_2}", "left", '29.35px', { fromValue: '327px'}], position: 4000, duration: 828 },
            { id: "eid112", tween: [ "style", "${_halftime}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid111", tween: [ "style", "${_halftime}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid106", tween: [ "transform", "${_halftime}", "scaleY", '1.24', { fromValue: '1'}], position: 5000, duration: 433 },
            { id: "eid108", tween: [ "transform", "${_halftime}", "scaleY", '1.02', { fromValue: '1.24'}], position: 5433, duration: 381 },
            { id: "eid110", tween: [ "transform", "${_halftime}", "scaleY", '1.32', { fromValue: '1.02'}], position: 5814, duration: 436 },
            { id: "eid103", tween: [ "style", "${_halftime}", "width", '425.95001220703px', { fromValue: '425.95001220703px'}], position: 5000, duration: 0 },
            { id: "eid101", tween: [ "style", "${_halftime}", "left", '181.95px', { fromValue: '181.95px'}], position: 5000, duration: 0 },
            { id: "eid70", tween: [ "transform", "${_field3}", "scaleY", '0.3', { fromValue: '0.36'}], position: 0, duration: 1000 },
            { id: "eid23", tween: [ "style", "${_catch_-_player}", "left", '40.84px', { fromValue: '30.51px'}], position: 2000, duration: 1460 },
            { id: "eid72", tween: [ "style", "${_field3}", "left", '-427.05px', { fromValue: '-428.43px'}], position: 0, duration: 1000 },
            { id: "eid27", tween: [ "transform", "${_catch_-_ball}", "rotateZ", '2deg', { fromValue: '17deg'}], position: 2000, duration: 1460 },
            { id: "eid62", tween: [ "style", "${_snap2}", "left", '-326.55px', { fromValue: '-927.21px'}], position: 0, duration: 1000 },
            { id: "eid83", tween: [ "style", "${_Snap}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid84", tween: [ "style", "${_Snap}", "display", 'none', { fromValue: 'block'}], position: 1099, duration: 0 },
            { id: "eid25", tween: [ "style", "${_catch_-_ball}", "height", '44.393716319315px', { fromValue: '23.593089485962px'}], position: 2000, duration: 1460 },
            { id: "eid26", tween: [ "style", "${_catch_-_ball}", "width", '64.459786011813px', { fromValue: '34.2366462055px'}], position: 2000, duration: 1460 },
            { id: "eid31", tween: [ "transform", "${_catch_-_player}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 2000, duration: 1460 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-13562918");
