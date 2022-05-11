<template>
    <div class="sloganImgs">
        <div class="firtsFig">
            <figure>
                <img src="../../assets/img/contruccion.jpg" alt="construccion">
                <figcaption>Construcción!</figcaption>
            </figure>
            <figure>
                <img src="../../assets/img/electricista.jpg" alt=" electricista">
                <figcaption>Electricista!</figcaption>
            </figure>
        </div>
        <div class="secondCol">
            <figure>
                <img src="../../assets/img/manicura.jpg" alt="manicure">
                <figcaption>Manicure!</figcaption>
            </figure>
            
        </div>
    </div>
</template>
<style scoped>

.sloganImgs{
    height: 520px;
    padding: 0px 2px;
    margin-top: 10px 0;
    /* margin-right: 10px; */
    color:#353535;
    /* border: 1px solid red; */
}

.sloganImgs{
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    /* border: 1px solid red; */
}

.sloganImgs .secondCol{
    display: grid;
    align-items: center;
}

.sloganImgs figure{
    background-color: aliceblue;
    margin: 10px;
    box-shadow: 1px 1px 12px #353535;
    border-radius: 10px;
    align-content: center;
    /* border:1px solid red; */
}

.sloganImgs figcaption{
    padding: 10px;
    /* border: 1px solid red; */
    font-weight: 700;
    font-style: italic;
}

.sloganImgs img{
    width: 240px;
    height: 240px;
    border:5px solid aliceblue;
    border-radius: 10px;
    /* margin: 10px; */
    opacity: 0.95;
}

.sloganImgs img:hover{
    opacity: 1;
}


@media screen and (min-width: 768px) {

    .sloganImgs{
        grid-auto-flow: dense;
    }

    .sloganImgs figcaption{
        padding: 5px;
    }
}
</style>
