let docbody=document.getRootNode();
/*function updatePosition(event){
    console.log('move target ==', event.target);
    const x=event.clientX;
    const y=event.clientY;
    event.target.style.left=`${x}px`;
    event.target.style.top=`${y}px`;

}*/
function createUpdatePositionFunction(eventTarget){
    const toReturn=function(event){
            eventTarget.style.left=`${event.clientX}px`;
            eventTarget.style.top=`${event.clientY}px`;

    }
    return toReturn;
}
function clearListeners(){
    /*getEventListeners(docbody).mousemove=null;
    getEventListeners(docbody).mouseup=null;*/
    const allchildren=Array.from(docbody.children);
    docbody=docbody.cloneNode(false);
    allchildren.forEach(el=>docbody.appendChild(el));
    setInitialListener();
}


function setInitialListener(){
docbody.addEventListener('mousedown', function(event){
    if(event.target.classList.contains('draggable-item')){
        const updatePosition=createUpdatePositionFunction(event.target);
        docbody.addEventListener('mousemove', updatePosition);
        docbody.addEventListener('mouseup', clearListeners);
    }
});
}
setInitialListener();