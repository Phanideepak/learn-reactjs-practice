# Conditional rendering with ternary Operator.
- Given boolean expression `bool_expression` and react component <CustomComponent />
- This page can only be rendered if bool_expression is true and some alternate Component can be shown in case of false condition.
  
{
    `bool_expression`  ? 
    (<CustomComponent />) : 
    (<AlternateComponent />) 
}  


- class name can be altered with ternary operator 
  - className= {`pizza ${pizzaObj.soldOut ? "soldOut" : ""}`}