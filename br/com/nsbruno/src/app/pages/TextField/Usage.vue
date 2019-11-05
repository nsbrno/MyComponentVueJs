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
            label="Default"
          ></my-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <my-text-field 
            prepend-icon="devices"
            label="Prepend Icon"
          ></my-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <my-text-field
            :required="true"
            label="Required"
          ></my-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <my-text-field 
            label="Placeholder" 
            placeholder="Placeholder"
          ></my-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <my-text-field 
            label="Filled" 
            :filled="true"
          ></my-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <my-text-field 
            label="Max Length" 
            :maxlength="20"
          ></my-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <my-text-field 
            label="Outlined" 
            :outlined="true"
          ></my-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <my-text-field 
            label="Placeholder and Outlined" 
            placeholder="Placeholder"
            :outlined="true"
          ></my-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import MyTextField from "components/MyTextField/MyTextField";

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