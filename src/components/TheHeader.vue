<template>
  <div>
    <TheNavbar></TheNavbar>
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/img/logo.jpg" class="logo" alt="">
          <h1 class="fw-light">ABC RESTAURANT</h1>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import TheNavbar from '@/components/TheNavbar'

  export default {
    components: {
      TheNavbar
    }
  }
</script>