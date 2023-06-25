
                              .FILTERING BY ALLERGENS.
       
       const allergens = [gluten-free, dairy-free, vegetarian, vegan, best-rated];
       
        <div>
        {allergens.filter(allergen => allergen.includes(0, 1)).map(filteredAllergen => (
        <li>
         {filteredAllergen}
        </li>
         ))}
      </div>

                               .TRY 2.
       
        const allergens = [gluten-free, dairy-free, vegetarian, vegan, best-rated];

       <ul>
        {allergens.map(allergen => (
          <li key={allergen.id}>
          </li>
        ))}
        </ul>


         // alignItems: "center";
    alignContent: "center"; 



