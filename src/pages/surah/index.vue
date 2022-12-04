<template>
  <div class="bg-[#CE7777] text-white py-3 text-center text-xl font-bold">Daftar</div>
  <!-- <div class="text-xl font-bold text-center py-4">Daftar Surah</div> -->
  <ListBox />
  <div class="text-center bg-white py-2 mt-auto text-sm">
    © 2022 - ALL RIGHTS RESERVED <br />
    MUSHAF AL-QUR'AN
  </div>
</template>

<script>
import ListBox from '../../components/atoms/ListBox.vue';

export default {
  name: 'App',
  data() {
    return {
      data: [1, 2, 3, 4, 5, 6, 7],
      count: 1,
    };
  },
  mounted() {
    this.count = 3;
  },
  props: {
    msg: String,
  },
  components: {
    ListBox,
  },
};
</script>
