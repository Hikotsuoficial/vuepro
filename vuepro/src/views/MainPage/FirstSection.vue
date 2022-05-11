<template>
    <div class="firstSection">
        <div class="right">
            <img  class="pointingimg1" src="../../assets/img/pointin1.png" alt="Imagen señalando">
        </div>
        <div class="left">
            <p class="title">Encuentra la solución</p>
            <strong class="mastext"> <i>Nuestro gran equipo tiene de todo</i> </strong> 
            <strong class="intermediateText"> y lo mejor,</strong>
            <p><strong class="intermediateText2">son muy buenos</strong>
            <strong class="mastext"> <i> en lo que hacen.</i> </strong></p> 
        </div>
    </div>
</template>

<style scoped>
.firstSection{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(47, 79, 66);
    padding: 0px 30px;
}

.firstSection .title{
    font-size: 3.2rem;
    font-weight: bolder;
    color: rgb(226, 226, 226);
}

.firstSection .left .mastext{
    color:aliceblue;
}
.left .intermediateText{
    font-size: 2.3rem;
    font-weight: 700;
    color: rgb(243, 144, 14);
}

.left .intermediateText2{
    font-size: 2.4rem;
    font-weight: 700;
    color: rgb(59, 185, 34);
}

.right .pointingimg1{
    width: 600px;
    display: flex;
    justify-items: flex-end;
    margin-left: 0px;
}

/* Media querys de pantalla  */
@media screen and (max-width: 1440px) {
  .secondSection ul{
    font-size: 1rem;
    }
}

@media screen and (max-width: 1024px) {
    .firstSection .title {
        font-size: 2.6rem;
    }
    .firstSection .left .mastext{
        font-size:1.2rem;
    }
}

@media screen and (max-width: 768px) {
    .secondSection ul{
        font-size: 0.9rem;
    }
    .titleSecondSection {
        font-size: 1.9rem;
        margin: 5px 0;
    }

    .secondSection{
        padding: 15px 10px;
    }

    .right .pointingimg1{
        margin-top: 60px;
    }
}

</style>
