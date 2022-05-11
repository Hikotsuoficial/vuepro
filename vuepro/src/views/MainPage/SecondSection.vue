<template>
<div>
    <div>
        <p class="titleSecondSection">Oficios y profesiones que podrás encontrar</p>
    </div>
    <div class="secondSection">
        <div >
            <ul>
                <li>Carpintero</li>
                <li>Albañil</li>
                <li>Fontanero</li>
                <li>Carpintero</li>
                <li>Soldador</li>
                <li>Pïntor</li>
                <li>Sastre</li>
                <li>Pastor</li>
                <li>Agricultor</li>
                <li>Carnicero</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Lechero</li>
                <li>Cocinero</li>
                <li>Lavandero</li>
                <li>Escultor</li>
                <li>Editor</li>
                <li>Locutor</li>
                <li>Vendedor</li>
                <li>Animador</li>
                <li>Peluquero</li>
                <li>Barbero</li>
            </ul>
        </div>
        <div>
        <ul>
            <li>Mecánico</li>
            <li>Abogado</li>
            <li>Ingeniero</li>
            <li>Matemático</li>
            <li>Peiodista</li>
            <li>Electricista</li>
            <li>Contador</li>
            <li>Médico Cirujano</li>
            <li>Historiador</li>
            <li>Enfermero</li>
        </ul>
        </div>
        <div>
        <ul>
            <li>Paramédico</li>
            <li>Pescador</li>
            <li>Traductor</li>
            <li>Economista</li>
            <li>Radiologo</li>
            <li>Sicologo</li>
            <li>Secretaria</li>
            <li>Arquitecto</li>
            <li>Filosofo</li>
            <li>Programador</li>
        </ul>
        </div>
    </div>
     <div>
        <p class="titleSecondSection">... y muchos más</p>
    </div>
</div>

</template>

<style scoped>

.secondSection{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 60px 30px;
    color: rgb(43, 43, 43);
}

.titleSecondSection{
    margin: 15px 0;
    font-weight: 900;
    font-size: 2.1rem;
    /* border: 1px solid red; */
    color: #2b2b2b;
}

.secondSection ul{
    text-align: left;
    font-size: 0.9rem;
    list-style: none;
    
}

.secondSection ul li{
    margin: 2px 40px;
    font-style: italic;
    padding: 4px 4px;
    
}

.secondSection ul li:before { 
    content: '\1F5F8';
    margin-left: -20px;
    margin-right: 10px;
}

.secondSection ul li:hover{ 
    color:rgb(247, 247, 247);
    background-color: #2f4f42;
    border-radius: 4px;
 }

@media screen and (max-width: 1440px) {
  .secondSection ul{
    font-size: 1rem;
    }
}

@media screen and (max-width: 1024px) {
  .secondSection ul{
        font-size: 0.9rem;
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
}

</style>
