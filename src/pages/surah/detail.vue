<template>
  <!-- <div>
    <div>{{ nama_latin }}</div>
  </div> -->
  <div class="arab text-center pt-4" v-if="this.$route.params.id !== '1'">
    بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
  </div>
  <div class="main-detail m-5" v-for="(ayat, index) in ayats" :key="index">
    <div class="flex-1 py-1">
      <div class="text-right text-3xl mt-2 arab">{{ ayat.ar }}</div>
      <div class="text-left">{{ ayat.nomor }}. {{ ayat.idn }}</div>
    </div>
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
      jumlah_ayat: 0,
      nama_latin: 0,
      tempat_turun: '',
      audio: '',
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
        console.log(response.data);
      });
    },
  },
  mounted() {
    this.getSurah(this.$route.params.id);
  },
};
</script>
