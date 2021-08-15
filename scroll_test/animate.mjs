export function animate(selector, option){           
    const startTime = performance.now();    
    let current_value;         
  
    
    if(option.prop === "opacity") {
        current_value = parseFloat( getComputedStyle(selector)[option.prop] );
    } else if(option.prop === "scroll"){          
        current_value = parseInt( window.scrollY || window.pageYOffset );
    }else{
        current_value = parseInt( getComputedStyle(selector)[option.prop] );
    }   
    
    if(current_value == option.value) return;
    if(current_value < option.value) {
        requestAnimationFrame(run_plus);
    } else {
        requestAnimationFrame(run_minus);
    }  
    
    
    function run_plus(time){   
        let timeLast = time - startTime;      
        let progress = timeLast / option.duration;
        let timer;   
        
        if (progress < 0) progress = 0; 
        if (progress > 1) progress = 1;      
    
        if (progress < 1){
            timer = requestAnimationFrame(run_plus); 
        } else {
            cancelAnimationFrame(timer);   
            if (option.callback) option.callback();    
        }   

        let result =  current_value + ( (option.value - current_value) * progress);    
        
        if (option.prop === "opacity"){
            selector.style[option.prop] = result;
        } else if(option.prop === "scroll"){
            window.scroll(0,result);
        } else {               
            selector.style[option.prop] = result+"px";
        }  
    }  

    function run_minus(time){     
        let timeLast = time - startTime;      
        let progress = timeLast / option.duration;      
        let timer;
        
        if (progress < 0) progress = 0; 
        if (progress > 1) progress = 1;      
        
        if (progress < 1){
            timer = requestAnimationFrame(run_minus); 
        } else {
            cancelAnimationFrame(timer);              
            if (option.callback) option.callback();            
        }         

        let result =  current_value - ( (current_value - option.value) * progress);    

        
        if (option.prop === "opacity"){
            selector.style[option.prop] = result;
        } else if(option.prop === "scroll"){
            window.scroll(0,result);
        } else {               
            selector.style[option.prop] = result+"px";
        }  
        
    }
}