<template>
    <div>
        <div class="navBar">
            <div>
                <logo-img />
            </div>
            <nav>
                <ul class="navigationMenu">
                    <li><router-link to="/">INICIO</router-link> </li>
                    <li><router-link to="/profiles">PERFILES</router-link></li>
                    <!-- <li><router-link to="/us">NOSOTROS</router-link></li> -->
                    <li><router-link to="/contact">CONTACTO</router-link></li>
                </ul>
            </nav>
            <div class="searchAndRegisterContainer">
                <form action="#" class="formSearch">
                    <span><img class="iconSearch" src="../../assets/img/SearchLupe.png" alt="Icono de búsqueda"/></span>
                    <label for="jobSearch" >
                    <input type="search"
                            name="jobSearch"
                            class="textSearch"
                            placeholder="Profesión u oficio"
                            required>
                    </label>
                </form> 
            </div>
            <div>
                <ul class="sectionlogin">
                    <li>
                        <a href="#">Login</a> |
                        <a href="# "> Registrarse </a>
                        <img class="loginIcon" src="../../assets/img/login.png" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import LogoImg from '@/components/layout/LogoImg.vue'
export default ({
    name: "NavBar",
    components: { LogoImg }
})
</script>

<style scoped>

.logo{
    /* border: 1px solid red; */
    padding: 0 50px;
    margin-left: 30px;
}

/* Menu de navegacion */ 
.navBar{
    display: Flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #2d4f5c;
    height: 100px;
    /* box-shadow: 1px 1px 10px #888888; */
}

.navigationMenu{
    display: flex;
    list-style: none;
    height: 40px;
}

.navigationMenu li{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
    font-weight: bold;
    font-size: 0.9rem;
    /* border: 1px solid red */
}

/* Caja de busqueda */
.textSearch{
  height: 40px;
  width: 300px;
  padding-left:36px;
  padding-right: 15px;
  border:none;
  /* border-top-left-radius: 5px;
  border-bottom-left-radius: 5px; */
  border-radius: 5px;
  font-size: 0.9rem;
  background-color: #f5f5f5;  
}

.textSearch::placeholder{
  text-align: center;
  font-size: 0.9rem;
}

/* .btnSearch{
  height: 40px;
  width: 50px;
  border:none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #e66f0f;
} */

.iconSearch{
    width: 25px;
    position: absolute;
    margin-left: 5px;
    margin-top: 9px;
    border-right: 1px solid #2d4f5c1f;
}

/* Secction de logueo */
.sectionlogin{
    padding: 0 15px;
    margin-right: 20px;
    display: flex;
    list-style: none;
    font-weight: bold;
    font-size: 0.8rem;
    justify-content: center;
    align-items: center;
    
}

.sectionlogin .loginIcon{
    position: absolute;
    width: 24px;
    margin: -4px;
    margin-left: 15px;
}

.sectionlogin li{
    margin: 0 5px;
    padding: 10px;
    border-radius: 7px;
    border: 1px solid white;
    box-shadow: 1px 1px 3px #252525;
}

.sectionlogin li a{
    color:white;
    text-decoration: none;
}
.sectionlogin li a:hover{
    color: #e66f0f;
}

.searchAndRegisterContainer{
 display:flex;
 justify-content: center;
}

@media screen and (max-width: 768px) {
    .navBar .navigationMenu li{
        padding: 0 10px;
    }
    .navBar .textSearch{
        width: 150px;
    }

    /* .searchAndRegisterContainer{
        display: none;
    } */

    .loginIcon{
        display: none;
    }
}

</style>
