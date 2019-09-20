let docbody=document.getRootNode();
/*function updatePosition(event, target){
    console.log('move target ==', event.target);
    const x=event.clientX;
    const y=event.clientY;
    event.target.style.left=`${x}px`;
    event.target.style.top=`${y}px`;

}*/
function createUpdatePositionFunction(eventTarget){
    const toReturn=function(event){
            event.preventDefault();
            eventTarget.style.left=`${event.clientX}px`;
            eventTarget.style.top=`${event.clientY}px`;
            //console.log('this is running');

    }
    return toReturn;
}
function createClearListenerFunction(eventname, listenerEl){
   const returnable=function(){
       docbody.removeEventListener(eventname, listenerEl);
       docbody.removeEventListener('mouseup', returnable);
   }
   return returnable;
}


function setInitialListener(){
docbody.addEventListener('mousedown', function(event){
    if(event.target.classList.contains('draggable-item')){
        const updatePosition=createUpdatePositionFunction(event.target);
        docbody.addEventListener('mousemove', updatePosition);
        const clearing=createClearListenerFunction('mousemove', updatePosition);
        docbody.addEventListener('mouseup', clearing);
    }
});
}
setInitialListener();