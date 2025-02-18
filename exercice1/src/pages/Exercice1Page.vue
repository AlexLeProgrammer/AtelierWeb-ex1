<script setup lang="ts">
  import { ref, computed } from "vue";

  const nom = ref("");
  const age = ref("");

  // Méthodes
  const ageDans10Ans = computed(() => {
    return Math.floor(parseInt(age.value)) + 10;
  });

  const nomMajuscule = computed(() => {
    return nom.value.toUpperCase();
  });

  const nomValide = computed(() => {
    return nom.value.length > 0 && nom.value.length <= 15;
  });

  const ageValide = computed(() => {
    return parseInt(age.value) > 0 && parseInt(age.value) <= 100;
  });
</script>

<template>
  <q-page padding>
    <div className="form q-mb-lg">
      <div className="row q-mb-md">
        <label>Nom:</label>
        <input v-model="nom" type="text">
        <label className="error" v-if="!nomValide">Maximum 15 caractères
        </label>
      </div>
      <div className="row q-mb-md">
        <label>Age:</label>
        <input v-model="age" type="number">
        <label className="error" v-if="!ageValide">Veuillez entrer un âge compris entre 1 et 100</label>
      </div>
      <div className="row">
        <button>Générer une personne</button>
      </div>
    </div>
    <div className="description q-mb-lg" v-if="nomValide && ageValide">
      <p>Mon nom est <b>{{ nom }}</b> et j'ai <b>{{ age }}</b> ans.</p>
      <p>Dans 10 ans, j'aurai <b>{{ ageDans10Ans }}</b> ans.</p>
      <p>Mon nom se compose de <b>{{ nom.length }}</b> caractères.</p>
      <p>Mon nom en majuscules est <b>{{ nomMajuscule }}</b>.</p>
    </div>
    <div className="no-details" v-else>
      <p>Veuillez entrer un nom et un âge valide !</p>
    </div>
  </q-page>
</template>

<style lang="scss">
.form {
  background: #eee;
  padding: 10px;
}

label {
  min-width: 70px;

  &.error {
    font-size: 13px;
    color: red;
    margin-left: 5px;
    margin-top: 3px;
  }
}

input {
  border: 1px solid #ccc;

  &.error {
    border: 1px solid red;
    background: pink;
  }
}

.description {
  background: antiquewhite;
  padding: 20px 20px 7px;
}

.no-details {
  background: lightcoral;
  padding: 20px 20px 7px;
}
</style>
