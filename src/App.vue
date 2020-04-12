<template>
  <div id="app">
    <Navigator/>
    <hr class="line">
    <Header/>
    <hr class="line">
    <EnglishMonkey  v-bind:currentSpelling="spellings[index]" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import EnglishMonkey from './components/EnglishMonkey'
import Navigator from './components/Navigator'
export default {
  name: 'App',
  components: {
    Header,
    Navigator,
    EnglishMonkey

  },
   data(){
    return{
      index: 0, 
      spellings: [
          {
            id: 1,
            spelling : "horse"            
          },
          {
            id: 2,
            spelling : "lion"            
          },
          {
            id: 3,
            spelling : "zebra"            
          },
          {
            id: 4,
            spelling : "cow"            
          }
       ],
    }
   },
   mounted: function (){
     return {
       spellings: [
          {
            id: 1,
            spelling : "horse"            
          },
          {
            id: 2,
            spelling : "lion"            
          },
          {
            id: 3,
            spelling : "zebra"            
          },
          {
            id: 4,
            spelling : "cow"            
          }
       ]
     }


  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}
</style>
