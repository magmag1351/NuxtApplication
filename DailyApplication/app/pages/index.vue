<template>
  <v-container fluid class="fill-height d-flex align-center justify-center">
    <v-row justify="center" align="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-5 text-center glass-card">
          <v-card-title class="text-h4 font-weight-bold mb-4 text-outline">
            <v-icon large class="mr-2">mdi-home</v-icon>
            Home
          </v-card-title>
          <v-card-text>
            <div class="text-h5 mb-2 text-outline">{{ greeting }}</div>
            <div class="text-h3 font-weight-bold mb-4 text-outline">{{ currentTime }}</div>
            <div class="text-h6 mb-4 text-outline">{{ currentDate }}</div>

            <v-divider class="my-4"></v-divider>

            <div class="text-h6 mb-2 text-outline">天気</div>
            <div class="d-flex justify-center align-center mb-4">
              <v-icon large class="mr-2">mdi-weather-cloudy</v-icon>
              <span class="text-h5 text-outline">曇り、25°C</span>
            </div>

            <v-divider class="my-4"></v-divider>

            <div class="text-h6 mb-2">クイックアクセス</div>
            <v-row justify="center">
              <v-col cols="auto">
                <v-btn color="primary" class="mx-2" rounded>
                  <v-icon left>mdi-cog</v-icon>
                  設定
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn color="secondary" class="mx-2" rounded>
                  <v-icon left>mdi-account</v-icon>
                  Profile
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentTime = ref('');
const currentDate = ref('');
const greeting = ref('');
let timer = null;

const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  currentDate.value = now.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });

  const hour = now.getHours();
  if (hour < 12) {
    greeting.value = 'おはようございます！';
  } else if (hour < 18) {
    greeting.value = 'こんにちは！';
  } else {
    greeting.value = 'こんばんは！';
  }
};

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
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
