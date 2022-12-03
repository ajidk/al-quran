<template>
  <div class="text-xl font-bold text-center py-4">Daftar Surah</div>
  <ListBox />
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
