<template>
    <div class="background">
      <div class="overlap-group">
        <img class="logo" alt="Logo" src="../assets/static/bkgLeft.png" />
        <img class="img" alt="Logo" src="../assets/static/bkgRight.png" />
        <div class="rectangle" />
      </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "Background",
  });
</script>
  
<style>
.background {
  background-color: #ffc0ad;
  height: 778px;
  overflow: hidden;
  width: 393px;
}

.background .overlap-group {
  height: 779px;
  position: relative;
}

.background .logo {
  height: 512px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 133px;
  width: 267px;
}

.background .img {
  height: 512px;
  left:126px;
  object-fit: cover;
  position: absolute;
  top: 133px;
  width: 245px;
}

.background .rectangle {
  background-color: #ffffffe6;
  height: 779px;
  left: 0;
  position: absolute;
  top: 0;
  width: 393px;
}
</style>