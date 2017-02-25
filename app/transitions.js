export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('session'),
    this.useAndReverse('explode', {
      matchBy: 'data-item-id',
      use: 'fly-to'
      }, {
      use: 'cross-fade'
    })
  );
}