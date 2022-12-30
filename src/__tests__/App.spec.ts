import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import Character from '@/components/Character.vue';

describe(
  'App.vue test',
  () => {
    test(
      '全員のレベル合計表示の確認',
      () => {
        const options = {
          // Characterコンポーネントの偽物を作成
          global: {
            stubs: {
              Character: true
            }
          }
        };
        const wrapper = mount(App, options);
        const actualText = wrapper.text();
        const expected = '全員のレベル合計：6';
        expect(actualText).toContain(expected);
      }
    );
    test(
      'Characterコンポーネントで、レベルアップ！ボタンが押下された場合',
      async () => {
        const options = {
          global: {
            stubs: {
              Character: true
            }
          }
        };
        const wrapper = mount(App, options);
        // マウントされたコンポーネントの、配下のコンポーネントを取得
        const characterComponent = wrapper.findComponent(Character);
        // 子コンポーネントで、id: 100のキャラクターでemit
        await characterComponent.vm.$emit('incrementLevel', 100);
        const actualText = wrapper.text();
        const expected = '全員のレベル合計：7';
        expect(actualText).toContain(expected);
      }
    );
  }
);