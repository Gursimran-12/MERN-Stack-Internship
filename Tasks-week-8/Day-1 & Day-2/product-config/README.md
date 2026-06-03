# Laptop Configuration Application

This application allows users to configure a laptop by selecting RAM, Storage, and Color options. Each selection dynamically updates the cart, the total amount, and the summary displayed on the screen. The application also includes validation rules to prevent invalid combinations.

# 1. FUNCTION – addtoCart()

This is the main function. It allows you to add the selected component into the Cart[] using push(). But before inserting the new data, it first checks whether any component from the **same category** already exists inside the array. If yes, then it removes the previous one using splice(). After updating the cart, it calls totalMoney() to update the total price dynamically, and then calls updateSummary() to refresh the list shown on the screen.

### Step-by-step logic:
1. Remove the old selection of the same category  
2. Add the new selected item  
3. Update the summary and total price  


# 2. FUNCTION – updateSummary()

This function is responsible for updating the list of selected items displayed on the screen. Each time a new item is added to the cart, this function clears the old summary using innerHTML="", then loops through all items inside the cart[] and creates `<li>` elements for each one. These list items show the component name and its price. The summary is rebuilt every time so it always displays the latest configuration.

### Step-by-step logic:
1. Clear the previous summary list  
2. Loop through `cart[]` to read all selected components  
3. Create a new `<li>` element for each component and display it on the screen  


# 3. FUNCTION – totalMoney()

This function calculates the total price of all selected components inside the cart[]. It uses the reduce() method to add all the price values and updates the amount on the screen using innerText.

### Step-by-step logic:
1. Loop through all items in the cart using reduce()  
2. Add all their price values  
3. Update the total amount on the screen dynamically  


# 4. FUNCTION – check()

This function is used to validate RAM restrictions. It checks whether **512GB Storage** is present inside the cart. If yes, it returns true, which is used to block the selection of **8GB and 16GB RAM**. This prevents invalid laptop configurations.

### Step-by-step logic:
1. Check if Storage = 512GB exists in the cart  
2. If yes → return true (8GB/16GB RAM will be blocked)  
3. If no → return false (user can select any RAM)  

# 5. FUNCTION – addRam()

This function creates the RAM section dynamically. It generates the heading and all RAM buttons (8GB, 16GB, 32GB). When a RAM button is clicked, it first runs the validation using check() to prevent invalid selections, then calls addtoCart() to store the selected RAM and update the summary. It also highlights the selected button visually.

### Step-by-step logic:
1. Create RAM heading and RAM buttons  
2. Check storage condition (block 8GB/16GB if 512GB storage is selected)  
3. Add RAM to cart and highlight the selected button  

# 6. FUNCTION – addStorage()

This function generates the Storage section. It includes buttons for 256GB and 512GB. If the user tries to select **512GB Storage**, it checks whether 32GB RAM is selected. If not, an alert is shown and selection is blocked. If valid, it updates the cart and highlights the selected button.

### Step-by-step logic:
1. Create storage heading and buttons  
2. Check if RAM = 32GB before allowing 512GB storage  
3. Add storage to cart and highlight the selected button  

# 7. FUNCTION – addColor()

This function creates the Color selection section. It adds the color buttons (Silver, Black), listens for clicks, and updates the cart when the user chooses a color. It also handles the button highlight effect.

### Step-by-step logic:
1. Create color heading and color buttons  
2. Add selected color to the cart  
3. Highlight the chosen color button  


# HOW DATA FLOWS IN MY APPLICATION

The entire application follows a clear and predictable data flow. Every time the user interacts with the interface (by clicking a RAM, Storage, or Color button), the data passes through a fixed sequence of steps. This ensures that the cart is always updated, the price is recalculated, and the selected configuration is displayed instantly on the screen.

### Step-by-step Data Flow:

1. **User Clicks a Button**  
   The action starts when the user selects an option (RAM / Storage / Color). Each button has an event listener that triggers the next steps.

2. **Validation Rules are Checked**  
   Before adding the item, the system validates the selection:  
   - 512GB Storage cannot be selected unless RAM = 32GB  
   - 8GB & 16GB RAM cannot be selected if 512GB Storage is active  

   If validation fails, an alert is shown and the process stops.

3. **addtoCart() is Called**  
   This is the core part of the data flow. It performs:  
   - Removal of any previously selected item from the same category  
   - Addition of the new selected item into the cart[] array

4. **cart[] Gets Updated**  
   The latest configuration is now stored inside the cart.  
   This array always contains the final selected components.

5. **totalMoney() Calculates New Price**  
   The updated cart is passed into the reduce() function which computes the total price dynamically.  
   The new amount is displayed on the screen immediately.

6. **updateSummary() Rebuilds the UI Summary**  
   This function clears the old summary and loops over the updated cart[] array to create new list items.  
   The summary on the screen now shows the user's current configuration.

7. **Visual Indicators Are Updated**  
   The clicked button becomes highlighted using a selected class, and the previously selected button loses the highlight.  
   This gives the user visual confirmation of their choice.

8. **User Sees Updated Output**  
   By the end of this flow:  
   - The cart is updated  
   - The total price is recalculated  
   - The summary list is refreshed  
   - The selected button is highlighted  


# SHORT SUMMARY OF DATA FLOW

- User clicks an option  
- Validation checks run  
- Item is added to cart  
- Cart updates  
- Total price recalculates  
- Summary re-renders  
- Selected button highlights  
