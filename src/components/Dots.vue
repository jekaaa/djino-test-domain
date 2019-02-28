<template>
    <div class="container__dots">
        <div class="dot__dots" v-for="index of [0, 1, 2]" :class="{ active: index == activeIndex }" :key="index"></div>
    </div>
</template>

<script>
export default {
    props: {
        activeIndex: {
            type: Number
        }
    }
}
</script>


<style scoped>
.container__dots {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 12px;
    right: 25px;
    top: calc(50% - 34px);
}
.dot__dots {
    width: 10px;
    height: 10px;
    border: solid 1px #333;
    background-color: #FFF;
    margin-bottom: 16px;
    border-radius: 50%;
}
.active {
    border: solid 1px #FFF;
    background-color: #333;
}
@media screen and (max-width: 785px) {
    .container__dots {
        display: none;
    }
}
</style>

