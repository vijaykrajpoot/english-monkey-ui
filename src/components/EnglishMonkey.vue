<template>
    <div class="english-monkey-container"> 
      <b-jumbotron>
          <div v-if="show === 1">
              <b-button block variant="primary"> {{ mySpelling }} </b-button>
          </div>          
          <div v-else-if="show===2">
            <div class="form-group">
              <input type="text" v-model="spellInput" id="spellInput"  class="form-control">
            </div>          
          </div>
          <div v-else-if="show===3">
              <b-button block variant="success"> Good Job !!! </b-button>
          </div>
          <div v-else-if="show===4">
            <b-button block variant="danger"> Wrong Answer !!! </b-button>
         </div>
            
          <hr class="line">
          <b-button-group> 
            <div class="btn_name" :key="letter" v-for="letter in atoz">
                <b-button variant="primary">  {{ letter}} </b-button>  
            </div>
          </b-button-group>
          <hr class="line">
            <div v-if="show===1">
                <b-button variant="success" @click="toggle" > I am ready!!! </b-button>
            </div>
            <div v-if="show===2">
               <b-button variant="success" @click="isCorrectSpelling" > Check my answer</b-button>
            </div>
            <div v-if="show===3">
               <b-button variant="success" @click="isCorrectSpelling" > Next Spelling</b-button>
            </div>
             <div v-if="show===4">
               <b-button variant="dark" @click="toggle" > Try Again!!! </b-button>
            </div>
      </b-jumbotron>
    </div>
</template>

<script>
export default {
  name :"EnglishMonkey",
  
  props :{
    currentSpelling: Object,
   
  },
  data() {
    return {
      show: 1,
      spellInput:"",
      mySpelling:this.currentSpelling.spelling
    }
  },
  methods: {
    toggle() {
      console.log('Toggle button clicked')
      this.show = 2
      // if(this.show){
      //   this.mySpelling=this.currentSpelling.spelling
      // }else{
      //   this.mySpelling="####"
      // }
    },
    isCorrectSpelling() {
        if(this.mySpelling===this.spellInput){
          this.show = 3
        }else{
          this.show = 4
        }
    }
  },
  computed: {
    atoz() {
      let letters = []
      for(let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
            letters.push(String.fromCharCode([i]))
          }
      return letters
    }
  }, 
  variant() {
    let variants = []
    for(let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
          variants.push(String.fromCharCode([i]))
        }
    return variants;
  }
 
}
</script>



<style scoped>
  .btn_name{
    margin-left:10px;
    margin-right:10px;
}
</style>>

