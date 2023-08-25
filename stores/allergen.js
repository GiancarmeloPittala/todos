import { defineStore } from 'pinia'
// GET POST PUT DELETE

// prelevo dei dati => GET | Read
// creo dei dai => POST | create
// aggiorno un dato => PUT / PATH | update
// elimino un dato => DELETE | delete

// get dei allergeni 

export const useAllergenStore = defineStore('allergens', () => {

  const allergens = ref([]);

  function set_allergens(new_allergens) {
    allergens.value = new_allergens
  }

  async function init(){
    try {
      const { data: allergeni } = await useFetch('http://localhost/api/allergen', {
        method: 'GET',
      });
      allergens.value = allergeni.value.data;
    } catch (error) {
      
    }
  }

  async function create(title, description){
    // fare la chiamata di creazione | POST

    try {
      if ( !title || !description ) throw "Manca un dato!";

      const { data: allergene } = await useFetch('http://localhost/api/allergen', {
        method: 'POST',
        body: { data: { title, description } }
      });

      allergens.value.push(allergene.value.data)

    } catch (error) {
      throw error
    }


  }

  return { allergens, set_allergens, create, init }

})