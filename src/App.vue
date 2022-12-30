<script setup lang="ts">
import { ref, computed } from 'vue';
import Character from '@/components/Character.vue';

const characterListInit = new Map<number, Character>();
characterListInit.set(100, {
  id: 100,
  name: 'ゆうしゃ',
  level: 1,
  skill: 'かいてんぎり',
  note: '頑張ります！'
});
characterListInit.set(101, {
  id: 101,
  name: 'まほうつかい',
  level: 5,
  skill: 'ファイア'
});
const characterList = ref(characterListInit);

const totalLevels = computed((): number => {
  let total = 0;
  for (const character of characterList.value.values()) {
    total += character.level;
  }
  return total;
});

const onIncrementLevel = (id: number) => {
  const character = characterList.value.get(id);
  if (character) {
    character.level++;
  }
}

interface Character {
  id: number;
  name: string;
  level: number;
  skill: string,
  note?: string;
}
</script>

<template>
  <section>
    <h1>キャラクター一覧</h1>
    <p>全員のレベル合計：{{ totalLevels }}</p>
    <Character
      v-for="[id, character] in characterList"
      :key="id"
      :id="character.id"
      :name="character.name"
      :level="character.level"
      :skill="character.skill"
      :note="character.note"
      @incrementLevel="onIncrementLevel"
    />
  </section>
</template>
