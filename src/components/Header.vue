
<template>

   <div class="btn-toolbar">
     <b-button-toolbar key-nav aria-label="Toolbar with button groups">
    <b-button-group class="mx-1">
      <b-button>&laquo;</b-button>
      <b-button>&lsaquo;</b-button>
    </b-button-group>
    <b-button-group class="mx-1">
      <b-button class="ml-2"  variant="success">Animals</b-button>
      <b-button class="ml-2"  variant="success">Fruits</b-button>
      <b-button class="ml-2"  variant="success">Vegitables</b-button>
    </b-button-group>
    <b-button-group class="mx-1">
      <b-button>&rsaquo;</b-button>
      <b-button>&raquo;</b-button>
    </b-button-group>
  </b-button-toolbar>
    
</div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .btn-toolbar{
    text-align: center;
    justify-content: center; 
    display: flex;
  } 
</style>
