<template>
  <view class="header">
    <view
      class="header-bg"
      :style="cHeaderStyle"
    >
      <uni-nav-bar
        :title="title"
        left-icon="left"
        background-color="#0fcdc1"
        color="#fff"
        :border="false"
        @clickLeft="Util.navigateBack()"
      />
      <slot name="row" />
    </view>
    <view
      class="header-card"
      :style="{ height: cardHeight + 'px', marginTop: -cardHeight / 2 + 'px' }"
    >
      <slot name="card" />
    </view>
    <slot />
  </view>
</template>

<script setup lang="ts">
import { reactive, watch, computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '标题',
  },
  headerStyle: {
    type: Object,
    default() {
      return {};
    },
  },
  cardHeight: {
    type: [Number],
    default: 80,
  },
});

const cHeaderStyle = computed(() => ({
  paddingBottom: `${props.cardHeight / 2}px`,
  minHeight: '120px',
  ...props.headerStyle,
}));
</script>

<script lang="ts">
export default {
  options: {
    styleIsolation: 'isolated', // 组件样式隔离 isolated 互不影响 apply-shared页面影响组件  share互相影响
    multipleSlots: true, // 为true时才能使用具名插槽
    // addGlobalClass: true,
    virtualHost: true,
  },
};
</script>
<style lang="scss" scoped></style>
