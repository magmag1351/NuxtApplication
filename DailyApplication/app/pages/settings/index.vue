<template>
  <v-container fluid class="fill-height d-flex align-center justify-center">
    <h1>Settings</h1>
  </v-container>
</template>

<script setup>

</script>

<style scoped>
.fill-height {
  min-height: 100vh;
  background-image: url('@/assets/photos/BlueArchiveBackground.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.glass-card {
  background-color: rgba(255, 255, 255, 0.2); /* 半透明の白 */
  backdrop-filter: blur(10px); /* 背景をぼかす */
  border: 1px solid rgba(255, 255, 255, 0.3); /* わずかな境界線 */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* わずかな影 */
  border-radius: 20px; /* rounded="xl"の代わり */
}

.text-outline {
  text-shadow: -1px -1px 0 #242424, 1px -1px 0 #242424, -1px 1px 0 #242424, 1px 1px 0 #242424;
}
</style>
