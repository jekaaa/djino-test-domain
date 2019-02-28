<template>
  <div>
    <Banner />
    <Services />
    <Piar />
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    Banner: () => import('@/components/Banner'),
    Services: () => import('@/components/Services'),
    Piar: () => import('@/components/Piar')
  }
}
</script>

<style>
.container__grid {
  width: 90%;
  position: relative;
  max-width: 1092px;
  min-width: 819px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
}
.container__grid-item {
  margin-right: 1%;
}
.container__grid-item:last-child {
  margin-right: 0;
}
h3 {
    font-size: 35px;
    font-weight: bold;
    text-align: center;
}
@media screen and (max-width: 859px) {
  .container__grid {
    max-width: 859px;
    min-width: 680px;
  } 
}
@media screen and (max-width: 720px) {
  .container__grid {
    max-width: 720px;
    min-width: 440px;
  } 
}
@media screen and (max-width: 480px) {
  .container__grid {
    max-width: 480px;
    min-width: 280px;
  } 
}
</style>
