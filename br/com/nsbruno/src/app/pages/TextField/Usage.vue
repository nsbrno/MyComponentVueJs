<template>
  <v-app>
    <v-container>
      <v-flex>
        <h1>My Text Field</h1>
        <p>
          É uma extenção do
          <code>'v-text-field'</code> com algumas funcionalidades a mais como por exemplo:
          Deixar todos os texto em maiusculo. Outra auteração é que coloca(seta) os campos que será padrão.
        </p>
      </v-flex>
      <v-spacer></v-spacer>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <my-text-field 
            mylabel="Default"
          ></my-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <my-text-field 
            myprependicon="devices"
            mylabel="Prepend Icon"
          ></my-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <my-text-field
            :myrequired="true"
            mylabel="Required"
          ></my-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <my-text-field 
            mylabel="Placeholder" 
            myplaceholder="Placeholder"
          ></my-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <my-text-field 
            mylabel="Filled" 
            :myfilled="true"
          ></my-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <my-text-field 
            mylabel="Max Length" 
            :mymaxlength="20"
          ></my-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <my-text-field 
            mylabel="Outlined" 
            :myoutlined="true"
          ></my-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <my-text-field 
            mylabel="Placeholder and Outlined" 
            myplaceholder="Placeholder"
            :myoutlined="true"
          ></my-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import MyTextField from "components/MyTextField";

export default {
  components: {
    MyTextField
  },
  data() {
    return {
      //
    };
  }
};
</script>