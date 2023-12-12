// id return function
function getId(get_id) {
   const selcetId = document.getElementById(get_id);
   return selcetId;
};

// clsss all return Function
function getAllClass(all_class) {
   const selectAllClass = document.querySelectorAll(all_class);
   return selectAllClass;
};
// query_select  return Function
function getClass(get_class) {
   const selectClass = document.querySelector(get_class);
   return selectClass;
};

// get id and add class
function addClassById(elementId, FClass, SClass, TClass, FrtClass, fiftClass) {
   const element = document.getElementById(elementId);
   element.classList.add(FClass, SClass, TClass, FrtClass, fiftClass);
   return element;
};
// get id and remove class
function removeClassById(elementId, FClass, SClass, TClass, FrtClass, fiftClass) {
   const element = document.getElementById(elementId);
   element.classList.remove(FClass, SClass, TClass, FrtClass, fiftClass);
   return element;
};