<template>
  <v-container>
    <h2>Home</h2>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">My Components Vuejs and Vuetify</span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Pesquisar"
        prepend-inner-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items" :to="item.link">
          <v-layout v-if="item.heading" :key="i" align-rigth>
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-3"
          ></v-divider>
          <v-list-item v-else :key="i" :to="item.link">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {
    //HelloWorld
  },
  data: () => ({
    drawer: null,
    items: [
      { heading: "Extenção Vuetify" },
      { icon: "", text: "Text Field", link: "/TextField" },
      { divider: true },
      { heading: "Componentes Próprios" },
      { icon: "", text: "User Authentication", link: "/UserAuthentication" },
      {
        icon: "",
        text: "Dialog Message",
        link: "/MyDialogMessage"
      },
      {
        icon: "",
        text: "Request REST API",
        link: "/RequestRestApi"
      }
    ]
  })
};
</script>
