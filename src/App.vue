<script setup lang="ts">
</script>

<template>
  <!-- Wallpaper accents -->
  <img class="
    absolute 
    
    right-[10rem] 
    bottom-[30rem] 
    
    w-[50rem] 
    h-[50rem]

    desktop:right-[40rem]
    desktop:w-[100rem]
    desktop:h-[100rem]
    " 
    src="./assets/img/bg-pattern-top.svg">    

  <img class="
    absolute 
    
    left-[10rem] 
    top-[30rem] 
    
    w-[50rem] 
    h-[50rem]

    desktop:left-[45rem]
    desktop:w-[100rem]
    desktop:h-[100rem]    
    " 
    src="./assets/img/bg-pattern-bottom.svg">

<div class="flex items-center justify-center min-h-screen overflow-hidden">

  <!-- Card -->
  <div class="
    relative 
    
    flex 
    flex-col 
    items-center 
    
    rounded-2xl 
    
    bg-white
    shadow-xl
    ">
    <img class="rounded-t-2xl" src="./assets/img/bg-pattern-card.svg" alt="background">
    <img class="
      absolute 
      
      border-4 
      border-white 
      rounded-full

      top-[5.5rem]      
      " src="./assets/img/image-victor.jpg" alt="victor"
      >
    <div class="flex flex-row gap-2 items-center justify-center mt-[4.5rem]">
      <p class="font-bold text-lg text-very-dark-blue">Victor Crest</p>
      <p class="text-lg text-dark-gray">26</p>
    </div>
    <p class="text-sm text-dark-gray mt-1">London</p>

    <!-- Metrics -->
    <div class="
      flex 
      flex-row 
      items-center 
      gap-12 
      
      py-6
      px-12
      mt-6
      
      border-t-[1px]
      border-solid
      border-dark-gray/25
      ">
      <div class="flex flex-col items-center">
        <p class="text-lg text-very-dark-blue font-bold">80K</p>
        <p class="text-[10px] text-dark-gray tracking-widest">Followers</p>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-lg text-very-dark-blue font-bold">803K</p>
        <p class="text-[10px] text-dark-gray tracking-widest">Likes</p>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-lg text-very-dark-blue font-bold">1.4K</p>
        <p class="text-[10px] text-dark-gray tracking-widest">Photos</p>
      </div>      
    </div>
  </div>
</div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      bodyClass: 'font-kumbh-sans bg-dark-cyan overflow-hidden'
    };
  },
  mounted() {
    document.body.className = this.bodyClass;
  },
  beforeDestroy() {
    // Reset the class when the component is destroyed
    document.body.className = '';
  }
};
</script>