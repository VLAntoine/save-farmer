<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="client">Client</label>
        <input
            type="text"
            class="form-control"
            id="client"
            required
            v-model="client.nom"
            name="nom"
        />
      </div>

      <div class="form-group">
        <label for="mail">Mail</label>
        <input
            class="form-control"
            id="mail"
            required
            v-model="client.mail"
            name="mail"
        />
      </div>

      <button @click="createClient" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="createClient">Add</button>
    </div>
  </div>
</template>

<script>
import createClient from "../api/clients.ts";

export default {
  name: "AddClient",
  data() {
    return {
      client: {
        nom: "",
        mail: ""
      },
      submitted: false
    };
  },
  methods: {
    createClient() {
      var data = {
        nom: this.client.nom,
        mail: this.client.mail
      };

      createClient(data.nom, data.mail)
          .then(() => {
            console.log("Created new client successfully!");
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
    },
  }
};

</script>

<style scoped>

</style>