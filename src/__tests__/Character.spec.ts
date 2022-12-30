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
        //HTMLのテキスト部分だけ全部取得
        const actualText = wrapper.text();
        // テキスト内に該当の値が含まれているかどうかを検証
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
    test(
      'Emitのテスト レベルアップ！ボタンを押下した場合',
      async () => {
        const propsData = {
          id: 100,
          name: 'ゆうしゃ',
          level: 1,
          skill: 'かいてんぎり',
          note: '頑張ります！'
        };
        const wrapper = mount(Character, { props: propsData });
        await wrapper.get('button').trigger('click');
        // Emitの情報を取得
        // 配列で返ってくる [[Emitに渡す第二引数の値]]
        const incrementLevelEvent = wrapper.emitted('incrementLevel');
        // Emitが1回実行されたことを検証
        expect(incrementLevelEvent).toHaveLength(1);

        const expectedIncrementLevelEvent = [[propsData.id]];
        expect(incrementLevelEvent).toEqual(expectedIncrementLevelEvent);
      }
    );
  }
);