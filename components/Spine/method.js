export const changeAnimation = (player) => {
    player.then((p)=>{
        console.dir('changeAnimation')
        console.log(p.animationState.tracks)
        p.animationState.setAnimation(0, "jump",true);
    })
}

export const disposeAnimation = (player) =>{
    player.then((p)=>{
        console.log('dispose')
        p.dispose(player);
    })
}
export const restartAnimation = (player) =>{
    player.then((p)=>{
        console.log('restart')
        p.paused = false;
    })
}
export const pauseAnimation = (player) =>{
    player.then((p)=>{
        console.log('pause')
        // console.dir(p)
        p.paused = true;
    })
}
export const addAnimation = (player) =>{
    player.then((p)=>{
        console.log('addAnimation')
        console.log(p.animationState.tracks)
        p.animationState.addAnimation(1,"run",true,0);
    })
}