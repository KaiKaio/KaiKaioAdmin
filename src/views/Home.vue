<template>
  <div class="home">
    <NavBar />
    <AsideBar />
    <Main />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import AsideBar from '@/components/AsideBar'
import Main from '@/components/Main'

export default {
  name: 'Home',
  components: {
    NavBar,
    AsideBar,
    Main
  }
}

</script>

