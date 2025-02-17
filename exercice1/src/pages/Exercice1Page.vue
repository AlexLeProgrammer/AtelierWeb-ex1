<script setup lang="ts">
  import { ref } from "vue";

</script>

<template>
  <q-page padding>
    <div className="form q-mb-lg">
      <div className="row q-mb-md">
        <label>Nom:</label>
        <input type="text">
        <label className="error">Maximum 15 caractères
        </label>
      </div>
      <div className="row q-mb-md">
        <label>Age:</label>
        <input type="number">
        <label className="error">Veuillez entrer un âge compris entre 1 et 100</label>
      </div>
      <div className="row">
        <button>Générer une personne</button>
      </div>
    </div>
    <div className="description q-mb-lg">
      <p>Mon nom est <b>Danny</b> et j'ai <b>36</b> ans.</p>
      <p>Dans 10 ans, j'aurai <b>46</b> ans.</p>
      <p>Mon nom se compose de <b>5</b> caractères.</p>
      <p>Mon nom en majuscules est <b>DANNY</b>.</p>
    </div>
    <div className="no-details">
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
