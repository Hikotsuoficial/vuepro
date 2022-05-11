<template>
    <div class="sloganText">
        <!-- <img class="imgPointing2" src="@/assets/img/ponitin2.png" alt=""> -->
        <div class="textSloganContainer">
            <h2>Tenemos lo que necesitas</h2>
            <p class="titulo">Solo falta que lo elijas</p>
            <p class="textSlogan2">Siempre habrá alguien disponible para <br> <strong class="bigWord">solucionar</strong><br> eso
                que te trajo hasta aquí.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; 

export default defineComponent({
  name: 'RightContainer',
  components: {
    // HelloWorld,
  },
})
</script>

<style scoped>

.sloganText{
    background-color: white;
    padding: 0 10px;
    height: 300px;
    color:rgb(49, 49, 49);
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    box-shadow: 1px 1px 20px #383838;
    margin-right: 0px;
    display: flex;
    align-items: center;
    /* flex-wrap: wrap; */
    /* border:1px solid red; */
}

.titulo{
    font-size: 3rem;
    font-weight: bolder;
    line-height: 55px;
}

.sloganText{
    opacity: 1;
}

.textSlogan2{
    font-weight: 500;
    margin: 5px;
}

.bigWord{
    font-size: 2.8rem;
    color: rgb(231, 135, 25);
}

.sloganText .imgPointing2{
    position:absolute;
    width: 250px;
    margin-top: 84px;
    margin-left:45px;
    
}

@media screen and (max-width: 768px) {
    .titulo{
    font-size: 2.8rem;
    }
    .sloganText{
        margin-bottom: 30px;
    }
}
</style>
