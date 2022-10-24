<template>
  <div>
    <form action="">
      <fieldset>
        <input type="radio" name="star" id="start-1" value="1" />
        <label for="start-1">1</label>
        <input type="radio" name="star" id="start-2" value="2" />
        <label for="start-2">2</label>
        <input type="radio" name="star" id="start-3" value="3" />
        <label for="start-3">3</label>
        <input type="radio" name="star" id="start-4" value="4" />
        <label for="start-4">4</label>
        <input type="radio" name="star" id="start-5" value="5" />
        <label for="start-5">5</label>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'TestComponent',
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
fieldset {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-style: solid;
  border-width: 10px 25px;
  border-radius: 15px;
  position: relative;
  font-size: 2rem;
  padding: 0;
  margin: 0;
  width: 180px;
  height: 50px;
  background: black;

  &::before,
  &::after {
    content: '★★★★★';
    position: absolute;
    left: 0;
    display: flex;
    letter-spacing: 0.25rem;
    color: white;
  }

  &::after {
    content: '★';
    color: gold;
    mix-blend-mode: multiply;
  }

  &:has(input[value='1']:checked)::after {
    content: '★';
  }

  &:has(input[value='2']:checked)::after {
    content: '★★';
  }
  &:has(input[value='3']:checked)::after {
    content: '★★★';
  }
  &:has(input[value='4']:checked)::after {
    content: '★★★★';
  }
  &:has(input[value='5']:checked)::after {
    content: '★★★★★';
  }

  label {
    outline: none;
    position: absolute;
    left: -100vw;
  }

  input {
    position: relative;
    display: block;
    border: none;
    appearance: none;
    font-size: 2rem;
    z-index: 1;
    padding: 1rem;
    margin: 0;
    border: solid 1px transparent;
  }
}
</style>
