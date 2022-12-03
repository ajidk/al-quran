<template>
  <div class="flex flex-col">
    <div v-if="status === 200" class="main">
      <div v-for="(surah, index) in surahs" :key="index">
        <router-link :to="'/surah/' + surah.nomor" class="main-box mx-5">
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
    <div v-else class="flex justify-center items-center h-[80vh]">Not found</div>
  </div>
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
