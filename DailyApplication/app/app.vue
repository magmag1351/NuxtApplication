<template>
  <v-app>
    <v-navigation-drawer app permanent width="250" class="glass-nav-drawer">
      <v-list-item class="pa-4">
        <v-list-item-title class="text-h6 font-weight-bold">
          <v-icon left>mdi-application</v-icon>
          DailyApp
        </v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" title= "ホーム" value="home" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="ユーザー" value="users" to="/users"></v-list-item>
        <v-list-item prepend-icon="mdi-calendar" title="スケジュール" value="schedule" to="schedule"></v-list-item>
        <v-list-item prepend-icon="mdi-checkbox-marked" title="タスク" value="task" to="/tasks"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" title="設定" value="settings" to="/settings"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<style scoped>
.glass-nav-drawer {
  background-color: rgba(255, 255, 255, 0.2) !important; /* より明るい半透明の白 */
  backdrop-filter: blur(10px); /* 背景をぼかす */
  border-right: 1px solid rgba(255, 255, 255, 0.3); /* わずかな境界線 */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* わずかな影 */
}

.text-outline {
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
</style>
