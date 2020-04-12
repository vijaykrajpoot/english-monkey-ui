<template>
    
    <div> 
      <b-jumbotron>
          <div v-if="show === 1">
              <b-button block variant="primary"> {{ mySpelling }} </b-button>
          </div>
          <div v-else-if="show===2">            
            <b-input-group class="mt-3">
              <b-form-input v-model="spellInput" >  </b-form-input>
              <b-input-group-append>
                <b-button variant="dark" @click="clearInput" >Clear</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
          <div v-else-if="show===3">
              <b-button block variant="success" disabled> Good Job !!! </b-button>
          </div>
          <div v-else-if="show===4">
            <b-button block variant="danger" disabled > Wrong Answer !!! </b-button>
         </div>            
        <hr class="line">
          <div>
              <b-button class="ml-2" variant="primary"  @click="inputLetter" :value="letter" v-for="letter in atoz"  :key="letter">
               {{letter}}  
              </b-button> 
          </div>
          <hr class="line">
          <div v-if="show===1">
              <b-button variant="success" @click="toggle"  > I am ready!!! </b-button>
          </div>
          <div v-if="show===2">
              <b-button variant="success" @click="isCorrectSpelling" > Check my answer</b-button>
          </div>
          <div v-if="show===3">
              <b-button variant="success" @click="isCorrectSpelling" > Next Spelling</b-button>
          </div>
            <div v-if="show===4">
              <b-button variant="dark" @click="toggle"  > Try Again!!! </b-button>
          </div>
      </b-jumbotron>
    </div>
</template>

<script>
export default {
  name :"EnglishMonkey",
  props :{
    currentSpelling: Object
  },
  data() {
    return {
        spellInput:"",
        show: 1,
        inLetter:"",
        mySpelling:this.currentSpelling.spelling,      
      }
  },
  methods: {
    toggle() {
      console.log('Toggle button clicked')
      this.spellInput="" 
      this.show = 2
     
    },
    isCorrectSpelling() {
        if(this.mySpelling.toUpperCase() ===this.spellInput.toUpperCase()){
          this.show = 3
        }else{
          this.show = 4
        }
    },
    inputLetter:function(event){
        this.inLetter = event.currentTarget.value
        this.spellInput=this.spellInput+this.inLetter
    },
    clearInput(){
       this.spellInput="" 
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
  }
}
</script>



<style scoped>
  .btn_name{
    margin-left:10px;
    margin-right:10px;
}
</style>>

