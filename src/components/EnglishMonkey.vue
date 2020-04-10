<template>
    <div class="english-monkey-container"> 
    <b-jumbotron>
    <template v-slot:lead>
       {{ currentSpelling.spelling }}
    </template>
   <hr class="line">
    <p>
      <b-button variant="success" >Good Job</b-button>
        <b-button variant="danger" >Good Job</b-button>
    </p>
    <b-button variant="primary">Submit</b-button>

    </b-jumbotron>
  </div>

</template>



<script>
export default {
  name :"EnglishMonkey",
  props :{
    currentSpelling: Object
  }
}
</script>



<style scoped>

</style>>

