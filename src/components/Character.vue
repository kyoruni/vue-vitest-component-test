<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  id: number;
  name: string;
  level: number;
  skill: string;
  note?: string;
}

const props = defineProps<Props>();

const localLevel = ref(props.level);

const localNote = computed((): string => {
  let localNote = props.note;
  if (!localNote) {
    localNote = '---';
  }
  return localNote;
});

const levelUp = () => {
  localLevel.value++;
};
</script>

<template>
  <section class="box">
    <h4>なまえ：{{ name }}</h4>
    <dl>
      <dt>ID：</dt>
      <dd>{{ id }}</dd>
      <dt>レベル：</dt>
      <dd>{{ localLevel }}</dd>
      <dt>スキル：</dt>
      <dd>{{ skill }}</dd>
      <dt>メモ：</dt>
      <dd>{{ localNote }}</dd>
    </dl>
    <button @click="levelUp">レベルアップ！</button>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>
