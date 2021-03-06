// Storage Controller

// Item Controller
const ItemCtrl = (function() {
  // Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure/State
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 1, name: 'Cookie', calories: 400},
      {id: 2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public Methods
  return {
    getItems: function() {
      return data.items;
    },
    logData: function() {
        return data;
    }
  }
})();



// UI Controller
const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
  }

  // Public Methods
  return {
    populateItemList: function(items){
      let html = '';

      items.foreach(function(item) {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name:document.querySelector(UISelectors.itemNameInput).value,
        calories:document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    getSelectors: function() {
      return UISelectors;
    }
  }
})();



// App Controller
const App = (function(ItemCtrl, UICtrl) {
  // Load event Listeners
  const loadEventListeners = function() {
    const UISelectors = UICtrl.getSelectors();

    //Add Item Event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }
  
  // Add item submit
  const itemAddSubmit = function(e) {
    // console.log('Add');
    // Get form input from UI controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if(input.name !== '' && input.calories !== ''){
      console.log(123);
    }

    e.preventDefault();
  }

  // Public Methods
  return {
    init: function() {
      // Fetch items from data structure
      const items = ItmCTRL.getItems();

      // populate list with items
      UICtrl.popultaeItemList(items);

      // Load event listeners();
      loadEventListeners();
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialize App
App.init();