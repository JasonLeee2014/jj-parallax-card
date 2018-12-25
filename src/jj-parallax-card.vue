<template>
    <div @click="onClick" ref="parallaxCard" class="parallax-card" :style="{transform:`rotateX(${rx}) rotateY(${ry}) translateZ(${zindex}px)`, '--light':`${ry}`, '--light-color':`${lightColor}`}" @mousemove="onMouseMove($event)" @mouseleave="onMouseLeave($event)" @mousedown="onMouseDown($event)" @mouseup="onMouseUp($event)">
        <div class="container">
            <slot name="content"/>
        </div>
        <div class="front" :style="{transform:`rotateX(${this.rx}) rotateY(${this.ry}) translateZ(-20px)`}">
            <slot name="front"/>
        </div>
    </div>
</template>

<script>
export default {
    name:'JJParallaxCard',
    props:{
        lightColor:{
            type:String,
            default:'white',
        },
        clickEffect:{
            type:Boolean,
            default:false,
        }
    },
    data(){
        return {
            rx:0,
            ry:0,
            zindex:-20,
        }
    },
    methods:{
        onMouseMove(e){
            let boundingClientRect = this.$refs.parallaxCard.getBoundingClientRect()
            let x = e.clientX - boundingClientRect.left
            let y = e.clientY - boundingClientRect.top
            let xc = boundingClientRect.width/2
            let yc = boundingClientRect.height/2
            let dx = x - xc
            let dy = y - yc
            this.rx = `${ dy/(-boundingClientRect.height*0.05) }deg`
            this.ry = `${ dx/(boundingClientRect.width*0.05) }deg`
        },
        onMouseLeave(e){
            this.rx = '0deg'
            this.ry = '0deg'
        },
        onMouseDown(e){
            if(this.clickEffect) {
                this.zindex = -35
            }
        },
        onMouseUp(e){
            if(this.clickEffect) {
                this.zindex = -20
            }
        },
        onClick(e){
            this.$emit('click',e)
        },
    },
    
}
</script>


<style scoped>
.parallax-card {
    margin: 20px;
    position: relative;
    cursor: pointer;
    user-select: none;
    z-index: 0;
}


.parallax-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .3);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    will-change: transform;
	border-radius: 4px;
    z-index: 1;

}

.parallax-card:hover::before {
    background:linear-gradient(var(--light),var(--light-color) 1% ,rgba(255,255,255,0) 60%);
}

.parallax-card .container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.parallax-card .front {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: scroll;
    border-radius: 4px;
    background-color: transparent;
    will-change: transform;
    z-index: 2;
}



</style>

