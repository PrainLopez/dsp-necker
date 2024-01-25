<script setup>
const cheked = defineModel({ type: Boolean, default: true })
</script>

<template>
  <div class="panel-section-vertical">
    <span>
      <label class="switch">
        <input type="checkbox" v-model="cheked" />
        <div class="slider round"></div>
      </label>
    </span>
    <span v-if="cheked" class="text" style="color: #ffb477">
      增产
    </span>
    <span v-else class="text" style="color: #a5f1ff"> 加速 </span>
  </div>
</template>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 52px;
  height: 26px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #92ffff;
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.5);
  transition: 0.2s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 0px;
  bottom: 0px;
  background-color: white;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
}

input:checked + .slider {
  background-color: #ffb477;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.panel-section-vertical {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
}

.text {
  color: whitesmoke;
  font-size: 1rem;
  margin: 0 0.3rem;
  text-align: center;
}
</style>
