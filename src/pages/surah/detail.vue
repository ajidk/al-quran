<template>
  <div class="flex py-4 items-center justify-between bg-[#CE7777] sticky top-0 text-white">
    <div class="flex justify-between max-w-6xl items-center w-full mx-auto px-4">
      <div class="flex items-center gap-x-3 z-10">
        <router-link :to="{ name: 'surah' }">
          <img alt="back icon" src="../../assets/img/back.png" />
        </router-link>
      </div>
      <div class="text-center absolute left-0 right-0">
        <div>{{ nama_latin }}</div>
        <div class="text-xs">{{ arti }}</div>
      </div>
      <!-- <div class="cursor-pointer z-10">
        <img alt="back icon" src="../../assets/img/option.png" />
      </div> -->
    </div>
  </div>
  <div class="arab text-center py-2 text-[#8B7E74] border-b" v-if="this.$route.params.id !== '1'">
    بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
  </div>
  <div v-if="status === 200" class="text-[#8B7E74]">
    <div class="main-detail m-5" v-for="(ayat, index) in ayats" :key="index">
      <div class="flex-1 py-1">
        <div class="text-right text-3xl mt-2 arab">{{ ayat.ar }}</div>
        <div class="text-left">{{ ayat.nomor }}. {{ ayat.idn }}</div>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center items-center h-screen">Not found</div>

  <div class="text-center bg-white py-2 mt-auto text-sm text-[#8B7E74]">
    © 2022 - ALL RIGHTS RESERVED <br />
    MUSHAF AL-QUR'AN
  </div>
</template>

<script>
import SurahDataService from '../../services/surah';

export default {
  name: 'surah-detail',
  data() {
    return {
      ayats: [],
      arti: '',
      nama: '',
      deskripsi: '',
      jumlah_ayat: '',
      nama_latin: '',
      tempat_turun: '',
      audio: '',
      status: '',
    };
  },
  methods: {
    getSurah(id) {
      SurahDataService.get(id).then((response) => {
        this.ayats = response.data.ayat;
        this.arti = response.data.arti;
        this.nama = response.data.nama;
        this.deskripsi = response.data.deskripsi;
        this.jumlah_ayat = response.data.jumlah_ayat;
        this.nama_latin = response.data.nama_latin;
        this.tempat_turun = response.data.tempat_turun;
        this.audio = response.data.audio;
        this.status = response.status;
        console.log(response.data.ayat);
      });
    },
  },
  mounted() {
    this.getSurah(this.$route.params.id);
  },
};
</script>
