<template>
  <div class="app-container">
    <header>
      Header
      <p>test</p>
      <slot name="header"/>
    </header>
    <main>
      <aside>
        Sidebar
      </aside>
      <div class="content-container">
        <slot />
        <footer>
          Footer
        </footer>
      </div>
    </main>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  background-color: #456;
  color: #fff;
}

main {
  display: flex;
  overflow: hidden;
  background-color: #fff;
}

aside {
  flex: 0 0 200px;
  background-color: #567;
  color: #fff;
  height: 100%;
}

footer {
  background-color: #234;
  color: #fff;
}

.content-container {
  overflow: auto;
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #789;
}
</style>
