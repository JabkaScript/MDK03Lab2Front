<script setup lang="ts">
import {ref} from 'vue';
import TestForm from '@/components/TestForm'

const submit = ref(false);
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title>Test form</v-card-title>
          <v-card-item>
            <TestForm :submit="submit"/>
          </v-card-item>
          <v-card-actions>
            <v-btn @click.stop="submit = !submit">Submit form</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>


