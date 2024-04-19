//日历
dycalendar.draw({
    target: '.dycalendar',
    type: 'month',
    dayformat: "full",
    monthformat: "full",
    highlighttargetdate:true,
    prevnextbutton:"show"
});
// vanilla-til.js object
VanillaTilt.init(document.querySelector(".containerr"),{
       max: 25,
       speed: 400,
       glare: true,   // 发光效果
       "max-glare": 0.5,    
       scale: 0.8,//缩放
       // 调整旋转角度
       gyroscopeMinAngleX:  -10,     // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
       gyroscopeMaxAngleX:  10,      // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
       gyroscopeMinAngleY:  -10,     // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
       gyroscopeMaxAngleY:  10,  
   });
