# State in React: 
-  State is the data that component hold over time, necessary for information that it needs to remember through app life cycle.
-  Eg: Notification count, message count, data that needs to be displayed in page.
- If we update the state of the component, then component gets re-rendered. 


Note: Don't set component's state value manually because it won't trigger component rendering. 


# Difference between State and Props in React
- State is internal data owned by component. Props is external data owned by parent component.
- Component can update its state. Props is read only.
- Updating state causes component to re-render. Child component get's render when it receives new component values. 