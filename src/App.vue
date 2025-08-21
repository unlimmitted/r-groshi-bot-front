<template>
  <div class="main-container">
    <div class="main-frame">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kode+Mono:wght@400..700&display=swap');

body {
  font-family: "Kode Mono", monospace;
  font-optical-sizing: auto;
  padding: 0;
  margin: 0 !important;
}

button {
  font-family: "Kode Mono", monospace;
  font-optical-sizing: auto;
}

select {
  font-family: "Kode Mono", monospace !important;
  font-optical-sizing: auto;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100vw;
  height: 100vh;
}

.main-frame {
  display: flex;
  border-radius: 15px;
  border-style: solid;
  border-width: 2px;
  border-color: #717171;
  padding: 10px;
  max-width: 400px;
}
</style>
