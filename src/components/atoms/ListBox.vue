<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div
    v-if="status === 200"
    class="grid grid-cols-1 md:grid-cols-3 items-center gap-2 md:gap-5 container mx-auto max-w-6xl"
  >
    <div v-for="(surah, index) in surahs" :key="index">
      <router-link :to="('/surah/' + surah.nomor)" class="main-box mx-5">
        <div class="flex items-center gap-x-3">
          <div>{{ surah.nomor }}</div>
          <div class="border-l pl-3">
            <div>{{ surah.nama_latin }}</div>
            <div>{{ surah.arti }}</div>
          </div>
        </div>
        <div class="arab">{{ surah.nama }}</div>
      </router-link>
    </div>
  </div>
  <div v-else>Not found</div>
</template>

<script>
import SurahDataService from '../../services/surah';

export default {
  name: 'ListBox',
  data() {
    return {
      surahs: [],
      status: '',
    };
  },
  methods: {
    retrieveSurah() {
      SurahDataService.getSurah().then((response) => {
        this.surahs = response.data;
        this.status = response.status;
        console.log(response.data);
      });
    },
    refreshList() {
      this.retrieveSurah();
    },
  },
  mounted() {
    this.retrieveSurah();
  },
};
</script>

<style></style>
