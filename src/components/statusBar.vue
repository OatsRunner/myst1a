<template>
    <div class="statusBar" style="position: fixed;box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);">
    <div style="display:flex;border-left:0;margin-left:51.92px;margin-right:51.92px;margin-top: 18.34px;">
      <time class="timeText">9:41</time>
    </div>
    <div class="levels" style="display:flex;padding-left: 112px;">
      <img class="level" alt="level" src="../assets/static/Levels.svg" />
    </div>
  </div>
</template>
  
<script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "statusBar",
  });
</script>

<style>
    .statusBar{
        display: flex;
        width: 393px;
        height: 54px;
        justify-content: left;
        align-items: flex-start;
        flex-shrink: 0;
        margin-left: 0;
        padding-left: 0;
        background: #FFF;
        z-index: 2;
    }

    .timeText{
        display: flex;
        color: var(--Labels-Primary, #000);
        text-align: center;
        font-family: "SF Pro";
        font-size: 17px;
        font-style: normal;
        font-weight: 590;
        line-height: 22px; /* 129.412% */
    }

</style>