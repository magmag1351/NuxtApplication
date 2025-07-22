<template>
  <v-container fluid class="fill-height d-flex align-center justify-center">
    <v-card-title>スケジュール</v-card-title>
    <v-card-text>
      <v-data-table-server
        v-model:options="tableOptions"
        :headers="headers"
        :items="users"
        :items-length="itemLength"
        :loading="isLoading"
      >

    </v-data-table-server>
    </v-card-text>
  </v-container>
</template>

<script setup lang="ts">
import { User } from '#components';
import { useFetchUsers } from '~/composables/user';
import type{TableOptions} from '../../shared/types/dataTableOptions';

const headers = [
  {
    title:'氏名',
    key:'name',
  },
  {
    title:'Eメール',
    key:'email',
  },
  {
    title:'ID',
    key:'id',
  },
  {
    title:'年齢',
    key:'age',
  },
  {
    title:'タイプ',
    key:'type',
  },
  {
    title:'性別',
    key:'gender',
  },
  {
    title:'住所',
    key:'address'
  }
]

const tableOptions = ref<TableOptions>({
  page: 1,
  itemPerPage: 10,
  sortBy: [],
  groupBy: [],
  search: null,
});

const {
  items: users,
  isLoading,
  itemlength,
} = await useFetchUsers(tableOptions);

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
