
// Immutable Array 
const global = ['One', 'Two', 'Three', 'Four', 'Five']

const insert = () => {
  console.log('## INSERT BLOCK');
  console.log(['placeholder', ...global]); //Insert at begining
  console.log([...global, 'placeholder']); //Insert at end
  console.log([...global.slice(0, 2), 'placeholder', ...global.slice(2)]); //Insert at 3rd position
}
const update = () => {
  console.log('\n## UPDATE BLOCK');
  console.log(['placeholder', ...global.slice(1)]); //Update at start position
  console.log([...global.slice(0, -1), 'placeholder']); //Update at end position
  console.log([...global.slice(0, 2), 'placeholder', ...global.slice(3)]); //Update at 3rd position
}
const remove = () => {
  console.log('\n## REMOVE BLOCK');
  console.log([...global.slice(1)]); //Delete at start position
  console.log([...global.slice(0, -1)]); //Delete at end position
  console.log([...global.slice(0, 2), ...global.slice(3)]); //Delete at 3rd position
}


insert();
update();
remove();
