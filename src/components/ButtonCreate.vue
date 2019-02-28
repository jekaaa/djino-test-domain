<template>
    <div class="container__center-button">
        <button class="button__create" :style="{ marginTop }">
            Создать аккаунт
        </button>
    </div>
</template>

<script>
export default {
    props: {
        marginTop: {
            type: String,
            default: '30px'
        }
    }
}
</script>


<style scoped>
.container__center-button {
   display: flex;
   justify-content: center;
   align-items: center;
}
.button__create {
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
    padding: 20px 48px;
    background-color: rgb(119, 181, 60);
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.button__create:hover {
    background-color: #6aac2b;
}
@media screen and (max-width: 859px) {
    .button__create {
        padding: 19px 45px;
        font-size: 22px;
    }        
}
@media screen and (max-width: 720px) {
    .button__create {
        padding: 18px 43px;
        font-size: 20px;
    } 
}
@media screen and (max-width: 480px) {
    .button__create {
        padding: 15px 40px;
        font-size: 18px;
    }  
}
</style>

