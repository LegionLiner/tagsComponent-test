<template>
  <v-container>
    <v-row ref="parent" class="no-wrap" :justify="align === 'by-width' ? 'space-between' : align">
      <template v-for="(tag, i) in shownTags">
        <v-icon v-if="tag.icon">{{ tag.icon }}</v-icon>
        <span ref="element">{{ tag.text }}</span>
        <v-icon v-if="i < shownTags.length - 1">mdi-circle-small</v-icon>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { getPosition } from '@/composables/getPosition';

export default {
  name: 'TagsComponent',
  props: ['tags', 'align'],
  data: () => ({
    shown: 1000,
    elementsWidth: [],
  }),
  computed: {
    shownTags() {
      return this.tags.slice(0, this.shown);
    }
  },
  methods: {
    renderElements(parent) {
      const { width } = getPosition(parent);
      let countOfRender = 0;
      let fullWidth = 0;

      this.elementsWidth.forEach((elWidth, index) => {
        if ((elWidth + fullWidth) < width) {
          fullWidth += elWidth + 24;
          fullWidth += this.tags[index].icon ? 24 : 0;

          if (fullWidth < width) {
            countOfRender += 1;
          }
        }
      });

      this.shown = countOfRender;
    }
  },
  mounted() {
    this.$refs.element.forEach((ref) => {
      this.elementsWidth.push(getPosition(ref).width);
    });

    const ro = new ResizeObserver(() => {
      this.renderElements(this.$refs.parent);
    });
    ro.observe(this.$refs.parent);
  },
}
</script>

<style lang="scss">
.no-wrap {
  flex-wrap: nowrap;

  span {
    white-space: nowrap;
    vertical-align: center; // очевидно, можно использовать и флексы
  }
}
</style>
