import { describe, test, expect} from 'vitest';
import { mount } from '@vue/test-utils';
import Character from '@/components/Character.vue';

describe(
  'Character.vue test',
  () => {
    test(
      'Propsのテスト 備考がある場合',
      () => {
        const propsData = {
          id: 100,
          name: 'ゆうしゃ',
          level: 1,
          skill: 'かいてんぎり',
          note: '頑張ります！'
        };
        const wrapper = mount(Character, { props: propsData});
        const actualText = wrapper.text();
        expect(actualText).toContain(String(propsData.id));
        expect(actualText).toContain(propsData.name);
        expect(actualText).toContain(String(propsData.level));
        expect(actualText).toContain(propsData.skill);
        expect(actualText).toContain(propsData.note);
      }
    );
    test(
      'Propsのテスト 備考がない場合',
      () => {
        const propsData = {
          id: 101,
          name: 'まほうつかい',
          level: 5,
          skill: 'ファイア'
        };
        const wrapper = mount(Character, { props: propsData});
        const actualText = wrapper.text();
        expect(actualText).toContain(String(propsData.id));
        expect(actualText).toContain(propsData.name);
        expect(actualText).toContain(String(propsData.level));
        expect(actualText).toContain(propsData.skill);
        expect(actualText).toContain('---');
      }
    );
  }
);