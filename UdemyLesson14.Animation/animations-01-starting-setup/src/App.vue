<template>
  <div class="container">
    <div class="block" :class="{ animate: isBlockAnimated }"></div>
    <button @click="animatedBlock">Animate</button>
  </div>
  <div class="container">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <p v-if="isParagraphVisible">This text can be hide</p>
    </transition>
    <button @click="toggleParagraph">Hide paragraph</button>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <transition name="button-fade" mode="out-in">
      <button @click="showButton" v-if="!isButtonShow">Show in</button>
      <button @click="hideButton" v-else>Hide out</button>
    </transition>
  </div>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBlockAnimated: false,
      isParagraphVisible: false,
      isButtonShow: false,
      dialogIsVisible: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animatedBlock() {
      this.isBlockAnimated = true;
    },
    toggleParagraph() {
      this.isParagraphVisible = !this.isParagraphVisible;
    },
    showButton() {
      this.isButtonShow = true;
    },
    hideButton() {
      this.isButtonShow = false;
    },
    beforeEnter(el) {
      console.log('before enter');
      console.log(el);
    },
    enter(el) {
      console.log('enter');
      console.log(el);
    },
    afterEnter(el) {
      console.log('after enter');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('before leave', el);
    },
    leave(el) {
      console.log('leave', el);
    },
    afterLeave(el) {
      console.log('after leave', el);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.button-fade-enter-from,
.button-fade-leave-to {
  opacity: 0;
}

.button-fade-enter-active {
  transition: opacity 0.3s ease-in;
}

.button-fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.button-fade-enter-to,
.button-fade-leave-from {
  opacity: 1;
}
@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
