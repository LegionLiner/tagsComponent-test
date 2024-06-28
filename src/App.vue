<template>
  <v-app>
    <v-main class="main">
      <!-- 4 разных компонента. Vuetify ставит ограничение на ширину .container, может вылезти какой-нибудь блок на больших экранах. В проде это поправимо, зедсь оставил) -->
      <TagsComponent class="v-main__wrap-row v-main__wrap-cell" :tags="tags" :align="'left'"/>
      <TagsComponent class="v-main__wrap-row v-main__wrap-cell" :tags="tags" :align="'by-width'"/>
      <TagsComponent class="v-main__wrap-cell" :tags="tags" :align="'left'"/>
      <TagsComponent class="v-main__wrap-cell" :tags="tags" :align="'by-width'"/>
    </v-main>
  </v-app>
</template>

<script>
import TagsComponent from './components/TagsComponent';

export default {
  name: 'App',
  components: {
    TagsComponent,
  },
  data: () => ({
    tags: [
      {
        text: 'example',
        icon: 'mdi-vuetify'
      },
      {
        text: 'second example',
      },
      {
        text: '1,2 км от Вас',
        icon: 'mdi-access-point'
      },
      {
        text: 'бебебе',
        icon: 'mdi-access-point'
      },
      {
        text: '4.8',
        icon: 'mdi-star-point'
      },
      {
        text: 'asdfas',
        icon: 'mdi-access-point'
      }
    ]
  }),
};
</script>

<style lang="scss">
.main {
  padding: 35px !important;
  .v-main__wrap {
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100px 100px 100px;

    &-cell {
      border: 1px solid rgba(0, 0, 0, 0.35);
    }
    &-row {
      grid-column: span 2;
    }
  }
}
iframe {
  display: none !important;
}
</style>
