<template>
  <div id="app1">
    <v-app>
      <v-form>
        <v-container>
          <h1>{{title}}</h1>
          <h3>Teste</h3>
          <v-row>
            <v-col cols="12" md="4">
              <my-text-field />
            </v-col>

            <v-col cols="12" md="4">
              <my-text-field
                :myuppercase="true"
                :myrequired="true"
                :mymaxlength="40"
                myprependicon="devices"
                mylabel="Dispositivo"
              ></my-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field label="E-mail" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-app>
  </div>
</template>

<script>
import MyTextField from "components/MyTextField";

export default {
  name: "app1",
  data() {
    return {
      title: "Teste do Hello World!"
    };
  },
  components: {
    MyTextField
  }
};
</script>