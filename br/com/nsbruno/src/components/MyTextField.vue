<template>
    <v-text-field
            :label="mylabel"
            :maxlength="mymaxlength"
            :rules="[requiredRules, emailRules]"
            :counter="mycounter"
            :type="mytype"
            :clearable="myclearable"
            :hint="myhint"
            :append-icon="myappendicon"
            :prepend-icon="myprependicon"
            v-bind:value="value"
            v-model="localValue"
            v-on:click:append="clickAppend">
    </v-text-field>
</template>

<script>
import baseMyRules from 'services/baseMyRules';

    export default {
        name: 'my-text-field',
        data() {
            return {
                
            }
        },
        props:{
            value: {
                
            },
            myuppercase: {
                type: Boolean,
                default: true
            },
            mylabel: {
                type: String,
                default: 'My Text Field'
            },
            myrequired: {
                type: Boolean,
                default: false
            },
            mymaxlength: {
                type: Number,
                default: 250
            },
            mycounter: {
                type: Boolean,
                default: true
            },
            myisemail: {
                type: Boolean,
                default: false
            },
            mytype: {
                type: String,
                default: 'text',
                validator: function (value){
                    // O valor precisa corresponder a alguma dessas Strings
                    return ['text', 'number', 'email', 'password'].indexOf(value) !== -1
                }
            },
            myclearable: {
                type: Boolean,
                default: true
            },
            myhint: {
                type: String,
                defatult: undefined
            },
            myappendicon: {
                type: String,
                default: undefined
            },
            myprependicon: {
                type: String,
                default: undefined
            }
        },
        mixins: [
            baseMyRules
        ],
        methods: {
            clickAppend: function(event){
                this.$emit('click:append', event);
            }
        },
        watch: {
            value: function(newQuestion, oldQuestion) {
                //console.log('MyTextField - watch - new: ' + newQuestion + ' old: ' + oldQuestion);
                //console.log('MyTextField - watch - value: ' + this.value);
            }
        },
        computed: {
            localValue: {
                get: function() {
                    //console.log('component - computed get ' + this.value);
                    return this.value;
                },
                set: function(value) {
                    // Verifica se o campo eh pra deixar tudo em maiusculo
                    if ( (this.myuppercase) && 
                        ((this.mytype === 'text') || (this.mytype === 'password') || (this.mytype === 'email') )  && 
                        (value) ) {
                        value = '' + value.toString().toUpperCase();
                    }
                    //console.log('component - computed set ' + value);
                    this.$emit('input', value);
                }
            }
        }
    }
</script>
