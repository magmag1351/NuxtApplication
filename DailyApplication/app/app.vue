<template>
  <v-app>
    <v-navigation-drawer app permanent width="250" color="surface">
      <v-list-item class="pa-4">
        <v-list-item-title class="text-h6 font-weight-bold">
          <v-icon left>mdi-application</v-icon>
          DailyApp
        </v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" title="ホーム" value="home" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group" title="ユーザー" value="users" to="/users"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" title="設定" value="settings"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>
