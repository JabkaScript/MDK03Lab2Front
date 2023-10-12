<script setup lang="ts">
import { ref, watch } from 'vue';
import { TestFormService } from "@/services/TestFormService";

const props = defineProps({
  submit:Boolean,
})
const form = ref(null);
const name = ref('');
const surname = ref('');
const email = ref('');
const city = ref('');
const nameRules = [
  v => !!v || 'Required',
  v => (v && v.length <= 25) || 'Must be less than 25 characters',
  v => {
    if (/[^0-9]/.test(v)) return true

    return 'Can not contain digits.'
  },
]
const emailRules = [
  v => !!v || 'Required',
  v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
]

watch(()=>props.submit, async ()=>{
  const success = await form.value?.validate();
  if(success.valid){submitForm()};
})

async function submitForm(){
  const result = await TestFormService.sendTestForm({name:name.value, surname:surname.value,
    email:email.value, city:city.value});
  if (result){
    alert('Form sent!')
  } else {
    alert('Not sent! See error in cosole')
  }
}
</script>
<template>
  <v-form ref="form" validate-on="submit eager" @submit.prevent="submitForm">
    <v-row>
      <v-col :cols="6">
        <v-text-field placeholder="Enter name" v-model="name" :rules="nameRules">
        </v-text-field>
        <v-text-field placeholder="Enter surname" v-model="surname" :rules="nameRules">
        </v-text-field>
      </v-col>
      <v-col :cols="6">
        <v-text-field placeholder="Enter city" v-model="city" :rules="nameRules">
        </v-text-field>
        <v-text-field placeholder="Email" :rules="emailRules" v-model="email">
        </v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>
