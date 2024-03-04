<template>
  <form @submit.prevent="handlerSubmit">
    <label>Email:</label>
    <input type="email" name="email" v-model="email" />
    <label>Password:</label>
    <input type="password" name="password" v-model="password" />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>
    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web developer</option>
      <option value="designer">Web designer</option>
    </select>
    <label>Skills:</label>
    <input
      type="text"
      name="skills"
      v-model="tempSkill"
      @keyup.enter="addSkill"
    />
    <div
      v-for="skill in skills"
      :key="skill"
      class="pill"
      @click="deleteSkill(skill)"
    >
      {{ skill }}
    </div>
    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>Accept terms and conditions</label>
    </div>
    <!-- <div>
      <input type="checkbox" value="Shaun" v-model="names" />
      <label>Shaun</label>
    </div>
    <div>
      <input type="checkbox" value="Yoshi" v-model="names" />
      <label>Yoshi</label>
    </div>
    <div>
      <input type="checkbox" value="Mario" v-model="names" />
      <label>Mario</label>
    </div> -->
    <div class="submit">
      <button type="submit">Create an account</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "designer", //default value
      terms: false,
      //   names: [],
      tempSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill(e) {
      console.log(e);
      if (e.key === "Enter" && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(removeSkill) {
      this.skills = this.skills.filter((skill) => skill !== removeSkill);
    },
    handlerSubmit() {
      this.passwordError =
        this.password.length > 5 ? "" : "Insert strong password";
      if (!this.passwordError) {
        console.log("can sent data in db");
      }
    },
  },
};
</script>

<style>
form {
  max-width: 26.5rem;
  margin: 1.8rem auto;
  background: white;
  text-align: left;
  padding: 2.5rem;
  border-radius: 0.7rem;
}
label {
  display: inline-block;
  color: #aaa;
  margin: 1.5rem 0 0.9rem;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 0.7rem 0.4rem;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 1rem;
  margin: 0 0.6rem 0 0;
  position: relative;
  top: 0.1rem;
}
.pill {
  display: inline-block;
  margin: 1.1rem 0.6rem 0 0;
  padding: 0.4rem 0.7rem;
  background: #eee;
  border-radius: 0.5rem;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0d6bff;
  border: 0;
  padding: 0.7rem 1.2rem;
  margin-top: 1.2rem;

  color: white;
  border-radius: 0.5rem;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 0.7rem;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
