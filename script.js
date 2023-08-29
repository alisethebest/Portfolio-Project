let recipes = [
  {
    title: "Spaghetti",
    author: "John Doe",
    content: "Pasta, Sauce, Meatballs",
    instructions: "Boil pasta, cook meatballs, mix with sauce.",
    category: "dinner"
  },
  {
    title: "Chocolate Cake",
    author: "Jane Smith",
    content: "Flour, Sugar, Cocoa Powder, Eggs, Butter",
    instructions: "Mix dry ingredients, add wet ingredients, bake.",
    category: "dessert"
  },
  {
    title: "Chicken Stir-Fry",
    author: "Michael Johnson",
    content: "Chicken, Vegetables, Soy Sauce, Ginger, Garlic",
    instructions: "Cook chicken, stir-fry with vegetables and sauce.",
    category: "dinner"
  },
  {
    title: "Salad Nicoise",
    author: "Emily Brown",
    content: "Tuna, Green Beans, Potatoes, Eggs, Olives",
    instructions: "Boil potatoes and eggs, assemble with other ingredients.",
    category: "lunch"
  },
  {
    title: "Pancakes",
    author: "Sarah Miller",
    content: "Flour, Milk, Eggs, Baking Powder, Salt",
    instructions: "Mix dry and wet ingredients, cook on a griddle.",
    category: "breakfast"
  },
  {
    title: "Caesar Salad",
    author: "David Lee",
    content: "Romaine Lettuce, Croutons, Parmesan Cheese, Caesar Dressing",
    instructions: "Toss lettuce with dressing, add croutons and cheese.",
    category: "lunch"
  },
  {
    title: "Omelette",
    author: "Michelle Chen",
    content: "Eggs, Cheese, Bell Peppers, Onions, Ham",
    instructions: "Whisk eggs, add fillings, cook in a pan.",
    category: "breakfast"
  },
  {
    title: "Homemade Pizza",
    author: "Alex Martinez",
    content: "Pizza Dough, Tomato Sauce, Cheese, Toppings",
    instructions: "Roll out dough, add sauce, cheese, and toppings, bake.",
    category: "dinner"
  },
  {
    title: "Grilled Cheese Sandwich",
    author: "Ryan Adams",
    content: "Bread, Cheese, Butter",
    instructions: "Butter bread, add cheese, grill until golden brown.",
    category: "lunch"
  },
  {
    title: "Veggie Burger",
    author: "Lisa Anderson",
    content: "Black Beans, Quinoa, Veggies, Spices",
    instructions:
      "Mash beans, mix with quinoa and veggies, form patties, grill.",
      category: "dinner"
  },
  {
    title: "Classic Tacos",
    author: "Carlos Ramirez",
    content: "Ground Beef, Tortillas, Lettuce, Cheese, Salsa",
    instructions: "Cook beef, assemble with other ingredients in tortillas.",
    category: "dinner"
  },
  {
    title: "Mushroom Risotto",
    author: "Sophia Carter",
    content: "Arborio Rice, Mushrooms, Broth, White Wine, Parmesan",
    instructions: "Sauté mushrooms, cook rice with broth and wine, add cheese.",
    category: "dinner"
  },
  {
    title: "Lemon Herb Grilled Chicken",
    author: "Kevin Wilson",
    content: "Chicken Breasts, Lemon, Herbs, Olive Oil",
    instructions: "Marinate chicken with lemon, herbs, and oil, grill.",
    category: "dinner"
  },
  {
    title: "Vegetable Curry",
    author: "Priya Patel",
    content: "Mixed Vegetables, Curry Paste, Coconut Milk",
    instructions: "Sauté veggies, add curry paste and coconut milk, simmer.",
    category: "dinner"
  },
  {
    title: "Fruit Smoothie",
    author: "Anna Green",
    content: "Banana, Berries, Yogurt, Orange Juice",
    instructions: "Blend ingredients until smooth.",
    category: "breakfast"
  },
  {
    title: "Lentil Soup",
    author: "Daniel Smith",
    content: "Lentils, Carrots, Celery, Onion, Broth",
    instructions: "Sauté vegetables, add lentils and broth, simmer.",
    category: "dinner"
  },
  {
    title: "Shrimp Scampi",
    author: "Isabella Martinez",
    content: "Shrimp, Garlic, Butter, White Wine, Pasta",
    instructions:
      "Sauté shrimp and garlic in butter, add wine, serve over pasta.",
      category: "dinner"
  },
  {
    title: "Beef Stir-Fry",
    author: "Alex Johnson",
    content: "Beef Strips, Bell Peppers, Broccoli, Soy Sauce",
    instructions: "Stir-fry beef and veggies with soy sauce.",
    category: "dinner"
  },
];

// Function to Display Recipes by Category:
function displayRecipesByCategory(categoryId) {
  const recipesList = document.getElementById(categoryId + "Recipes");
  const recipesToDisplay = recipes.filter((recipe) => recipe.category === categoryId);

  let output = "";
  for (let recipe of recipesToDisplay) {
    output += `
      <div class="recipe">
        <h3 class="recipeTitle" onclick="toggleRecipeDetails(this)">
          ${recipe.title} (by ${recipe.author})
        </h3>
        <div class="recipeDetails" style="display:none;">
          <p><strong>Ingredients:</strong> ${recipe.content}</p>
          <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        </div>
      </div>`;
  }

  recipesList.innerHTML = output;
}

// Function to Add a New Recipe:
function addNewRecipe(title, author, content, instructions, category) {
  recipes.push({
    title: title,
    author: author,
    content: content,
    instructions: instructions,
    category: category
  });

  // Refresh the display for that category
  displayRecipesByCategory(category);
}

// Function to Toggle Recipe Details:
function toggleRecipeDetails(element) {
  const details = element.nextElementSibling;
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

// Event Listener for Form Submission:
document.getElementById("addRecipeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  
  const title = document.getElementById("newTitle").value;
  const author = document.getElementById("newAuthor").value;
  const content = document.getElementById("newContent").value;
  const instructions = document.getElementById("newInstructions").value;
  const category = document.getElementById("newCategory").value;

  if (title && author && content && instructions && category) {
    addNewRecipe(title, author, content, instructions, category);
    document.getElementById("addRecipeForm").reset();
    document.getElementById("errorMsg").innerText = "";
  } else {
    document.getElementById("errorMsg").innerText = "Please fill in all fields before submitting a new recipe.";
  }
});

// Initial Display Calls (On page load):
displayRecipesByCategory("breakfast");
displayRecipesByCategory("lunch");
displayRecipesByCategory("dinner");

